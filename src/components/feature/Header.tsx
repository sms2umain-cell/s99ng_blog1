
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sports Betting', path: '/sports-betting' },
    { name: 'Slot Games', path: '/slot-games' },
    { name: 'Live Casino', path: '/live-casino' },
    { name: 'Game Tips', path: '/game-tips' },
    { name: 'Beginner Guide', path: '/beginner-guide' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/6648e9c363def61aa1dd9e61ec2693a4.png"
              alt="NaijaWinHub Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                    : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Start Button */}
            <a
              href="https://s99ng.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Start
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                    : 'text-gray-300 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Start Button */}
            <a
              href="https://s99ng.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 mx-4 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 cursor-pointer"
            >
              Start
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
