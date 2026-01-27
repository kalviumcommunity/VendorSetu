'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Headphones,
  Settings,
  LogOut,
  ChevronLeft,
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  userEmail?: string;
  userRole?: string;
}

const Sidebar = ({ userEmail, userRole }: SidebarProps) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { href: '/vendor/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/vendor/license', label: 'My License', icon: FileText },
    { href: '/vendor/applications', label: 'Applications', icon: FolderOpen },
    { href: '/vendor/support', label: 'Support', icon: Headphones },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div
      className={`bg-[#047857] text-white h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo Section */}
      <div className="p-6 flex items-center justify-between border-b border-green-700">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-green-600 font-bold text-lg">V</span>
            </div>
            <div>
              <div className="font-bold text-lg">VendorSetu</div>
              <div className="text-xs text-green-200">License Portal</div>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-green-700 rounded"
        >
          <ChevronLeft
            className={`w-5 h-5 transition-transform ${
              isCollapsed ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                active
                  ? 'bg-green-600 text-white'
                  : 'text-green-100 hover:bg-green-700 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-green-700 space-y-2">
        <Link
          href="/vendor/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-green-100 hover:bg-green-700 hover:text-white transition-colors"
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-green-100 hover:bg-green-700 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Sign Out</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
