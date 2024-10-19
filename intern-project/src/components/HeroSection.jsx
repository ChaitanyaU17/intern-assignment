

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-primary text-white">
      <h2 className="text-6xl md:text-8xl font-serif text-center leading-tight">
        Made for Creatives
      </h2>
      <p className="text-lg md:text-2xl mt-4">A discovery engine for <span className="p-1 px-4 cursor-pointer border border-amber-50 border-opacity-50 border-b-amber-100 hover:border-b-2 rounded-full">creatives</span></p>
      <button className="mt-8 bg-accent text-primary px-6 py-3 rounded-full">
        Get Inspired
      </button>
    </section>
  );
};

export default HeroSection;
