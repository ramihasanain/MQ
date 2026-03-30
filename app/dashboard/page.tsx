"use client";

import { useState } from 'react';
import { Inbox, Filter, Clock, CheckCircle, ShieldAlert, MapPin, ArrowUpDown, Plus, MoreHorizontal, TrendingUp, Users, Briefcase, CalendarDays } from 'lucide-react';
import Link from 'next/link';

// Realistic tickets mapped to the 6-step lifecycle
const initialTickets = [
  // Step 1: Intake (new)
  { id: 'TIK-1024', type: 'خدمي', branch: 'عمّان', urgency: 'عالي', status: 'intake', title: 'شكوى انقطاع كهرباء متكرر', assignee: 'غير معين', citizen: 'سامي يوسف', date: '30/03/2026' },
  { id: 'TIK-1025', type: 'تشريعي', branch: 'إربد', urgency: 'متوسط', status: 'intake', title: 'اقتراح تعديل قانون المالكين والمستأجرين', assignee: 'غير معين', citizen: 'فاطمة حسين', date: '30/03/2026' },
  // Step 2: Classified & Sorted
  { id: 'TIK-1020', type: 'خدمي', branch: 'الزرقاء', urgency: 'عاجل', status: 'classified', title: 'انقطاع المياه عن حي المتنبي', assignee: 'غير معين', citizen: 'خالد عبدالله', date: '28/03/2026' },
  // Step 3: Assigned to coordinator
  { id: 'TIK-1018', type: 'قانوني', branch: 'الزرقاء', urgency: 'عاجل', status: 'assigned', title: 'توقيف تعسفي لمواطن بدون مذكرة', assignee: 'طارق زياد', citizen: 'محمود صبحي', date: '27/03/2026' },
  { id: 'TIK-1015', type: 'خدمي', branch: 'السلط', urgency: 'متوسط', status: 'assigned', title: 'حفرة خطيرة أمام مدرسة ابتدائية', assignee: 'سارة خالد', citizen: 'أم عمر', date: '26/03/2026' },
  // Step 4: Field visit done
  { id: 'TIK-1012', type: 'شكوى عامة', branch: 'الكرك', urgency: 'عالي', status: 'field_done', title: 'انهيار جدار مدرسة حكومية', assignee: 'سارة خالد', citizen: 'عبدالرحمن', date: '24/03/2026' },
  // Step 5: Escalated 
  { id: 'TIK-1008', type: 'خدمي', branch: 'العقبة', urgency: 'عاجل', status: 'escalated', title: 'تلوث مياه الشرب في حي النزهة', assignee: 'عمر حسن', citizen: 'ثناء حمدان', date: '20/03/2026' },
  // Step 6: Closed
  { id: 'TIK-0998', type: 'انتساب', branch: 'العقبة', urgency: 'منخفض', status: 'closed', title: 'تجديد عضوية وبطاقة حزبية', assignee: 'عمر حسن', citizen: 'يزيد ناصر', date: '15/03/2026' },
  { id: 'TIK-0990', type: 'خدمي', branch: 'جرش', urgency: 'متوسط', status: 'closed', title: 'إصلاح شبكة صرف صحي', assignee: 'أحمد محمد', citizen: 'هشام كمال', date: '10/03/2026' },
];

const columns = [
  { status: 'intake',     title: '1. الاستلام',         color: '#6366f1' },
  { status: 'classified', title: '2. الفرز والتصنيف',   color: '#2563eb' },
  { status: 'assigned',   title: '3. تعيين المنسق',     color: '#8b5cf6' },
  { status: 'field_done', title: '4. النزول الميداني',   color: '#d97706' },
  { status: 'escalated',  title: '5. التدخل النيابي',   color: '#dc2626' },
  { status: 'closed',     title: '6. مُغلقة',           color: '#059669' },
];

