'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  Sparkles, 
  ArrowRight, 
  Trophy,
  Target,
  Users,
  Clock,
  Zap,
  Crown,
  Video,
  BarChart3,
  MessageSquare,
  Heart,
  Award,
  Lightbulb,
  Shield,
  TrendingUp,
  Globe,
  Handshake,
  Eye
} from 'lucide-react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  expertise: string[];
  image: string;
  popular: boolean;
  color: string;
};

type AboutSection = {
  [key: string]: any;
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'story' | 'team' | 'values'>('story');

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

  const aboutSections: AboutSection = {
    story: {
      title: "Kisah Kami",
      subtitle: "Perjalanan Membangun Ekosistem Live Commerce Indonesia",
      content: [
        {
          id: 1,
          title: "Visi Awal",
          description: "HostStation lahir dari kebutuhan mendesak untuk menjembatani gap antara brand dan talenta live streaming profesional di Indonesia.",
          features: [
            "Identifikasi masalah industri",
            "Riset mendalam pasar live commerce",
            "Pengembangan konsep platform",
            "Pembentukan tim ahli"
          ],
          icon: Lightbulb,
          color: "blue",
          year: "2022"
        },
        {
          id: 2,
          title: "Pertumbuhan Pesat",
          description: "Dalam waktu singkat, kami berhasil melatih ratusan host dan melayani puluhan brand besar di seluruh Indonesia.",
          features: [
            "120+ host terlatih",
            "50+ brand partner",
            "500+ sesi live berhasil",
            "96.6% tingkat kepuasan klien"
          ],
          icon: TrendingUp,
          color: "green",
          year: "2023",
          popular: true
        },
        {
          id: 3,
          title: "Masa Depan",
          description: "Kami terus berinovasi untuk menjadi platform live commerce terdepan di Asia Tenggara dengan teknologi AI dan machine learning.",
          features: [
            "Ekspansi regional",
            "Teknologi AI matching",
            "Platform self-service",
            "Sertifikasi internasional"
          ],
          icon: Globe,
          color: "purple",
          year: "2024+"
        }
      ]
    },
    team: [
      {
        id: 1,
        name: "Sarah Chen",
        role: "Co-Founder & CEO",
        description: "Visioner di balik HostStation dengan pengalaman 10+ tahun di industri e-commerce dan live streaming.",
        expertise: [
          "Strategic Leadership",
          "Business Development",
          "Market Analysis",
          "Team Building"
        ],
        image: "/host/sindi.png",
        popular: false,
        color: "blue"
      },
      {
        id: 2,
        name: "Akhmad Zaqi Riyadi",
        role: "Co-Founder & CTO",
        description: "Arsitek teknologi platform dengan keahlian dalam AI, machine learning, dan sistem scalable.",
        expertise: [
          "AI & Machine Learning",
          "System Architecture",
          "Product Development",
          "Data Analytics"
        ],
        image: "/team/david.jpg",
        popular: true,
        color: "purple"
      },
      {
        id: 3,
        name: "Maya Sari",
        role: "Head of Training",
        description: "Ahli komunikasi dan presenter berpengalaman yang memimpin program pelatihan host profesional.",
        expertise: [
          "Communication Training",
          "Presentation Skills",
          "Curriculum Development",
          "Performance Coaching"
        ],
        image: "/team/maya.jpg",
        popular: false,
        color: "green"
      },
      {
        id: 4,
        name: "Rico Tanaka",
        role: "Head of Operations",
        description: "Spesialis operasional yang memastikan setiap kampanye live commerce berjalan dengan sempurna.",
        expertise: [
          "Operations Management",
          "Quality Assurance",
          "Process Optimization",
          "Client Relations"
        ],
        image: "/team/rico.jpg",
        popular: false,
        color: "yellow"
      }
    ],
    values: [
      {
        id: 1,
        title: "Kualitas Terjamin",
        description: "Kami berkomitmen memberikan layanan berkualitas tinggi dengan standar internasional untuk setiap klien.",
        features: [
          "Sertifikasi host profesional",
          "Quality control ketat",
          "Monitoring real-time",
          "Feedback berkelanjutan"
        ],
        icon: Award,
        color: "blue",
        popular: false
      },
      {
        id: 2,
        title: "Inovasi Berkelanjutan",
        description: "Selalu menghadirkan solusi terdepan dengan teknologi terbaru untuk mendukung kesuksesan live commerce.",
        features: [
          "Riset & development",
          "Adopsi teknologi AI",
          "Platform terintegrasi",
          "Analytics mendalam"
        ],
        icon: Zap,
        color: "purple",
        popular: true
      },
      {
        id: 3,
        title: "Kemitraan Jangka Panjang",
        description: "Membangun hubungan yang saling menguntungkan dengan semua stakeholder dalam ekosistem live commerce.",
        features: [
          "Relationship building",
          "Mutual growth",
          "Transparent communication",
          "Long-term partnership"
        ],
        icon: Handshake,
        color: "green",
        popular: false
      }
    ]
  };

  const tabConfig = [
    { id: 'story', label: 'Kisah Kami', icon: Eye },
    { id: 'team', label: 'Tim Kami', icon: Users },  
    { id: 'values', label: 'Nilai Kami', icon: Heart }
  ];

  const achievements = [
    {
      number: "120+",
      label: "Host Profesional",
      description: "Talenta terlatih siap melayani brand Anda",
      icon: Users,
      color: "blue"
    },
    {
      number: "50+",
      label: "Brand Partner",
      description: "Perusahaan besar yang mempercayai layanan kami",
      icon: Trophy,
      color: "yellow"
    },
    {
      number: "500+",
      label: "Sesi Live",
      description: "Kampanye sukses yang telah dilaksanakan",
      icon: Video,
      color: "green"
    },
    {
      number: "96.6%",
      label: "Tingkat Kepuasan",
      description: "Klien yang puas dengan layanan kami",
      icon: Star,
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
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
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Tentang HostStation</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Membangun Masa Depan
              <motion.span
                className="block text-yellow-400 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Live Commerce Indonesia
              </motion.span>
            </h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12"
            >
              Kami adalah pionir dalam menghubungkan brand dengan talenta live streaming profesional, 
              menciptakan ekosistem live commerce yang berkelanjutan dan menguntungkan semua pihak.
            </motion.p>

            {/* Navigation Tabs */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {tabConfig.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'story' | 'team' | 'values')}
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
          {activeTab === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {aboutSections.story.content.map((milestone: any, idx: number) => (
                <motion.div
                  key={milestone.id}
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all flex flex-col h-full ${
                    milestone.popular 
                      ? 'border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-orange-500/5' 
                      : 'border-white/10'
                  }`}
                >
                  {milestone.popular && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-3 -right-3 bg-yellow-500 text-emerald-900 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1"
                    >
                      <Star className="w-3 h-3" />
                      MILESTONE
                    </motion.div>
                  )}

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 bg-${milestone.color}-500/20 rounded-xl`}>
                        <milestone.icon className={`w-8 h-8 text-${milestone.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                        <p className="text-2xl font-bold text-yellow-400 mt-1">{milestone.year}</p>
                      </div>
                    </div>

                    <p className="text-emerald-200 mb-6 leading-relaxed">{milestone.description}</p>

                    <div className="space-y-3">
                      {milestone.features.map((feature: string, featureIdx: number) => (
                        <motion.div
                          key={featureIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (idx * 0.1) + (featureIdx * 0.05) }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-emerald-100 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {aboutSections.team.map((member: TeamMember, idx: number) => (
                <motion.div
                  key={member.id}
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all flex flex-col h-full ${
                    member.popular 
                      ? 'border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-orange-500/5' 
                      : 'border-white/10'
                  }`}
                >
                  {member.popular && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-3 -right-3 bg-yellow-500 text-emerald-900 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1"
                    >
                      <Crown className="w-3 h-3" />
                      LEADER
                    </motion.div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-col items-center mb-6">
                      <div className={`w-20 h-20 bg-${member.color}-500/20 rounded-full flex items-center justify-center mb-4`}>
                        <Users className={`w-10 h-10 text-${member.color}-400`} />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-yellow-400 font-semibold mt-1">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-emerald-200 mb-6 leading-relaxed text-center">{member.description}</p>

                    <div className="space-y-2">
                      {member.expertise.map((skill: string, skillIdx: number) => (
                        <motion.div
                          key={skillIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (idx * 0.1) + (skillIdx * 0.05) }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-emerald-100 text-xs">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'values' && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {aboutSections.values.map((value: any, idx: number) => (
                <motion.div
                  key={value.id}
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all flex flex-col h-full ${
                    value.popular 
                      ? 'border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-orange-500/5' 
                      : 'border-white/10'
                  }`}
                >
                  {value.popular && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-3 -right-3 bg-yellow-500 text-emerald-900 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1"
                    >
                      <Heart className="w-3 h-3" />
                      CORE
                    </motion.div>
                  )}

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 bg-${value.color}-500/20 rounded-xl`}>
                        <value.icon className={`w-8 h-8 text-${value.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{value.title}</h3>
                      </div>
                    </div>

                    <p className="text-emerald-200 mb-6 leading-relaxed">{value.description}</p>

                    <div className="space-y-3">
                      {value.features.map((feature: string, featureIdx: number) => (
                        <motion.div
                          key={featureIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (idx * 0.1) + (featureIdx * 0.05) }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-emerald-100 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Achievements Section */}
          <motion.div
            variants={fadeIn}
            className="mt-12 grid md:grid-cols-4 gap-6 mb-16"
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className={`p-4 bg-${achievement.color}-500/20 rounded-xl w-fit mx-auto mb-4`}>
                  <achievement.icon className={`w-8 h-8 text-${achievement.color}-400`} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{achievement.number}</h3>
                <p className="text-yellow-400 font-semibold mb-2">{achievement.label}</p>
                <p className="text-emerald-200 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-full md:w-2/3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full mb-4">
                  <Target className="w-4 h-4" />
                  <span className="font-semibold">Bergabung dengan Kami</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Siap Menjadi Bagian dari Revolusi Live Commerce?</h3>
                <p className="text-emerald-200">
                  Bergabunglah dengan ekosistem HostStation dan rasakan pengalaman live commerce yang tak terlupakan.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex md:justify-end gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-emerald-900 font-semibold py-4 px-6 rounded-xl transition-all flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Jadi Host
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-semibold py-4 px-6 rounded-xl transition-all flex items-center gap-2"
                >
                  <Video className="w-5 h-5" />
                  Sewa Host
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}