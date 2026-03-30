"use client";

import { Activity, Target, CheckCircle, ShieldAlert, Zap, Users, TrendingUp, Clock, MapPin, BarChart3 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Line, ComposedChart, Cell, PieChart, Pie } from 'recharts';

// Weekly performance data
const weeklyData = [
  { name: 'السبت', طلبات_واردة: 120, تم_معالجتها: 90 },
  { name: 'الأحد', طلبات_واردة: 150, تم_معالجتها: 110 },
  { name: 'الإثنين', طلبات_واردة: 140, تم_معالجتها: 135 },
  { name: 'الثلاثاء', طلبات_واردة: 180, تم_معالجتها: 160 },
  { name: 'الأربعاء', طلبات_واردة: 210, تم_معالجتها: 190 },
  { name: 'الخميس', طلبات_واردة: 160, تم_معالجتها: 200 },
  { name: 'الجمعة', طلبات_واردة: 80, تم_معالجتها: 75 },
];

// Categories distribution
const categoryData = [
  { name: 'خدمات بلدية', value: 450, color: '#2563eb' },
  { name: 'مقترحات تشريعية', value: 200, color: '#059669' },
  { name: 'شكاوى قانونية', value: 120, color: '#dc2626' },
  { name: 'شؤون عضوية', value: 63, color: '#d97706' },
];

// Branch workload comparison (separate bars, not stacked)
const branchWorkload = [
  { name: 'عمّان', واردة: 340, منجزة: 320 },
  { name: 'الزرقاء', واردة: 210, منجزة: 190 },
  { name: 'إربد', واردة: 180, منجزة: 175 },
  { name: 'الكرك', واردة: 60, منجزة: 50 },
  { name: 'المفرق', واردة: 43, منجزة: 40 },
];

// Staff performance
const staffData = [
  { id: 1, name: 'أحمد محمد', region: 'عمّان', assigned: 145, resolved: 140, rate: 96, speed: '1.2 ساعة', avatar: 'أ.م', isTop: true },
  { id: 2, name: 'طارق زياد', region: 'إربد', assigned: 120, resolved: 112, rate: 93, speed: '2.5 ساعة', avatar: 'ط.ز', isTop: false },
  { id: 3, name: 'سارة خالد', region: 'الزرقاء', assigned: 95, resolved: 90, rate: 94, speed: '1.8 ساعة', avatar: 'س.خ', isTop: false },
  { id: 4, name: 'عمر حسن', region: 'العقبة', assigned: 60, resolved: 50, rate: 83, speed: '4.1 ساعة', avatar: 'ع.ح', isTop: false },
  { id: 5, name: 'منى جمال', region: 'الكرك', assigned: 45, resolved: 44, rate: 97, speed: '0.9 ساعة', avatar: 'م.ج', isTop: true },
];

