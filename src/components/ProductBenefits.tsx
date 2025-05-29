// Placeholder for icons, consider using SVG icons or a library like Heroicons.
const BenefitItem = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-4">
    {/* Replace with actual icon component or img tag */}
    <div className="bg-yellow-400 p-4 rounded-full mb-4 inline-block">
      <span className="text-3xl text-white">{icon}</span> {/* Placeholder icon */}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-green-700" style={{ fontFamily: "'Montserrat', sans-serif" }}>{title}</h3>
    <p className="text-gray-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>{description}</p>
  </div>
);

const ProductBenefits = () => {
  const benefits = [
    { icon: "🍎", title: "Naturally Refreshing", description: "Made with real apple extracts for a crisp and invigorating taste." },
    { icon: "🍯", title: "Honey-Kissed Sweetness", description: "Perfectly sweetened with golden honey, no artificial sweeteners." },
    { icon: "🥥", title: "Joyful Jelly Bites", description: "Experience the fun texture of honey-infused coconut jelly in every sip." },
    { icon: "🌿", title: "Organic Ingredients", description: "Crafted with high-quality, organic ingredients for a pure experience." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-800" style={{ fontFamily: "'Poppins', sans-serif" }}>Why You'll Love Applikko</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Applikko is more than just a delicious beverage. It's a delightful fusion of flavors and textures designed to uplift your day.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;