// TrainingSection.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function TrainingSection() {
  const trainingPrograms = [
    {
      id: 1,
      title: "Beginner Host Bootcamp",
      description: "Start your journey as a professional live streaming host with our foundational bootcamp",
      duration: "2 weeks",
      format: "Online + Live Practice",
      features: [
        "Live streaming fundamentals",
        "Communication skills",
        "Product presentation basics",
        "Platform navigation",
        "Live Q&A handling"
      ],
      price: "Rp 1.500.000",
      image: "/api/placeholder/600/400",
    },
    {
      id: 2,
      title: "Professional Host Certification",
      description: "Elevate your hosting skills and get certified as a professional live commerce host",
      duration: "1 month",
      format: "Hybrid (Online + In-person)",
      features: [
        "Advanced communication techniques",
        "Product storytelling",
        "Audience engagement strategies",
        "Multi-platform expertise",
        "Analytics understanding",
        "Official certification"
      ],
      price: "Rp 3.500.000",
      image: "/api/placeholder/600/400",
    },
    {
      id: 3,
      title: "Elite Host Masterclass",
      description: "For experienced hosts looking to master advanced techniques and maximize sales conversion",
      duration: "6 weeks",
      format: "Premium Hybrid + Mentoring",
      features: [
        "Conversion optimization",
        "Personal branding",
        "Crisis management",
        "Advanced audience psychology",
        "Brand partnership skills",
        "1-on-1 mentoring"
      ],
      price: "Rp 7.500.000",
      image: "/api/placeholder/600/400",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Anisa Rahma",
      role: "Professional Host",
      content: "HostStation's training completely transformed my career. I went from being a complete beginner to hosting for major brands within 3 months. The practical skills and connections I gained are invaluable.",
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Fashion Brand Manager",
      content: "We've hired several hosts from HostStation and the quality difference is clear. Their trained hosts understand product positioning and customer engagement at a professional level.",
      image: "/api/placeholder/80/80",
    },
  ];
  
  return (
    <section className="py-20 bg-white" id="training">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Training Programs</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Turn your communication skills into a professional career with our specialized host training programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {trainingPrograms.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {program.format}
                  </span>
                  <p className="text-white text-sm mt-2">
                    Duration: {program.duration}
                  </p>
                </div>
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                <p className="mt-2 text-gray-600">{program.description}</p>
                
                <ul className="mt-6 space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-yellow-500">✓</span>
                      <span className="ml-2 text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-indigo-600">{program.price}</p>
                    <Link 
                      href="/apply" 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-indigo-900">Host Selection Process</h3>
              <p className="mt-2 text-indigo-700">
                Join our network of professional hosts and gain access to opportunities with top brands
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-bold">Application</h4>
                    <p className="text-sm text-gray-600">Submit your application with basic information and experience</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-bold">Training Assessment</h4>
                    <p className="text-sm text-gray-600">Complete our assessment to determine your training needs</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-bold">Training Program</h4>
                    <p className="text-sm text-gray-600">Join the appropriate training program based on your level</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="font-bold">Certification</h4>
                    <p className="text-sm text-gray-600">Get certified and join our talent pool for brand opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-white font-bold text-2xl">Join 120+ Professional Hosts</p>
                <p className="text-gray-200 mt-2">Average income increase of 75% after certification</p>
                <Link 
                  href="/apply" 
                  className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg transition"
                >
                  Start Your Journey
                </Link>
              </div>
              <div className="w-full h-full bg-gray-400"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">What Our Community Says</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300"></div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/testimonials" 
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Read More Success Stories →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}