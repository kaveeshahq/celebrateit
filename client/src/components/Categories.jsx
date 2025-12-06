import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();
  return (
    <div className="mt-16">
      <div className="text-center animate-fade-in-up">
        <div className="group inline-block relative cursor-pointer mb-6">
          <p className="text-3xl md:text-4xl font-bold text-gray-500">
            Explore Our <span className="text-primary-pink">Categories</span>
          </p>
          {/* <span className="absolute bottom-0 mt-2 left-0 h-1 bg-gradient-to-r from-primary-pink to-primary-purple w-0 group-hover:w-full transition-all duration-500"></span> */}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-7 gap-6 mt-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              className="group-hover:scale-108 transition max-w-28"
              src={category.image}
              alt={category.text}
            />
            <p className="text-sm font-medium">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