export default function AnalyticsDashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
            <BarChart3 size={24} color="var(--primary-color)" /> لوحة المؤشرات والتحليلات
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>مؤشرات الأداء الإداري، حركة الطلبات، وكفاءة فريق العمل.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
           <div style={{ background: '#ffffff', padding: '10px 20px', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
             <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block' }}>نسبة الإنجاز الكلية</span>
             <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-color)', lineHeight: 1 }}>92% <TrendingUp size={14} style={{ display: 'inline' }} /></span>
           </div>
           <div style={{ background: '#ffffff', padding: '10px 20px', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
             <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, display: 'block' }}>معدل المعالجة اليومي</span>
             <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>+45 طلب/يوم</span>
           </div>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>الطلبات الواردة (أسبوعي)</h3>
            <Target size={18} color="var(--secondary-color)" />
          </div>
          <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>1,040</span>
          <div style={{ marginTop: '12px', display: 'flex', gap: '6px', fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: 600 }}><TrendingUp size={14} /> +15% عن الأسبوع الماضي</div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>تمت معالجتها</h3>
            <CheckCircle size={18} color="var(--primary-color)" />
          </div>
          <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>960</span>
          <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>نسبة الإنجاز 92%</div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>محالة للإدارة العليا</h3>
            <ShieldAlert size={18} color="var(--danger-color)" />
          </div>
          <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>14</span>
          <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--danger-color)', fontWeight: 600 }}>بحاجة لقرار إداري</div>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 600 }}>متوسط زمن المعالجة</h3>
            <Zap size={18} color="var(--warning-color)" />
          </div>
          <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>2.1<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}> ساعة</span></span>
          <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>من الاستلام حتى التحويل</div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        
        {/* Composed Chart */}
        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
           <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: 0 }}>حركة الطلبات الأسبوعية (الوارد مقابل المنجز)</h3>
             <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem' }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{width: 10, height: 10, borderRadius: '2px', background: '#e2e8f0'}}></div> الوارد</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{width: 10, height: 3, background: 'var(--primary-color)'}}></div> المنجز</span>
             </div>
           </div>
           <div style={{ flex: 1, minHeight: '280px' }}>
             <ResponsiveContainer width="100%" height="100%">
               <ComposedChart data={weeklyData} margin={{ top: 10, right: 10, bottom: 10, left: -10 }}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="name" stroke="var(--text-muted)" tickLine={false} axisLine={false} fontSize={12} />
                 <YAxis stroke="var(--text-muted)" tickLine={false} axisLine={false} fontSize={11} />
                 <Tooltip contentStyle={{ background: '#fff', border: '1px solid var(--glass-border)', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} cursor={{ fill: 'transparent' }} />
                 <Bar dataKey="طلبات_واردة" fill="#e2e8f0" radius={[4, 4, 0, 0]} maxBarSize={36} name="الطلبات الواردة" />
                 <Line type="monotone" dataKey="تم_معالجتها" stroke="var(--primary-color)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} name="تمت معالجتها" />
               </ComposedChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Donut */}
        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
           <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 16px 0' }}>تصنيف الطلبات حسب النوع</h3>
           
           <div style={{ flex: 1, minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={4} dataKey="value" stroke="none">
                   {categoryData.map((entry, index) => ( <Cell key={`cell-${index}`} fill={entry.color} /> ))}
                 </Pie>
                 <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid var(--glass-border)' }} />
               </PieChart>
             </ResponsiveContainer>
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
               <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', display: 'block', lineHeight: 1 }}>833</span>
               <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>طلب</span>
             </div>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
              {categoryData.map((cat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: cat.color, borderRadius: '50%', flexShrink: 0 }}></div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block' }}>{cat.name}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{cat.value}</span>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Charts Row 2: Branch Comparison */}
      <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px' }}>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: 0 }}>أداء الفروع حسب المحافظة</h3>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{width: 10, height: 10, borderRadius: '2px', background: '#e2e8f0'}}></div> واردة</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{width: 10, height: 10, borderRadius: '2px', background: 'var(--primary-color)'}}></div> منجزة</span>
          </div>
        </div>
        <div style={{ height: '280px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={branchWorkload} margin={{ top: 10, right: 10, bottom: 10, left: -10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" stroke="var(--text-muted)" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis stroke="var(--text-muted)" tickLine={false} axisLine={false} fontSize={11} />
              <Tooltip contentStyle={{ background: '#fff', border: '1px solid var(--glass-border)', borderRadius: '8px' }} />
              <Bar dataKey="واردة" fill="#e2e8f0" radius={[4, 4, 0, 0]} maxBarSize={32} name="الطلبات الواردة" />
              <Bar dataKey="منجزة" fill="var(--primary-color)" radius={[4, 4, 0, 0]} maxBarSize={32} name="تمت معالجتها" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Staff Performance Table */}
      <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px' }}>
         <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
           <Users size={20} color="var(--primary-color)"/> تقييم أداء المنسقين الميدانيين
         </h3>
         <div style={{ overflowX: 'auto' }}>
           <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
             <thead>
               <tr style={{ borderBottom: '2px solid var(--bg-accent)', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                 <th style={{ padding: '14px 12px', fontWeight: 700 }}>الموظف</th>
                 <th style={{ padding: '14px 12px', fontWeight: 700 }}>الفرع</th>
                 <th style={{ padding: '14px 12px', fontWeight: 700 }}>الطلبات المعالجة</th>
                 <th style={{ padding: '14px 12px', fontWeight: 700 }}>نسبة الإنجاز</th>
                 <th style={{ padding: '14px 12px', fontWeight: 700, textAlign: 'center' }}>متوسط وقت المعالجة</th>
               </tr>
             </thead>
             <tbody>
               {staffData.map((user) => (
                 <tr key={user.id} style={{ borderBottom: '1px solid var(--bg-accent)' }}>
                   <td style={{ padding: '14px 12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: user.isTop ? 'var(--primary-color)' : 'var(--bg-accent)', color: user.isTop ? '#fff' : 'var(--text-secondary)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '800', fontSize: '0.85rem' }}>
                       {user.avatar}
                     </div>
                     <div>
                       <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block' }}>{user.name}</span>
                       {user.isTop && <span style={{ fontSize: '0.7rem', color: 'var(--primary-color)', fontWeight: 600 }}>أداء متميز</span>}
                     </div>
                   </td>
                   <td style={{ padding: '14px 12px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}><MapPin size={12} style={{ display: 'inline' }}/> {user.region}</td>
                   <td style={{ padding: '14px 12px' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>{user.resolved}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}> / {user.assigned}</span>
                   </td>
                   <td style={{ padding: '14px 12px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                       <span style={{ fontSize: '0.9rem', fontWeight: 800, width: '40px', color: user.rate > 90 ? 'var(--primary-color)' : 'var(--warning-color)' }}>{user.rate}%</span>
                       <div style={{ flex: 1, maxWidth: '180px', height: '6px', background: 'var(--bg-accent)', borderRadius: '3px', overflow: 'hidden' }}>
                         <div style={{ height: '100%', width: `${user.rate}%`, background: user.rate > 90 ? 'var(--primary-color)' : 'var(--warning-color)', borderRadius: '3px' }}></div>
                       </div>
                     </div>
                   </td>
                   <td style={{ padding: '14px 12px', textAlign: 'center' }}>
                     <span style={{ background: 'var(--bg-accent)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                       <Clock size={12} style={{ display: 'inline', marginLeft: '4px' }}/> {user.speed}
                     </span>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      </div>

    </div>
  );
}
