import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Please fill out this form or contact us directly.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm transition-colors focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm transition-colors focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm transition-colors focus:outline-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
                <Mail className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-2" />
                Email
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                support@velure.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
                <Phone className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-2" />
                Phone
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                +1 (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
                <MapPin className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-2" />
                Location
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                123 Developer Street<br />
                San Francisco, CA 94107
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}