'use client';

import { useMemo, useState } from 'react';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  FileText,
  Upload,
  User,
  Phone,
  Calendar as CalendarIcon,
  MapPin,
  Home,
  Send,
} from 'lucide-react';

type FormState = {
  fullName: string;
  phoneNumber: string;
  dateOfBirth: string;
  stationAllotted: string;
  address: string;
  photoFile: File | null;
};

export default function NewLicenseApplicationPage() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    dateOfBirth: '',
    stationAllotted: '',
    address: '',
    photoFile: null,
  });

  const photoPreviewUrl = useMemo(() => {
    if (!form.photoFile) return null;
    return URL.createObjectURL(form.photoFile);
  }, [form.photoFile]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only placeholder: connect backend later.
    alert('Application submitted (mock). Connect backend to persist.');
  };

  return (
    <Layout userEmail="aditi.s.s63@kalvium.community" userRole="Vendor">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">New License Application</h1>
          <p className="text-gray-600">Apply for a new vendor license.</p>
        </div>

        {/* Back link */}
        <div>
          <Link
            href="/vendor/applications"
            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Applications
          </Link>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-green-800 to-green-700 text-white px-6 py-5 flex items-center gap-4">
            <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">License Application Form</h2>
              <p className="text-green-100 text-sm">Fill in your details to apply for a vendor license</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-6 space-y-6">
            {/* Photo Upload */}
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
                    <span className="text-xs">Upload Photo</span>
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

            {/* Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                  <User className="w-4 h-4 text-gray-500" />
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.fullName}
                  onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.phoneNumber}
                  onChange={(e) => setForm((p) => ({ ...p, phoneNumber: e.target.value }))}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                  <CalendarIcon className="w-4 h-4 text-gray-500" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={form.dateOfBirth}
                  onChange={(e) => setForm((p) => ({ ...p, dateOfBirth: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  Station Allotted <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.stationAllotted}
                  onChange={(e) => setForm((p) => ({ ...p, stationAllotted: e.target.value }))}
                  placeholder="Enter allotted station"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-2">
                <Home className="w-4 h-4 text-gray-500" />
                Address
              </label>
              <textarea
                value={form.address}
                onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))}
                placeholder="Enter your complete address"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>

            <div className="border-t border-gray-200 pt-6 flex items-center justify-end gap-3">
              <Link href="/vendor/applications">
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="primary" icon={Send} iconPosition="left" className="min-w-[180px]">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

