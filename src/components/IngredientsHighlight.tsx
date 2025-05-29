// Prop type for IngredientCard, assuming 'image' will be a URL string
interface IngredientCardProps {
  imageSrc: string; // Changed from 'image' to 'imageSrc' for clarity, or keep 'image' if preferred
  name: string;
  description: string;
}

const IngredientCard = ({ imageSrc, name, description }: IngredientCardProps) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    {/* Actual img tag */}
    <img 
      src={imageSrc} 
      alt={`Image of ${name}`} 
      className="w-full h-48 object-cover" // 'rounded-t-lg' can be added if you want top corners rounded
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-yellow-600" style={{ fontFamily: "'Montserrat', sans-serif" }}>{name}</h3>
      <p className="text-gray-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>{description}</p>
    </div>
  </div>
);

const IngredientsHighlight = () => {
  const ingredients = [
    { imageSrc: "https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Crisp Apples", description: "Sourced from the finest orchards, providing a naturally sweet and tangy base." },
    { imageSrc: "https://www.india.com/wp-content/uploads/2022/08/Collage-Maker-20-Aug-2022-04.30-PM.jpg", name: "Golden Honey", description: "Pure, natural honey that adds a smooth sweetness and rich aroma." },
    { imageSrc: "https://cojocojo.co/wp-content/uploads/2023/04/ntdvn_screenshot-30-4.jpg", name: "Coconut Jelly", description: "Chewy, honey-infused coconut jelly bits for a delightful textural surprise." },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-green-800" style={{ fontFamily: "'Poppins', sans-serif" }}>Pure & Simple Ingredients</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          We believe in transparency and quality. Applikko is made with carefully selected, natural ingredients.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <IngredientCard 
              key={index} 
              imageSrc={ingredient.imageSrc} 
              name={ingredient.name} 
              description={ingredient.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsHighlight;