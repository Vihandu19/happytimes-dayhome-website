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
      event_type: event.event_type,
      ip_address: event.ip_address || null,
      user_agent: event.user_agent || null,
      country: event.country || null,
      payload: event.payload || null,
      severity: event.severity,
      //Stringify the raw object for the JSON column
      metadata: event.metadata ? JSON.stringify(event.metadata) : null, 
    };

    await bigquery
      .dataset('dayhome_data')
      .table('security_events')
      .insert([row]);

  } catch (error: any) {
    // Deep stringify the error so Vercel reveals the nested reason
    console.error(
      'Failed to log security event:', 
      JSON.stringify(error.errors || error, null, 2)
    );
  }
}