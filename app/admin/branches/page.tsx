"use client";

import { Building, MapPin, Activity, ArrowLeft, ShieldAlert, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function BranchesPage() {
  const branches = ["عمّان 1", "إربد", "الزرقاء", "السلط", "الكرك", "العقبة", "المفرق", "جرش", "عجلون", "الطفيلة", "معان", "مأدبا"];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '12px' }}>
             <Building size={24} color="var(--primary-color)" /> المركز الجغرافي للفروع (43)
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>مراقبة حية، إدارة الكوادر، والمؤشرات السياسية للمناطق.</p>
        </div>
        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', background: 'var(--bg-secondary)', padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
             تحديث مباشر (Live)
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {branches.map((branch, i) => {
          const isHighPressure = i % 3 === 0;
          return (
          <Link href={`/admin/branches/${encodeURIComponent(branch)}`} key={i} style={{ textDecoration: 'none' }}>
            <div 
              style={{ 
                 background: '#ffffff', 
                 display: 'flex', flexDirection: 'column', height: '100%',
                 border: '1px solid var(--glass-border)', 
                 borderRadius: '12px', 
                 padding: '24px', 
                 transition: 'all 0.2s ease', 
                 boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                 borderTop: isHighPressure ? '4px solid var(--danger-color)' : '4px solid var(--primary-color)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = 'var(--text-muted)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <div style={{ background: 'var(--bg-accent)', padding: '10px', borderRadius: '10px' }}>
                     <Building size={20} color={isHighPressure ? 'var(--danger-color)' : 'var(--primary-color)'} />
                   </div>
                   <div>
                     <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--text-primary)' }}>فرع {branch}</h3>
                     <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                       <MapPin size={12}/> إقليم {i < 4 ? 'الوسط' : i < 8 ? 'الشمال' : 'الجنوب'}
                     </span>
                   </div>
                 </div>
                 {isHighPressure ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(220, 38, 38, 0.1)', color: 'var(--danger-color)', padding: '4px 8px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700 }}>
                      <ShieldAlert size={12} /> ضغط
                    </div>
                 ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(5, 150, 105, 0.1)', color: 'var(--primary-color)', padding: '4px 8px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700 }}>
                      <CheckCircle size={12} /> مستقر
                    </div>
                 )}
              </div>
              
              <div style={{ display: 'flex', gap: '20px', background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '0 0 4px 0', fontWeight: 600 }}>تدخلات معلقة</p>
                  <p style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>{(i * 13) % 45 + 5}</p>
                </div>
                <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '0 0 4px 0', fontWeight: 600 }}>الكوادر النشطة</p>
                  <p style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0, color: 'var(--secondary-color)' }}>{(i % 4) + 2}</p>
                </div>
              </div>
              
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', paddingTop: '12px', borderTop: '1px solid var(--glass-border)' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                  دخول لغرفة الفرع <ArrowLeft size={16} />
                </span>
              </div>
            </div>
          </Link>
        )})}
      </div>
    </div>
  );
}
