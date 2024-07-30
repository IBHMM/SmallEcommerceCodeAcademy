import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from '../../context/navbar';
import { LikedContext } from '../../context/liked';

const Navbar: React.FC = () => {
  const {products} = useContext(LikedContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [number, setNumber] = useState<Number>(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setNumber(products.length)
  }, [products])

  const navbar = useContext(NavbarContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/">BrandName</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "home" ? "text-orange-500" : "text-gray-800"} `}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "products" ? "text-orange-500" : "text-gray-800"} `}
            >
              Products
            </Link>
            <Link
              to="/liked"
              className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "liked" ? "text-orange-500" : "text-gray-800"} relative `}
            >
              Liked 
              {
                number !== 0 && 
                <p className='bg-red-500 rounded-[50%] flex items-center justify-center text-white absolute top-0 right-[-10px] w-[20px] h-[20px] p-1 text-[12px]'> 
                    {`${number}`}
                </p>
            }
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 focus:outline-none focus:text-gray-600"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col w-full items-cente justify-center gap-[20px] text-[20px]">
          <Link
            to="/"
            className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "home" ? "text-orange-500" : "text-gray-800"} `}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "products" ? "text-orange-500" : "text-gray-800"} `}
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/liked"
            className={` hover:opacity-20 transition duration-300 ${navbar.activeDirectory == "liked" ? "text-orange-500" : "text-gray-800"} relative`}
            onClick={toggleMenu}
          >
            Liked 
            {
              number !== 0 && 
              <p className='bg-red-500 rounded-[50%] flex items-center justify-center text-white absolute top-0 right-[-10px] w-[20px] h-[20px] p-1 text-[12px]'> 
                  {`${number}`}
              </p>
            }
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;