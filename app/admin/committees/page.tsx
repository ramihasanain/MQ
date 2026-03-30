"use client";
import { Users, Gavel, Stethoscope, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function CommitteesPage() {
  return (
    <div className="animate-fade-in-up">
      <div style={{ marginBottom: '32px' }}>
        <h1 className="text-glow" style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '8px' }}>نظام اللجان النيابية والتشريعية (Intervention)</h1>
        <p style={{ color: 'var(--text-secondary)' }}>إدارة التوجيهات التي يتم تحويلها لنواب كتلة جبهة العمل الإسلامي تحت القبة (Step 5).</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ background: 'rgba(5, 150, 105, 0.15)', padding: '24px', borderRadius: '50%', boxShadow: '0 0 20px rgba(5, 150, 105, 0.3)' }}><Gavel size={32} color="var(--primary-color)" /></div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>اللجنة القانونية والحريات العامة</h3>
            <p style={{ color: 'var(--text-secondary)' }}>مختصة بمتابعة التوقيفات والمطالبات التشريعية. (12 قضية عاجلة محولة حالياً)</p>
          </div>
          <Link href="/admin/committees/legal">
            <button className="btn btn-primary">عرض القضايا الموجهة للجنة</button>
          </Link>
        </div>

        <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '24px', borderRadius: '50%', boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }}><Stethoscope size={32} color="var(--danger-color)" /></div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>لجنة الصحة والمياه</h3>
            <p style={{ color: 'var(--text-secondary)' }}>تتولى الإجابة عن شكاوى الخدمات الصحية وانقطاعات المياه. (42 قضية خدمية محولة حالياً)</p>
          </div>
          <Link href="/admin/committees/health">
            <button className="btn btn-primary">عرض القضايا الموجهة للجنة</button>
          </Link>
        </div>

        <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '24px', borderRadius: '50%', boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}><BookOpen size={32} color="#3b82f6" /></div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>لجنة التربية والتعليم والشباب</h3>
            <p style={{ color: 'var(--text-secondary)' }}>تختص بشؤون المدارس والجامعات وحلول الشباب. (8 مقترحات تشريعية محولة حالياً)</p>
          </div>
          <Link href="/admin/committees/education">
            <button className="btn btn-primary">عرض القضايا الموجهة للجنة</button>
          </Link>
        </div>

      </div>
    </div>
  );
}
