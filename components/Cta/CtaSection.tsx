'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaSection () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#22C475]/5">
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
            
            {/* Left Side - Mascot Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-[#22C475]/20 to-[#4BC589]/20 rounded-full filter blur-3xl transform scale-75"
              />
              
              <motion.div
                animate={{ y: [-20, 20, -20], rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute top-10 left-10 w-6 h-6 bg-[#22C475] rounded-full opacity-60"
              />
              
              <motion.div
                animate={{ y: [20, -20, 20], rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-10 w-4 h-4 bg-[#4BC589] rounded-full opacity-60"
              />

              <motion.div
                animate={{ y: [-10, 10, -10], rotateY: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="relative z-10 max-w-md w-full"
              >
                <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-[#22C475]/10 to-[#4BC589]/20 
                rounded-3xl border-2 border-[#22C475]/20 shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="text-8xl sm:text-9xl mb-4"
                    />
                    <img src="\images\welcome.png" alt="Mascot" className="text-[#14110B]/60 text-sm" />
                  </div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-6 right-6 w-12 h-12 border-2 border-[#22C475]/30 rounded-full"
                  />
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-6 left-6 w-8 h-8 border-2 border-[#4BC589]/40 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - CTA Message */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left lg:pl-8 order-1 lg:order-2"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14110B] leading-tight mb-6"
              >
                Start Your Saving 
                   {' '}
                <span className="text-[#22C475] relative">
                  Journey Today
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute -bottom-2 left-0 h-1 bg-[#22C475] rounded-full"
                  />
                </span>
                
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-[#14110B]/80 leading-relaxed mb-8 max-w-2xl"
              >
                Join thousands already building better financial futures with Savenest.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-[#14110B]/70 leading-relaxed mb-10 max-w-xl font-medium"
              >
                Sign up today and join a Savings Group
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="lg:hidden xl:block"
              >
                <Link
                  href="/login"
                  className="inline-flex items-center px-8 py-4 bg-[#22C475] text-[#F9FAFB] font-semibold text-lg rounded-xl hover:bg-[#4BC589] active:bg-[#179055] transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Get Started
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:hidden xl:hidden flex justify-center mt-8"
          >
            <Link
              href="/login"
              className="inline-flex items-center px-8 py-4 bg-[#22C475] text-[#F9FAFB] font-semibold text-lg rounded-xl hover:bg-[#4BC589] active:bg-[#179055] transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Get Started
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #22C475 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #4BC589 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </section>
    </div>
  );
}