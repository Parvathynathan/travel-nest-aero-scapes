
import { Award, Users, MapPin, Heart, Shield, Clock } from 'lucide-react';
import AnimatedCard from '@/components/AnimatedCard';
import ParallaxSection from '@/components/ParallaxSection';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We live and breathe travel, bringing that passion to every journey we plan for you."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your safety and satisfaction are our top priorities. We ensure secure and reliable travel experiences."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced travel consultants have explored the world to bring you insider knowledge."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional service and unforgettable experiences every time."
    },
    {
      icon: MapPin,
      title: "Global Network",
      description: "Partnerships worldwide ensure authentic experiences and local expertise wherever you go."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your travels are smooth and worry-free."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence", color: "from-blue-500 to-cyan-500" },
    { number: "10,000+", label: "Happy Travelers", color: "from-green-500 to-emerald-500" },
    { number: "50+", label: "Destinations", color: "from-purple-500 to-pink-500" },
    { number: "98%", label: "Satisfaction Rate", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-300 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <AnimatedCard>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Travel Nest Holidays
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Your trusted partner in creating extraordinary travel experiences since 2008
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard animation="fadeInLeft">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2008 with a simple mission: to make travel accessible, enjoyable, and unforgettable for everyone. What started as a small family business has grown into one of the most trusted travel companies, serving thousands of happy travelers worldwide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe that travel is not just about visiting places—it's about creating connections, discovering cultures, and making memories that last a lifetime. Our dedicated team of travel experts works tirelessly to craft personalized experiences that exceed your expectations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From exotic honeymoon destinations to thrilling adventure tours, family vacations to corporate retreats, we handle every detail with care and precision, ensuring your journey is as smooth as it is spectacular.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard animation="fadeInRight" delay={200}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                  alt="Mountain landscape"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ParallaxSection className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These numbers tell the story of our commitment to excellence
            </p>
          </AnimatedCard>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 150} animation="scaleIn">
                <div className="text-center group">
                  <div className={`inline-block p-8 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-xl font-semibold text-white">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 100} animation="fadeInUp">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300 rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-white/90 leading-relaxed mb-8">
              "To inspire and enable people to explore the world, creating meaningful connections 
              between travelers and destinations while ensuring every journey is safe, 
              memorable, and transformative."
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default About;
