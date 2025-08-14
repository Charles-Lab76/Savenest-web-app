export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#14110B] mb-4">
            Powerful Features
          </h1>
          <p className="text-lg text-[#14110B]/70 max-w-2xl mx-auto">
            Discover all the tools and features that make SAVE NEST the perfect choice for your financial journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Automated Savings",
              description: "Set up automatic transfers based on your spending patterns and income.",
              icon: "🤖"
            },
            {
              title: "Goal Tracking",
              description: "Create and monitor progress towards your financial goals.",
              icon: "🎯"
            },
            {
              title: "Investment Tools",
              description: "Access to diversified investment options and portfolio management.",
              icon: "📈"
            },
            {
              title: "Budget Planning",
              description: "Smart budgeting tools that adapt to your lifestyle.",
              icon: "📋"
            },
            {
              title: "Expense Analytics",
              description: "Detailed breakdown of your spending patterns and trends.",
              icon: "📊"
            },
            {
              title: "Mobile Banking",
              description: "Full-featured mobile app for banking on the go.",
              icon: "📱"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#1B1F3B]/10 p-6">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#14110B] mb-2">{feature.title}</h3>
              <p className="text-[#14110B]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}