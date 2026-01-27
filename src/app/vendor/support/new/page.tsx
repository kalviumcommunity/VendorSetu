'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import Link from 'next/link';
import { ArrowLeft, Send, MessageSquare, FileText } from 'lucide-react';

type TicketForm = {
  subject: string;
  description: string;
};

export default function NewSupportTicketPage() {
  const [form, setForm] = useState<TicketForm>({ subject: '', description: '' });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Frontend-only placeholder: connect backend later.
    alert('Ticket submitted (mock). Connect backend to persist.');
  };

  return (
    <Layout userEmail="aditi.s.s63@kalvium.community" userRole="Vendor">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">New Support Ticket</h1>
          <p className="text-gray-600">Describe your issue and we&apos;ll help you.</p>
        </div>

        {/* Back link */}
        <div>
          <Link
            href="/vendor/support"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Support
          </Link>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-green-800 to-green-700 text-white px-6 py-5 flex items-center gap-4">
            <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Create Support Ticket</h2>
              <p className="text-green-100 text-sm">Our team will get back to you shortly</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-6 space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                <FileText className="w-4 h-4 text-gray-500" />
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                value={form.subject}
                onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                placeholder="Brief summary of your issue"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                placeholder="Provide detailed information about your issue. Include any relevant details that might help us assist you better."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                Please provide as much detail as possible to help us resolve your issue quickly.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 flex items-center justify-end gap-3">
              <Link href="/vendor/support">
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="primary" icon={Send} iconPosition="left" className="min-w-[180px]">
                Submit Ticket
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

