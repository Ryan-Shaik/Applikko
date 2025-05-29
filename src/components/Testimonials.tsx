const TestimonialCard = ({ quote, name, image }: { quote: string, name: string, image?: string }) => (
  <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
    {image && <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-yellow-400" />}
    <p className="text-gray-700 italic mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>"{quote}"</p>
    <p className="font-semibold text-green-700 text-right" style={{ fontFamily: "'Montserrat', sans-serif" }}>- {name}</p>
  </div>
);

const Testimonials = () => {
  const reviews = [
    { quote: "Applikko is my new favorite drink! The apple flavor is so crisp, and the jelly is a fun surprise.", name: "Sarah L.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { quote: "Absolutely delicious and refreshing. Perfect for a hot day. The honey isn't overpowering at all.", name: "Mike P.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { quote: "I love that it's made with natural ingredients. You can really taste the quality. Highly recommend!", name: "Jessica B.", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800" style={{ fontFamily: "'Poppins', sans-serif" }}>What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} quote={review.quote} name={review.name} image={review.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;