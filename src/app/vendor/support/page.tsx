'use client';

import { useState } from 'react';
import Layout from '../../components/Layout';
import SummaryCard from '../../components/SummaryCard';
import Button from '../../components/Button';
import EmptyState from '../../components/EmptyState';
import { FileText, Clock, CheckCircle, Filter, Plus, Settings } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'open' | 'resolved'>('all');

  const stats = {
    total: 0,
    open: 0,
    resolved: 0,
  };

  const filters = [
    { id: 'all', label: 'All Tickets', count: stats.total },
    { id: 'open', label: 'Open', count: stats.open },
    { id: 'resolved', label: 'Resolved', count: stats.resolved },
  ];

  return (
    <Layout userEmail="aditi.s.s63@kalvium.community" userRole="Vendor">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Support</h1>
            <p className="text-gray-600">Raise and track your support tickets.</p>
          </div>
          <Link href="/vendor/support/new">
            <div className="flex flex-col items-end">
              <Button variant="primary" icon={Plus} iconPosition="left">
                New Ticket
              </Button>
              <span className="text-xs text-gray-500 mt-1">Raise an issue</span>
            </div>
          </Link>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <SummaryCard
            title="Total Tickets"
            value={stats.total}
            icon={FileText}
            iconColor="text-green-600"
          />
          <SummaryCard
            title="Open Tickets"
            value={stats.open}
            icon={Clock}
            iconColor="text-yellow-600"
          />
          <SummaryCard
            title="Resolved"
            value={stats.resolved}
            icon={CheckCircle}
            iconColor="text-green-600"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
                className={`px-6 py-3 border-b-2 transition-colors ${
                  isActive
                    ? 'border-green-600 text-green-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            );
          })}
        </div>

        {/* Tickets List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <EmptyState
            icon={Settings}
            title="No Tickets"
            description="You haven't created any support tickets yet."
          />
        </div>
      </div>
    </Layout>
  );
}
