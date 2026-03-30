"use client";
import MapContainerServerSafe from '@/app/components/MapWrapper';
import { ShieldAlert, MapPin, BarChart3, Radio, Users, Activity, Target, TrendingUp, Clock, CheckCircle, Inbox, Building, ChevronLeft, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid, YAxis } from 'recharts';
import Link from 'next/link';

const trendData = [
  { name: 'السبت', وارد: 120, منجز: 90 },
  { name: 'الأحد', وارد: 150, منجز: 110 },
  { name: 'الإثنين', وارد: 140, منجز: 135 },
  { name: 'الثلاثاء', وارد: 180, منجز: 160 },
  { name: 'الأربعاء', وارد: 210, منجز: 190 },
  { name: 'الخميس', وارد: 160, منجز: 200 },
  { name: 'الجمعة', وارد: 80, منجز: 75 },
];

const branchPerformance = [
  { name: 'عمّان', قضايا: 340 },
  { name: 'الزرقاء', قضايا: 210 },
  { name: 'إربد', قضايا: 180 },
  { name: 'الكرك', قضايا: 60 },
  { name: 'العقبة', قضايا: 43 },
];

// Escalated tickets (Step 5) that reached HQ leadership
const escalatedTickets = [
  { id: 'TIK-1008', title: 'تلوث مياه الشرب في حي النزهة', branch: 'العقبة', citizen: 'ثناء حمدان', coordinator: 'عمر حسن', urgency: 'عاجل', since: 'منذ 10 أيام', summary: 'ثقب في خط الصرف الصحي يلوث خط المياه. 3 أطفال نُقلوا للمستشفى. مطلوب سؤال برلماني لوزير المياه.' },
  { id: 'TIK-1012', title: 'انهيار جدار مدرسة حكومية', branch: 'الكرك', citizen: 'عبدالرحمن', coordinator: 'سارة خالد', urgency: 'عالي', since: 'منذ 6 أيام', summary: 'سور الجهة الغربية انهار 15م. يحتاج تدخل هندسي عاجل. تم رفع صور وتوقيعات 20 عائلة.' },
  { id: 'TIK-1018', title: 'توقيف تعسفي لمواطن بدون مذكرة', branch: 'الزرقاء', citizen: 'محمود صبحي', coordinator: 'طارق زياد', urgency: 'عاجل', since: 'منذ 3 أيام', summary: 'احتجاز شاب 22 سنة 48 ساعة بدون مذكرة. مطلوب تدخل قانوني عاجل وتحويل لنائب الدائرة.' },
];

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
            <Radio size={24} color="var(--primary-color)" /> لوحة الإدارة العليا
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>رؤية شاملة لحركة الطلبات وأداء الفروع. القضايا المحالة للإدارة تظهر أسفل الشاشة.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
           <div style={{ padding: '8px 16px', background: 'rgba(5, 150, 105, 0.1)', color: 'var(--primary-color)', borderRadius: '6px', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: 8, height: 8, background: 'var(--primary-color)', borderRadius: '50%' }}></div>
              12 فرع متصل
           </div>
        </div>
      </div>

      {/* 6 KPIs - Full overview for leadership */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
        {[
          { label: 'إجمالي القضايا', value: '1,043', sub: 'هذا الشهر', icon: Inbox, color: 'var(--text-primary)', accent: 'var(--bg-accent)' },
          { label: 'قيد المعالجة', value: '408', sub: '39% من الإجمالي', icon: Clock, color: '#2563eb', accent: 'rgba(37,99,235,0.1)' },
          { label: 'أُغلقت بنجاح', value: '620', sub: 'نسبة الإنجاز 59%', icon: CheckCircle, color: 'var(--primary-color)', accent: 'rgba(5,150,105,0.1)' },
          { label: 'محالة للإدارة', value: '15', sub: 'بحاجة لقرار', icon: ShieldAlert, color: 'var(--danger-color)', accent: 'rgba(220,38,38,0.1)' },
          { label: 'الموظفون النشطون', value: '47', sub: 'يعملون حالياً', icon: Users, color: 'var(--warning-color)', accent: 'rgba(245,158,11,0.1)' },
          { label: 'الفروع تحت الضغط', value: '3', sub: 'عمّان / الزرقاء / إربد', icon: Building, color: '#8b5cf6', accent: 'rgba(139,92,246,0.1)' },
        ].map((kpi, i) => (
          <div key={i} style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{kpi.label}</span>
              <div style={{ background: kpi.accent, padding: '6px', borderRadius: '6px' }}>
                <kpi.icon size={16} color={kpi.color} />
              </div>
            </div>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: kpi.color, lineHeight: 1 }}>{kpi.value}</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>{kpi.sub}</span>
          </div>
        ))}
      </div>

      {/* Bento: Map + Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px', gridAutoRows: 'minmax(120px, auto)' }}>
        
        {/* Map (Span 7) */}
        <div style={{ gridColumn: 'span 7', gridRow: 'span 3', background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
           <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-secondary)' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> الخريطة الميدانية</h3>
              <span style={{ fontSize: '0.7rem', background: 'var(--danger-color)', color: '#fff', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold' }}>LIVE</span>
           </div>
           <div style={{ flex: 1, position: 'relative', minHeight: '350px' }}>
              <MapContainerServerSafe fullScreen={false} />
           </div>
        </div>

        {/* Trend Chart (Span 5, 2 rows) */}
        <div style={{ gridColumn: 'span 5', gridRow: 'span 2', background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '20px', display: 'flex', flexDirection: 'column' }}>
           <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><BarChart3 size={16} color="var(--primary-color)"/> الوارد vs المنجز (أسبوعي)</h3>
           <div style={{ flex: 1, minHeight: '180px' }}>
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={trendData}>
                 <defs>
                   <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                     <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                   </linearGradient>
                   <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#059669" stopOpacity={0.15}/>
                     <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={10} tickLine={false} axisLine={false} />
                 <Tooltip contentStyle={{ background: '#fff', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
                 <Area type="monotone" dataKey="وارد" stroke="#2563eb" strokeWidth={2} fill="url(#colorIn)" />
                 <Area type="monotone" dataKey="منجز" stroke="#059669" strokeWidth={2} fill="url(#colorOut)" />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Branch Pressure (Span 5, 1 row) */}
        <div style={{ gridColumn: 'span 5', gridRow: 'span 1', background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '20px', display: 'flex', flexDirection: 'column' }}>
           <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><Building size={16}/> توزيع الضغط على الفروع</h3>
           <div style={{ flex: 1, minHeight: '80px' }}>
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={branchPerformance} layout="vertical">
                 <XAxis type="number" hide />
                 <YAxis dataKey="name" type="category" width={55} fontSize={11} tickLine={false} axisLine={false} fontWeight={700} stroke="var(--text-secondary)" />
                 <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid var(--glass-border)' }} />
                 <Bar dataKey="قضايا" fill="var(--primary-color)" barSize={14} radius={[0, 4, 4, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

      </div>

      {/* ESCALATED TICKETS - The ones that reached HQ */}
      <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(220,38,38, 0.03)' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
            <div style={{ background: 'rgba(220,38,38,0.1)', padding: '6px', borderRadius: '6px' }}><AlertTriangle size={20} color="var(--danger-color)" /></div>
            القضايا المحالة للإدارة العليا (بانتظار قراركم)
          </h3>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--danger-color)', background: 'rgba(220,38,38,0.1)', padding: '4px 12px', borderRadius: '20px' }}>
            {escalatedTickets.length} ملفات معلقة
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {escalatedTickets.map((ticket, idx) => (
            <Link href={`/dashboard/tickets/${ticket.id}`} key={ticket.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ padding: '20px 24px', borderBottom: idx !== escalatedTickets.length - 1 ? '1px solid var(--bg-accent)' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', transition: 'background 0.15s' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flex: 1 }}>
                  <div style={{ background: ticket.urgency === 'عاجل' ? 'rgba(220,38,38,0.1)' : 'rgba(245,158,11,0.1)', padding: '10px', borderRadius: '10px', flexShrink: 0 }}>
                    <ShieldAlert size={22} color={ticket.urgency === 'عاجل' ? 'var(--danger-color)' : 'var(--warning-color)'} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>{ticket.title}</h4>
                      <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', background: 'var(--bg-accent)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>{ticket.id}</span>
                      <span style={{ fontSize: '0.7rem', background: ticket.urgency === 'عاجل' ? 'rgba(220,38,38,0.1)' : 'rgba(245,158,11,0.1)', color: ticket.urgency === 'عاجل' ? 'var(--danger-color)' : 'var(--warning-color)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>{ticket.urgency}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 0 10px 0', lineHeight: 1.5 }}>{ticket.summary}</p>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {ticket.branch}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={12} /> م. {ticket.coordinator}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {ticket.since}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, marginTop: '4px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: 700 }}>فتح الملف</span>
                  <ChevronLeft size={18} color="var(--primary-color)" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
