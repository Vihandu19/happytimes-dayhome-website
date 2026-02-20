// lib/bigquery.ts
import { BigQuery } from '@google-cloud/bigquery';

const credentials = JSON.parse(process.env.BIGQUERY_CREDENTIALS || '{}');

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
      // Use the helper for the REQUIRED timestamp field
      timestamp: BigQuery.timestamp(new Date()), 
      event_type: event.event_type,
      ip_address: event.ip_address || null,
      user_agent: event.user_agent || null,
      country: event.country || null,
      payload: event.payload || null,
      severity: event.severity,
      // For JSON types, pass the object directly. 
      // If it's undefined, pass null so BigQuery doesn't complain about a missing key.
      metadata: event.metadata || null, 
    };

    await bigquery
      .dataset('dayhome_data')
      .table('security_events')
      .insert([row]);

    console.log('✅ Security event logged to BigQuery');
  } catch (error: any) {
    // CRITICAL: BigQuery returns a deeply nested error object. 
    // We must stringify it to see the actual "message" inside.
    if (error.name === 'PartialFailureError') {
        console.error('❌ BigQuery Partial Failure:', JSON.stringify(error.errors, null, 2));
    } else {
        console.error('❌ Failed to log security event:', error);
    }
  }
}