import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background black if scroll more than 50px
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show/hide navbar based on scroll direction and thresholds
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down & beyond 150px => hide navbar
        setShow(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up => show navbar
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 overflow-hidden ${
        show ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'bg-black' : 'bg-transparent'}`}
    >
      <div className="px-7 pt-8 pb-8 flex justify-between items-center px-18 py-4">
        {/* Left */}
        <div>
          <p className="text-xl text-white font-bold">Volaso</p>
        </div>

        {/* Right */}
        <div className="flex gap-6 items-center">
          <a href="">
            <span className="hidden sm:block text-white">Technology</span>
          </a>
          <a href="">
            <span className="hidden sm:block text-white">About</span>
          </a>
          <button className="border bg-white py-2 px-6 text-xs sm:text-base text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
