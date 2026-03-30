"use client";

import { ArrowRight, MapPin, Activity, ShieldAlert, CircleCheck, Info, Users, Clock, Filter, Search } from 'lucide-react';
import Link from 'next/link';

export default function BranchDetail({ params }: { params: { id: string } }) {
  const branchName = decodeURIComponent(params.id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Back Button & Header */}
      <div>
        <Link href="/admin/branches" style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>
          <ArrowRight size={16} /> العودة إلى خريطة الفروع
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '12px' }}>
               غرفة عمليات: فرع {branchName}
            </h1>
            <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}><MapPin size={16} /> تتبع حي للقضايا المخصصة للفرع ومتابعة أداء المنسقين.</p>
          </div>
          <div style={{ background: '#ffffff', padding: '12px 20px', borderRadius: '12px', border: '1px solid var(--glass-border)', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)', fontWeight: 800, fontSize: '0.85rem' }}>
               <div style={{ width: 8, height: 8, background: 'var(--primary-color)', borderRadius: '50%' }}></div>
               متصل بالشبكة المركزية
            </span>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>BR-{Math.abs(branchName.length * 42)}-A</p>
          </div>
        </div>
      </div>

      {/* KPI Cards specific to Branch */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
           <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>إجمالي التذاكر النشطة</h3>
           <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1 }}>{branchName.length * 15 + 42}</p>
        </div>
        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
           <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>قضايا عالقة (Stalled)</h3>
           <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--warning-color)', margin: 0, lineHeight: 1 }}>{branchName.length + 3}</p>
        </div>
        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
           <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>طوارئ وتدخل نيابي</h3>
           <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--danger-color)', margin: 0, lineHeight: 1 }}>2</p>
        </div>
        <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
           <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>كوادر الميدان</h3>
           <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
             9 <Users size={20} color="var(--primary-color)" />
           </p>
        </div>
      </div>

      {/* Main Content Area Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* List of active tickets belonging to this branch */}
        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
           <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
               <Activity size={20} color="var(--primary-color)" /> المتابعة الحية للقضايا
             </h3>
             <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ padding: '6px 12px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}><Filter size={14}/> تصفية</button>
             </div>
           </div>

           <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[1, 2, 3].map((item, idx) => (
                <div key={item} style={{ padding: '24px', borderBottom: idx !== 2 ? '1px solid var(--bg-accent)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'background 0.2s' }} className="hover:bg-slate-50">
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ background: item === 1 ? 'rgba(220, 38, 38, 0.1)' : 'rgba(37, 99, 235, 0.1)', padding: '12px', borderRadius: '12px' }}>
                      {item === 1 ? <ShieldAlert color="var(--danger-color)" size={20} /> : <Info color="var(--secondary-color)" size={20} />}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 6px 0', color: 'var(--text-primary)' }}>{item === 1 ? 'انقطاع خدمات مستشفى حكومي' : 'تعبيد طريق زراعي رئيسي'}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                         <span>المواطن: أحمد خالد</span>
                         <span style={{ color: 'var(--glass-border)' }}>•</span>
                         <span style={{ fontFamily: 'monospace', fontWeight: 600, color: 'var(--text-primary)', background: 'var(--bg-accent)', padding: '2px 6px', borderRadius: '4px' }}>TIK-88{item}2</span>
                      </p>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                         <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12}/> قبل {item * 2} ساعات</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
                    <span style={{ background: item === 1 ? 'rgba(220, 38, 38, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: item === 1 ? 'var(--danger-color)' : 'var(--warning-color)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                       {item === 1 ? 'تصعيد للقيادة (حرج)' : 'قيد المتابعة الميدانية'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--secondary-color)', fontWeight: 700, cursor: 'pointer' }}>عرض التفاصيل &rarr;</span>
                  </div>
                </div>
              ))}
              
              <div style={{ padding: '24px', background: 'var(--bg-accent)', opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ background: '#ffffff', padding: '12px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                      <CircleCheck color="var(--primary-color)" size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 6px 0', color: 'var(--text-secondary)' }}>مقترح فتح شعبة تعليمية</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>المواطن: هدى صالح • TIK-0091</p>
                    </div>
                  </div>
                  <div>
                    <span style={{ background: 'var(--primary-color)', color: '#ffffff', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>مكتمل ومغلق</span>
                  </div>
              </div>
           </div>
        </div>

        {/* Right Sidebar: Branch Personnel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 16px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} color="var(--primary-color)" /> طاقم الفرع
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 {[1, 2, 3].map((user) => (
                    <div key={user} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-accent)', borderRadius: '8px' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary-color)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>م.{user}</div>
                          <div>
                            <p style={{ margin: '0 0 2px 0', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>منسق ميداني {user}</p>
                            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{user * 4} قضايا نشطة</p>
                          </div>
                       </div>
                    </div>
                 ))}
                 <button style={{ width: '100%', padding: '10px', background: '#ffffff', border: '1px dashed var(--glass-border)', borderRadius: '8px', cursor: 'pointer', color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.85rem', marginTop: '8px' }}>+ تعيين منسق إضافي</button>
              </div>
           </div>
        </div>

      </div>

    </div>
  );
}
