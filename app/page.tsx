"use client";

import Link from 'next/link';
import { ShieldAlert, Inbox, UserCircle, Briefcase, Zap, Building2, MapPin, Target } from 'lucide-react';

export default function MasterHubGateway() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', padding: '40px 20px' }}>
      
      {/* Branding Header */}
      <div className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/ar/thumb/8/87/Islamic_Action_Front_logo.png/150px-Islamic_Action_Front_logo.png" 
          alt="الشعار" 
          style={{ width: '80px', height: 'auto', marginBottom: '16px', display: 'inline-block' }} 
        />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
          منظومة نبض المواطن المتكاملة
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
           البوابة الرقمية الموحدة لإدارة شؤون المواطنين
        </p>
      </div>

      {/* Gateway Portals */}
      <div className="hub-grid animate-fade-in-up delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '1100px', width: '100%' }}>
        
        {/* Portal 1: Citizens */}
        <Link href="/citizen" className="hub-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="hub-card-inner" style={{ background: '#ffffff', padding: '40px 30px', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', height: '100%' }}>
             <div className="hub-icon-wrapper" style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', transition: 'all 0.3s ease' }}>
                <UserCircle size={32} color="#3b82f6" />
             </div>
             <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>بوابة الخدمات العامة</h2>
             <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', flex: 1 }}>
                تقديم الشكاوى والمقترحات ومتابعة حالة الطلبات المقدمة بشكل مباشر وشفاف.
             </p>
             <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', fontSize: '0.9rem', fontWeight: 700 }}>
                تقديم طلب جديد <Target size={16} />
             </div>
             <div className="hub-glow blue"></div>
          </div>
        </Link>

        {/* Portal 2: Coordinators Dashboard */}
        <Link href="/dashboard" className="hub-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="hub-card-inner" style={{ background: '#ffffff', padding: '40px 30px', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', height: '100%' }}>
             <div className="hub-icon-wrapper" style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', transition: 'all 0.3s ease' }}>
                <Inbox size={32} color="#f59e0b" />
             </div>
             <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>إدارة الملفات والمتابعة</h2>
             <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', flex: 1 }}>
                متابعة الطلبات الواردة وتوزيعها على الفروع، إدارة سير العمل والتقارير الميدانية.
             </p>
             <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontSize: '0.9rem', fontWeight: 700 }}>
                الدخول لإدارة الملفات <MapPin size={16} />
             </div>
             <div className="hub-glow warning"></div>
          </div>
        </Link>

        {/* Portal 3: HQ Command Center */}
        <Link href="/admin" className="hub-card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="hub-card-inner" style={{ background: '#ffffff', padding: '40px 30px', borderRadius: '16px', border: '1px solid var(--glass-border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', height: '100%' }}>
             <div className="hub-icon-wrapper" style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(5, 150, 105, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', transition: 'all 0.3s ease' }}>
                <ShieldAlert size={32} color="var(--primary-color)" />
             </div>
             <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>الإدارة العليا</h2>
             <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', flex: 1 }}>
                المؤشرات العامة، التقارير، الإشراف على الفروع ومتابعة القضايا المحالة للإدارة.
             </p>
             <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 700 }}>
                الدخول للوحة الإدارة <Building2 size={16} />
             </div>
             <div className="hub-glow emerald"></div>
          </div>
        </Link>

      </div>
      
      {/* Footer info */}
      <div style={{ marginTop: '60px', color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Zap size={12} color="var(--primary-color)"/> منظومة إدارية رقمية لخدمة المواطن
      </div>
      
      {/* Inline styles for hover effects safely contained */}
      <style>{`
        .hub-grid {
           width: 100%;
        }
        @media (max-width: 900px) {
           .hub-grid { grid-template-columns: 1fr !important; }
        }
        .hub-card:hover .hub-card-inner {
           transform: translateY(-8px);
           box-shadow: 0 12px 24px rgba(0,0,0,0.08) !important;
           border-color: #cbd5e1 !important;
        }
        .hub-card:hover .hub-icon-wrapper {
           transform: scale(1.1);
        }
        .hub-glow {
           position: absolute;
           top: 0; left: 0; width: 100%; height: 100%;
           border-radius: 16px;
           opacity: 0; transition: opacity 0.3s ease; z-index: 0; pointer-events: none;
        }
        .hub-card:hover .hub-glow { opacity: 0.03; }
        .hub-glow.emerald { background: var(--primary-color); }
        .hub-glow.blue { background: #2563eb; }
        .hub-glow.warning { background: #d97706; }
        .hub-card-inner > * { position: relative; z-index: 1; }
      `}</style>
    </main>
  );
}
