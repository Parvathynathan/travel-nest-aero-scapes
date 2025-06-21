
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedCard from '@/components/AnimatedCard';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@travelnestholidays.com", "bookings@travelnestholidays.com"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Travel Street", "Adventure City, AC 12345"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 9AM - 7PM", "Sat - Sun: 10AM - 4PM"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <AnimatedCard>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Ready to start your adventure? Get in touch with our travel experts today
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you plan your perfect vacation
            </p>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <AnimatedCard key={index} delay={index * 150} animation="bounceIn">
                <div className="text-center group">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <info.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Drop by for a face-to-face consultation with our travel experts
            </p>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1633024875924!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-gray-900">Travel Nest Holidays HQ</h3>
                <p className="text-gray-600 text-sm">123 Travel Street, Adventure City</p>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </AnimatedCard>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book my trip?",
                answer: "We recommend booking 2-3 months in advance for international trips and 4-6 weeks for domestic travel to ensure the best rates and availability."
              },
              {
                question: "Do you provide travel insurance?",
                answer: "Yes, we offer comprehensive travel insurance options to protect your investment and provide peace of mind during your travels."
              },
              {
                question: "Can you help with visa requirements?",
                answer: "Absolutely! Our team provides complete visa assistance and documentation support for all destinations that require them."
              },
              {
                question: "What happens if I need to cancel my trip?",
                answer: "We offer flexible cancellation policies and will work with you to minimize any fees. Terms vary depending on the booking and timing of cancellation."
              }
            ].map((faq, index) => (
              <AnimatedCard key={index} delay={index * 100} animation="fadeInLeft">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Plan Your Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't wait any longer. Contact us today and let's start planning your dream vacation together.
            </p>
            <div className="space-x-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Call Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
                Send Email
              </button>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default Contact;
