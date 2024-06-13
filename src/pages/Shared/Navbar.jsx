import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    setTotalPrice(total);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-gradient-200 shadow-2xl border-b-2 border-slate-500">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/">
            <p className="text-xl font-extrabold">E Commerce Cart</p>
          </Link>
        </div>
        <div className="relative">
          <h1 className="text-2xl cursor-pointer" onClick={toggleDropdown}>
            <i className="fa-solid fa-cart-shopping"></i>
          </h1>
          {cartCount > 0 && (
            <span className="absolute bottom-4 left-5 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <ul className="p-4 text-center">
                <li className="py-2 font-bold">
                  {cartCount} Items
                </li>
                <li className="py-2">Subtotal: ${totalPrice}</li>
                <li className="pt-2">
                  <Link
                    to="/cart"
                    className="flex justify-center items-center border-2 border-slate-500 font-bold px-2 py-1 rounded transition duration-300 ease-in-out hover:text-black hover:bg-white text-white bg-black"
                  >
                    View Cart
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
