"use client";
import MapContainerServerSafe from '@/app/components/MapWrapper';
import { Focus } from 'lucide-react';

export default function HeatmapPage() {
  return (
    <div className="animate-fade-in-up" style={{ height: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="text-glow" style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Focus size={32} className="pulse-element" color="var(--primary-color)" /> الخريطة الحرارية التفاعلية 
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>تمثيل بصري (Heatmap) لبؤر القضايا في محافظات المملكة.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid rgba(5, 150, 105, 0.2)' }}>
        
        {/* HUD Elements */}
        <div style={{ position: 'absolute', top: 30, right: 30, zIndex: 10, background: 'rgba(255, 255, 255, 0.9)', padding: '16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
          <h4 style={{ color: 'var(--primary-color)', fontWeight: 800, marginBottom: '12px', letterSpacing: '2px' }}>STATUS: ONLINE</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--danger-color)', borderRadius: '50%', marginRight: '8px' }}></span> بؤرة ضغط عالية</li>
            <li><span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--primary-color)', borderRadius: '50%', marginRight: '8px' }}></span> نشاط طبيعي</li>
            <li><span style={{ display: 'inline-block', width: 10, height: 10, background: 'rgba(0,0,0,0.1)', borderRadius: '50%', marginRight: '8px' }}></span> مسح جاري</li>
          </ul>
        </div>

        {/* Real Leaflet Map of Jordan */}
        <MapContainerServerSafe fullScreen={true} />
        
      </div>
    </div>
  );
}
