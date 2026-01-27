import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, Shield, UserCog } from 'lucide-react';
import Button from './components/Button';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-gray-900">VendorSetu</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Sign In
            </Link>
            <Link href="/register">
              <Button variant="primary" className="bg-green-600 hover:bg-green-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Railway Background */}
      <section className="relative text-white py-20 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/railway-bg.png"
            alt="Railway Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/70 to-green-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Railway Vendor License Management System
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Streamlined digital platform for vendor onboarding, license issuance, and compliance tracking.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register">
              <Button
                variant="primary"
                icon={ArrowRight}
                iconPosition="right"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Apply for License
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why VendorSetu?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Digital Licensing</h3>
              <p className="text-gray-600">Apply, renew, and manage licenses entirely online.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Secure & Compliant</h3>
              <p className="text-gray-600">Role-based access with complete audit trails.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <UserCog className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Efficient Management</h3>
              <p className="text-gray-600">Real-time tracking and automated notifications.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
