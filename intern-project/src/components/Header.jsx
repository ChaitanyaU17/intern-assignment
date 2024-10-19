import TestImage from '../assets/image.jpg';

const Header = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-gray-900" 
      style={{ backgroundImage: `url(${TestImage})` }}
    >
     <div className='bg-black bg-opacity-80 w-[80%]'>
     <header className="flex justify-center items-center p-6 bg-transparent text-white w-full">
        <div className="flex justify-between w-[50%] p-2 rounded-full bg-gray-800 items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-serif">comet*</h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="hover:text-accent p-1 px-4 cursor-pointer hover:border hover:border-amber-50 hover:border-opacity-50 hover:border-b-amber-100 hover:border-b-2 rounded-full"
              >
                Manifesto
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-accent p-1 px-4 cursor-pointer hover:border hover:border-amber-50 hover:border-opacity-50 hover:border-b-amber-100 hover:border-b-2 rounded-full">
              Login
            </button>
            <button className="bg-accent px-4 py-2 rounded-full text-primary">
              Signup
            </button>
          </div>
        </div>
      </header>

      <section className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <h2 className="text-6xl md:text-8xl font-serif text-center leading-tight">
          Made for Creatives
        </h2>
        <p className="text-lg md:text-2xl mt-4">
          A discovery engine for{" "}
          <span className="p-1 px-4 cursor-pointer border border-amber-50 border-opacity-50 border-b-amber-100 hover:border-b-2 rounded-full">
            creatives
          </span>
        </p>
        <button className="mt-8 bg-accent text-primary px-6 py-3 rounded-full">
          Get Inspired
        </button>
      </section>
     </div>
      
    </div>
  );
};

export default Header;