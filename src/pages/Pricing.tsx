import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for side projects and hobby sites',
    features: [
      'Basic image editing tools',
      'Up to 1,000 edits/month',
      'Community support',
      'Basic documentation',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 29,
    description: 'For professional developers and small teams',
    features: [
      'Advanced editing tools',
      'Up to 10,000 edits/month',
      'Priority email support',
      'API access',
      'Remove watermark',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For large teams and high-volume applications',
    features: [
      'Custom editing tools',
      'Unlimited edits',
      '24/7 phone support',
      'Custom integration',
      'SLA guarantee',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg overflow-hidden ${
                tier.highlighted
                   ? 'transform scale-105 bg-white dark:bg-gray-800 ring-2 ring-pink-600 dark:ring-pink-400'
                  : 'bg-white dark:bg-gray-800'
              } shadow-lg`}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{tier.name}</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">/month</span>
                </p>
                <button
                  className={`mt-8 w-full rounded-lg px-4 py-2 text-sm font-semibold ${
                    tier.highlighted
                       ? 'bg-pink-600 text-white hover:bg-pink-700'
                       : 'bg-pink-50 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-xs font-semibold text-gray-900 dark:text-white tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check
                        className={`flex-shrink-0 h-5 w-5 ${
                          tier.highlighted ? 'text-pink-600 dark:text-pink-400' : 'text-green-500 dark:text-green-400'
                        }`}
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}