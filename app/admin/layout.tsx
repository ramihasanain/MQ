"use client";

import { ShieldAlert, Users, FileText, Globe, Settings, LogOut, Bell, Building } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;
    return {
      style: {
        display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', 
        borderRadius: '8px', 
        background: isActive ? 'var(--bg-secondary)' : 'transparent',
        color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)', 
        fontWeight: isActive ? 600 : 500,
        fontSize: '0.85rem',
        textDecoration: 'none',
        border: isActive ? '1px solid var(--glass-border)' : '1px solid transparent'
      }
    };
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      
      {/* Top Navbar */}
      <header style={{ height: '64px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', borderBottom: '1px solid var(--glass-border)', flexShrink: 0, zIndex: 10 }}>
        
        {/* Logo Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="https://upload.wikimedia.org/wikipedia/ar/thumb/8/87/Islamic_Action_Front_logo.png/150px-Islamic_Action_Front_logo.png" alt="الشعار" style={{ height: '32px', width: 'auto' }} />
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0, lineHeight: '1' }}>القيادة المركزية (HQ)</h2>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>جبهة العمل الإسلامي</span>
          </div>
        </div>

        {/* Navigation Links (Center) */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link href="/admin" {...getLinkStyle('/admin')}>
            <ShieldAlert size={16} /> المراقبة
          </Link>
          <Link href="/admin/branches" {...getLinkStyle('/admin/branches')}>
            <Building size={16} /> الفروع
          </Link>
          <Link href="/admin/reports" {...getLinkStyle('/admin/reports')}>
            <FileText size={16} /> التقارير
          </Link>
          <Link href="/admin/users" {...getLinkStyle('/admin/users')}>
            <Users size={16} /> الصلاحيات
          </Link>
        </nav>

        {/* Actions (Right) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ position: 'relative', cursor: 'pointer', padding: '8px', border: '1px solid var(--glass-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bell size={18} color="var(--text-secondary)" />
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--danger-color)', borderRadius: '50%' }}></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '16px', borderLeft: '1px solid var(--glass-border)' }}>
            <div style={{ textAlign: 'left' }}>
               <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600 }}>الأمين العام</p>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
              أ.ع
            </div>
          </div>
        </div>

      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '24px' }} className="custom-scroll">
        <div style={{ maxWidth: '1400px', margin: '0 auto', height: '100%' }}>
          {children}
        </div>
      </main>

    </div>
  );
}
