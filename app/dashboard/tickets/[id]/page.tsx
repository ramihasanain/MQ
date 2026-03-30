"use client";

import { ArrowRight, User, Clock, FileText, CheckCircle, ShieldAlert, Activity, Printer, CalendarDays, Camera, MessageSquare, Briefcase, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Each ticket has its own unique data
const ticketsDB: Record<string, any> = {
  'TIK-1024': {
    title: 'شكوى انقطاع كهرباء متكرر', citizenName: 'سامي يوسف', phone: '0791234567', branch: 'عمّان',
    committee: 'لجنة البنية التحتية', date: '30 مارس 2026', time: '09:00 ص', urgency: 'عالي', coordinator: 'غير معين',
    currentStep: 1,
    description: 'نعاني من انقطاع الكهرباء المتكرر يومياً من الساعة 6 مساءً حتى 10 مساءً، المشكلة مستمرة منذ شهر ولا أحد يهتم بحلها. المنطقة كاملة تعاني.',
  },
  'TIK-1025': {
    title: 'اقتراح تعديل قانون المالكين والمستأجرين', citizenName: 'فاطمة حسين', phone: '0779876543', branch: 'إربد',
    committee: 'اللجنة التشريعية', date: '30 مارس 2026', time: '11:20 ص', urgency: 'متوسط', coordinator: 'غير معين',
    currentStep: 1,
    description: 'أقترح تعديل قانون المالكين والمستأجرين ليكون أكثر عدالة للطرفين، خصوصاً فيما يتعلق بنسبة الزيادة السنوية على الإيجار.',
  },
  'TIK-1020': {
    title: 'انقطاع المياه عن حي المتنبي', citizenName: 'خالد عبدالله', phone: '0787654321', branch: 'الزرقاء',
    committee: 'لجنة الخدمات العامة والأشغال', date: '28 مارس 2026', time: '10:15 ص', urgency: 'عاجل', coordinator: 'غير معين',
    currentStep: 2,
    description: 'نعاني من انقطاع المياه منذ أسبوعين. تواصلنا مع مياهنا مرات عديدة بلا جدوى.',
  },
  'TIK-1018': {
    title: 'توقيف تعسفي لمواطن بدون مذكرة', citizenName: 'محمود صبحي', phone: '0795551234', branch: 'الزرقاء',
    committee: 'اللجنة القانونية وحقوق الإنسان', date: '27 مارس 2026', time: '08:30 ص', urgency: 'عاجل', coordinator: 'طارق زياد',
    currentStep: 3,
    description: 'تم احتجاز ابني (22 سنة) لمدة 48 ساعة بدون مذكرة توقيف رسمية. نطالب بالتدخل القانوني الفوري.',
  },
  'TIK-1015': {
    title: 'حفرة خطيرة أمام مدرسة ابتدائية', citizenName: 'أم عمر', phone: '0781112233', branch: 'السلط',
    committee: 'لجنة البنية التحتية', date: '26 مارس 2026', time: '07:45 ص', urgency: 'متوسط', coordinator: 'سارة خالد',
    currentStep: 3,
    description: 'توجد حفرة كبيرة وعميقة أمام مدرسة أبنائي مباشرة. الأطفال يتعرضون لخطر السقوط فيها يومياً.',
  },
  'TIK-1012': {
    title: 'انهيار جدار مدرسة حكومية', citizenName: 'عبدالرحمن', phone: '0770009988', branch: 'الكرك',
    committee: 'لجنة التعليم والشباب', date: '24 مارس 2026', time: '02:00 م', urgency: 'عالي', coordinator: 'سارة خالد',
    currentStep: 4,
    description: 'انهار جزء من سور المدرسة الحكومية. لحسن الحظ لم يصب أحد. نحتاج إلى إعادة البناء فوراً قبل أن تحدث كارثة.',
    fieldReport: 'تمت زيارة المدرسة اليوم. سور الجهة الغربية انهار بالكامل (طول 15 متر). تم تصوير الأضرار والتحدث مع مدير المدرسة. يحتاج تدخل هندسي عاجل.',
  },
  'TIK-1008': {
    title: 'تلوث مياه الشرب في حي النزهة', citizenName: 'ثناء حمدان', phone: '0799887766', branch: 'العقبة',
    committee: 'لجنة الصحة العامة', date: '20 مارس 2026', time: '04:30 م', urgency: 'عاجل', coordinator: 'عمر حسن',
    currentStep: 5,
    description: 'مياه الشرب تصل مصفرة اللون ولها رائحة كريهة. ثلاثة أطفال من الحي تم نقلهم للمستشفى بحالات إسهال.',
    fieldReport: 'تبين وجود ثقب في خط الصرف الصحي المحاذي لخط المياه الرئيسي. تم إبلاغ البلدية ولم يتم الإصلاح. الوضع خطير جداً.',
    escalationNote: 'تم تحويل الملف مع التقرير الميداني والصور إلى النائب (سالم العمري) لتقديم سؤال برلماني لوزير المياه وبلدية العقبة.',
  },
  'TIK-0998': {
    title: 'تجديد عضوية وبطاقة حزبية', citizenName: 'يزيد ناصر', phone: '0776655443', branch: 'العقبة',
    committee: 'لجنة العضوية والتنظيم', date: '15 مارس 2026', time: '10:00 ص', urgency: 'منخفض', coordinator: 'عمر حسن',
    currentStep: 6,
    description: 'أرغب بتجديد عضويتي الحزبية والحصول على بطاقة جديدة.',
    closingNote: 'تم تجديد العضوية بنجاح وإصدار بطاقة حزبية جديدة. تم إبلاغ المواطن عبر SMS.',
  },
  'TIK-0990': {
    title: 'إصلاح شبكة صرف صحي', citizenName: 'هشام كمال', phone: '0781234567', branch: 'جرش',
    committee: 'لجنة البنية التحتية', date: '10 مارس 2026', time: '01:15 م', urgency: 'متوسط', coordinator: 'أحمد محمد',
    currentStep: 6,
    description: 'شبكة الصرف الصحي في الحي تفيض باستمرار وتسبب روائح كريهة خصوصاً في الصيف.',
    closingNote: 'تم تنسيق مع بلدية جرش وإجراء إصلاحات شاملة. المشكلة حُلّت بالكامل. تم إخطار المواطن هاتفياً.',
  },
};

const stepLabels = [
  '1. استلام الشكوى وإنشاء المعرّف',
  '2. الفرز والتصنيف (الفرع + اللجنة)',
  '3. تعيين المنسق وجدولة النزول',
  '4. النزول الميداني وجمع البيانات',
  '5. التدخل الحزبي / النيابي',
  '6. الإغلاق والتوثيق وإشعار المواطن',
];

export default function TicketDetailPage({ params }: { params: { id: string } }) {
  const ticketId = decodeURIComponent(params.id);
  const info = ticketsDB[ticketId] || ticketsDB['TIK-1020']; // fallback

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '40px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
           <ArrowRight size={16} /> العودة إلى مسار القضايا
         </Link>
         <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#ffffff', border: '1px solid var(--glass-border)', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, color: 'var(--text-secondary)' }}>
           <Printer size={16} /> طباعة الملف
         </button>
      </div>

      {/* Title Bar */}
      <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', background: 'var(--bg-secondary)', padding: '6px 12px', borderRadius: '6px', fontWeight: 800, fontFamily: 'monospace', border: '1px dashed var(--glass-border)' }}>{ticketId}</span>
          <span style={{ fontSize: '0.8rem', background: info.urgency === 'عاجل' ? 'rgba(220,38,38,0.1)' : info.urgency === 'عالي' ? 'rgba(245,158,11,0.1)' : 'var(--bg-accent)', color: info.urgency === 'عاجل' ? 'var(--danger-color)' : info.urgency === 'عالي' ? 'var(--warning-color)' : 'var(--text-secondary)', padding: '4px 8px', borderRadius: '4px', fontWeight: 700 }}>{info.urgency}</span>
          <span style={{ fontSize: '0.8rem', background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', padding: '4px 8px', borderRadius: '4px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Activity size={12}/> المرحلة {info.currentStep} من 6
          </span>
        </div>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>{info.title}</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'start' }}>
        
        {/* LEFT: Info + Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Citizen Info */}
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <User size={18} color="var(--primary-color)" /> بيانات مقدّم الشكوى
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--bg-accent)' }}>
               <div>
                 <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>المواطن</span>
                 <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{info.citizenName}</span>
               </div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>الهاتف</span>
                 <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{info.phone}</span>
               </div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>الفرع</span>
                 <span style={{ fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12}/> {info.branch}</span>
               </div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>اللجنة المختصة</span>
                 <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '4px' }}><Briefcase size={12}/> {info.committee}</span>
               </div>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>نص الشكوى الأصلي</span>
              <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text-secondary)', background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', borderRight: '4px solid var(--primary-color)' }}>
                "{info.description}"
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px' }}>
             <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 24px 0', borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>
               سجل الدورة المستندية (Audit Trail)
             </h3>
             
             <div style={{ position: 'relative', paddingRight: '20px' }}>
               <div style={{ position: 'absolute', right: '31px', top: '20px', bottom: '20px', width: '2px', background: 'var(--bg-accent)' }}></div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                  {stepLabels.map((label, idx) => {
                    const stepNum = idx + 1;
                    const isCompleted = stepNum < info.currentStep;
                    const isCurrent = stepNum === info.currentStep;
                    const isPending = stepNum > info.currentStep;

                    return (
                      <div key={stepNum} style={{ display: 'flex', gap: '24px', position: 'relative', zIndex: 1, opacity: isPending ? 0.35 : 1 }}>
                        <div style={{ 
                          width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4px', flexShrink: 0, boxShadow: '0 0 0 4px #ffffff',
                          background: isCompleted ? 'var(--primary-color)' : isCurrent ? '#8b5cf6' : 'transparent',
                          color: isPending ? 'var(--text-muted)' : '#fff',
                          border: isPending ? '2px dashed var(--glass-border)' : 'none',
                        }}>
                          {isCompleted ? <CheckCircle size={14} /> : isCurrent ? <Activity size={14} /> : <span style={{fontSize:'0.65rem', fontWeight:800, color:'var(--text-muted)'}}>{stepNum}</span>}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: isCurrent ? '#8b5cf6' : 'var(--text-primary)' }}>{label}</h4>
                            {isCurrent && <span style={{ fontSize: '0.75rem', color: '#8b5cf6', fontWeight: 700, background: 'rgba(139,92,246,0.1)', padding: '2px 8px', borderRadius: '4px' }}>الحالة الراهنة</span>}
                            {isCompleted && <span style={{ fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: 600 }}>✓ مكتمل</span>}
                          </div>

                          {/* Dynamic content per step */}
                          {stepNum === 1 && !isPending && (
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>تقديم المواطن ({info.citizenName}) للشكوى بتاريخ {info.date} الساعة {info.time}. تم إنشاء الرقم {ticketId}.</p>
                          )}
                          {stepNum === 2 && !isPending && (
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>توجيه القضية إلى فرع ({info.branch}) / ({info.committee}).</p>
                          )}
                          {stepNum === 3 && !isPending && (
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>تسليم الملف للمنسق <strong style={{color:'var(--primary-color)'}}>{info.coordinator}</strong> وجدولة موعد النزول الميداني.</p>
                          )}
                          {stepNum === 4 && !isPending && info.fieldReport && (
                            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '12px', marginTop: '8px' }}>
                              <p style={{ margin: '0 0 8px 0', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>"{info.fieldReport}"</p>
                              <div style={{ display: 'flex', gap: '8px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', background: '#ffffff', border: '1px solid var(--glass-border)', padding: '3px 6px', borderRadius: '4px' }}><Camera size={10}/> صور الموقع</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', background: '#ffffff', border: '1px solid var(--glass-border)', padding: '3px 6px', borderRadius: '4px' }}><FileText size={10}/> تقرير ميداني</span>
                              </div>
                            </div>
                          )}
                          {stepNum === 5 && !isPending && info.escalationNote && (
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{info.escalationNote}</p>
                          )}
                          {stepNum === 6 && !isPending && info.closingNote && (
                            <div style={{ background: 'rgba(5,150,105,0.05)', border: '1px solid rgba(5,150,105,0.2)', borderRadius: '8px', padding: '12px', marginTop: '8px' }}>
                              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: 600 }}>✓ {info.closingNote}</p>
                            </div>
                          )}
                          {isPending && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>بانتظار الإجراء.</p>}
                        </div>
                      </div>
                    );
                  })}
               </div>
             </div>
          </div>
        </div>

        {/* RIGHT: Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0 }}>الإجراء التالي المطلوب</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>هذه القضية حالياً في المرحلة {info.currentStep} من 6.</p>
            
            {info.currentStep <= 2 && (
              <button style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 700, fontSize: '0.85rem' }}>
                <Briefcase size={16} /> تصنيف وتعيين منسق
              </button>
            )}
            {info.currentStep === 3 && (
              <button style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 700, fontSize: '0.85rem' }}>
                <CalendarDays size={16} /> جدولة النزول الميداني
              </button>
            )}
            {info.currentStep === 4 && (
              <button style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 700, fontSize: '0.85rem' }}>
                <Camera size={16} /> إرفاق تقرير ومستندات الميدان
              </button>
            )}
            {info.currentStep <= 4 && (
              <button style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--warning-color)', border: '1px solid rgba(245,158,11,0.2)', padding: '12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 700, fontSize: '0.85rem' }}>
                <ShieldAlert size={16} /> تصعيد للتدخل النيابي
              </button>
            )}
            {info.currentStep >= 5 && info.currentStep < 6 && (
              <button style={{ background: 'var(--primary-color)', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 700, fontSize: '0.85rem' }}>
                <CheckCircle size={16} /> إغلاق القضية وإشعار المواطن
              </button>
            )}
            {info.currentStep === 6 && (
              <div style={{ background: 'rgba(5,150,105,0.05)', border: '1px solid rgba(5,150,105,0.2)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-color)' }}>✓ هذه القضية مُغلقة ومؤرشفة</p>
              </div>
            )}
          </div>

          {/* Assignee */}
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 800, margin: '0 0 16px 0', color: 'var(--text-secondary)' }}>المنسق المسؤول</h3>
            {info.coordinator === 'غير معين' ? (
              <div style={{ textAlign: 'center', padding: '16px', background: 'var(--bg-accent)', borderRadius: '8px' }}>
                <p style={{ margin: '0 0 12px 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>لم يتم تعيين منسق بعد</p>
                <button style={{ width: '100%', background: 'var(--primary-color)', color: '#ffffff', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem' }}>تعيين منسق الآن</button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', background: 'var(--bg-accent)', padding: '12px', borderRadius: '8px' }}>
                   <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-color)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1rem', fontWeight: 800 }}>
                     {info.coordinator[0]}
                   </div>
                   <div>
                     <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800 }}>م. {info.coordinator}</p>
                     <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-secondary)' }}>المنسق المعتمد</p>
                   </div>
                </div>
                <button style={{ width: '100%', background: 'transparent', color: 'var(--primary-color)', border: '1px dashed var(--glass-border)', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 700 }}>
                   إعادة تعيين المنسق
                </button>
              </>
            )}
          </div>

          {/* NOTES / COMMENTS SECTION */}
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0 }}>ملاحظات الموظف</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>اكتب ملاحظاتك أو تعليقاتك على هذه القضية قبل التحويل.</p>
            
            <textarea 
              placeholder="اكتب ملاحظاتك هنا... (مثال: تم التواصل مع المواطن هاتفياً وتأكيد التفاصيل)"
              style={{ 
                width: '100%', minHeight: '100px', padding: '12px', borderRadius: '8px', 
                border: '1px solid var(--glass-border)', background: 'var(--bg-secondary)', 
                fontFamily: 'var(--font-arabic)', fontSize: '0.85rem', color: 'var(--text-primary)',
                resize: 'vertical', outline: 'none', lineHeight: 1.6,
              }}
            />
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <Camera size={14} /> إرفاق ملف
              </button>
              <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', background: 'var(--primary-color)', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem' }}>
                <MessageSquare size={14} /> حفظ الملاحظة
              </button>
            </div>
          </div>

          {/* FORWARD TO NEXT DEPARTMENT */}
          {info.currentStep < 6 && (
            <div style={{ background: 'rgba(37,99,235,0.05)', borderRadius: '12px', border: '1px solid rgba(37,99,235,0.15)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: '#2563eb' }}>تحويل للمرحلة التالية</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                بعد إتمام المرحلة الحالية ({info.currentStep})، ادفع القضية للمرحلة التالية ({info.currentStep + 1}) ليستلمها القسم المختص.
              </p>
              <button style={{ 
                width: '100%', padding: '12px', background: '#2563eb', color: '#ffffff', border: 'none', 
                borderRadius: '8px', cursor: 'pointer', fontWeight: 800, fontSize: '0.9rem', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              }}>
                <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} /> تحويل إلى: {stepLabels[info.currentStep]} →
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
