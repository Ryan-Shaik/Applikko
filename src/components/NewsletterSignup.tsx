import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-600 via-green-500 to-yellow-400 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Stay Updated!</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Sign up for our newsletter to get the latest news, offers, and updates about Applikko and other Drinko products.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-grow p-3 bg-white rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;