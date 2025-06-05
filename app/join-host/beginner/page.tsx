'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Upload, CheckCircle2, Calendar, Smartphone, ArrowLeft, Clock, Star } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  fullName: string;
  gender: string;
  birthDate: string;
  domicile: string;
  whatsapp: string;
  email: string;
  instagram: string;
  tiktok: string;
  motivation: string;
  trainingWilling: string;
  hasEquipment: string;
  selectedBatch: string;
  paymentProof: File | null;
  additionalNotes: string;
  dataAgreement: boolean;
  termsAgreement: boolean;
}

export default function BeginnerHostForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    gender: '',
    birthDate: '',
    domicile: '',
    whatsapp: '',
    email: '',
    instagram: '',
    tiktok: '',
    motivation: '',
    trainingWilling: '',
    hasEquipment: '',
    selectedBatch: '',
    paymentProof: null,
    additionalNotes: '',
    dataAgreement: false,
    termsAgreement: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const trainingBatches = [
    {
      id: 'batch-a',
      name: "Batch A - Weekend",
      date: "15-16 Juni 2025",
      time: "09:00 - 17:00 WIB",
      location: "Jakarta Training Center",
      instructor: "Sarah Chen",
      spots: 12,
      price: "Rp 500.000",
      popular: false,
      description: "Program pelatihan dasar untuk pemula"
    },
    {
      id: 'batch-b',
      name: "Batch B - Intensive",
      date: "22-23 Juni 2025",
      time: "09:00 - 17:00 WIB",
      location: "Jakarta Training Center",
      instructor: "Michael Tan",
      spots: 8,
      price: "Rp 750.000",
      popular: true,
      description: "Program intensif dengan praktik lebih banyak"
    },
    {
      id: 'batch-c',
      name: "Batch C - Premium",
      date: "29-30 Juni 2025",
      time: "09:00 - 17:00 WIB",
      location: "Premium Studio",
      instructor: "Lisa Wong",
      spots: 6,
      price: "Rp 1.200.000",
      popular: false,
      description: "Program premium dengan mentoring personal"
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string | boolean | File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const progressWidth = (currentStep / totalSteps) * 100;

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
          <Link href="/join-host" className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-6 transition-colors mr-12">
            <ArrowLeft className="w-4 h-4 mr-4" />
            Kembali ke Pilihan Host
          </Link>
          
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-blue-500/30">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Host Pemula</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Daftar Host Pemula
          </h1>
          <p className="text-emerald-200 text-lg">
            Isi formulir pendaftaran untuk memulai perjalanan karir hosting kamu
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-emerald-200 text-sm">Langkah {currentStep} dari {totalSteps}</span>
            <span className="text-emerald-200 text-sm">{Math.round(progressWidth)}% selesai</span>
          </div>
          <div className="w-full bg-emerald-800/30 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressWidth}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Training Batches Selection */}
        <motion.div 
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Pilih Batch Pelatihan</h2>
          <div className="grid gap-6">
            {trainingBatches.map((batch) => (
              <motion.div
                key={batch.id}
                whileHover={{ scale: 1.02 }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border cursor-pointer transition-all ${
                  formData.selectedBatch === batch.id 
                    ? 'border-yellow-500/50 bg-yellow-500/10' 
                    : batch.popular 
                      ? 'border-yellow-500/30' 
                      : 'border-white/10'
                } hover:border-yellow-500/50`}
                onClick={() => handleInputChange('selectedBatch', batch.id)}
              >
                {batch.popular && (
                  <div className="absolute -top-3 -right-3 bg-yellow-500 text-emerald-900 px-3 py-1 rounded-full font-bold text-xs">
                    POPULAR
                  </div>
                )}

                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <input
                        type="radio"
                        name="selectedBatch"
                        value={batch.id}
                        checked={formData.selectedBatch === batch.id}
                        onChange={(e) => handleInputChange('selectedBatch', e.target.value)}
                        className="w-4 h-4 text-yellow-500"
                      />
                      <h3 className="md:text-md text-lg font-bold text-white">
                        {batch.name}
                      </h3>
                    </div>
                    <p className="text-emerald-200 text-sm mb-2">{batch.description}</p>
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
                    <p className="text-emerald-200 text-sm flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3" />
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

                  <div className="text-right">
                    <p className="text-2xl font-bold text-yellow-400 mb-1">
                      {batch.price}
                    </p>
                    <p className="text-emerald-200 text-sm">
                      Investasi pelatihan
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div 
          variants={fadeIn}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Bagian 1: Data Diri</h3>
                
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
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-blue-500 focus:outline-none"
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
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">Pilih jenis kelamin</option>
                      <option value="male">Laki-laki</option>
                      <option value="female">Perempuan</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-emerald-200 text-sm font-medium mb-2">
                      Tanggal Lahir *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-200 text-sm font-medium mb-2">
                      Domisili (Kota/Kabupaten) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.domicile}
                      onChange={(e) => handleInputChange('domicile', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-blue-500 focus:outline-none"
                      placeholder="Contoh: Jakarta Selatan"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-emerald-200 text-sm font-medium mb-2">
                      Nomor WhatsApp Aktif *
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-300" />
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-emerald-300 focus:border-blue-500 focus:outline-none"
                        placeholder="08123456789"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-emerald-200 text-sm font-medium mb-2">
                      Email Aktif *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-blue-500 focus:outline-none"
                      placeholder="contoh@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-emerald-200 text-sm font-medium mb-2">
                      Akun Instagram
                    </label>
                    <input
                      type="text"
                      value={formData.instagram}
                      onChange={(e) => handleInputChange('instagram', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-blue-500 focus:outline-none"
                      placeholder="@username"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-emerald-200 text-sm font-medium mb-2">
                      Akun TikTok (jika ada)
                    </label>
                    <input
                      type="text"
                      value={formData.tiktok}
                      onChange={(e) => handleInputChange('tiktok', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-blue-500 focus:outline-none"
                      placeholder="@username"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Bagian 2: Informasi Tambahan</h3>
                
                <div>
                  <label className="block text-emerald-200 text-sm font-medium mb-2">
                    Mengapa kamu tertarik menjadi host live streaming? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Tulis motivasi kamu dalam paragraf singkat..."
                  />
                </div>

                <div>
                  <label className="block text-emerald-200 text-sm font-medium mb-4">
                    Apakah kamu bersedia mengikuti pelatihan (workshop intensif)? *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="trainingWilling"
                        value="yes"
                        checked={formData.trainingWilling === 'yes'}
                        onChange={(e) => handleInputChange('trainingWilling', e.target.value)}
                        className="w-4 h-4 text-blue-500"
                      />
                      <span className="text-emerald-100">Ya, bersedia ikut pelatihan</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="trainingWilling"
                        value="no"
                        checked={formData.trainingWilling === 'no'}
                        onChange={(e) => handleInputChange('trainingWilling', e.target.value)}
                        className="w-4 h-4 text-blue-500"
                      />
                      <span className="text-emerald-100">Tidak</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-emerald-200 text-sm font-medium mb-4">
                    Apakah kamu memiliki alat pendukung live streaming sendiri? *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="hasEquipment"
                        value="yes"
                        checked={formData.hasEquipment === 'yes'}
                        onChange={(e) => handleInputChange('hasEquipment', e.target.value)}
                        className="w-4 h-4 text-blue-500"
                      />
                      <span className="text-emerald-100">Ya (HP + ring light/tripod)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="hasEquipment"
                        value="no"
                        checked={formData.hasEquipment === 'no'}
                        onChange={(e) => handleInputChange('hasEquipment', e.target.value)}
                        className="w-4 h-4 text-blue-500"
                      />
                      <span className="text-emerald-100">Tidak</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-emerald-200 text-sm font-medium mb-2">
                    Upload bukti pembayaran pelatihan (jika sudah transfer)
                  </label>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-emerald-300 mx-auto mb-2" />
                    <p className="text-emerald-200 text-sm mb-1">Klik untuk upload atau drag & drop</p>
                    <p className="text-emerald-300 text-xs">Format: JPG, PNG, PDF (Max 5MB)</p>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const file = e.target.files?.[0] || null;
                        handleInputChange('paymentProof', file);
                      }}
                      className="hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-emerald-200 text-sm font-medium mb-2">
                    Catatan tambahan (opsional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-emerald-300 focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Ada hal lain yang ingin kamu sampaikan?"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Bagian 3: Persetujuan</h3>
                
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Ringkasan Pendaftaran</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-emerald-200">Nama: <span className="text-white">{formData.fullName}</span></p>
                    <p className="text-emerald-200">Email: <span className="text-white">{formData.email}</span></p>
                    <p className="text-emerald-200">WhatsApp: <span className="text-white">{formData.whatsapp}</span></p>
                    <p className="text-emerald-200">Batch Pelatihan: <span className="text-white">
                      {formData.selectedBatch ? 
                        trainingBatches.find(b => b.id === formData.selectedBatch)?.name : 
                        'Belum dipilih'}
                    </span></p>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.dataAgreement}
                      onChange={(e) => handleInputChange('dataAgreement', e.target.checked)}
                      className="w-4 h-4 text-blue-500 mt-1"
                      required
                    />
                    <span className="text-emerald-100 text-sm">
                      ✅ Saya menyatakan data yang saya berikan adalah benar dan dapat dipertanggungjawabkan
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.termsAgreement}
                      onChange={(e) => handleInputChange('termsAgreement', e.target.checked)}
                      className="w-4 h-4 text-blue-500 mt-1"
                      required
                    />
                    <span className="text-emerald-100 text-sm">
                      ✅ Saya bersedia mengikuti ketentuan dan proses seleksi HostStation
                    </span>
                  </label>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                  <p className="text-yellow-300 text-sm">
                    <strong>Informasi:</strong> Setelah submit, tim kami akan menghubungi kamu dalam 1-2 hari kerja untuk konfirmasi dan langkah selanjutnya.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-white/10">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors"
                >
                  Sebelumnya
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={() => {
                    if (currentStep === 1 && !formData.selectedBatch) {
                      alert('Silakan pilih batch pelatihan terlebih dahulu');
                      return;
                    }
                    setCurrentStep(prev => prev + 1);
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-xl transition-all"
                >
                  Selanjutnya
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!formData.dataAgreement || !formData.termsAgreement}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-8 rounded-xl transition-all flex items-center gap-2"
                >
                  <span>Kirim Pendaftaran</span>
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}