export default function CoordinatorDashboard() {
  const [tickets, setTickets] = useState(initialTickets);

  const moveTicket = (id: string, newStatus: string) => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const total = tickets.length;
  const open = tickets.filter(t => t.status !== 'closed').length;
  const closed = tickets.filter(t => t.status === 'closed').length;
  const urgent = tickets.filter(t => t.urgency === 'عاجل').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '20px' }}>
      
      {/* Header + Stats */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--text-primary)' }}>مسار القضايا (6 مراحل)</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>اسحب وأفلت لتحريك القضايا بين المراحل المعتمدة.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
           <button className="btn btn-primary" style={{ padding: '8px 16px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}><Plus size={16}/> تسجيل شكوى</button>
        </div>
      </div>

      {/* Summary Stats Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <div style={{ background: '#ffffff', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>إجمالي القضايا</p>
            <p style={{ margin: 0, fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>{total}</p>
          </div>
          <Inbox size={24} color="var(--text-muted)" />
        </div>
        <div style={{ background: '#ffffff', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>قيد المعالجة</p>
            <p style={{ margin: 0, fontSize: '1.6rem', fontWeight: 800, color: '#2563eb' }}>{open}</p>
          </div>
          <Clock size={24} color="#2563eb" />
        </div>
        <div style={{ background: '#ffffff', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>أُغلقت بنجاح</p>
            <p style={{ margin: 0, fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-color)' }}>{closed}</p>
          </div>
          <CheckCircle size={24} color="var(--primary-color)" />
        </div>
        <div style={{ background: '#ffffff', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>قضايا عاجلة</p>
            <p style={{ margin: 0, fontSize: '1.6rem', fontWeight: 800, color: 'var(--danger-color)' }}>{urgent}</p>
          </div>
          <ShieldAlert size={24} color="var(--danger-color)" />
        </div>
      </div>

      {/* 6-Column Kanban */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', flex: 1, alignItems: 'start', overflowX: 'auto' }}>
        {columns.map(col => {
          const colTickets = tickets.filter(t => t.status === col.status);
          return (
            <div 
              key={col.status}
              style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-accent)', borderRadius: '10px', padding: '10px', minHeight: '400px', border: '1px solid var(--glass-border)' }}
              onDragOver={(e) => { e.preventDefault(); e.currentTarget.style.background = 'var(--bg-secondary)'; }}
              onDragLeave={(e) => { e.currentTarget.style.background = 'var(--bg-accent)'; }}
              onDrop={(e) => { 
                e.currentTarget.style.background = 'var(--bg-accent)';
                const ticketId = e.dataTransfer.getData("ticketId"); 
                if(ticketId) moveTicket(ticketId, col.status); 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', padding: '0 4px' }}>
                <h3 style={{ fontSize: '0.8rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: col.color, display: 'inline-block' }}></span> 
                  {col.title}
                </h3>
                <span style={{ background: '#ffffff', color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 700, padding: '2px 6px', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                  {colTickets.length}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {colTickets.map(ticket => (
                  <Link href={`/dashboard/tickets/${ticket.id}`} key={ticket.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div 
                      style={{ background: '#ffffff', borderRadius: '8px', padding: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 1px 2px rgba(0,0,0,0.02)', cursor: 'grab' }}
                      draggable
                      onDragStart={(e) => { e.dataTransfer.setData("ticketId", ticket.id); e.currentTarget.style.opacity = '0.4'; }}
                      onDragEnd={(e) => { e.currentTarget.style.opacity = '1'; }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, fontFamily: 'monospace' }}>{ticket.id}</span>
                        <span style={{ fontSize: '0.65rem', padding: '2px 4px', borderRadius: '4px', background: ticket.urgency === 'عاجل' ? 'rgba(220,38,38,0.1)' : 'var(--bg-accent)', color: ticket.urgency === 'عاجل' ? 'var(--danger-color)' : 'var(--text-secondary)', fontWeight: 600 }}>{ticket.urgency}</span>
                      </div>
                      <h4 style={{ fontSize: '0.85rem', fontWeight: 700, margin: '0 0 6px 0', color: 'var(--text-primary)', lineHeight: 1.3 }}>{ticket.title}</h4>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', margin: '0 0 10px 0' }}>{ticket.branch} • {ticket.type}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid var(--bg-accent)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: ticket.assignee === 'غير معين' ? 'var(--bg-accent)' : 'var(--primary-color)', color: '#fff', fontSize: '0.55rem', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', border: ticket.assignee === 'غير معين' ? '1px dashed var(--glass-border)' : 'none' }}>
                            {ticket.assignee === 'غير معين' ? '?' : ticket.assignee[0]}
                          </div>
                          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: ticket.assignee === 'غير معين' ? 'var(--text-muted)' : 'var(--text-primary)' }}>{ticket.assignee}</span>
                        </div>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{ticket.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
