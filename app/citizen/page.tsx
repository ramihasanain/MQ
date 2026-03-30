"use client";

import { useState } from 'react';
import { Send, MapPin, User, FileText, CheckCircle, ArrowLeft, Loader2, Target, Zap } from 'lucide-react';

export default function CitizenPortal() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStep(4); // AI Loading Step
    
    // Simulate AI routing and Supabase save
    setTimeout(() => {
      setTicketId(`IAF-${Math.floor(10000 + Math.random() * 90000)}`);
      setStep(5); // Success Step
      setIsSubmitting(false);
    }, 2500);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px', background: 'var(--bg-primary)' }}>
      
      {/* Hero Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '60px' }} className="animate-fade-in-up">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 16px', borderRadius: '30px', background: 'var(--bg-accent)', color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.85rem', marginBottom: '24px' }}>
          <Zap size={14} fill="currentColor" /> ذكاء اصطناعي تفاعلي
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.5px', color: 'var(--text-primary)' }}>
          بوابة الخدمات السيادية والشكاوى
        </h1>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: 600 }}>
          جبهة العمل الإسلامي - الأردن
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
          أخضعنا أحدث خوارزميات الذكاء الاصطناعي لتأمين وصول صوتك ومقترحاتك لقيادات الحزب ونوابه بشكل فوري وموثوق.
        </p>
      </div>

      {/* Glass Form Container */}
      <div className="glass-panel animate-fade-in-up delay-2" style={{ width: '100%', maxWidth: '650px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
        
        {/* Progress Bar */}
        {step < 4 && (
          <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ flex: 1, height: '4px', background: step >= i ? 'var(--primary-color)' : 'var(--glass-border)', borderRadius: '2px', transition: 'all 0.5s ease', boxShadow: step >= i ? '0 0 10px var(--primary-glow)' : 'none' }} />
            ))}
          </div>
        )}

        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
          
          {/* STEP 1: Identification */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>البيانات الأساسية</h2>
              
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label"><User size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--primary-color)' }}/> الاسم الرباعي (اختياري)</label>
                <input type="text" className="form-input" style={{ width: '100%' }} placeholder="أدخل اسمك الكريم..." autoFocus />
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label"><Target size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--primary-color)' }}/> الرقم الوطني (اختياري)</label>
                <input type="text" className="form-input" style={{ width: '100%' }} placeholder="لغايات توثيق الطلب الرسمي..." />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px', padding: '16px', fontSize: '1.1rem' }}>
                التالي <ArrowLeft size={20} />
              </button>
            </div>
          )}

          {/* STEP 2: Location & Routing */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>التوجيه الجغرافي ونوع القضية</h2>
              
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label"><MapPin size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--primary-color)' }}/> المحافظة / الفرع (الذي تتبعه)</label>
                <select className="form-select" style={{ width: '100%' }} required>
                  <option value="">-- اختر فرع الحزب الأقرب إليك --</option>
                  <option value="amman_1">عمّان - الدائرة الأولى</option>
                  <option value="amman_2">عمّان - الدائرة الثانية</option>
                  <option value="irbid">إربد - الشريان الأوسط</option>
                  <option value="zarqa">الزرقاء - الجناح الشرقي</option>
                  <option value="balqa">السلط والبلقاء</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label"><FileText size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--primary-color)' }}/> تصنيف الطلب / الشكوى</label>
                <select className="form-select" style={{ width: '100%' }} required>
                  <option value="">-- حدد نوع التفاعل --</option>
                  <option value="service" style={{ fontWeight: 'bold' }}>🟡 قضية خدمية مناطقية</option>
                  <option value="legal" style={{ color: '#fca5a5' }}>🔴 استشارة وحماية قانونية</option>
                  <option value="complaint">⚪ شكوى عامة</option>
                  <option value="legislation" style={{ color: '#5eead4' }}>🔵 مقترح برلماني (تشريع)</option>
                  <option value="membership">🟢 طلب انتساب للحزب</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                <button type="button" onClick={handleBack} className="btn btn-secondary" style={{ flex: 1, padding: '16px' }}>رجوع</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 2, padding: '16px' }}>التالي <ArrowLeft size={20} /></button>
              </div>
            </div>
          )}

          {/* STEP 3: Details */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }}>تفاصيل القضية</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>يتم تحليل هذه النصوص فورياً عبر خوارزميات (Google Gemini) لتعيين الأهمية والاستعجال.</p>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <textarea 
                  className="form-textarea" 
                  rows={7} 
                  required 
                  style={{ width: '100%', fontSize: '1.1rem', lineHeight: '1.8' }}
                  placeholder="اشرح مشكلتك أو مقترحك بالتفصيل هنا. يمكنك ذكر الأسماء والتواريخ. نظام الذكاء الاصطناعي سيلخص القضية للقيادة..."
                ></textarea>
              </div>

              <div className="form-group" style={{ 
                border: '1px dashed var(--primary-color)', 
                padding: '30px', 
                borderRadius: '12px', 
                textAlign: 'center', 
                background: 'rgba(5, 150, 105, 0.05)',
                cursor: 'pointer'
               }}>
                <p style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>إرفاق مستندات أو صور (اختياري)</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>اسحب وأفلت الملفات هنا، أو اضغط للاختيار</p>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <button type="button" onClick={handleBack} className="btn btn-secondary" style={{ flex: 1, padding: '16px' }}>رجوع</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 2, padding: '16px', fontSize: '1.1rem' }}>
                  تشفير وإرسال للقيادة <Send size={20} />
                </button>
              </div>
            </div>
          )}

        </form>

        {/* STEP 4: AI Loading State */}
        {step === 4 && (
          <div className="animate-fade-in-up flex-center" style={{ flexDirection: 'column', padding: '60px 0' }}>
             <Loader2 size={80} style={{ color: 'var(--primary-color)', animation: 'spin 2s linear infinite' }} />
             <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
             <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '32px', marginBottom: '8px' }}>خوارزمية الذكاء الاصطناعي تعمل...</h2>
             <p style={{ color: 'var(--secondary-color)' }}>جاري التصنيف والتوجيه العاجل للجان المختصة</p>
          </div>
        )}

        {/* STEP 5: Success & Closing */}
        {step === 5 && (
          <div className="animate-fade-in-up flex-center" style={{ flexDirection: 'column', textAlign: 'center', padding: '20px 0' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--primary-color)', filter: 'blur(40px)', opacity: 0.5, borderRadius: '50%' }}></div>
              <CheckCircle size={100} color="var(--secondary-color)" style={{ position: 'relative', zIndex: 1, margin: '0 auto 24px auto', filter: 'drop-shadow(0 0 20px rgba(16,185,129,0.6))' }} />
            </div>
            
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px' }}>اعتمد! صوتك وصل للقيادة.</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.1rem', maxWidth: '400px' }}>
              تم التعرف على القضية وبناء ملف تنفيذي أرسل فوراً عبر WhatsApp للمنسق الميداني واللجنة النيابية بحسب الاختصاص.
            </p>
            
            <div style={{ background: 'var(--bg-secondary)', borderRadius: '12px', padding: '24px', marginBottom: '32px', border: '1px solid var(--glass-border)', width: '100%' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>رمز التشفير والمتابعة الخاص بك</p>
              <h3 style={{ fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--primary-color)', fontWeight: 700 }}>{ticketId}</h3>
            </div>

            <button onClick={() => setStep(1)} className="btn btn-secondary" style={{ width: '100%', padding: '16px' }}>
              تقديم بلاغ أو إفادة جديدة <ArrowLeft size={18} />
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
