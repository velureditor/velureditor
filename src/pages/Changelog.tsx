import { CalendarDays } from 'lucide-react';

const releases = [
  {
    version: '2.0.0',
    date: '2024-03-15',
    changes: [
      'Complete rewrite in TypeScript',
      'New plugin system for extensibility',
      'Improved performance with WebAssembly',
      'Dark mode support',
      'Accessibility improvements',
    ],
  },
  {
    version: '1.5.0',
    date: '2024-02-01',
    changes: [
      'Added support for AVIF format',
      'Enhanced cropping tools',
      'New filter presets',
      'Bug fixes and performance improvements',
    ],
  },
  {
    version: '1.0.0',
    date: '2024-01-01',
    changes: [
      'Initial stable release',
      'Core image editing features',
      'Basic filter system',
      'Documentation and examples',
    ],
  },
];

export default function Changelog() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Changelog
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Track our progress and stay up to date with new features and improvements
          </p>
        </div>

        <div className="space-y-8">
          {releases.map((release) => (
            <div
              key={release.version}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Version {release.version}
                </h2>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  <time>{release.date}</time>
                </div>
              </div>
              <ul className="space-y-3">
                {release.changes.map((change, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-3 text-pink-600 dark:text-pink-400">•</span>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}