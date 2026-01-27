'use client';

import { useState } from 'react';
import Layout from '../../components/Layout';
import SummaryCard from '../../components/SummaryCard';
import Button from '../../components/Button';
import EmptyState from '../../components/EmptyState';
import { Clock, CheckCircle, Filter, Plus, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const stats = {
    pending: 0,
    completed: 0,
    total: 0,
  };

  const filters = [
    { id: 'all', label: 'All', count: stats.total, icon: Filter },
    { id: 'pending', label: 'Pending', count: stats.pending, icon: Clock },
    { id: 'completed', label: 'Completed', count: stats.completed, icon: CheckCircle },
  ];

  return (
    <Layout userEmail="aditi.s.s63@kalvium.community" userRole="Vendor">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Applications</h1>
            <p className="text-gray-600">Submit and track your license applications.</p>
          </div>
          <Link href="/vendor/applications/new">
            <Button variant="primary" icon={Plus} iconPosition="left">
              New Application
            </Button>
          </Link>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <SummaryCard
            title="Pending"
            value={stats.pending}
            icon={Clock}
            iconColor="text-yellow-600"
            bgColor="bg-gray-50"
          />
          <SummaryCard
            title="Completed"
            value={stats.completed}
            icon={CheckCircle}
            iconColor="text-green-600"
            bgColor="bg-green-50"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
                  isActive
                    ? 'border-green-600 text-green-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>
                  {filter.label} ({filter.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Applications List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <EmptyState
            icon={FileText}
            title="No Applications"
            description="You haven't submitted any applications yet."
          />
        </div>
      </div>
    </Layout>
  );
}
