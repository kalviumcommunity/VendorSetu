'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: 'aditi.s.s63@kalvium.community',
    password: 'password',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication
    router.push('/vendor/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Pane - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">VendorSetu</span>
            </div>
            <p className="text-gray-600">Railway License Portal</p>
          </div>

          {/* Welcome Message */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600">Enter your credentials to access your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-green-600 hover:text-green-700"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              variant="primary"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full"
            >
              Sign in
            </Button>
          </form>

          {/* Registration Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-green-600 hover:text-green-700 font-medium">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Pane - Promotional Section */}
      <div className="hidden lg:flex flex-1 bg-[#047857] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 gap-4 h-full p-8">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-white rounded"></div>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white">
          <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-8">
            <span className="text-green-600 font-bold text-4xl">V</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-center">
            Streamlined Vendor Management
          </h2>
          <p className="text-xl text-green-100 text-center max-w-md">
            Apply for licenses, track applications, and manage your vendor profile—all in one secure platform.
          </p>
        </div>
      </div>
    </div>
  );
}
