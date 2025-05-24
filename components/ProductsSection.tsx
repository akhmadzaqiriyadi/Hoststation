// ProductsSection.jsx
'use client';
import { useState } from 'react';
// import Image from 'next/image'; // Tidak digunakan dalam ProductsSection yang Anda berikan
import Link from 'next/link';
// Asumsikan lucide-react tersedia di proyek seperti pada komponen referensi
import { CheckCircle } from 'lucide-react'; // Contoh ikon, bisa disesuaikan

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState('hosting');

  const products = {
    hosting: [
      {
        id: 1,
        title: "Basic Live Host",
        description: "Professional host for single platform live streaming with basic product presentation.",
        features: ["1-hour session", "Single platform", "Basic product presentation", "Post-stream analytics"],
        price: "Starting at Rp 500.000",
        popular: false,
        cta: "View Details", // Teks Call-to-Action
        link: "/services/basic-live-host" // Link tujuan
      },
      {
        id: 2,
        title: "Premium Live Host",
        description: "Experienced host for engaging multi-platform live streams with advanced product storytelling.",
        features: ["2-hour session", "Multi-platform streaming", "Interactive Q&A management", "Complete analytics report", "Product storytelling"],
        price: "Starting at Rp 1.200.000",
        popular: true,
        cta: "Choose Premium",
        link: "/services/premium-live-host"
      },
      {
        id: 3,
        title: "Elite Live Host",
        description: "Top-tier host for comprehensive live commerce solutions with maximum engagement.",
        features: ["3-hour session", "Multi-platform", "Complete engagement strategy", "Dedicated production support", "Premium analytics", "Audience follow-up"],
        price: "Starting at Rp 2.500.000",
        popular: false,
        cta: "Explore Elite",
        link: "/services/elite-live-host"
      },
    ],
    management: [
      {
        id: 1,
        title: "Host Management",
        description: "Complete host management solution for your live commerce needs.",
        features: ["Host selection", "Schedule management", "Performance tracking", "Regular reporting"],
        price: "10% of campaign budget",
        popular: false,
        cta: "Learn More",
        link: "/services/host-management"
      },
      {
        id: 2,
        title: "Full-Service Campaign",
        description: "End-to-end live commerce campaign management with guaranteed results.",
        features: ["Strategy development", "Host management", "Multi-platform coordination", "Performance analytics", "Results guarantee"],
        price: "Custom pricing",
        popular: true,
        cta: "Request Quote",
        link: "/services/full-service-campaign"
      },
    ],
    consulting: [
      {
        id: 1,
        title: "Live Commerce Consultation",
        description: "Expert consultation to optimize your live commerce strategy.",
        features: ["2-hour session", "Strategy review", "Platform recommendations", "Host selection guidance"],
        price: "Rp 1.500.000 per session",
        popular: false,
        cta: "Book Session",
        link: "/services/consultation"
      },
      {
        id: 2,
        title: "Live Commerce Workshop",
        description: "Team workshop for brands looking to establish internal live commerce capabilities.",
        features: ["4-hour workshop", "Team training", "Platform optimization", "Content strategy", "Analytics setup"],
        price: "Rp 5.000.000 per workshop",
        popular: true,
        cta: "Enroll Now",
        link: "/services/workshop"
      },
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white" id="products">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Products & Services</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions to elevate your live commerce strategy and connect with professional hosts.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white/10 rounded-lg backdrop-blur-sm border border-emerald-700/30">
            <button
              onClick={() => setActiveTab('hosting')}
              className={`px-4 sm:px-5 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                activeTab === 'hosting' ? 'bg-yellow-500 text-emerald-900 shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Host Packages
            </button>
            <button
              onClick={() => setActiveTab('management')}
              className={`px-4 sm:px-5 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                activeTab === 'management' ? 'bg-yellow-500 text-emerald-900 shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Management
            </button>
            <button
              onClick={() => setActiveTab('consulting')}
              className={`px-4 sm:px-5 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                activeTab === 'consulting' ? 'bg-yellow-500 text-emerald-900 shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Consulting
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products[activeTab].map((product) => (
            <div
              key={product.id}
              className={`flex flex-col bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border ${
                product.popular ? 'border-yellow-500' : 'border-emerald-700/30'
              }`}
            >
              {product.popular && (
                <div className="bg-yellow-500 text-emerald-900 text-xs font-bold px-3 py-1 text-center">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{product.title}</h3>
                <p className="mt-2 text-gray-300 text-sm flex-grow">{product.description}</p>
                <p className="mt-4 text-2xl font-bold text-yellow-400">{product.price}</p>
                <ul className="mt-6 space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto"> {/* Pushes button to the bottom */}
                  <Link
                    href={product.link || "/contact"}
                    className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors duration-150 text-sm ${
                      product.popular
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-emerald-900'
                        : 'bg-transparent border border-white text-white hover:bg-white hover:text-emerald-900'
                    }`}
                  >
                    {product.cta || "Get Started"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-800/80 to-emerald-700/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-600/50">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-white">Need a Custom Solution?</h3>
              <p className="mt-2 text-emerald-100">
                Contact us for tailored live commerce strategies designed specifically for your brand's unique needs and goals.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex md:justify-end mt-4 md:mt-0">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-emerald-900 font-medium py-3 px-6 rounded-lg transition-colors duration-150 text-sm whitespace-nowrap"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}