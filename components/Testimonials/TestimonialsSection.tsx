// components/Testimonials/TestimonialsSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
//import { image, img } from 'framer-motion/client';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: <p>&quot;With Savenest, I finally saved enough to launch my business, marking the beginning of a global voice. I never thought saving could be this easy.&quot;</p>,
      name: "Blessing A.",
      location: "Lagos",
      rating: 5,
      avatar: "/api/placeholder/80/80" // Placeholder for customer image

    },
    {
      id: 2,
      text: <p>&quot;With Savenest, I finally saved enough to launch my business, marking the beginning of a global voice. I never thought saving could be this easy.&quot;</p>,
      name: "Michael O.",
      location: "Ibadan",
      rating: 5,
      avatar: "/api/placeholder/80/80" // Placeholder for customer image
    },
    {
      id: 3,
      text: <p>&quot;With Savenest, I finally saved enough to launch my business, marking the beginning of a global voice. I never thought saving could be this easy.&quot;</p>,
      name: "Blessing A.",
      location: "Lagos",
      rating: 5,
      avatar: "/api/placeholder/80/80" // Placeholder for customer image
    }
  ];

  // Auto-swipe functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#F9FAFB] via-[#F9FAFB] to-[#22C475]/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-40 h-40 border border-[#22C475]/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-32 h-32 border border-[#4BC589]/5 rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14110B] mb-4"
          >
            What Our{' '}
            <span className="text-[#22C475] relative">
              Customers Say
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 bg-[#22C475] rounded-full"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#14110B]/70 max-w-3xl mx-auto"
          >
            Join thousands of satisfied users who have transformed their financial lives with SAVENEST.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-[#1B1F3B]/10 rounded-full flex items-center justify-center hover:bg-[#22C475] hover:text-[#F9FAFB] hover:border-[#22C475] transition-all duration-300 shadow-lg hover:shadow-xl -translate-x-6 sm:-translate-x-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-[#1B1F3B]/10 rounded-full flex items-center justify-center hover:bg-[#22C475] hover:text-[#F9FAFB] hover:border-[#22C475] transition-all duration-300 shadow-lg hover:shadow-xl translate-x-6 sm:translate-x-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Container */}
          <div className="mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.5
                }}
                className="bg-white rounded-3xl border border-[#1B1F3B]/10 p-8 lg:p-12 shadow-2xl relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-[#22C475]/10 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#22C475]" />
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                  
                  {/* Customer Image */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative">
                      {/* Image placeholder with gradient background */}

                      <Image src="/images/u1.jpg"
                       alt='rating'
                       width={100}
                       height={100}
                       />


                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#22C475]
                       to-[#4BC589] rounded-full flex items-center justify-center text-white font-bold text-2xl lg:text-3xl shadow-lg">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      
                      {/* Decorative ring */}
                      <div className="absolute -inset-2 border-2 border-[#22C475]/20 rounded-full animate-pulse"></div>
                    </div>
                  </motion.div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center lg:text-left">
                    
                    {/* Stars Rating */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex justify-center lg:justify-start mb-6"
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-lg sm:text-xl lg:text-2xl text-[#14110B] leading-relaxed mb-8 font-medium italic"
                    >
                      &quot;{testimonials[currentIndex].text}&quot;

                    </motion.blockquote>

                    {/* Customer Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="font-bold text-[#14110B] text-lg lg:text-xl mb-1">
                        — {testimonials[currentIndex].name}
                      </div>
                      <div className="text-[#14110B]/60 text-base lg:text-lg">
                        {testimonials[currentIndex].location}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center mt-8 space-x-3"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#22C475] scale-125'
                    : 'bg-[#14110B]/20 hover:bg-[#22C475]/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            </motion.div>


          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <div className="text-sm text-[#14110B]/40 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-[#22C475] animate-pulse' : 'bg-gray-400'}`}></div>
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-[#22C475] text-[#F9FAFB] font-semibold text-lg rounded-xl hover:bg-[#4BC589] active:bg-[#179055] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Join Our Happy Customers
            <ChevronRight className="w-5 h-5 ml-3" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;