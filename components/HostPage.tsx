'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
  Play,
  Camera,
  Mic,
  TrendingUp,
  Award,
  Heart,
  Shield,
  ChevronRight
} from 'lucide-react';

type HostProfile = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  completedSessions: number;
  platforms: string[];
  languages: string[];
  priceRange: string;
  avatar: string; // now contains image path
  featured: boolean;
  skills: string[];
  description: string;
};

export default function HostPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'premium' | 'specialist' | 'newbie'>('all');
  const [selectedHost, setSelectedHost] = useState<HostProfile | null>(null);

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

  const hosts: HostProfile[] = [
    {
      id: 1,
      name: "Sarah Maharani",
      specialty: "Fashion & Beauty",
      experience: "3+ tahun",
      rating: 4.9,
      completedSessions: 150,
      platforms: ["Instagram", "TikTok", "Shopee"],
      languages: ["Indonesian", "English"],
      priceRange: "Rp 800.000 - 1.500.000",
      avatar: "/host/sindi.png",
      featured: true,
      skills: ["Product Storytelling", "Audience Engagement", "Trend Analysis"],
      description: "Host berpengalaman dengan spesialisasi fashion dan beauty. Mampu menciptakan engagement tinggi dengan storytelling yang menarik."
    },
    {
      id: 2,
      name: "Andi Pratama",
      specialty: "Tech & Gadgets",
      experience: "4+ tahun",
      rating: 4.8,
      completedSessions: 200,
      platforms: ["YouTube", "Instagram", "Tokopedia"],
      languages: ["Indonesian", "English"],
      priceRange: "Rp 1.200.000 - 2.000.000",
      avatar: "/host/sindi.png",
      featured: true,
      skills: ["Technical Explanation", "Product Demo", "Q&A Management"],
      description: "Ahli dalam menjelaskan produk teknologi dengan bahasa yang mudah dipahami. Pengalaman luas dalam live commerce tech products."
    },
    {
      id: 3,
      name: "Maya Sari",
      specialty: "Home & Living",
      experience: "2+ tahun",
      rating: 4.7,
      completedSessions: 120,
      platforms: ["Instagram", "Facebook", "Lazada"],
      languages: ["Indonesian"],
      priceRange: "Rp 600.000 - 1.200.000",
      avatar: "/host/sindi.png",
      featured: false,
      skills: ["Home Styling", "Product Comparison", "Lifestyle Content"],
      description: "Spesialis dalam produk home dan living dengan kemampuan styling yang excellent. Menciptakan suasana hangat dan relatable."
    },
    {
      id: 4,
      name: "Rico Handoko",
      specialty: "Sports & Fitness",
      experience: "3+ tahun",
      rating: 4.8,
      completedSessions: 180,
      platforms: ["Instagram", "TikTok", "YouTube"],
      languages: ["Indonesian", "English"],
      priceRange: "Rp 900.000 - 1.800.000",
      avatar: "/host/ayas.png",
      featured: true,
      skills: ["Fitness Coaching", "Product Demo", "Motivational Speaking"],
      description: "Host energik dengan background fitness coaching. Mampu memotivasi audience dan mendemonstrasikan produk dengan menarik."
    },
    {
      id: 5,
      name: "Sinta Dewi",
      specialty: "Food & Culinary",
      experience: "2+ tahun",
      rating: 4.6,
      completedSessions: 90,
      platforms: ["Instagram", "TikTok", "Shopee"],
      languages: ["Indonesian"],
      priceRange: "Rp 500.000 - 1.000.000",
      avatar: "/host/ayas.png",
      featured: false,
      skills: ["Cooking Demo", "Food Photography", "Recipe Creation"],
      description: "Chef berpengalaman yang ahli dalam cooking demo dan food presentation. Menciptakan konten kuliner yang menggugah selera."
    },
    {
      id: 6,
      name: "David Chen",
      specialty: "Automotive",
      experience: "5+ tahun",
      rating: 4.9,
      completedSessions: 250,
      platforms: ["YouTube", "Instagram", "Tokopedia"],
      languages: ["Indonesian", "English", "Mandarin"],
      priceRange: "Rp 1.500.000 - 3.000.000",
      avatar: "/host/ayas.png",
      featured: true,
      skills: ["Technical Review", "Product Comparison", "Industry Knowledge"],
      description: "Expert automotive dengan pengalaman 5+ tahun. Memiliki knowledge mendalam tentang otomotif dan kemampuan review yang excellent."
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua Host', icon: Users },
    { id: 'premium', label: 'Premium Host', icon: Crown },
    { id: 'specialist', label: 'Specialist', icon: Award },
    { id: 'newbie', label: 'Rising Star', icon: Star }
  ];

  const filteredHosts = hosts.filter(host => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'premium') return host.featured && host.rating >= 4.8;
    if (selectedCategory === 'specialist') return host.completedSessions >= 150;
    if (selectedCategory === 'newbie') return host.completedSessions < 150;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
      <motion.section
        initial="hidden"
        animate="visible"
        className="pt-32 pb-16 px-4"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div variants={fadeIn} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-500/30"
            >
              <Video className="w-5 h-5" />
              <span className="font-semibold">Tim Host Professional</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Host Terbaik
              <motion.span
                className="block text-yellow-400 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                untuk Live Commerce Anda
              </motion.span>
            </h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12"
            >
              Pilih dari tim host profesional kami yang berpengalaman dalam berbagai industri.
              Setiap host telah terbukti mampu meningkatkan engagement dan konversi penjualan.
            </motion.p>

            {/* Category Filter */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-yellow-500 text-emerald-900"
                      : "bg-white/10 text-emerald-200 hover:bg-white/20"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Host Cards Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {filteredHosts.map((host, idx) => (
              <motion.div
                key={host.id}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all cursor-pointer ${
                  host.featured 
                    ? 'border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-orange-500/5' 
                    : 'border-white/10'
                }`}
                onClick={() => setSelectedHost(host)}
              >
                {host.featured && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-3 -right-3 bg-yellow-500 text-emerald-900 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1"
                  >
                    <Crown className="w-3 h-3" />
                    FEATURED
                  </motion.div>
                )}

                {/* Host Avatar & Basic Info */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16 bg-white/10 rounded-full overflow-hidden">
                    <Image
                      src={host.avatar}
                      alt={host.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{host.name}</h3>
                    <p className="text-yellow-400 font-semibold mb-1">{host.specialty}</p>
                    <p className="text-emerald-200 text-sm">{host.experience} experience</p>
                  </div>
                </div>

                {/* Rating & Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 font-semibold">{host.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-200 text-sm">
                    <Play className="w-4 h-4" />
                    <span>{host.completedSessions} sessions</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-emerald-200 text-sm mb-4 leading-relaxed">{host.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {host.skills.slice(0, 2).map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {host.skills.length > 2 && (
                    <span className="text-emerald-200 text-xs px-2 py-1">
                      +{host.skills.length - 2} more
                    </span>
                  )}
                </div>

                {/* Platforms */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {host.platforms.map((platform, platformIdx) => (
                    <span
                      key={platformIdx}
                      className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-bold mb-3">{host.priceRange}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      host.featured
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-emerald-900'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                    }`}
                  >
                    Lihat Profile
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-full md:w-2/3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full mb-4">
                  <Target className="w-4 h-4" />
                  <span className="font-semibold">Konsultasi Gratis</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Tidak Yakin Pilih Host yang Mana?</h3>
                <p className="text-emerald-200">
                  Tim kami akan membantu Anda memilih host yang tepat sesuai dengan produk, target audience, dan budget Anda.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex md:justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-emerald-900 font-semibold py-4 px-8 rounded-xl transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Konsultasi Sekarang
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Our Hosts */}
          <motion.div
            variants={fadeIn}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Mengapa Pilih Host Kami?</h2>
              <p className="text-emerald-200 max-w-2xl mx-auto">
                Setiap host telah melalui proses seleksi ketat dan pelatihan komprehensif untuk memastikan kualitas terbaik.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="p-4 bg-blue-500/20 rounded-xl w-fit mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Terverifikasi</h3>
                <p className="text-emerald-200 text-sm">Background check dan verifikasi identitas lengkap</p>
              </motion.div>

              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="p-4 bg-green-500/20 rounded-xl w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Proven Results</h3>
                <p className="text-emerald-200 text-sm">Track record peningkatan penjualan yang terukur</p>
              </motion.div>

              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="p-4 bg-purple-500/20 rounded-xl w-fit mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Trained Expert</h3>
                <p className="text-emerald-200 text-sm">Pelatihan berkelanjutan dari ahli live commerce</p>
              </motion.div>

              <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="p-4 bg-yellow-500/20 rounded-xl w-fit mx-auto mb-4">
                  <Heart className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Customer First</h3>
                <p className="text-emerald-200 text-sm">Fokus pada kepuasan klien dan hasil optimal</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Host Detail Modal */}
      {selectedHost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedHost(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-emerald-900/90 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="relative w-24 h-24 bg-white/10 rounded-full overflow-hidden">
                <Image
                  src={selectedHost.avatar}
                  alt={selectedHost.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedHost.name}</h2>
                <p className="text-yellow-400 text-xl font-semibold mb-2">{selectedHost.specialty}</p>
                <p className="text-emerald-200">{selectedHost.experience} • {selectedHost.completedSessions} completed sessions</p>
                <div className="flex items-center gap-2 mt-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 font-semibold">{selectedHost.rating}/5.0</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold mb-3">Tentang Host</h3>
                <p className="text-emerald-200 leading-relaxed">{selectedHost.description}</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3">Keahlian</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedHost.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3">Platform</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedHost.platforms.map((platform, idx) => (
                    <span key={idx} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-3">Bahasa</h3>
                <div className="flex gap-2">
                  {selectedHost.languages.map((lang, idx) => (
                    <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="text-white font-bold mb-2">Harga</h3>
                <p className="text-yellow-400 text-xl font-bold">{selectedHost.priceRange}</p>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-emerald-900 font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Book Sekarang
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedHost(null)}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all"
                >
                  Tutup
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}