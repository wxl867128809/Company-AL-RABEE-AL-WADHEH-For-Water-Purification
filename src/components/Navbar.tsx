'use client';
import Link from 'next/link';
import { useState } from 'react';
// switched back to bitmap logo per user request

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" srcSet="/logo@2x.png 2x" alt="Al-Rabie" className="h-12 w-auto object-contain" />
              <span className="hidden sm:inline-block text-lg font-semibold">Al-Rabie</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                首页
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                关于我们
              </Link>
              <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                产品
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                联系我们
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              <span className="sr-only">打开菜单</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              首页
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              关于我们
            </Link>
            <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              产品
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              联系我们
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}