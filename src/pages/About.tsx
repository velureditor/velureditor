

const stats = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Countries', value: '150+' },
  { label: 'Open Source Contributors', value: '100+' },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Roberts',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Velure
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're on a mission to make professional image editing accessible to every developer
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
              <dt className="text-lg font-medium text-gray-900 dark:text-white">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-extrabold text-pink-600 dark:text-pink-400">{stat.value}</dd>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  className="mx-auto h-32 w-32 rounded-full"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-base text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Story
          </h2>
          <div className="text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              Founded in 2023, Velure emerged from a simple idea: make professional image editing accessible to every developer. What started as a small open-source project has grown into a powerful platform used by developers worldwide.
            </p>
            <p>
              Our team combines expertise in image processing, web technologies, and user experience design to create tools that developers love to use. We're committed to open source and believe in building in public.
            </p>
            <p>
              Today, Velure is used by thousands of developers across the globe, from individual creators to large enterprises. We're proud to be part of the developer community and continue to evolve our platform based on user feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}