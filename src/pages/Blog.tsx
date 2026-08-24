const posts = [
  {
    slug: 'introducing-velure-2',
    title: "Introducing Velure 2.0",
    excerpt: "A complete rewrite with improved performance and new features.",
    date: "March 15, 2024",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: 'image-optimization-guide',
    title: "Best Practices for Image Optimization",
    excerpt: "Learn how to optimize your images for web performance.",
    date: "March 10, 2024",
    author: "Michael Roberts",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: 'future-of-image-editing',
    title: "The Future of Web-based Image Editing",
    excerpt: "Exploring upcoming trends in browser-based image manipulation.",
    date: "March 5, 2024",
    author: "Emily Watson",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Latest updates, guides, and insights about image editing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date} · {post.author}
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <a href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-500">
                  Read more
                  <span className="ml-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}