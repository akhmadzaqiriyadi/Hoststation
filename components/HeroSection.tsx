// HeroSection.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const slideInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const statsItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      id='hero' 
      className="relative pt-32 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white pb-20 overflow-hidden"
    >
      {/* Background Elements with animation */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-30 left-10 w-24 h-24 rounded-full bg-yellow-500 blur-xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-yellow-400 blur-xl"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            variants={slideInLeft}
            className="w-full md:w-1/2 space-y-8"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Elevate Your <motion.span 
                initial={{ color: "#FACC15" }}
                animate={{ color: "#FCD34D" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="text-yellow-400"
              >Live Commerce</motion.span> Strategy
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-200"
            >
              HostStation connects brands with professional live streaming hosts. 
              We train talent and streamline your live selling success.
            </motion.p>
            <motion.div 
              variants={staggerContainer}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div variants={slideUp}>
                <Link href="/training" className="block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-full transition duration-300 text-center">
                  Join as Talent
                </Link>
              </motion.div>
              <motion.div variants={slideUp}>
                <Link href="/products" className="block bg-transparent border-2 border-white hover:bg-white hover:text-indigo-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-center">
                  Hire a Host
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-10 h-10 rounded-full bg-gray-400 border-2 border-indigo-800"
                  ></motion.div>
                ))}
              </div>
              <p className="text-gray-300 text-sm">Trusted by <span className="font-bold">50+ brands</span> nationwide</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={slideInRight}
            className="w-full md:w-1/2 relative"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-600 w-full aspect-video max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-0">
              <Image src="/live.gif" alt="Hero Image" layout="fill"/>
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, delay: 0.8 }}
                className="absolute top-0 left-0 bg-red-600 text-white px-4 py-1 text-sm font-bold rounded-br-lg z-20"
              >
                LIVE
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute bottom-0 left-0 w-full p-4 z-20"
              >
                <div className="flex items-center gap-3 bg-black/60 p-2 rounded-2xl">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 1 }}
                    className="w-10 h-10 rounded-full bg-white border"
                  >
                    <Image src="/logo.svg" alt="HostStation Logo" width={40} height={40} className='scale-75'/>
                  </motion.div>
                  <div>
                    <p className="font-bold text-white">Sin HostStation</p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                      className="text-sm text-gray-200"
                    >
                      12.5K viewers
                    </motion.p>
                  </div>
                </div>
              </motion.div>
              <div className="w-full h-full bg-gray-800"></div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, delay: 1.3 }}
              className="absolute -bottom-4 -right-4 bg-white text-indigo-800 rounded-lg p-3 shadow-lg z-30"
            >
              <div className="flex items-center gap-2">
                <motion.div 
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  className="text-3xl font-bold"
                >
                  ↗️
                </motion.div>
                <div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                    className="font-bold"
                  >
                    136%
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.6 }}
                    className="text-xs"
                  >
                    Increase in sales
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-8 border-t-2 border-white/20"
        >
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div variants={statsItem} className="text-center">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-3xl font-bold"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  120+
                </motion.span>
              </motion.p>
              <p className="text-gray-300">Trained Hosts</p>
            </motion.div>
            <motion.div variants={statsItem} className="text-center">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-3xl font-bold"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  50+
                </motion.span>
              </motion.p>
              <p className="text-gray-300">Partner Brands</p>
            </motion.div>
            <motion.div variants={statsItem} className="text-center">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="text-3xl font-bold"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  96.6%
                </motion.span>
              </motion.p>
              <p className="text-gray-300">Sales Increase</p>
            </motion.div>
            <motion.div variants={statsItem} className="text-center">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="text-3xl font-bold"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  500+
                </motion.span>
              </motion.p>
              <p className="text-gray-300">Live Sessions</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}