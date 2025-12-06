const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2  pb-14">
      <div className="text-center animate-fade-in-up">
        <div className="group inline-block relative cursor-pointer mb-6">
          <p className="text-3xl md:text-4xl font-bold text-gray-500">
            Never Miss a<span className="text-primary-pink"> Deal !</span>
          </p>
          {/* <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-dull w-0 group-hover:w-full transition-all duration-500"></span> */}
        </div>
      </div>{" "}
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive
        discounts.
      </p>
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Enter your email id"
          required
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-primary-purple hover:bg-primary-purple-dull transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
