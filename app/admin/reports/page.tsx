"use client";
import { Download, FileText, Calendar, Filter } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="animate-fade-in-up">
      <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="text-glow" style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '8px' }}>التقارير المركزية وقاعدة التحليل (Step 7)</h1>
          <p style={{ color: 'var(--text-secondary)' }}>توليد تقارير أداء دورية للفروع واللجان ومزاج الشارع لتقديمها للأمين العام.</p>
        </div>
        <button className="btn btn-primary" style={{ padding: '12px 24px' }}>
          <Download size={18} /> تصدير التقرير الشامل (PDF)
        </button>
      </div>

      <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}><Filter size={20} color="var(--primary-color)" /> مصفوفة الفلترة</h3>
        
        <div style={{ display: 'flex', gap: '24px' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">المدة الزمنية</label>
            <select className="form-select">
              <option>آخر 30 يوم</option>
              <option>هذا الأسبوع</option>
              <option>الربع الأول (2026)</option>
              <option>تخصيص...</option>
            </select>
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">تصنيف القضايا</label>
            <select className="form-select">
              <option>الكل (الشامل)</option>
              <option>خدمي بحت</option>
              <option>استجابات اللجان النيابية</option>
              <option>الشكاوى السياسية والانتقادات</option>
            </select>
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">النطاق الجغرافي</label>
            <select className="form-select">
              <option>المستوى الوطني (43 فرع)</option>
              <option>إقليم الوسط</option>
              <option>إقليم الشمال</option>
              <option>إقليم الجنوب</option>
            </select>
          </div>
        </div>
        
        <button className="btn btn-secondary" style={{ width: '100%', padding: '16px', fontSize: '1.1rem', marginTop: '16px' }}><FileText size={20} /> توليد ومعاينة التقرير عبر Gemini AI</button>
      </div>

      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px' }}>أرشيف التقارير الجاهزة</h3>
      <div style={{ display: 'grid', gap: '16px' }}>
        {[
          { title: "التقرير الأسبوعي: تقييم أداء اللجان وتأخيرات التدخل الميداني", date: "24-03-2026", type: "AI Summary" },
          { title: "خلاصة المزاج العام لمحافظة الزرقاء بناءً على شكاوى المياه", date: "18-03-2026", type: "Geographical" },
          { title: "التقرير الشهري العام لغرفة العمليات المركزية", date: "01-03-2026", type: "Master Report" },
        ].map((report, i) => (
          <div key={i} className="glass-panel hover-bg-glass" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'box-shadow 0.3s' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{report.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', gap: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14}/> {report.date}</span>
                <span className="badge new" style={{ padding: '2px 8px', fontSize: '0.75rem' }}>{report.type}</span>
              </p>
            </div>
            <button className="btn" style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--text-primary)' }}><Download size={18} /> تحميل</button>
          </div>
        ))}
      </div>
    </div>
  );
}
