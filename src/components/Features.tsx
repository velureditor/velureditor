import { Crop, Palette, Layers, Zap, Code, Image } from 'lucide-react';

const features = [
  {
    name: 'Advanced Cropping',
    description: 'Precise image cropping with aspect ratio control and smart guides.',
    icon: Crop,
  },
  {
    name: 'Filters & Effects',
    description: 'Professional-grade filters and effects to enhance your images.',
    icon: Palette,
  },
  {
    name: 'Layer Management',
    description: 'Work with multiple layers for complex image compositions.',
    icon: Layers,
  },
  {
    name: 'Fast Processing',
    description: 'Optimized for performance with WebAssembly acceleration.',
    icon: Zap,
  },
  {
    name: 'Developer Friendly',
    description: 'Easy to integrate with comprehensive API documentation.',
    icon: Code,
  },
  {
    name: 'Format Support',
    description: 'Support for all major image formats including WebP and AVIF.',
    icon: Image,
  },
];

export default function Features() {
  return (
    <div className="py-24 pt-0 bg-white dark:bg-gray-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-pink-600 dark:text-pink-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need for image editing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            A complete toolkit for modern image editing in the browser.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="flow-root bg-white dark:bg-gray-800 px-6 pb-8 rounded-2xl border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:border-pink-600 dark:hover:border-pink-400 hover:shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-pink-600 to-orange-400 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}