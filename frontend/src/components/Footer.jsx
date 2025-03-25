import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Subscribe Section */}
      <div className="bg-black text-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 pb-[7vw]">
        <h5 className="text-xs sm:text-sm uppercase opacity-60 mb-2 sm:mb-3">
          Forgot to mention
        </h5>
        <h3 className="text-sm sm:text-base md:text-lg uppercase font-medium hover:text-gray-300 transition-colors duration-300 cursor-pointer">
          Subscribe to my YouTube channel →
        </h3>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          {/* Left Section */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-xs sm:text-sm opacity-75">
            <h5>2025 &copy;</h5>
            <h5>0:05 AM EST</h5>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { name: "Dribbble", href: "#" },
              { name: "Instagram", href: "#" },
              { name: "LinkedIn", href: "#" },
              { name: "Twitter", href: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-xs sm:text-sm uppercase font-medium text-white hover:text-gray-300 transition-colors duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;