'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react'; // Icon untuk mobile
import { useState } from 'react';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Pengenalan Aksara Jawa', href: '/pengenalan' },
  { name: 'Uji Kemampuan', href: '/uji-kemampuan' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State untuk mobile menu

  return (
    <nav className="navbar-modern sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white font-display tracking-wide">SIRAJA</h1>
                <p className="text-xs text-blue-100 tracking-wider">SINAU AKSARA JAWA</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true} // Preload untuk navigasi lebih cepat
                className={cn(
                  'inline-flex items-center px-3 py-2 text-sm font-medium rounded-full transition-colors',
                  pathname === item.href
                    ? 'bg-blue-900/20 text-white'
                    : 'text-white hover:text-blue-200 hover:bg-blue-900/10'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-full hover:bg-blue-900/20 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="sm:hidden pb-4 border-t border-blue-900/20">
            <div className="space-y-2 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  className={cn(
                    'block px-3 py-2 text-sm font-medium rounded-full transition-colors w-full text-left',
                    pathname === item.href
                      ? 'bg-blue-900/20 text-white'
                      : 'text-white hover:text-blue-200 hover:bg-blue-900/10'
                  )}
                  onClick={() => setIsOpen(false)} // Tutup menu setelah klik
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}