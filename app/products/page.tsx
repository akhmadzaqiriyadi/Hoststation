'use client';
import { useState } from 'react';
import Link from 'next/link';
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
  MessageSquare
} from 'lucide-react';

type Product = {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
  cta: string;
  link: string;
  icon: any;
  color: string;
};

type ProductCategory = {
  [key: string]: Product[];
};

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<'hosting' | 'management' | 'consulting'>('hosting');

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

  const products: ProductCategory = {
    hosting: [
      {
        id: 1,
        title: "Host Live Basic",
        description: "Host profesional untuk live streaming di satu platform dengan presentasi produk dasar.",
        features: [
          "Sesi 1 jam",
          "Single platform",
          "Presentasi produk dasar",
          "Analisis pasca-live"
        ],
        price: "Mulai dari Rp 500.000",
        popular: false,
        cta: "Lihat Detail",
        link: "/services/basic-live-host",
        icon: Video,
        color: "blue"
      },
      {
        id: 2,
        title: "Host Live Premium",
        description: "Host berpengalaman untuk live streaming multi-platform dengan storytelling produk yang menarik.",
        features: [
          "Sesi 2 jam",
          "Streaming multi-platform",
          "Manajemen Q&A interaktif",
          "Laporan analitik lengkap",
          "Storytelling produk"
        ],
        price: "Mulai dari Rp 1.200.000",
        popular: true,
        cta: "Pilih Premium",
        link: "/services/premium-live-host",
        icon: Crown,
        color: "purple"
      },
      {
        id: 3,
        title: "Host Live Elite",
        description: "Host terbaik untuk solusi live commerce komprehensif dengan engagement maksimal.",
        features: [
          "Sesi 3 jam",
          "Multi-platform",
          "Strategi engagement lengkap",
          "Dukungan produksi khusus",
          "Analitik premium",
          "Follow-up audiens"
        ],
        price: "Mulai dari Rp 2.500.000",
        popular: false,
        cta: "Jelajahi Elite",
        link: "/services/elite-live-host",
        icon: Trophy,
        color: "yellow"
      },
    ],
    management: [
      {
        id: 1,
        title: "Manajemen Host",
        description: "Solusi manajemen host lengkap untuk kebutuhan live commerce Anda.",
        features: [
          "Pemilihan host",
          "Manajemen jadwal",
          "Pelacakan performa",
          "Pelaporan rutin"
        ],
        price: "10% dari budget kampanye",
        popular: false,
        cta: "Pelajari Lebih Lanjut",
        link: "/services/host-management",
        icon: Users,
        color: "green"
      },
      {
        id: 2,
        title: "Kampanye Full-Service",
        description: "Manajemen kampanye live commerce end-to-end dengan jaminan hasil.",
        features: [
          "Pengembangan strategi",
          "Manajemen host",
          "Koordinasi multi-platform",
          "Analitik performa",
          "Jaminan hasil"
        ],
        price: "Harga menyesuaikan",
        popular: true,
        cta: "Minta Penawaran",
        link: "/services/full-service-campaign",
        icon: BarChart3,
        color: "purple"
      },
    ],
    consulting: [
      {
        id: 1,
        title: "Konsultasi Live Commerce",
        description: "Konsultasi ahli untuk mengoptimalkan strategi live commerce Anda.",
        features: [
          "Sesi 2 jam",
          "Review strategi",
          "Rekomendasi platform",
          "Panduan pemilihan host"
        ],
        price: "Rp 1.500.000 per sesi",
        popular: false,
        cta: "Booking Sesi",
        link: "/services/consultation",
        icon: MessageSquare,
        color: "blue"
      },
      {
        id: 2,
        title: "Workshop Live Commerce",
        description: "Workshop tim untuk brand yang ingin membangun kapabilitas live commerce internal.",
        features: [
          "Workshop 4 jam",
          "Pelatihan tim",
          "Optimasi platform",
          "Strategi konten",
          "Setup analitik"
        ],
        price: "Rp 5.000.000 per workshop",
        popular: true,
        cta: "Daftar Sekarang",
        link: "/services/workshop",
        icon: Target,
        color: "green"
      },
    ]
  };

  const tabConfig = [
    { id: 'hosting', label: 'Paket Host', icon: Video },
    { id: 'management', label: 'Manajemen', icon: BarChart3 },  
    { id: 'consulting', label: 'Konsultasi', icon: MessageSquare }
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
              <span className="font-semibold">Produk & Layanan Kami</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Solusi Lengkap
              <motion.span
                className="block text-yellow-400 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                untuk Live Commerce
              </motion.span>
            </h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12"
            >
              Tingkatkan strategi live commerce Anda dengan layanan hosting profesional,
              solusi manajemen menyeluruh, dan konsultasi ahli.
            </motion.p>

            {/* Navigation Tabs */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {tabConfig.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'hosting' | 'management' | 'consulting')}
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

          {/* Product Cards Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {products[activeTab].map((product: Product, idx) => (
              <motion.div
                key={product.id}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all flex flex-col h-full ${
                  product.popular 
                    ? 'border-yellow-500/50 bg-gradient-to-br from-yellow-500/10 to-orange-500/5' 
                    : 'border-white/10'
                }`}
              >
                {product.popular && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-3 -right-3 bg-yellow-500 text-emerald-900 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1"
                  >
                    <Star className="w-3 h-3" />
                    POPULAR
                  </motion.div>
                )}

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-${product.color}-500/20 rounded-xl`}>
                      <product.icon className={`w-8 h-8 text-${product.color}-400`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.title}</h3>
                      <p className="text-2xl font-bold text-yellow-400 mt-1">{product.price}</p>
                    </div>
                  </div>

                  <p className="text-emerald-200 mb-6 leading-relaxed">{product.description}</p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIdx) => (
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

                <Link href={product.link || "/contact"} className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      product.popular
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-emerald-900'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                    }`}
                  >
                    {product.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Solution CTA */}
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-full md:w-2/3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full mb-4">
                  <Target className="w-4 h-4" />
                  <span className="font-semibold">Solusi Khusus</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Butuh Solusi yang Disesuaikan?</h3>
                <p className="text-emerald-200">
                  Hubungi kami untuk strategi live commerce yang dirancang khusus sesuai kebutuhan dan tujuan brand Anda.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex md:justify-end">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-emerald-900 font-semibold py-4 px-8 rounded-xl transition-all flex items-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Hubungi Tim Kami
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            variants={fadeIn}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="p-4 bg-blue-500/20 rounded-xl w-fit mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Setup Cepat</h3>
              <p className="text-emerald-200">Mulai dalam 24 jam dengan proses onboarding yang efisien.</p>
            </motion.div>

            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="p-4 bg-green-500/20 rounded-xl w-fit mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tim Ahli</h3>
              <p className="text-emerald-200">Bekerja dengan profesional berpengalaman di bidang live commerce.</p>
            </motion.div>

            <motion.div
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="p-4 bg-purple-500/20 rounded-xl w-fit mx-auto mb-4">
                <Trophy className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hasil Terbukti</h3>
              <p className="text-emerald-200">Bergabung dengan ratusan brand yang telah meningkatkan penjualan mereka bersama kami.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}