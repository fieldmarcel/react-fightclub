import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu, MdClose } from "react-icons/md"; // For hamburger and close icons
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  let location = useLocation();

  React.useEffect(() => {
    
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <div>
        <div className="navigation  px-5  my-1 w-full flex justify-between items-center flex-row">
          <div className="text-red-500">TITAN</div>

          <div className="hidden sm:flex  text-white font-thin uppercase">
            <Link
              to="/"
              className={`nav   mx-1 px-6 hover:bg-yellow-300 hover:text-black hover:rounded-xl`}
            >
              HOMEPAGE
            </Link>
            <Link
              to="/coaches"
              className={`nav   ${
                location.pathname === "/coaches" ? "active" : ""
              } px-6 mx-1 hover:bg-yellow-300 hover:text-black hover:rounded-xl`}
            >
              COACHES
            </Link>
            <Link
              to="/gallery"
              className={`nav  ${
                location.pathname === "/gallery" ? "active" : ""
              } mx-1  px-6 hover:bg-yellow-300 hover:text-black hover:rounded-xl`}
            >
              GALLERY
            </Link>
            {/* <Link
              to="/shop"
              className={`nav   ${
                location.pathname === "/shop" ? "active" : ""
              }  mx-1 px-6 hover:bg-yellow-300 hover:text-black hover:rounded-xl`}
            >
              SHOP
            </Link>
            <Link
              to="/review"
              className={`nav   ${
                location.pathname === "/review" ? "active" : ""
              } mx-1 px-6 hover:bg-yellow-300 hover:text-black hover:rounded-xl`}
            >
              REVIEW
            </Link> */}
            <Link
              to="/news"
              className={`nav   ${
                location.pathname === "/news" ? "active" : ""
              }mx-1  px-6 hover:bg-yellow-300 hover:text-black hover:rounded-xl`}
            >
              NEWS
            </Link>
            <Link
              to="/faq"
              className={`nav   ${
                location.pathname === "/faq" ? "active" : ""
              }mx-1  px-6 hover:bg-yellow-300 hover:text-black hover:rounded-xl`}
            >
              FAQ
            </Link>
          </div>

          <div className="text-black bg-yellow-300 px-6 py-4 hidden md:block">
            JOIN US
          </div>

          <div className="sm:hidden">
            {isOpen ? (
              <MdClose
                size="30px"
                color="white"
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            ) : (
              <MdOutlineMenu
                size="30px"
                color="white"
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className=" navline   "></div>
        {isOpen && (
          <div className=" fixed top-0   justify-center items-center w-full h-2/3 bg-black bg-opacity-75 backdrop-blur-lg z-50 p-6 flex flex-col space-y-6">
            <Link to="/" className="text-white" onClick={toggleMenu}>
              HOMEPAGE
            </Link>
            <Link to="/coaches" className="text-white" onClick={toggleMenu}>
              COACHES
            </Link>
            <Link to="/gallery" className="text-white" onClick={toggleMenu}>
              GALLERY
            </Link>
            <Link to="/shop" className="text-white" onClick={toggleMenu}>
              SHOP
            </Link>
            <Link to="/review" className="text-white" onClick={toggleMenu}>
              REVIEW
            </Link>
            <Link to="/news" className="text-white" onClick={toggleMenu}>
              NEWS
            </Link>
            <Link to="/faq" className="text-white" onClick={toggleMenu}>
              FAQ
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
