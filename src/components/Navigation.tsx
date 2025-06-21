
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Enquiry', path: '/enquiry' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Plane className={`h-8 w-8 transition-colors duration-300 ${
                scrolled ? 'text-blue-600' : 'text-white'
              } group-hover:rotate-12 transition-transform`} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Travel Nest Holidays
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                    location.pathname === item.path
                      ? scrolled 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-yellow-300 bg-white/10'
                      : scrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                        : 'text-white hover:text-yellow-300 hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-300'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform ${
                location.pathname === item.path
                  ? 'text-blue-600 bg-blue-50 scale-105'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:scale-105'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : ''
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
