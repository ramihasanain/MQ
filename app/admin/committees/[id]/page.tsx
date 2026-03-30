"use client";

import { ArrowRight, Gavel, FileText, CheckCircle, Flame } from 'lucide-react';
import Link from 'next/link';

export default function CommitteeDetail({ params }: { params: { id: string } }) {
  const committeeId = params.id;
  const isLegal = committeeId === 'legal';

  return (
    <div className="animate-fade-in-up delay-1">
      <div style={{ marginBottom: '32px' }}>
        <Link href="/admin/committees" style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', textDecoration: 'none' }}>
          <ArrowRight size={18} /> العودة إلى اللجان النيابية
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="text-glow" style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Gavel size={36} color={isLegal ? 'var(--primary-color)' : '#fca5a5'} />
              {isLegal ? 'اللجنة القانونية والحريات العامة' : 'لجنة المتابعة الخاصة'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>سجل الملفات المحالة من القيادة والمواطنين إلى طاقم النواب للتدخل الفوري تحت القبة.</p>
          </div>
          <button className="btn btn-primary" style={{ padding: '12px 24px' }}>
            تصدير ملفات اللجنة للنواب (PDF) <FileText size={18} />
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
         <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px', color: '#fca5a5', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Flame size={20} /> طارئ جداً (تدخل فوري)
            </h3>
            <div style={{ background: 'var(--bg-primary)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="badge urgent">توقيف أمني</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>قبل ساعتين</span>
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>توقيف طلبة جامعيين فرع الزرقاء</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>تم تصعيد التذكرة من منسق الرصيفة، المواطن أفاد بوجود توقيفات للطلاب، النظام يحول الملف للنائب (أحمد) للتحرك الفوري.</p>
              <button className="btn btn-secondary" style={{ width: '100%' }}>تأكيد استلام النائب للملف ✓</button>
            </div>
         </div>

         <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={20} /> مقترحات تشريعية قيد القراءة
            </h3>
            <div style={{ background: 'var(--bg-primary)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="badge new">تشريع مروري</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>قبل 3 أيام</span>
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>تعديل قانون السير (النقاط المرورية)</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>تم تجميع 84 مقترحاً مشابهاً من كافة فروع الوسط عبر الذكاء الاصطناعي، تم تلخيصها في هذه الورقة التشريعية.</p>
              <button className="btn" style={{ background: 'rgba(5, 150, 105, 0.2)', width: '100%', color: 'var(--text-primary)' }}>مراجعة الورقة التشريعية <CheckCircle size={16} style={{display:'inline'}} /></button>
            </div>
         </div>
      </div>
    </div>
  );
}
