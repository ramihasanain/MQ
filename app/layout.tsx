import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'نبض المواطن | حزب الأمة',
  description: 'منصة رقمية ذكية ومؤتمتة لربط المواطن بقيادات حزب الأمة. استقبل شكاوى ومقترحات المواطن وتتبعها بشفافية تامة.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
