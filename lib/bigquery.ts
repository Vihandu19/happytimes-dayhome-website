// lib/bigquery.ts
import { BigQuery } from '@google-cloud/bigquery';

const credentials = JSON.parse(
  process.env.BIGQUERY_CREDENTIALS || '{}'
);

const bigquery = new BigQuery({
  projectId: credentials.project_id,
  credentials,
});

export async function logSecurityEvent(event: {
  event_type: string;
  ip_address?: string;
  user_agent?: string;
  country?: string;
  payload?: string;
  severity: 'low' | 'medium' | 'high';
  metadata?: Record<string, any>;
}) {
  try {
    const timestamp = new Date().toISOString();
    
    // Use query job instead of streaming insert (free tier compatible)
    const query = `
      INSERT INTO \`${credentials.project_id}.dayhome_data.security_events\`
      (timestamp, event_type, ip_address, user_agent, country, payload, severity, metadata)
      VALUES
      (
        TIMESTAMP('${timestamp}'),
        '${event.event_type}',
        ${event.ip_address ? `'${event.ip_address}'` : 'NULL'},
        ${event.user_agent ? `'${escapeSql(event.user_agent)}'` : 'NULL'},
        ${event.country ? `'${event.country}'` : 'NULL'},
        ${event.payload ? `'${escapeSql(event.payload)}'` : 'NULL'},
        '${event.severity}',
        ${event.metadata ? `JSON '${JSON.stringify(event.metadata)}'` : 'NULL'}
      )
    `;

    await bigquery.query({
      query,
      useLegacySql: false,
    });
    
  } catch (error) {
    // Don't throw - logging failures shouldn't break the app
    console.error('Failed to log security event:', error);
  }
}

// Helper to escape SQL strings
function escapeSql(str: string): string {
  return str.replace(/'/g, "''").replace(/\\/g, '\\\\');
}