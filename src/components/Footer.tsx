// Placeholder for social media icons
// Consider using SVGs or an icon library

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-50 text-black-300 py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Optional: Drinko Logo */}
        {/* <img src="/path/to/drinko-logo-gray.svg" alt="Drinko Logo" className="h-10 mx-auto mb-6" /> */}
        
        <p className="mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Drinko &copy; {currentYear}. All Rights Reserved.
        </p>
        <p className="mb-6 text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Applikko - Crisp Apple. Golden Honey. Jelly Joy.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          {/* Replace with actual links and icons */}
          <a href="#" className="hover:text-yellow-400 transition-colors">Facebook</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a>
        </div>
        <p className="text-xs text-gray-500" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Please drink responsibly.
        </p>
      </div>
    </footer>
  );
};

export default Footer;