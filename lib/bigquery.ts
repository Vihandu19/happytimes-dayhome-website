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
    const row = {
      timestamp: new Date().toISOString(),
      ...event,
      metadata: event.metadata ? JSON.stringify(event.metadata) : null,
    };

    await bigquery
      .dataset('dayhome_data')
      .table('security_events')
      .insert([row]);
  } catch (error) {
    // Don't throw - logging failures shouldn't break the app
    console.error('Failed to log security event:', error);
  }
}