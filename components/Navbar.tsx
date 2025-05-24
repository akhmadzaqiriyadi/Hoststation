'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Handle active section based on scroll position
      const sections = ['home', 'products', 'training', 'about'];
      const sectionElements = sections.map(id => 
        document.getElementById(id === 'home' ? 'hero' : id)
      );
      
      const currentPosition = window.scrollY + 100;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentPosition) {
          if (activeSection !== sections[i]) {
            setActiveSection(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);

  // Navbar item animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Mobile menu animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.2 }
    }
  };

  const navItems = [
    { href: "/#hero", id: "home", label: "Home" },
    { href: "/#products", id: "products", label: "Products" },
    { href: "/#training", id: "training", label: "Training" },
    { href: "/about", id: "about", label: "About Us" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-screen">
      <motion.nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-emerald-900/60 backdrop-blur-md mx-4 md:mx-12 mt-2 rounded-full shadow-lg'
            : 'bg-emerald-900 shadow-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          duration: 0.8 
        }}
      >
        <div className={`container mx-auto px-4 ${scrolled ? 'px-6' : ''}`}>
          <div className="flex justify-between items-center h-20 md:h-16 lg:h-20">
            {/* Logo with animation */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                    <Image 
                      src="/logo.svg" 
                      alt="Logo" 
                      width={50} 
                      height={50} 
                      className="mr-2"
                    />
                  <div className="text-2xl font-bold text-white">
                    <span className="text-yellow-500">Host</span>Station
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation with staggered animations */}
            <div className="hidden md:flex items-center space-x-8 md:space-x-2 lg:space-x-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link 
                    href={item.href} 
                    className={`text-white text-sm font-medium hover:text-yellow-400 transition-colors ${
                      activeSection === item.id ? 'text-yellow-400' : ''
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons with animation */}
            <motion.div 
              className="hidden md:flex space-x-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link 
                href="/apply" 
                className={`border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-indigo-900 transition-colors flex items-center ${
                  scrolled ? 'py-1.5' : 'py-2'
                }`}
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
                className={`bg-yellow-500 text-indigo-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors flex items-center font-medium ${
                  scrolled ? 'py-1.5' : 'py-2'
                }`}
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
            </motion.div>

            {/* Mobile menu button with animation */}
            <motion.div 
              className="md:hidden flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu with animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed top-24 w-screen left-0 right-0 z-40"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className={`mx-4 md:mx-12 bg-emerald-900/95 backdrop-blur-md shadow-lg rounded-2xl border border-emerald-800`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    variants={menuItemVariants}
                    custom={i}
                  >
                    <Link 
                      href={item.href} 
                      className={`block px-4 py-2 text-white hover:bg-indigo-800 rounded-lg ${
                        activeSection === item.id ? 'bg-emerald-800' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={menuItemVariants} className="space-y-2">
                  <Link 
                    href="/apply" 
                    className="flex items-center px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-emerald-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserPlus size={16} className="mr-2" />
                    Join as Host
                  </Link>
                  
                  <Link 
                    href="/hire" 
                    className="flex items-center px-4 py-2 bg-yellow-500 text-emerald-900 font-medium rounded-lg hover:bg-yellow-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShoppingBag size={16} className="mr-2" />
                    Hire Host
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;