"use client";
import dynamic from 'next/dynamic';

// Dynamically import the Leaflet map component with SSR disabled
// This is critical because Leaflet tries to access the 'window' object which doesn't exist on the server.
const DynamicJordanMap = dynamic(() => import('./JordanMap'), { 
  ssr: false,
  loading: () => <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>جاري الاتصال بالأقمار الصناعية...</div>
});

export default function MapContainerServerSafe(props: { fullScreen?: boolean }) {
  return <DynamicJordanMap {...props} />;
}
