
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedCard from '@/components/AnimatedCard';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      title: "Tropical Paradise",
      location: "Maldives",
      category: "Beach"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Mountain Peak",
      location: "Switzerland",
      category: "Mountain"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      title: "River Valley",
      location: "Norway",
      category: "Nature"
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      title: "Misty Summit",
      location: "Nepal",
      category: "Mountain"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Wildlife Safari",
      location: "Kenya",
      category: "Wildlife"
    },
    {
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      title: "Savanna Sunset",
      location: "Tanzania",
      category: "Wildlife"
    },
    {
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      title: "Desert Expedition",
      location: "Morocco",
      category: "Desert"
    },
    {
      src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
      title: "Countryside Beauty",
      location: "Ireland",
      category: "Nature"
    }
  ];

  const categories = ["All", "Beach", "Mountain", "Nature", "Wildlife", "Desert"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-300 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <AnimatedCard>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Travel Gallery
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Explore breathtaking destinations through our lens and get inspired for your next adventure
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <AnimatedCard key={index} delay={index * 100} animation="scaleIn">
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-300">{image.location}</p>
                    <div className="mt-2">
                      <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img 
                src={filteredImages[selectedImage].src} 
                alt={filteredImages[selectedImage].title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {filteredImages[selectedImage].location}
                </p>
                <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mt-2">
                  {filteredImages[selectedImage].category}
                </span>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              These beautiful destinations are waiting for you. Start planning your dream vacation today.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-12 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse">
              Plan Your Trip
            </button>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
