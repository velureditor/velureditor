import { Crop, Wand2, Layers, Zap, Code, Image, PenTool, Share2, Shield, Cloud, Smartphone, Palette } from 'lucide-react';

const features = [
  {
    name: 'Advanced Image Manipulation',
    description: 'Professional-grade tools for cropping, resizing, and transforming images with precision.',
    icon: Crop,
  },
  {
    name: 'Smart Filters',
    description: 'AI-powered filters and effects that automatically enhance your images.',
    icon: Wand2,
  },
  {
    name: 'Layer Management',
    description: 'Work with multiple layers for complex compositions and effects.',
    icon: Layers,
  },
  {
    name: 'High Performance',
    description: 'Optimized for speed with WebAssembly and efficient processing algorithms.',
    icon: Zap,
  },
  {
    name: 'Developer API',
    description: 'Comprehensive API with extensive documentation and examples.',
    icon: Code,
  },
  {
    name: 'Format Support',
    description: 'Support for all major image formats including WebP and AVIF.',
    icon: Image,
  },
  {
    name: 'Drawing Tools',
    description: 'Precise drawing tools with pressure sensitivity support.',
    icon: PenTool,
  },
  {
    name: 'Export & Share',
    description: 'Easy export options and direct sharing capabilities.',
    icon: Share2,
  },
  {
    name: 'Security',
    description: 'Enterprise-grade security with encrypted image processing.',
    icon: Shield,
  },
  {
    name: 'Cloud Storage',
    description: 'Integrated cloud storage for your edited images.',
    icon: Cloud,
  },
  {
    name: 'Mobile Support',
    description: 'Fully responsive design that works on all devices.',
    icon: Smartphone,
  },
  {
    name: 'Color Management',
    description: 'Professional color grading and management tools.',
    icon: Palette,
  },
];

export default function Features() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Features
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover all the powerful features that make Velure the perfect choice for your image editing needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="group">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 dark:bg-pink-500 text-white group-hover:bg-pink-700 dark:group-hover:bg-pink-600 transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}