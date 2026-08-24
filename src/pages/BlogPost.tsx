import { useParams } from 'react-router-dom';

const posts = {
  'introducing-velure-2': {
    title: "Introducing Velure 2.0",
    content: `
      <p>We're excited to announce the release of Velure 2.0, a complete rewrite of our image editing platform with significant improvements in performance and functionality.</p>
      
      <h2>What's New</h2>
      <ul>
        <li>Complete TypeScript rewrite for better type safety and developer experience</li>
        <li>New plugin system for easy extensibility</li>
        <li>Improved performance with WebAssembly integration</li>
        <li>Dark mode support</li>
        <li>Enhanced accessibility features</li>
      </ul>

      <h2>Performance Improvements</h2>
      <p>With the new WebAssembly integration, image processing operations are now up to 3x faster than before. Large images can be handled smoothly without impacting browser performance.</p>

      <h2>Getting Started</h2>
      <p>Upgrading to Velure 2.0 is straightforward. Install the latest version using npm:</p>
      <pre><code>npm install velure@latest</code></pre>
    `,
    date: "March 15, 2024",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  'image-optimization-guide': {
    title: "Best Practices for Image Optimization",
    content: `
      <p>Learn how to optimize your images for the web while maintaining quality and performance.</p>

      <h2>Key Optimization Techniques</h2>
      <ul>
        <li>Choose the right format (JPEG, PNG, WebP, AVIF)</li>
        <li>Implement responsive images</li>
        <li>Use proper compression settings</li>
        <li>Leverage browser caching</li>
      </ul>

      <h2>Format Selection Guide</h2>
      <p>Different image formats serve different purposes. Here's when to use each:</p>
      <ul>
        <li>JPEG: Photographs and complex images with many colors</li>
        <li>PNG: Images with transparency or text</li>
        <li>WebP: Modern alternative with better compression</li>
        <li>AVIF: Next-gen format with excellent compression</li>
      </ul>
    `,
    date: "March 10, 2024",
    author: "Michael Roberts",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  'future-of-image-editing': {
    title: "The Future of Web-based Image Editing",
    content: `
      <p>Explore upcoming trends and technologies in browser-based image manipulation.</p>

      <h2>Emerging Technologies</h2>
      <ul>
        <li>AI-powered editing tools</li>
        <li>Real-time collaboration features</li>
        <li>Advanced compression algorithms</li>
        <li>WebGPU integration</li>
      </ul>

      <h2>AI in Image Editing</h2>
      <p>Artificial Intelligence is revolutionizing how we edit images. From automatic object removal to smart filters, AI is making professional-grade editing accessible to everyone.</p>

      <h2>What's Next</h2>
      <p>The future of web-based image editing looks promising with new technologies on the horizon:</p>
      <ul>
        <li>Browser-native image processing</li>
        <li>Enhanced mobile editing capabilities</li>
        <li>Integration with AR/VR platforms</li>
      </ul>
    `,
    date: "March 5, 2024",
    author: "Emily Watson",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {post.date} · {post.author}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {post.title}
        </h1>
        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}