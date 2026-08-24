const testimonials = [
  {
    content: "This image editor has transformed our workflow. The API is intuitive and the performance is outstanding.",
    author: "Sarah Chen",
    role: "Lead Developer at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "The best image editing solution we've used. It's fast, reliable, and our users love it.",
    author: "Michael Roberts",
    role: "CTO at DesignHub",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "Integration was seamless, and the support team is incredibly responsive. Highly recommended!",
    author: "Emily Watson",
    role: "Product Manager at CreativeFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Trusted by developers worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Here's what our customers have to say about our image editor
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="px-6 py-8">
                <p className="text-gray-600 dark:text-gray-200 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}