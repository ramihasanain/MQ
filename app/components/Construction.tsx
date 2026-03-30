"use client";
import { Link, Hammer } from 'lucide-react';

export default function ConstructionPage({ params }: any) {
  return (
    <div className="glass-panel animate-fade-in-up flex-center" style={{ minHeight: '600px', flexDirection: 'column', gap: '24px' }}>
      <Hammer size={80} color="var(--primary-color)" className="pulse-element" />
      <h2 className="text-glow" style={{ fontSize: '2rem', fontWeight: 800 }}>جاري بناء هذه الوحدة</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>جزء من التوسعة المستقبلية (الخطوة رقم 8) وفقاً لمخطط المنصة.</p>
    </div>
  );
}
