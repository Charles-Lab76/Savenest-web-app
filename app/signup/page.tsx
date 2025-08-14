export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg border border-[#1B1F3B]/10 p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#22C475] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-[#F9FAFB] font-bold text-2xl">SN</span>
            </div>
            <h1 className="text-2xl font-bold text-[#14110B] mb-2">Join SAVE NEST</h1>
            <p className="text-[#14110B]/70">Create your account and start saving today</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#14110B] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-[#1B1F3B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C475] focus:border-transparent bg-[#F9FAFB] placeholder-[#E3E3E3]"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#14110B] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border border-[#1B1F3B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C475] focus:border-transparent bg-[#F9FAFB] placeholder-[#E3E3E3]"
                  placeholder="Last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#14110B] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-[#1B1F3B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C475] focus:border-transparent bg-[#F9FAFB] placeholder-[#E3E3E3]"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#14110B] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-[#1B1F3B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C475] focus:border-transparent bg-[#F9FAFB] placeholder-[#E3E3E3]"
                placeholder="Create a strong password"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#14110B] mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 border border-[#1B1F3B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C475] focus:border-transparent bg-[#F9FAFB] placeholder-[#E3E3E3]"
                placeholder="Confirm your password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-2 bg-[#22C475] text-[#F9FAFB] rounded-lg hover:bg-[#4BC589] active:bg-[#179055] transition-all duration-200 font-medium"
            >
              Create Account
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-[#14110B]/70">
              Already have an account?{' '}
              <a href="/login" className="text-[#22C475] hover:text-[#179055] font-medium">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}