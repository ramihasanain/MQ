"use client";
import { Search, User, Phone, MapPin, Clock, FileText, ChevronLeft, Filter, Download } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const citizensData = [
  { id: 1, name: 'خالد عبدالله', nationalId: '9841029342', phone: '0787654321', city: 'الزرقاء', district: 'حي المتنبي', tickets: [
    { id: 'TIK-1020', title: 'انقطاع المياه عن حي المتنبي', status: 'classified', urgency: 'عاجل', date: '28/03/2026' }
  ]},
  { id: 2, name: 'سامي يوسف', nationalId: '9920012345', phone: '0791234567', city: 'عمّان', district: 'الدائرة الثامنة', tickets: [
    { id: 'TIK-1024', title: 'شكوى انقطاع كهرباء متكرر', status: 'intake', urgency: 'عالي', date: '30/03/2026' }
  ]},
  { id: 3, name: 'فاطمة حسين', nationalId: '9880098765', phone: '0779876543', city: 'إربد', district: 'الدائرة الأولى', tickets: [
    { id: 'TIK-1025', title: 'اقتراح تعديل قانون المالكين والمستأجرين', status: 'intake', urgency: 'متوسط', date: '30/03/2026' }
  ]},
  { id: 4, name: 'محمود صبحي', nationalId: '9950034567', phone: '0795551234', city: 'الزرقاء', district: 'وسط المدينة', tickets: [
    { id: 'TIK-1018', title: 'توقيف تعسفي لمواطن بدون مذكرة', status: 'assigned', urgency: 'عاجل', date: '27/03/2026' }
  ]},
  { id: 5, name: 'أم عمر (هدى محمد)', nationalId: '9870045678', phone: '0781112233', city: 'السلط', district: 'حي الميدان', tickets: [
    { id: 'TIK-1015', title: 'حفرة خطيرة أمام مدرسة ابتدائية', status: 'assigned', urgency: 'متوسط', date: '26/03/2026' }
  ]},
  { id: 6, name: 'عبدالرحمن الطراونة', nationalId: '9900056789', phone: '0770009988', city: 'الكرك', district: 'لواء القصر', tickets: [
    { id: 'TIK-1012', title: 'انهيار جدار مدرسة حكومية', status: 'field_done', urgency: 'عالي', date: '24/03/2026' }
  ]},
  { id: 7, name: 'ثناء حمدان', nationalId: '9860067890', phone: '0799887766', city: 'العقبة', district: 'حي النزهة', tickets: [
    { id: 'TIK-1008', title: 'تلوث مياه الشرب في حي النزهة', status: 'escalated', urgency: 'عاجل', date: '20/03/2026' }
  ]},
  { id: 8, name: 'يزيد ناصر', nationalId: '9910078901', phone: '0776655443', city: 'العقبة', district: 'حي الشلالة', tickets: [
    { id: 'TIK-0998', title: 'تجديد عضوية وبطاقة حزبية', status: 'closed', urgency: 'منخفض', date: '15/03/2026' }
  ]},
  { id: 9, name: 'هشام كمال', nationalId: '9870089012', phone: '0781234567', city: 'جرش', district: 'وسط المدينة', tickets: [
    { id: 'TIK-0990', title: 'إصلاح شبكة صرف صحي', status: 'closed', urgency: 'متوسط', date: '10/03/2026' }
  ]},
];

