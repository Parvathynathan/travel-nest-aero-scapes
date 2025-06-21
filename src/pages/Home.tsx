
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, MapPin, Award } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ParallaxSection from '@/components/ParallaxSection';
import AnimatedCard from '@/components/AnimatedCard';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York",
      text: "Travel Nest Holidays made our honeymoon absolutely magical. Every detail was perfect!",
      rating: 5
    },
    {
      name: "Mike Chen",
      location: "California",
      text: "Best travel experience ever! The team went above and beyond our expectations.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      location: "London",
      text: "Professional service and amazing destinations. Highly recommended!",
      rating: 5
    }
  ];

  const packages = [
    {
      title: "Tropical Paradise",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      duration: "5 Days",
      location: "Maldives"
    },
    {
      title: "Mountain Adventure",
      price: "$899",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      duration: "7 Days",
      location: "Switzerland"
    },
    {
      title: "Cultural Explorer",
      price: "$1,599",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      duration: "10 Days",
      location: "Japan"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500"></div>
        <AnimatedBackground />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 animate-pulse">
              Next Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up opacity-90" style={{ animationDelay: '0.3s' }}>
            Create unforgettable memories with Travel Nest Holidays
          </p>
          <div className="space-x-4">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 animate-bounce-in shadow-lg hover:shadow-xl"
              style={{ animationDelay: '0.6s' }}
            >
              Explore Packages
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: '0.8s' }}
            >
              Plan Your Trip
            </Link>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-yellow-300 rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-8 h-8 bg-pink-300 rounded-full opacity-30"></div>
        </div>
        <div className="absolute bottom-20 left-20 animate-float-slow">
          <div className="w-12 h-12 bg-blue-300 rounded-full opacity-25"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '10K+', label: 'Happy Travelers' },
              { icon: MapPin, number: '50+', label: 'Destinations' },
              { icon: Award, number: '15+', label: 'Years Experience' },
              { icon: Star, number: '4.9', label: 'Average Rating' }
            ].map((stat, index) => (
              <AnimatedCard key={index} delay={index * 200} animation="scaleIn">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 transform hover:rotate-12 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <ParallaxSection className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Holiday Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most popular destinations and create memories that last a lifetime
            </p>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <AnimatedCard key={index} delay={index * 200} animation="fadeInUp">
                <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
                  <div className="aspect-w-16 aspect-h-12">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold">{pkg.title}</h3>
                      <span className="text-2xl font-bold text-yellow-400">{pkg.price}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>{pkg.duration}</span>
                      <span>{pkg.location}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Popular
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from real travelers
            </p>
          </AnimatedCard>

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl p-8 md:p-12">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us help you create unforgettable memories. Contact us today for a personalized travel experience.
            </p>
            <Link
              to="/enquiry"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-12 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
            >
              Start Planning Now
            </Link>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
