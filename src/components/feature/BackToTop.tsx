
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black rounded-full shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 cursor-pointer"
          aria-label="Back to top"
        >
          <i className="ri-arrow-up-line text-xl"></i>
        </button>
      )}
    </>
  );
}
