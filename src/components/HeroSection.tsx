// Import your local image
import heroImageFromFile from '../assets/image.png'; 

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-gradient-to-br from-green-600 via-green-500 to-yellow-400 text-white"
      // Using a gradient background for the section as an example, can be changed
    >
      {/* Right Column: Image (Order 2 on md screens and up) */}
      {/* Appears first in DOM: on mobile, image will be on top, text below. */}
      <div className="md:w-1/2 lg:w-3/5 p-4 flex justify-center items-center md:order-2">
        <img 
          src={heroImageFromFile} 
          alt="Applikko beverage" 
          className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-xl shadow-2xl object-contain"
          // object-contain preserves aspect ratio. 
          // object-cover would fill the box, potentially cropping.
        />
      </div>

      {/* Left Column: Text Content (Order 1 on md screens and up) */}
      {/* Appears second in DOM: on mobile, text will be below the image. */}
      <div className="md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 md:pr-12 md:order-1 mt-8 md:mt-0">
        {/* Optional: Drinko Logo */}
        {/* <img src="/path/to/drinko-logo-white.svg" alt="Drinko Logo" className="h-10 mb-6" /> */}
        
        <h1 className="text-5xl lg:text-7xl text-pink-800 font-bold mb-4 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Applikko
        </h1>
        <p className="text-xl lg:text-2xl font-light mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Crisp Apple. Golden Honey. Jelly Joy.
        </p>
        <p className="text-md lg:text-lg mb-10 max-w-md" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Discover the refreshing taste of Applikko, a unique blend of natural apple flavor, sweet golden honey, and delightful honey-infused coconut jelly. It's not just a drink, it's an experience!
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
          <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
            Buy Now
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;