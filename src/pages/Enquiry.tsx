
import { useState } from 'react';
import { Calendar, Users, MapPin, Mail, Phone, User } from 'lucide-react';
import AnimatedCard from '@/components/AnimatedCard';
import { useToast } from '@/hooks/use-toast';

const Enquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDates: '',
    numberOfPeople: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Submitted Successfully!",
        description: "Thank you for your interest. Our travel experts will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDates: '',
        numberOfPeople: '',
        specialRequests: ''
      });
    }, 2000);
  };

  const popularDestinations = [
    "Maldives", "Switzerland", "Japan", "Thailand", "Norway", "Iceland", 
    "New Zealand", "Bali", "Greece", "Italy", "Dubai", "Singapore"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <AnimatedCard>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Plan Your Dream Trip
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Tell us about your travel dreams and let our experts create the perfect itinerary for you
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Travel Enquiry Form
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our travel experts will get back to you with a customized quote
            </p>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Let's Plan Your Adventure</h3>
                <p className="opacity-90">Every great journey begins with a single step</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <User className="inline h-5 w-5 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none group-hover:border-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Mail className="inline h-5 w-5 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none group-hover:border-gray-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Phone className="inline h-5 w-5 mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none group-hover:border-gray-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Destination Field */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <MapPin className="inline h-5 w-5 mr-2" />
                      Travel Destination *
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none group-hover:border-gray-300"
                    >
                      <option value="">Select a destination</option>
                      {popularDestinations.map((destination) => (
                        <option key={destination} value={destination}>{destination}</option>
                      ))}
                      <option value="other">Other (specify in special requests)</option>
                    </select>
                  </div>

                  {/* Travel Dates Field */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Calendar className="inline h-5 w-5 mr-2" />
                      Preferred Travel Dates *
                    </label>
                    <input
                      type="text"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none group-hover:border-gray-300"
                      placeholder="e.g., March 15-25, 2024"
                    />
                  </div>

                  {/* Number of People Field */}
                  <div className="group">
                    <label className="block text-gray-700 font-semibold mb-2">
                      <Users className="inline h-5 w-5 mr-2" />
                      Number of People *
                    </label>
                    <select
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none group-hover:border-gray-300"
                    >
                      <option value="">Select number of people</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-8">5-8 People</option>
                      <option value="9+">9+ People</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests Field */}
                <div className="group">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Special Requests & Preferences
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none group-hover:border-gray-300 resize-none"
                    placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, preferred activities, budget range, or any other details that would help us create your perfect trip..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Submitting...
                      </>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </button>
                </div>

                <p className="text-center text-gray-600 text-sm mt-4">
                  * Required fields. We'll get back to you within 24 hours with a customized quote.
                </p>
              </form>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Travel Nest Holidays?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience the difference with our personalized service
            </p>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Service",
                description: "Every itinerary is customized to your preferences and budget",
                icon: "🎯"
              },
              {
                title: "Expert Knowledge",
                description: "Our travel consultants have firsthand experience of destinations",
                icon: "🌟"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance during your travels for peace of mind",
                icon: "🛡️"
              }
            ].map((feature, index) => (
              <AnimatedCard key={index} delay={index * 200} animation="fadeInUp">
                <div className="text-center text-white">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
