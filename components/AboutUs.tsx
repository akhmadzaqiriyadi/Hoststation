'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Target,
  Check,
  Clock,
  MapPin
} from 'lucide-react';

export default function AboutUs() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } }
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

  const cardItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
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
          <motion.div
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h1 
              variants={slideUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <motion.span 
                initial={{ color: "#FACC15" }}
                animate={{ color: "#FCD34D" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="text-yellow-400"
              >Host</motion.span>Station
            </motion.h1>
            
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-200 mb-8"
            >
              Transforming the live commerce industry with professional hosts,
              innovative solutions, and measurable results.
            </motion.p>
            
            <motion.div 
              variants={staggerContainer}
              className="flex justify-center space-x-4 mt-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <Link
                  href="/hire"
                  className="bg-yellow-500 text-emerald-900 px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors flex items-center font-medium"
                >
                  Work With Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              variants={slideInLeft}
              className="w-full md:w-1/2"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 rounded-lg overflow-hidden shadow-xl"
                >
                  <Image 
                    src="/about-image.jpg" 
                    alt="Our Story" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-yellow-500 text-emerald-900 p-4 rounded-lg shadow-lg z-20 max-w-xs"
                >
                  <p className="font-bold">Founded in 2021</p>
                  <p className="text-sm">From a team of 5 to industry leaders</p>
                </motion.div>
                <div className="absolute -z-10 inset-y-0 left-0 w-3/4 bg-emerald-100 rounded-lg -ml-4 -mt-4"></div>
              </div>
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl font-bold text-emerald-900">Our Story</h2>
              <div className="w-20 h-1 bg-yellow-500"></div>
              <p className="text-gray-700">
                HostStation was born from a simple observation: brands were struggling to connect with 
                their audience in the rapidly evolving digital landscape. As e-commerce shifted towards 
                live selling experiences, there was a clear gap in professional hosting talent.
              </p>
              <p className="text-gray-700">
                Founded by a team of marketing experts and former live streaming professionals in 2021, 
                we set out to create a platform that would connect brands with well-trained, charismatic 
                hosts who could drive engagement and sales through live commerce.
              </p>
              <p className="text-gray-700">
                What started as a small agency with just 5 hosts in Metro City has now grown into a nationwide 
                network of over 120 professional hosts serving clients across multiple industries. Our commitment 
                to quality, training, and measurable results has made us the go-to solution for brands looking to 
                excel in live commerce.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Our Core Values</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              At HostStation, our values guide everything we do - from how we train our hosts 
              to how we work with our clients and measure success.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Users className="w-10 h-10 text-emerald-600" />,
                title: "People First",
                description: "We invest in our hosts, providing continuous training and opportunities for growth."
              },
              {
                icon: <Award className="w-10 h-10 text-emerald-600" />,
                title: "Excellence",
                description: "We maintain the highest standards in our training, hosts selection, and client service."
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-emerald-600" />,
                title: "Results Driven",
                description: "We focus on measurable outcomes that directly impact our clients' bottom line."
              },
              {
                icon: <Target className="w-10 h-10 text-emerald-600" />,
                title: "Innovation",
                description: "We constantly explore new techniques and technologies to improve live commerce."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={cardItem}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-500"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-emerald-900 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose HostStation</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-200">
              When you partner with HostStation, you're getting more than just a host. 
              You're getting a complete solution that elevates your live commerce strategy.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={slideInLeft}
              className="bg-emerald-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">What Sets Us Apart</h3>
              <div className="space-y-4">
                {[
                  "Rigorous host training and certification process",
                  "Specialized hosts for different product categories",
                  "Data-driven approach to measuring results",
                  "Comprehensive support from planning to execution",
                  "Proprietary engagement techniques to maximize conversion"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Check className="w-5 h-5 text-yellow-500" />
                    </div>
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              className="bg-emerald-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Consultation",
                    description: "We understand your brand, products, and objectives to create a tailored strategy."
                  },
                  {
                    title: "Host Matching",
                    description: "We pair you with hosts who align with your brand values and have expertise in your industry."
                  },
                  {
                    title: "Preparation",
                    description: "Collaborative planning to ensure hosts are well-versed in your products and messaging."
                  },
                  {
                    title: "Execution",
                    description: "Professional live streaming with real-time engagement and sales optimization."
                  },
                  {
                    title: "Analysis",
                    description: "Detailed reporting on performance metrics and recommendations for improvement."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500 text-emerald-900 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{step.title}</h4>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Meet Our Leadership</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Our diverse team of industry experts is committed to revolutionizing the live commerce space
              and delivering exceptional results for our clients and hosts.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                image: "/team-1.jpg",
                bio: "Former e-commerce executive with 10+ years experience in digital marketing and live streaming."
              },
              {
                name: "Marcus Johnson",
                role: "Head of Host Training",
                image: "/team-2.jpg",
                bio: "Professional TV host turned digital strategist with expertise in performance coaching."
              },
              {
                name: "Leila Patel",
                role: "Chief Operations Officer",
                image: "/team-3.jpg",
                bio: "Operations specialist who has scaled multiple startups in the digital space."
              },
              {
                name: "David Rodriguez",
                role: "Client Success Director",
                image: "/team-4.jpg",
                bio: "Customer experience expert focused on building lasting brand partnerships."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={cardItem}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-emerald-200"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-900">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </motion.div>
          
          <motion.div
            variants={slideUp}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-24 h-24 rounded-full bg-emerald-100 flex-shrink-0"></div>
              <div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl italic text-gray-700 mb-6">
                  "Partnering with HostStation transformed our approach to product launches. Our live commerce 
                  sales increased by 136% in the first quarter alone. Their hosts not only understand our products 
                  but also know exactly how to engage with our audience and drive conversions."
                </blockquote>
                <div>
                  <p className="font-bold text-emerald-900">Rebecca Liu</p>
                  <p className="text-gray-600">Marketing Director, TrendyTech Accessories</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-emerald-900 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Live Commerce Strategy?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join the hundreds of brands that have transformed their sales approach with HostStation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/hire"
                  className="bg-yellow-500 text-emerald-900 px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors font-medium block"
                >
                  Hire a Host
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-emerald-900 transition-colors block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}