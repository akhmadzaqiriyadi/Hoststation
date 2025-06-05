"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle2,
  Star,
  Calendar,
  Play,
  Download,
  Trophy,
  Target,
  Sparkles,
  ArrowRight,
  Video,
  Mic,
  Camera,
  TrendingUp,
} from "lucide-react";

export default function TrainingPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const trainingModules = [
    {
      title: "Dasar-Dasar Live Streaming",
      duration: "2 jam",
      topics: ["Pengenalan platform", "Setup equipment", "Basic streaming"],
      icon: Video,
      color: "blue",
    },
    {
      title: "Teknik Komunikasi & Presentasi",
      duration: "3 jam",
      topics: ["Public speaking", "Audience engagement", "Voice training"],
      icon: Mic,
      color: "purple",
    },
    {
      title: "Visual & Content Creation",
      duration: "2.5 jam",
      topics: ["Camera angles", "Lighting setup", "Content planning"],
      icon: Camera,
      color: "green",
    },
    {
      title: "Live Selling Mastery",
      duration: "3.5 jam",
      topics: ["Product presentation", "Sales techniques", "Customer handling"],
      icon: TrendingUp,
      color: "yellow",
    },
  ];

  const trainingBatches = [
    {
      name: "Batch A - Weekend",
      date: "15-16 Juni 2025",
      time: "09:00 - 17:00 WIB",
      location: "Jakarta Training Center",
      instructor: "Sarah Chen",
      spots: 12,
      price: "Rp 500.000",
      popular: false,
    },
    {
      name: "Batch B - Intensive",
      date: "22-23 Juni 2025",
      time: "09:00 - 17:00 WIB",
      location: "Jakarta Training Center",
      instructor: "Michael Tan",
      spots: 8,
      price: "Rp 750.000",
      popular: true,
    },
    {
      name: "Batch C - Premium",
      date: "29-30 Juni 2025",
      time: "09:00 - 17:00 WIB",
      location: "Premium Studio",
      instructor: "Lisa Wong",
      spots: 6,
      price: "Rp 1.200.000",
      popular: false,
    },
  ];

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
              className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-500/30"
            >
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">Program Pelatihan</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pelatihan Host
              <motion.span
                className="block text-yellow-400 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Live Streaming
              </motion.span>
            </h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12"
            >
              Program pelatihan komprehensif untuk mengembangkan skill hosting
              dan live streaming. Dari basic hingga advanced level dengan mentor
              berpengalaman.
            </motion.p>

            {/* Navigation Tabs */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {[
                { id: "overview", label: "Overview", icon: BookOpen },
                { id: "schedule", label: "Jadwal", icon: Calendar },
                { id: "instructors", label: "Instruktur", icon: Users },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-yellow-500 text-emerald-900"
                      : "bg-white/10 text-emerald-200 hover:bg-white/20"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Content based on active tab */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Training Overview */}
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                  >
                    <div className="p-4 bg-blue-500/20 rounded-xl w-fit mb-4">
                      <Clock className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Durasi
                    </h3>
                    <p className="text-emerald-200">2 hari intensif (16 jam)</p>
                    <p className="text-emerald-300 text-sm mt-1">
                      Weekend & weekday available
                    </p>
                  </motion.div>

                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                  >
                    <div className="p-4 bg-purple-500/20 rounded-xl w-fit mb-4">
                      <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Peserta
                    </h3>
                    <p className="text-emerald-200">Max 12 orang per batch</p>
                    <p className="text-emerald-300 text-sm mt-1">
                      Small class untuk fokus personal
                    </p>
                  </motion.div>

                  <motion.div
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                  >
                    <div className="p-4 bg-green-500/20 rounded-xl w-fit mb-4">
                      <Award className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Sertifikat
                    </h3>
                    <p className="text-emerald-200">Resmi & terakreditasi</p>
                    <p className="text-emerald-300 text-sm mt-1">
                      Valid untuk portfolio
                    </p>
                  </motion.div>
                </div>

                {/* What You'll Learn */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    Yang Akan Kamu Pelajari
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Setup equipment & studio sederhana",
                      "Teknik komunikasi yang engaging",
                      "Strategi live selling yang efektif",
                      "Handling customer & objection",
                      "Content planning & scheduling",
                      "Analytics & performance tracking",
                      "Brand collaboration best practices",
                      "Advanced streaming techniques",
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        <span className="text-emerald-100">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "modules" && (
              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-6"
              >
                {trainingModules.map((module, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 bg-${module.color}-500/20 rounded-xl`}
                      >
                        <module.icon
                          className={`w-6 h-6 text-${module.color}-400`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {module.title}
                        </h3>
                        <p className="text-emerald-200 text-sm">
                          {module.duration}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {module.topics.map((topic, topicIdx) => (
                        <div key={topicIdx} className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 bg-${module.color}-400 rounded-full`}
                          ></div>
                          <span className="text-emerald-100 text-sm">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Preview Module
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "schedule" && (
              <div className="space-y-6">
                {trainingBatches.map((batch, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border ${
                      batch.popular ? "border-yellow-500/50" : "border-white/10"
                    }`}
                  >
                    {batch.popular && (
                      <div className="absolute -top-3 -right-3 bg-yellow-500 text-emerald-900 px-3 py-1 rounded-full font-bold text-xs">
                        POPULAR
                      </div>
                    )}

                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {batch.name}
                        </h3>
                        <div className="space-y-1 text-sm">
                          <p className="text-emerald-200 flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {batch.date}
                          </p>
                          <p className="text-emerald-200 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {batch.time}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-emerald-200 text-sm mb-1">Lokasi</p>
                        <p className="text-white font-medium">
                          {batch.location}
                        </p>
                        <p className="text-emerald-200 text-sm">
                          Instruktur: {batch.instructor}
                        </p>
                      </div>

                      <div>
                        <p className="text-emerald-200 text-sm mb-1">
                          Sisa Slot
                        </p>
                        <p className="text-white font-bold text-lg">
                          {batch.spots} tersisa
                        </p>
                        <div className="w-full bg-emerald-800/30 rounded-full h-2 mt-2">
                          <div
                            className="bg-yellow-500 h-2 rounded-full"
                            style={{
                              width: `${((12 - batch.spots) / 12) * 100}%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="text-right flex flex-col">
                        <p className="text-2xl font-bold text-yellow-400 mb-2">
                          {batch.price}
                        </p>
                        <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-emerald-900 font-semibold py-2 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
                          Daftar Sekarang
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "instructors" && (
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Sarah Chen",
                    role: "Lead Training Instructor",
                    experience: "5+ tahun",
                    specialty: "Live Selling & Communication",
                    rating: 4.9,
                    students: 200,
                  },
                  {
                    name: "Michael Tan",
                    role: "Technical Instructor",
                    experience: "7+ tahun",
                    specialty: "Streaming Tech & Equipment",
                    rating: 4.8,
                    students: 180,
                  },
                  {
                    name: "Lisa Wong",
                    role: "Business Development",
                    experience: "6+ tahun",
                    specialty: "Brand Collaboration & Strategy",
                    rating: 4.9,
                    students: 150,
                  },
                ].map((instructor, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-emerald-900">
                        {instructor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-yellow-400 font-medium mb-2">
                      {instructor.role}
                    </p>
                    <p className="text-emerald-200 text-sm mb-4">
                      {instructor.specialty}
                    </p>

                    <div className="flex justify-center gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-white font-bold">
                          {instructor.experience}
                        </p>
                        <p className="text-emerald-300">Experience</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-bold">
                            {instructor.rating}
                          </span>
                        </div>
                        <p className="text-emerald-300">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-white font-bold">
                          {instructor.students}+
                        </p>
                        <p className="text-emerald-300">Students</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeIn}
            className="mt-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">Promo Terbatas</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Daftar Sekarang & Dapatkan Bonus Equipment Kit!
            </h3>
            <p className="text-emerald-200 mb-6 max-w-2xl mx-auto">
              Untuk 20 pendaftar pertama, dapatkan starter kit lengkap senilai
              Rp 500.000 termasuk ring light, tripod, dan aksesoris streaming
              lainnya.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="/join-host">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-emerald-900 font-semibold py-4 px-8 rounded-xl transition-all flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Daftar Training Sekarang
                </button>
              </Link>

              <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-8 rounded-xl transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Materi Preview
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
