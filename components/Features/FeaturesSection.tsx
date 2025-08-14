'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Trophy, 
  Store, 
  PieChart, 
  Shield,
  ArrowRight 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Group Savings (Ajo Style)",
      description: "Join or create savings groups that keep you accountable and motivated.",
      icon: Users,
      iconBg: "bg-[#22C475]/10",
      iconColor: "text-[#22C475]"
    },
    {
      id: 2,
      title: "Personalized Financial Coaching",
      description: "Get smart, tailored advice that works for your lifestyle and income level.",
      icon: Brain,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600"
    },
    {
      id: 3,
      title: "Gamified Savings Experience",
      description: "Earn rewards, track streaks, and level up your saving habits.",
      icon: Trophy,
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-600"
    },
    {
      id: 4,
      title: "Local Business Rewards",
      description: "Spend wisely and enjoy discounts from local shops you trust.",
      icon: Store,
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600"
    },
    {
      id: 5,
      title: "Expense Tracking",
      description: "See where your money goes, and make better choices with real data.",
      icon: PieChart,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-600"
    },
    {
      id: 6,
      title: "Secure Banking",
      description: "Bank-level security with encryption to keep your financial data safe.",
      icon: Shield,
      iconBg: "bg-green-500/10",
      iconColor: "text-green-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            Powerful Features for{' '}
            <span className="text-[#22C475] relative">
              Smart Saving
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
            Discover the tools that make saving effortless, engaging, and effective for your financial journey.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-white rounded-2xl border border-[#1B1F3B]/10 p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col relative"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#14110B] mb-4 group-hover:text-[#22C475] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#14110B]/70 leading-relaxed mb-6 text-base lg:text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-[#22C475] font-semibold hover:text-[#179055] transition-colors duration-200 group-hover:translate-x-1 transform transition-transform"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                {/* Decorative element */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                  className="absolute top-6 right-6 w-2 h-2 bg-[#22C475]/20 rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-[#22C475] text-[#F9FAFB] font-semibold text-lg rounded-xl hover:bg-[#4BC589] active:bg-[#179055] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore All Features
            <ArrowRight className="w-5 h-5 ml-3" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;