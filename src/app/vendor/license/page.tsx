'use client';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Calendar, Clock, FileText, RefreshCw, Download, Edit, MapPin, Plus } from 'lucide-react';

export default function MyLicensePage() {
  const licenseData = {
    licenseId: 'RVL-26-48392',
    vendorName: 'Aditi Singh',
    status: 'Active',
    issueDate: '15 June 2025',
    expiryDate: '15 June 2027',
    validityStatus: 'Valid',
    daysRemaining: 504,
  };

  const vendorDetails = {
    fullName: 'Aditi Singh',
    phoneNumber: '8890820168',
    photo: '/api/placeholder/150/150',
    stationAllotted: 'Howrah Junction',
    dateOfBirth: '-',
    address: '-',
  };

  return (
    <Layout userEmail="aditi.s.s63@kalvium.community" userRole="Vendor">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My License</h1>
          <p className="text-gray-600">View and manage your vendor license.</p>
        </div>

        {/* License Summary Card */}
        <div className="bg-[#047857] text-white rounded-lg shadow-lg p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <p className="text-green-200 text-sm mb-1">License ID</p>
                <h2 className="text-3xl font-bold">{licenseData.licenseId}</h2>
                <p className="text-green-200 mt-2">{licenseData.vendorName}</p>
              </div>
            </div>
            <span className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full">
              {licenseData.status}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-green-200" />
              <div>
                <p className="text-green-200 text-xs">Issue Date</p>
                <p className="font-semibold">{licenseData.issueDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-green-200" />
              <div>
                <p className="text-green-200 text-xs">Expiry Date</p>
                <p className="font-semibold">{licenseData.expiryDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-green-200" />
              <div>
                <p className="text-green-200 text-xs">Validity Status</p>
                <span className="px-2 py-1 bg-green-400 text-white text-xs font-medium rounded-full">
                  {licenseData.validityStatus}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-green-200" />
              <div>
                <p className="text-green-200 text-xs">Days Remaining</p>
                <p className="font-semibold">{licenseData.daysRemaining} days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link href="/vendor/license/new">
            <Button variant="primary" icon={Plus} iconPosition="left">
              New License
            </Button>
          </Link>
          <Link href="/vendor/license/renew">
            <Button variant="secondary" icon={RefreshCw} iconPosition="left">
              Renew License
            </Button>
          </Link>
          <Button variant="secondary" icon={Edit} iconPosition="left">
            Request Update
          </Button>
          <Button variant="secondary" icon={Download} iconPosition="left">
            Download License
          </Button>
        </div>

        {/* Vendor Details Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Vendor Details</h2>
            <p className="text-sm text-gray-600">Your registered information</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <p className="text-gray-900 font-semibold">{vendorDetails.fullName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <p className="text-gray-900 font-semibold">{vendorDetails.phoneNumber}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo
              </label>
              <div className="mt-2">
                <div className="w-24 h-24 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center overflow-hidden">
                  {vendorDetails.photo ? (
                    <Image
                      src={vendorDetails.photo}
                      alt="Vendor Photo"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                      <span className="text-xs">No Photo</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Station Allotted
              </label>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <p className="text-gray-900 font-semibold">{vendorDetails.stationAllotted}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <p className="text-gray-900">{vendorDetails.dateOfBirth}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <p className="text-gray-900">{vendorDetails.address}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
