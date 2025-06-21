
import { Heart, Mountain, Users, Camera, Plane, MapPin } from 'lucide-react';
import AnimatedCard from '@/components/AnimatedCard';
import ParallaxSection from '@/components/ParallaxSection';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Honeymoon Specials",
      description: "Romantic getaways designed for couples to celebrate their love in breathtaking destinations.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      features: ["Private beach dinners", "Luxury accommodations", "Couple spa treatments", "Sunset cruises"],
      price: "From $1,299"
    },
    {
      icon: Users,
      title: "Family Trips",
      description: "Fun-filled adventures perfect for families with activities for all ages and unforgettable bonding experiences.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      features: ["Kid-friendly activities", "Family accommodations", "Educational tours", "Adventure parks"],
      price: "From $899"
    },
    {
      icon: Mountain,
      title: "Adventure Treks",
      description: "Thrilling expeditions for adventure seekers, from mountain peaks to jungle explorations.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      features: ["Expert guides", "Safety equipment", "Mountain climbing", "Wildlife safaris"],
      price: "From $1,599"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning landscapes and cultural moments with professional photography guidance.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      features: ["Professional guidance", "Best photo spots", "Equipment rental", "Post-processing tips"],
      price: "From $1,199"
    },
    {
      icon: Plane,
      title: "Corporate Retreats",
      description: "Team building experiences and corporate events in inspiring destinations worldwide.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      features: ["Team activities", "Conference facilities", "Networking events", "Custom itineraries"],
      price: "From $799"
    },
    {
      icon: MapPin,
      title: "Cultural Immersion",
      description: "Deep dive into local cultures, traditions, and authentic experiences in exotic destinations.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      features: ["Local guides", "Cultural workshops", "Traditional cuisine", "Historic sites"],
      price: "From $1,099"
    }
  ];

  const additionalServices = [
    "Visa assistance and documentation",
    "Travel insurance coverage",
    "24/7 customer support",
    "Flight booking and reservations",
    "Hotel and accommodation booking",
    "Airport transfers and transportation",
    "Local guide services",
    "Currency exchange assistance"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-300 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <AnimatedCard>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Travel Services
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Tailored experiences for every type of traveler, from romantic getaways to thrilling adventures
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Travel Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated travel experiences
            </p>
          </AnimatedCard>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 150} animation="fadeInUp">
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full group-hover:rotate-12 transition-transform duration-300">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Learn More
                    </button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <ParallaxSection className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete travel solutions to make your journey seamless
            </p>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <AnimatedCard key={index} delay={index * 100} animation="scaleIn">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4"></div>
                  <p className="text-white font-medium">{service}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to your dream vacation
            </p>
          </AnimatedCard>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Choose Package", description: "Select from our curated travel packages or request a custom itinerary" },
              { step: "2", title: "Plan Details", description: "Work with our experts to customize your perfect travel experience" },
              { step: "3", title: "Book & Pay", description: "Secure your booking with flexible payment options and travel insurance" },
              { step: "4", title: "Enjoy Trip", description: "Relax and enjoy your journey with 24/7 support throughout your travels" }
            ].map((process, index) => (
              <AnimatedCard key={index} delay={index * 200} animation="fadeInUp">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white text-2xl font-bold mb-6 group-hover:rotate-12 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our travel experts create the perfect itinerary for your next unforgettable journey.
            </p>
            <div className="space-x-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default Services;
