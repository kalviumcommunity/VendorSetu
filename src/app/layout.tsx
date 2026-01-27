import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VendorSetu - Railway License Portal',
  description: 'Streamlined digital platform for vendor onboarding, license issuance, and compliance tracking',
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
