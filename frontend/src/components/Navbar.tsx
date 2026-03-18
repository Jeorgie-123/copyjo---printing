import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-[#FDFAF5] w-full shadow-md fixed top-0 left-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <h1 className="text-[#B2805D] text-xl font-extrabold dmserif">CopyJo Prints</h1>

        <ul className="hidden sm:flex gap-10 text-[#B2805D]">
          <li className="cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-yellow-900"><a href="#home">Products</a></li>
          <li className="cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-yellow-900"><a href="#about">About</a></li>
          <li className="cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-yellow-900"><a href="#gallery">Gallery</a></li>
          <li className="cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-yellow-900"><a href="#order">How to Order</a></li>
          <li className="cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-yellow-900"><a href="#contact">Contact</a></li>
					<Link to='/login-admin'><li className="cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-yellow-900">Admin</li></Link>
        </ul>

        <button className="sm:hidden text-[#B2805D] z-10" onClick={toggleNav} aria-label="Toggle Menu">
          {navOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {navOpen && (
        <div className="sm:hidden fixed top-16 left-0 w-full bg-[#FFF5ED] z-9999 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-5 text-[#B2805D]">
            <li className="cursor-pointer hover:text-yellow-900 transition duration-300">
              <a href="#home" onClick={() => setNavOpen(false)}>Products</a>
            </li>
            <li className="cursor-pointer hover:text-yellow-900 transition duration-300">
              <a href="#about" onClick={() => setNavOpen(false)}>About</a>
            </li>
            <li className="cursor-pointer hover:text-yellow-900 transition duration-300">
              <a href="#gallery" onClick={() => setNavOpen(false)}>Gallery</a>
            </li>
            <li className="cursor-pointer hover:text-yellow-900 transition duration-300">
              <a href="#order" onClick={() => setNavOpen(false)}>How to Order</a>
            </li>
            <li className="cursor-pointer hover:text-yellow-900 transition duration-300">
              <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;