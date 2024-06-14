import { useEffect, useState } from "react";

const ViewCart = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((sum, product) => sum + product.price, 0);
  };

  const handleDelete = (indexToDelete) => {
    const updatedCart = cart.filter((_, index) => index !== indexToDelete);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  const filteredCart = cart.filter(product =>
    product.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 lg:px-8 py-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 mb-4 border-2 border-slate-500 rounded-lg"
      />
      {filteredCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div>
            {filteredCart.map((product, index) => (
              <div
                key={index}
                className="bg-white px-4 border-2 border-slate-500 rounded-xl flex items-center justify-between mb-2"
              >
                <img
                  src={product.image}
                  alt={product.heading}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold">
                  {product.heading}
                </h2>
                <p className="text-gray-600 font-bold">${product.price}</p>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-xl hover:text-red-500"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">Total: ${getTotalPrice()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCart;