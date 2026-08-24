export default function Privacy() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: March 15, 2024
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We collect information that you provide directly to us, including when you create an account, use our services, or contact us for support.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We use the information we collect to provide, maintain, and improve our services, to develop new features, and to protect Velure and our users.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            3. Data Security
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            4. Your Rights
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You have the right to access, correct, or delete your personal information. You can also object to processing of your personal information and request data portability.
          </p>
        </div>
      </div>
    </div>
  );
}