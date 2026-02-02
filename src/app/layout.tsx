import { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Will You Be My Valentine? 💕',
  description: 'A special Valentine\'s proposal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
