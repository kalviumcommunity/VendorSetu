'use client';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  userEmail?: string;
  userRole?: string;
}

const Layout = ({ children, userEmail, userRole }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userEmail={userEmail} userRole={userRole} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar userEmail={userEmail} userRole={userRole} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
