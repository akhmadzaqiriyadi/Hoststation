'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  UserPlus,
  ShoppingBag
} from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      if (isScrolled !== showScrollTop) {
        setShowScrollTop(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-emerald-800 to-emerald-900 pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('/pattern-bg.svg')] bg-cover"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* About HostStation */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.svg"
                alt="HostStation Logo"
                width={50}
                height={50}
              />
              <div className="ml-2 text-white font-bold text-lg">
                <span className="text-yellow-500">Host</span>Station
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Connecting professional hosts with events that need them. 
              We provide top-tier hosting services for conferences, weddings, 
              corporate events, and more across the nation.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: Instagram, href: "https://instagram.com/hoststation", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com/hoststationofficial", label: "Facebook" },
                { Icon: Twitter, href: "https://twitter.com/hoststation", label: "Twitter" },
                { Icon: Youtube, href: "https://youtube.com/hoststation", label: "Youtube" }
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700 hover:bg-yellow-500 hover:text-emerald-900 text-white p-2 rounded-full shadow-md transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              {[
                { href: "/#hero", label: "Home" },
                { href: "/#products", label: "Products" },
                { href: "/#training", label: "Training" },
                { href: "/about", label: "About Us" },
                { href: "/events", label: "Events" },
                { href: "/testimonials", label: "Testimonials" }
              ].map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="text-gray-200 hover:text-yellow-400 transition-colors hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Our Services</h3>
            <div className="flex flex-col space-y-3">
              {[
                { href: "/services/conferences", label: "Conference Hosting" },
                { href: "/services/weddings", label: "Wedding MC" },
                { href: "/services/corporate", label: "Corporate Events" },
                { href: "/services/entertainment", label: "Entertainment Shows" },
                { href: "/services/training", label: "Host Training" }
              ].map((service) => (
                <Link 
                  key={service.label} 
                  href={service.href}
                  className="text-gray-200 hover:text-yellow-400 transition-colors hover:translate-x-1 inline-block"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-200">
                  HostStation Building, 123 Event Street, Entertainment District, Metro City
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-200">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-yellow-500 mr-3 flex-shrink-0" />
                <p className="text-gray-200">contact@hoststation.com</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3 mt-6">
              <Link 
                href="/apply" 
                className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-emerald-900 transition-colors flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  <UserPlus size={16} className="mr-2" />
                  Join as Host
                </motion.div>
              </Link>
              
              <Link 
                href="/hire" 
                className="bg-yellow-500 text-emerald-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors flex items-center justify-center font-medium"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  <ShoppingBag size={16} className="mr-2" />
                  Hire Host
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Horizontal Line */}
        <motion.div 
          className="border-t border-emerald-700 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright and Bottom Links */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-yellow-500">Host</span>Station. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-300">
            <Link href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-yellow-400">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-yellow-400">Sitemap</Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatedScrollToTop show={showScrollTop} onClick={scrollToTop} />
    </footer>
  );
};

// Scroll to Top Button Component
const AnimatedScrollToTop = ({ show, onClick }) => {
  return (
    <motion.button
      className={`fixed bottom-8 right-8 bg-yellow-500 text-emerald-900 p-3 rounded-full shadow-lg z-50 ${
        show ? 'flex' : 'hidden'
      }`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.5,
        y: show ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};

export default Footer;