const statusLabels: Record<string, {label: string; color: string; bg: string}> = {
  intake:     { label: 'استلام', color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
  classified: { label: 'فرز',   color: '#2563eb', bg: 'rgba(37,99,235,0.1)' },
  assigned:   { label: 'معين',  color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
  field_done: { label: 'ميداني', color: '#d97706', bg: 'rgba(217,119,6,0.1)' },
  escalated:  { label: 'تصعيد', color: '#dc2626', bg: 'rgba(220,38,38,0.1)' },
  closed:     { label: 'مغلقة', color: '#059669', bg: 'rgba(5,150,105,0.1)' },
};

export default function CitizensPage() {
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = citizensData.filter(c => 
    c.name.includes(search) || c.nationalId.includes(search) || c.phone.includes(search) || c.city.includes(search)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--text-primary)' }}>سجل المواطنين</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>قاعدة بيانات أصحاب الشكاوى والمقترحات. اضغط على أي مواطن لعرض قضاياه.</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: '#ffffff', border: '1px solid var(--glass-border)', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <Download size={16} /> تصدير CSV
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ display: 'flex', alignItems: 'center', background: '#ffffff', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--glass-border)', gap: '12px' }}>
        <Search size={18} color="var(--text-muted)" />
        <input 
          type="text" 
          placeholder="ابحث بالاسم أو رقم الهاتف أو الرقم الوطني أو المحافظة..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', width: '100%', fontFamily: 'var(--font-arabic)', fontSize: '0.9rem' }} 
        />
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{filtered.length} نتيجة</span>
      </div>

      {/* Citizens Table */}
      <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead>
            <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--bg-accent)' }}>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)' }}>المواطن</th>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)' }}>الرقم الوطني</th>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)' }}>المحافظة / الحي</th>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)' }}>الهاتف</th>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>القضايا</th>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)' }}></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((citizen) => {
              const isExpanded = expandedId === citizen.id;
              return (
                <>
                  <tr 
                    key={citizen.id} 
                    onClick={() => setExpandedId(isExpanded ? null : citizen.id)}
                    style={{ borderBottom: isExpanded ? 'none' : '1px solid var(--bg-accent)', cursor: 'pointer', transition: 'background 0.15s', background: isExpanded ? 'var(--bg-secondary)' : 'transparent' }}
                  >
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>
                          {citizen.name[0]}
                        </div>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{citizen.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{citizen.nationalId}</td>
                    <td style={{ padding: '16px 20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {citizen.city} - {citizen.district}</span>
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '0.85rem', color: 'var(--text-secondary)', direction: 'ltr', textAlign: 'right' }}>{citizen.phone}</td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      <span style={{ background: 'var(--bg-accent)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {citizen.tickets.length}
                      </span>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <ChevronLeft size={18} color="var(--text-muted)" style={{ transform: isExpanded ? 'rotate(-90deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                    </td>
                  </tr>

                  {/* Expanded: Citizen's tickets detail */}
                  {isExpanded && (
                    <tr key={`detail-${citizen.id}`}>
                      <td colSpan={6} style={{ padding: '0 20px 20px 20px', background: 'var(--bg-secondary)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          
                          {/* Citizen Actions */}
                          <div style={{ display: 'flex', gap: '8px', paddingBottom: '12px', borderBottom: '1px solid var(--glass-border)' }}>
                            <a href={`https://wa.me/962${citizen.phone.substring(1)}`} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: '#25D366', color: '#fff', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>
                              <Phone size={14} /> واتساب
                            </a>
                            <a href={`tel:${citizen.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: '#ffffff', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>
                              <Phone size={14} /> اتصال مباشر
                            </a>
                          </div>

                          {/* Tickets List */}
                          <h4 style={{ fontSize: '0.9rem', fontWeight: 800, margin: '8px 0 0 0', color: 'var(--text-primary)' }}>قضايا {citizen.name}:</h4>
                          {citizen.tickets.map(ticket => {
                            const st = statusLabels[ticket.status] || statusLabels['intake'];
                            return (
                              <Link href={`/dashboard/tickets/${ticket.id}`} key={ticket.id} style={{ textDecoration: 'none' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid var(--glass-border)', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ background: st.bg, color: st.color, padding: '8px', borderRadius: '8px' }}>
                                      <FileText size={18} />
                                    </div>
                                    <div>
                                      <h5 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{ticket.title}</h5>
                                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', gap: '12px' }}>
                                        <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>{ticket.id}</span>
                                        <span><Clock size={12} style={{ display: 'inline' }} /> {ticket.date}</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ background: st.bg, color: st.color, padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>{st.label}</span>
                                    <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', background: ticket.urgency === 'عاجل' ? 'rgba(220,38,38,0.1)' : 'var(--bg-accent)', color: ticket.urgency === 'عاجل' ? 'var(--danger-color)' : 'var(--text-secondary)', fontWeight: 600 }}>{ticket.urgency}</span>
                                    <ChevronLeft size={16} color="var(--text-muted)" />
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}
