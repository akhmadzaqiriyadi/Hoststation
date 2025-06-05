'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Upload, CheckCircle2, ArrowLeft, Users, TrendingUp, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  fullName: string;
  gender: string;
  whatsapp: string;
  socialMedia: string;
  description: string;
  education: string;
  skills: string;
  experience: string;
  clients: string;
  portfolio: File[];
  paymentProof: File | null;
  dataAgreement: boolean;
  termsAgreement: boolean;
}

export default function ProfessionalHostForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    gender: '',
    whatsapp: '',
    socialMedia: '',
    description: '',
    education: '',
    skills: '',
    experience: '',
    clients: '',
    portfolio: [],
    paymentProof: null,
    dataAgreement: false,
    termsAgreement: false
  });

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean | File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    const fileArray = Array.from(files).slice(0, 5); // Max 5 files
    setFormData(prev => ({
      ...prev,
      portfolio: [...prev.portfolio, ...fileArray].slice(0, 5)
    }));
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      portfolio: prev.portfolio.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Professional form submitted:', formData);
    // Handle form submission
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 pb-12 pt-28 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-8"
        >
          <Link href="/join-host" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition-colors mr-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Pilihan Host
          </Link>
          
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-yellow-500/30">
            <Star className="w-5 h-5" />
            <span className="font-semibold">Host Profesional</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Formulir Pendaftaran Host
          </h1>
          <p className="text-emerald-200 text-lg mb-8">
            Hai, calon host kece! 😎 Pengen dapet job live streaming dari berbagai brand dan cuan tiap bulan?
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          variants={fadeIn}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white">High Earning</span>
            </div>
            <p className="text-emerald-200 text-sm">Potensi penghasilan hingga jutaan rupiah per bulan</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-400" />
              <span className="font-semibold text-white">Premium Brands</span>
            </div>
            <p className="text-emerald-200 text-sm">Bekerja sama dengan brand-brand terkemuka</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-green-400" />
              <span className="font-semibold text-white">Career Growth</span>
            </div>
            <p className="text-emerald-200 text-sm">Pengembangan karir dan skill profesional</p>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div 
          variants={fadeIn}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-emerald-200 text-sm font-medium mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-yellow-500 focus:outline-none"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              
              <div>
                <label className="block text-emerald-200 text-sm font-medium mb-2">
                  Jenis Kelamin *
                </label>
                <select
                  required
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
                >
                  <option value="">Pilih jenis kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                Nomor WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-yellow-500 focus:outline-none"
                placeholder="08123456789"
              />
            </div>

            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                Social Media (Instagram, TikTok) *
              </label>
              <textarea
                required
                rows={2}
                value={formData.socialMedia}
                onChange={(e) => handleInputChange('socialMedia', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-yellow-500 focus:outline-none resize-none"
                placeholder="@instagram_kamu, @tiktok_kamu"
              />
            </div>

            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                Deskripsikan Tentang Dirimu *
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-yellow-500 focus:outline-none resize-none"
                placeholder="Ceritakan tentang diri kamu, kepribadian, dan kenapa kamu cocok jadi host..."
              />
            </div>

            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                <GraduationCap className="inline w-4 h-4 mr-1" />
                Riwayat Pendidikan *
              </label>
              <textarea
                required
                rows={3}
                value={formData.education}
                onChange={(e) => handleInputChange('education', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-yellow-500 focus:outline-none resize-none"
                placeholder="Pendidikan terakhir, jurusan, tahun lulus..."
              />
            </div>

            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                <Sparkles className="inline w-4 h-4 mr-1" />
                Skill yang Dimiliki
              </label>
              <textarea
                rows={3}
                value={formData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-yellow-500 focus:outline-none resize-none"
                placeholder="Public speaking, content creation, sales, dll..."
              />
            </div>

            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                <Briefcase className="inline w-4 h-4 mr-1" />
                Pengalaman Kerja
              </label>
              <textarea
                rows={4}
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-yellow-500 focus:outline-none resize-none"
                placeholder="Pengalaman kerja, hosting, content creation, atau pengalaman relevan lainnya..."
              />
            </div>

            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                Klien yang Pernah Bekerjasama
              </label>
              <textarea
                rows={3}
                value={formData.clients}
                onChange={(e) => handleInputChange('clients', e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-yellow-500 focus:outline-none resize-none"
                placeholder="Nama brand, perusahaan, atau klien yang pernah bekerjasama..."
              />
            </div>

            {/* Portfolio Upload */}
            <div>
              <label className="block text-emerald-200 text-sm font-medium mb-2">
                Lampirkan Portofolio kamu ya *
              </label>
              <div 
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-yellow-500 bg-yellow-500/10' 
                    : 'border-white/20 hover:border-yellow-500/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="w-10 h-10 text-emerald-300 mx-auto mb-4" />
                <p className="text-emerald-200 mb-2">
                  Drag & drop files atau klik untuk upload
                </p>
                <p className="text-emerald-300 text-sm mb-4">
                  Upload maksimal 5 file. Max 10 MB per file
                </p>
                <p className="text-emerald-300 text-xs">
                  Format: JPG, PNG, PDF, MP4, MOV
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*,.pdf"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files) {
                      handleFileUpload(e.target.files);
                    }
                  }}
                  className="hidden"
                  id="portfolio-upload"
                />
                <label
                  htmlFor="portfolio-upload"
                  className="inline-block mt-4 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 px-6 py-2 rounded-lg cursor-pointer transition-colors"
                >
                  Pilih File
                </label>
              </div>
              
              {/* Uploaded Files */}
              {formData.portfolio.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-emerald-200 text-sm font-medium">File yang diupload:</p>
                  {formData.portfolio.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-emerald-100 text-sm truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        Hapus
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Registration Fee */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Fee Pendaftaran
              </h3>
              <p className="text-2xl font-bold text-yellow-400 mb-2">Rp 100.000</p>
              <p className="text-emerald-200 text-sm mb-4">
                Biaya pendaftaran untuk proses seleksi dan verifikasi portofolio
              </p>
              
              <div>
                <label className="block text-emerald-200 text-sm font-medium mb-2">
                  Upload bukti pembayaran (jika sudah transfer)
                </label>
                <div className="border border-white/20 rounded-lg p-4 bg-white/5">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const file = e.target.files?.[0] || null;
                      handleInputChange('paymentProof', file);
                    }}
                    className="w-full text-emerald-200 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Agreement */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white">Persetujuan</h3>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.dataAgreement}
                  onChange={(e) => handleInputChange('dataAgreement', e.target.checked)}
                  className="w-4 h-4 text-yellow-500 mt-1"
                  required
                />
                <span className="text-emerald-100 text-sm">
                  ✅ Saya menyatakan bahwa semua data yang saya berikan adalah benar dan dapat dipertanggungjawabkan
                </span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.termsAgreement}
                  onChange={(e) => handleInputChange('termsAgreement', e.target.checked)}
                  className="w-4 h-4 text-yellow-500 mt-1"
                  required
                />
                <span className="text-emerald-100 text-sm">
                  ✅ Saya bersedia mengikuti ketentuan dan proses seleksi HostStation
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={!formData.dataAgreement || !formData.termsAgreement}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-emerald-900 font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
              >
                <span>Kirim Aplikasi</span>
                <CheckCircle2 className="w-6 h-6" />
              </button>
              
              <p className="text-emerald-300 text-sm text-center mt-4">
                Tim kami akan review aplikasi kamu dan menghubungi dalam 2-3 hari kerja
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}