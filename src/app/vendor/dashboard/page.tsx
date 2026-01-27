'use client';

import { useState } from 'react';
import Layout from '../../components/Layout';
import SummaryCard from '../../components/SummaryCard';
import Button from '../../components/Button';
import EmptyState from '../../components/EmptyState';
import Toast from '../../components/Toast';
import {
  FileText,
  Calendar,
  Clock,
  CheckCircle,
  Plus,
  RefreshCw,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function VendorDashboard() {
  const [showToast, setShowToast] = useState(true);
  const licenseData = {
    licenseId: 'RVL-26-48392',
    status: 'Active',
    issueDate: '15/06/2025',
    expiryDate: '15/06/2027',
    daysRemaining: 504,
    pendingRequests: 0,
    totalApplications: 0,
  };

  return (
    <Layout userEmail="aditi.s.s63@kalvium.community" userRole="Vendor">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vendor Dashboard</h1>
          <p className="text-gray-600">Manage your license and track applications</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard
            title="License Status"
            value={licenseData.status}
            subtitle={licenseData.licenseId}
            icon={FileText}
            iconColor="text-green-600"
          />
          <SummaryCard
            title="Days Until Expiry"
            value={licenseData.daysRemaining}
            subtitle={`Expires: ${licenseData.expiryDate}`}
            icon={Calendar}
            iconColor="text-green-600"
          />
          <SummaryCard
            title="Pending Requests"
            value={licenseData.pendingRequests}
            subtitle="Awaiting review"
            icon={Clock}
            iconColor="text-yellow-600"
          />
          <SummaryCard
            title="Total Applications"
            value={licenseData.totalApplications}
            subtitle="All time"
            icon={CheckCircle}
            iconColor="text-green-600"
          />
        </div>

        {/* License Details & Quick Actions */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* License Details Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">License Details</h2>
                <p className="text-sm text-gray-600">Your current vendor license information</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Active
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">License ID</span>
                <span className="font-semibold text-gray-900">{licenseData.licenseId}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Issue Date</span>
                <span className="font-semibold text-gray-900">{licenseData.issueDate}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Expiry Date</span>
                <span className="font-semibold text-gray-900">{licenseData.expiryDate}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Status</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              <p className="text-sm text-gray-600">Common tasks and actions</p>
            </div>
            <div className="space-y-3">
              <Link href="/vendor/support/new">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-900">Raise Support Ticket</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
              <p className="text-sm text-gray-600">Your license application history</p>
            </div>
            <Link href="/vendor/applications">
              <Button variant="outline" icon={ArrowRight} iconPosition="right">
                View All
              </Button>
            </Link>
          </div>
          <EmptyState
            icon={Clock}
            title="No applications yet"
            description="You haven't submitted any applications yet. Start by creating a new application."
          />
        </div>
      </div>

      {/* Welcome Toast */}
      {showToast && (
        <Toast
          message="Welcome back! You have successfully logged in."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </Layout>
  );
}
