

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#14110B] mb-4">
            
          </h1>
          <p className="text-lg text-[#14110B]/70 max-w-2xl mx-auto">
            “With Savenest, I finally saved enough to launch my business marking the beginning of a global voice. I never thought saving could be this easy.”
— Blessing A., Lagos.
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