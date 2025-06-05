'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Star, Users, TrendingUp, Award } from 'lucide-react';

export default function JoinHostPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible" 
        className="pt-32 pb-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-yellow-500/30"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Bergabung dengan HostStation</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mulai Karir Sebagai
              <motion.span 
                className="block text-yellow-400 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Host Live Streaming
              </motion.span>
            </h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12"
            >
              Pilih jalur yang sesuai dengan background dan pengalaman kamu. 
              Kami menyediakan pelatihan komprehensif untuk semua level!
            </motion.p>
          </motion.div>

          {/* Path Selection Cards */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Beginner Path */}
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      Host Pemula
                    </h3>
                    <p className="text-emerald-200 text-sm">Tanpa pengalaman sebelumnya</p>
                  </div>
                </div>

                <p className="text-emerald-100 mb-6 leading-relaxed">
                  Cocok untuk kamu yang baru memulai di dunia live streaming. 
                  Kami akan memberikan pelatihan lengkap dari dasar hingga mahir!
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Pelatihan intensif dari nol",
                    "Workshop praktik langsung", 
                    "Materi lengkap live selling",
                    "Sertifikat kelulusan",
                    "Job placement assistance"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-emerald-100 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-500/20 rounded-xl p-4 mb-6 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold text-white">Investasi Pelatihan</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-400">Rp 500.000</p>
                  <p className="text-emerald-200 text-sm">Termasuk sertifikat & job placement</p>
                </div>

                <Link href="/join-host/beginner">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Daftar Sekarang</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Professional Path */}
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="group relative"
            >
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-emerald-900 px-4 py-2 rounded-full font-bold text-sm z-10">
                PROFESIONAL
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/10 backdrop-blur-lg rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      Host Profesional
                    </h3>
                    <p className="text-emerald-200 text-sm">Sudah berpengalaman</p>
                  </div>
                </div>

                <p className="text-emerald-100 mb-6 leading-relaxed">
                  Untuk kamu yang sudah punya pengalaman hosting atau content creation. 
                  Langsung join dan dapatkan project menarik!
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Portfolio review profesional",
                    "Akses langsung ke client premium", 
                    "Higher earning potential",
                    "Exclusive brand partnerships",
                    "Advanced skill development"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-emerald-100 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-500/20 rounded-xl p-4 mb-6 border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold text-white">Registration Fee</span>
                  </div>
                  <p className="text-2xl font-bold text-yellow-400">Rp 100.000</p>
                  <p className="text-emerald-200 text-sm">One-time registration fee</p>
                </div>

                <Link href="/join-host/professional">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-emerald-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Join Sekarang</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={fadeIn}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Kenapa Pilih HostStation?</h3>
              <p className="text-emerald-200">Bergabung dengan komunitas host terbaik Indonesia</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, label: "Active Hosts", value: "120+" },
                { icon: TrendingUp, label: "Success Rate", value: "96.6%" },
                { icon: Award, label: "Partner Brands", value: "50+" },
                { icon: Sparkles, label: "Live Sessions", value: "500+" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-xl mb-3">
                    <stat.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-emerald-200 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}