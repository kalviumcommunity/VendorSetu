'use client';

import { useMemo, useState } from 'react';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  RefreshCw,
  Upload,
  Phone,
  MapPin,
  Home,
  Send,
  User,
} from 'lucide-react';

type RenewFormState = {
  fullName: string;
  phoneNumber: string;
  stationAllotted: string;
  address: string;
  photoFile: File | null;
};

export default function RenewLicensePage() {
  // In a real app, prefill from API. For now: mock values.
  const [form, setForm] = useState<RenewFormState>({
    fullName: 'Aditi Singh',
    phoneNumber: '8890820168',
    stationAllotted: 'Howrah Junction',
    address: 'Current registered address',
    photoFile: null,
  });

  const photoPreviewUrl = useMemo(() => {
    if (!form.photoFile) return null;
    return URL.createObjectURL(form.photoFile);
  }, [form.photoFile]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only placeholder: connect backend later.
    alert('Renewal submitted (mock). Connect backend to persist.');
  };

  return (
    <Layout userEmail="aditi.s.s63@kalvium.community" userRole="Vendor">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Renew License</h1>
          <p className="text-gray-600">
            Review your details and update only what has changed for renewal.
          </p>
        </div>

        {/* Back link */}
        <div>
          <Link
            href="/vendor/license"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to My License
          </Link>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-green-800 to-green-700 text-white px-6 py-5 flex items-center gap-4">
            <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">License Renewal</h2>
              <p className="text-green-100 text-sm">
                Edit only the fields that have changed to keep renewal fast and intentional.
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-6 space-y-6">
            {/* Photo Upload (optional) */}
            <div className="flex flex-col items-center gap-3 py-4">
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50">
                {photoPreviewUrl ? (
                  <Image
                    src={photoPreviewUrl}
                    alt="Uploaded photo preview"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                ) : (
                  <div className="flex flex-col items-center text-gray-500">
                    <Upload className="w-6 h-6 mb-1" />
                    <span className="text-xs">Upload New Photo (optional)</span>
                  </div>
                )}
              </div>
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-800">
                <Upload className="w-4 h-4" />
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      photoFile: e.target.files?.[0] ?? null,
                    }))
                  }
                />
              </label>
            </div>

            <div className="border-t border-gray-200" />

            {/* Minimal editable sections */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full name (read-only) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                  <User className="w-4 h-4 text-gray-500" />
                  Full Name
                </label>
                <input
                  value={form.fullName}
                  readOnly
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 text-gray-600 cursor-not-allowed"
                />
              </div>

              {/* Phone (editable) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  Phone Number
                </label>
                <input
                  value={form.phoneNumber}
                  onChange={(e) => setForm((p) => ({ ...p, phoneNumber: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Station (editable if relocation allowed) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  Station Allotted
                </label>
                <input
                  value={form.stationAllotted}
                  onChange={(e) => setForm((p) => ({ ...p, stationAllotted: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Address (editable) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                  <Home className="w-4 h-4 text-gray-500" />
                  Address
                </label>
                <textarea
                  value={form.address}
                  onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 flex items-center justify-end gap-3">
              <Link href="/vendor/license">
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="primary" icon={Send} iconPosition="left" className="min-w-[180px]">
                Submit Renewal
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

