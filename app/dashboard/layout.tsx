"use client";
import React, { useState, createContext } from 'react';
import { PieChart, Inbox, Search, Bell, MapPin, ListChecks } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RoleContext } from './RoleContext';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [role, setRole] = useState<'موظف' | 'مسؤول'>('مسؤول');
  
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
        
        {/* Title Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-color)', margin: 0 }}>الإدارة والمتابعة (الميدان)</h2>
          <div style={{ height: '24px', width: '1px', background: 'var(--glass-border)' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-accent)', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--glass-border)', width: '250px' }}>
            <Search size={14} color="var(--text-muted)" style={{ marginLeft: '8px' }} />
            <input type="text" placeholder="ابحث برقم التذكرة..." style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', width: '100%', fontFamily: 'var(--font-arabic)', fontSize: '0.8rem' }} />
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link href="/dashboard" {...getLinkStyle('/dashboard')}>
            <Inbox size={16} /> المتابعة والاستلام
          </Link>
          {role === 'مسؤول' && (
            <>
              <Link href="/dashboard/analytics" {...getLinkStyle('/dashboard/analytics')}>
                <PieChart size={16} /> الإحصائيات
              </Link>
              <Link href="/dashboard/tasks" {...getLinkStyle('/dashboard/tasks')}>
                <ListChecks size={16} /> توزيع المهام
              </Link>
            </>
          )}
        </nav>

        {/* User Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value as 'موظف' | 'مسؤول')} 
            style={{ background: '#ffffff', border: '1px solid var(--glass-border)', borderRadius: '6px', padding: '6px 12px', fontSize: '0.8rem', outline: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontFamily: 'var(--font-arabic)', fontWeight: 600 }}
          >
            <option value="مسؤول">عرض كـ: مسؤول</option>
            <option value="موظف">عرض كـ: موظف</option>
          </select>
          <div style={{ position: 'relative', cursor: 'pointer', padding: '8px', border: '1px solid var(--glass-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bell size={18} color="var(--text-secondary)" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '16px', borderLeft: '1px solid var(--glass-border)' }}>
            <div style={{ textAlign: 'left' }}>
               <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600 }}>أحمد محمد</p>
               <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>{role}</p>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--warning-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
              أ.م
            </div>
          </div>
        </div>

      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '24px' }} className="custom-scroll">
        <div style={{ maxWidth: '1400px', margin: '0 auto', height: '100%' }}>
          <RoleContext.Provider value={role}>
            {children}
          </RoleContext.Provider>
        </div>
      </main>

    </div>
  );
}
