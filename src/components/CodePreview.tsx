import { useState } from 'react';

const codeExample = `// Initialize the editor
const editor = new ImageCraft({
  element: '#editor',
  plugins: ['crop', 'filter', 'adjust'],
});

// Handle image save
editor.on('save', (editedImage) => {
  console.log('Edited image:', editedImage);
});`;

export default function CodePreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Simple to integrate
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Just a few lines of code to add professional image editing to your app
          </p>
        </div>
        
        <div className="mt-12">
          <div
            className="relative rounded-xl bg-gray-800 p-4 transform transition-transform duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            }}
          >
            <pre className="overflow-x-auto">
              <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 text-white">
                {codeExample}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
          >
            View documentation
          </a>
        </div>
      </div>
    </div>
  );
}