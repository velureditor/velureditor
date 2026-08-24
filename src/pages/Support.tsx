import { LifeBuoy, MessageSquare, FileQuestion, Zap } from 'lucide-react';

export default function Support() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Support Center
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get help with Velure. Our support team is here to assist you.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Submit a Ticket</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm transition-colors focus:outline-none"
                    placeholder="Brief description of your issue"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-1 focus:ring-pink-500 focus:border-pink-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm transition-colors focus:outline-none"
                    placeholder="Detailed description of your issue"
                  />
                </div>
                <button
                  type="submit"
                   className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
                >
                  Submit Ticket
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <LifeBuoy className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">Help Center</h3>
                </div>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Browse our comprehensive documentation and guides.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <MessageSquare className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">Community Forum</h3>
                </div>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Connect with other developers and share solutions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <FileQuestion className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">FAQs</h3>
                </div>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Find quick answers to common questions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">Quick Start</h3>
                </div>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  Get up and running quickly with our starter guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}