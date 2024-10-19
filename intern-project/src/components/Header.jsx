

const Header = () => {
  return (
    <header className="flex justify-center items-center p-6 bg-primary text-white">
      <div className="flex justify-between  w-[50%] p-2 rounded-full bg-gray-800 items-center ">
        <div className='flex items-center space-x-4'>
        <h1 className="text-2xl font-serif">comet*</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-accent p-1 px-4 cursor-pointer hover:border hover:border-amber-50 hover:border-opacity-50 hover:border-b-amber-100 hover:border-b-2 rounded-full">Manifesto</a>
        </nav>
        </div>
        <div className='flex items-center space-x-4'>
        <button className="text-white hover:text-accent p-1 px-4 cursor-pointer hover:border hover:border-amber-50 hover:border-opacity-50 hover:border-b-amber-100 hover:border-b-2 rounded-full">Login</button>
        <button className="bg-accent px-4 py-2 rounded-full text-primary">Signup</button>
        </div>
         
      </div>
    
        
  
    </header>
  );
};

export default Header;
