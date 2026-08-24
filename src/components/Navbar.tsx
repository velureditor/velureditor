import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Logo />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/features" className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium">
              Features
            </a>
            <a href="/docs" className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium">
              Documentation
            </a>
            <a href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium">
              Blog
            </a>
            <a href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium">
              Pricing
            </a>
            <ThemeToggle />
            <a href="#" className="bg-gradient-to-r from-pink-600 to-orange-400 text-white px-4 py-2 rounded-lg hover:from-pink-700 hover:to-orange-500 transition-all font-medium">
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
            <a href="/features" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium">
              Features
            </a>
            <a href="/docs" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium">
              Documentation
            </a>
            <a href="/blog" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium">
              Blog
            </a>
            <a href="/pricing" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium">
              Pricing
            </a>
            <a href="#" className="block px-3 py-2 text-pink-600 dark:text-pink-400 font-medium">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}