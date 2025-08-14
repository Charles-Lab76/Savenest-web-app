export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#14110B] mb-8 text-center">
            About SAVE NEST
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg border border-[#1B1F3B]/10 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-[#14110B] mb-4">Our Mission</h2>
              <p className="text-[#14110B]/80 leading-relaxed">
                At SAVE NEST, we believe everyone deserves access to powerful financial tools. 
                Our mission is to democratize wealth building by providing intelligent, 
                user-friendly solutions that help you save, invest, and grow your money.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-[#1B1F3B]/10 p-8">
              <h2 className="text-2xl font-semibold text-[#14110B] mb-4">Why Choose Us?</h2>
              <ul className="space-y-4 text-[#14110B]/80">
                <li className="flex items-start">
                  <span className="text-[#22C475] mr-2">✓</span>
                  Intelligent automation that works for your lifestyle
                </li>
                <li className="flex items-start">
                  <span className="text-[#22C475] mr-2">✓</span>
                  Comprehensive analytics and insights
                </li>
                <li className="flex items-start">
                  <span className="text-[#22C475] mr-2">✓</span>
                  Bank-level security and encryption
                </li>
                <li className="flex items-start">
                  <span className="text-[#22C475] mr-2">✓</span>
                  24/7 customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}