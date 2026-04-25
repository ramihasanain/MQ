"use client";

import { useState } from 'react';
import { ListChecks, Search, Tag, Users } from 'lucide-react';

const initialCategories = [
  { id: 'cat-1', name: 'شكاوى خدمية', description: 'تتعلق بانقطاع المياه، الكهرباء، البنية التحتية، الخدمات البلدية.', count: 45, assignee: null },
  { id: 'cat-2', name: 'مقترحات تشريعية', description: 'تعديلات القوانين، الأنظمة، ومقترحات لتحسين التشريعات.', count: 12, assignee: null },
  { id: 'cat-3', name: 'قضايا قانونية', description: 'التوقيف التعسفي، الانتهاكات الحقوقية، وتوكيل المحامين.', count: 28, assignee: 'أحمد محمد' },
  { id: 'cat-4', name: 'شكاوى عامة', description: 'شكاوى غير مصنفة، قضايا فردية، أو اقتراحات عامة للحزب.', count: 15, assignee: null },
  { id: 'cat-5', name: 'طلبات انتساب وتجديد', description: 'العضوية، الهويات الحزبية، وتسديد الاشتراكات.', count: 8, assignee: 'سارة خالد' },
];

const employees = ['أحمد محمد', 'سارة خالد', 'عمر حسن', 'طارق زياد'];

export default function ManagerTasksPage() {
  const [categories, setCategories] = useState(initialCategories);
  const [search, setSearch] = useState('');

  const assignCategory = (id: string, employee: string) => {
    setCategories(prev => prev.map(c => c.id === id ? { ...c, assignee: employee } : c));
  };

  const filtered = categories.filter(c => c.name.includes(search) || c.description.includes(search));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--text-primary)' }}>توزيع المهام (حسب التصنيف)</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>قم بتعيين موظف مسؤول عن استلام ومتابعة كافة الطلبات الواردة لكل تصنيف.</p>
        </div>
      </div>

      {/* Search */}
      <div style={{ display: 'flex', alignItems: 'center', background: '#ffffff', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--glass-border)', gap: '12px' }}>
        <Search size={18} color="var(--text-muted)" />
        <input 
          type="text" 
          placeholder="ابحث في التصنيفات..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', width: '100%', fontFamily: 'var(--font-arabic)', fontSize: '0.9rem' }} 
        />
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{filtered.length} تصنيف</span>
      </div>

      {/* Categories List */}
      <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
          <thead>
            <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--bg-accent)' }}>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)' }}>التصنيف</th>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)' }}>الوصف</th>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)' }}>الطلبات الحالية</th>
              <th style={{ padding: '14px 20px', fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-muted)' }}>الموظف المسؤول (المنسق)</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((cat) => (
              <tr key={cat.id} style={{ borderBottom: '1px solid var(--bg-accent)', transition: 'background 0.15s' }}>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ background: 'var(--bg-accent)', color: 'var(--primary-color)', padding: '8px', borderRadius: '8px' }}>
                       <Tag size={18} />
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{cat.name}</span>
                  </div>
                </td>
                <td style={{ padding: '16px 20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {cat.description}
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                     <Users size={14} color="var(--text-muted)" />
                     <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{cat.count} طلب</span>
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <select 
                    value={cat.assignee || ''} 
                    onChange={(e) => assignCategory(cat.id, e.target.value)}
                    style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--glass-border)', background: cat.assignee ? 'var(--bg-secondary)' : '#ffffff', color: 'var(--text-primary)', fontFamily: 'var(--font-arabic)', fontSize: '0.85rem', width: '100%', outline: 'none', cursor: 'pointer' }}
                  >
                    <option value="" disabled>-- تعيين مسؤول للتصنيف --</option>
                    {employees.map(emp => (
                      <option key={emp} value={emp}>{emp}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
