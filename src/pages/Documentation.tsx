import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const docs = [
  {
    title: 'Getting Started',
    sections: [
      { id: 'installation', title: 'Installation' },
      { id: 'quick-start', title: 'Quick Start' },
      { id: 'configuration', title: 'Configuration' },
    ],
  },
  {
    title: 'Core Concepts',
    sections: [
      { id: 'architecture', title: 'Architecture' },
      { id: 'plugins', title: 'Plugins' },
      { id: 'events', title: 'Events' },
    ],
  },
  {
    title: 'API Reference',
    sections: [
      { id: 'methods', title: 'Methods' },
      { id: 'options', title: 'Options' },
      { id: 'callbacks', title: 'Callbacks' },
    ],
  },
];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('installation');

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="col-span-12 md:col-span-3">
              <nav className="space-y-8">
                {docs.map((category) => (
                  <div key={category.title}>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.sections.map((section) => (
                        <li key={section.id}>
                          <button
                            onClick={() => setActiveSection(section.id)}
                            className={`flex items-center w-full text-left px-3 py-2 rounded-lg text-sm ${
                              activeSection === section.id
                                ? 'bg-pink-50 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                          >
                            <ChevronRight
                              className={`h-4 w-4 mr-2 ${
                                activeSection === section.id ? 'text-pink-600 dark:text-pink-400' : 'text-gray-400'
                              }`}
                            />
                            {section.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>

            {/* Main content */}
            <div className="col-span-12 md:col-span-9">
              <div className="prose dark:prose-invert max-w-none">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Documentation</h1>
                
                {activeSection === 'installation' && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Installation</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Get started with Velure by installing it via npm:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg">
                      <code>npm install velure</code>
                    </pre>
                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                      Or include it directly in your HTML:
                    </p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg">
                      <code>{`<script src="https://unpkg.com/velure/dist/velure.min.js"></script>`}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}