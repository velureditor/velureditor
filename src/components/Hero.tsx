import { MousePointerClick } from 'lucide-react';
import ImageEditor from './ImageEditor';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pt-20 pb-24 sm:pt-24 sm:pb-24 md:pt-32 lg:pt-40 lg:pb-24 xl:pt-48 xl:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
                Transform your images with
                <span className="block text-pink-600 dark:text-pink-400 mt-2">
                  professional precision
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                A powerful JavaScript image editor that integrates seamlessly into your web applications. 
                Edit, crop, filter, and transform images with just a few lines of code.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="group relative inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-orange-400 rounded-lg overflow-hidden transition-all duration-300 hover:from-pink-700 hover:to-orange-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center">
                    <MousePointerClick className="mr-2 h-5 w-5" />
                    Get Started
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center justify-center text-base font-medium text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Try it here!
                  <img className="-mb-10 ml-2 dark:invert-[1]" style={{ opacity: .75, width: '40px', height: '45px' }} src='data:image/webp;base64,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' />
                </a>
              </div>
            </div>
          </div>

          <ImageEditor />
        </div>
      </div>
    </div>
  );
}