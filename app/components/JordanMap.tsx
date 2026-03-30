"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet icon not showing up in Next.js/Webpack
import L from 'leaflet';
// Remove default image paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

// Jordanian Cities Hotspots [lat, lng, weight, name, type]
const hotspots = [
  { id: 1, pos: [31.9539, 35.9106], weight: 40, name: 'عمّان الثامنة', type: 'خدمي' },
  { id: 2, pos: [32.5514, 35.8515], weight: 25, name: 'إربد المركز', type: 'عام' },
  { id: 3, pos: [32.0727, 36.0879], weight: 55, name: 'الزرقاء الصناعية', type: 'عاجل' },
  { id: 4, pos: [31.1853, 35.7024], weight: 15, name: 'مزار الكرك', type: 'خدمي' },
  { id: 5, pos: [29.5319, 35.0061], weight: 20, name: 'صناعية العقبة', type: 'قانوني' },
  { id: 6, pos: [32.0333, 35.7333], weight: 10, name: 'السلط', type: 'تشريعي' },
  { id: 7, pos: [32.3325, 36.2333], weight: 12, name: 'المفرق', type: 'خدمي' },
];

export default function JordanMap({ fullScreen = false }: { fullScreen?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>جاري تحميل نظام الخرائط...</div>;

  return (
    <div style={{ height: '100%', width: '100%', borderRadius: 'inherit', overflow: 'hidden', position: 'relative' }}>
      
      {/* Sci-Fi Overlay to make map match the HQ Dashboard */}
      <div style={{ position: 'absolute', top:0, left:0, width:'100%', height:'100%', pointerEvents: 'none', zIndex: 500, boxShadow: 'inset 0 0 50px rgba(255,255,255,0.8)' }}></div>
      
      <MapContainer 
        center={[31.24, 36.51]} 
        zoom={fullScreen ? 7 : 6} 
        scrollWheelZoom={fullScreen}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
        attributionControl={false}
      >
        {/* CARTO Positron Tiles (Light Mode Map) */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; CARTO'
        />

        {/* Heatmap Simulation via CircleMarkers */}
        {hotspots.map((point) => (
          <CircleMarker
            key={point.id}
            center={point.pos as any}
            pathOptions={{ 
              color: point.type === 'عاجل' ? '#ef4444' : '#059669', // IAF Green or Danger Red
              fillColor: point.type === 'عاجل' ? '#ef4444' : '#059669',
              fillOpacity: 0.6,
              weight: 2
            }}
            radius={point.weight * (fullScreen ? 0.7 : 0.4)} /* Dynamic size based on heat/weight */
          >
            <Popup>
               <div style={{ textAlign: 'right', fontFamily: 'var(--font-arabic)' }}>
                 <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#1e293b' }}>{point.name}</h4>
                 <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569' }}>
                    <span style={{ fontWeight: 'bold' }}>تصنيف:</span> {point.type}
                 </p>
                 <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: '#ef4444', fontWeight: 'bold' }}>
                    بؤرة نشطة ({point.weight} قضية)
                 </p>
               </div>
            </Popup>
          </CircleMarker>
        ))}

        {/* Pulsing effects on Urgent nodes */}
        {hotspots.filter(h => h.type === 'عاجل').map(point => (
          <CircleMarker
            key={`${point.id}-pulse`}
            center={point.pos as any}
            pathOptions={{ 
              color: 'transparent',
              fillColor: '#ef4444',
              fillOpacity: 0.2,
            }}
            radius={point.weight + 20}
            className="pulse-element" // Matches our global CSS pulse
          />
        ))}

      </MapContainer>
    </div>
  );
}
