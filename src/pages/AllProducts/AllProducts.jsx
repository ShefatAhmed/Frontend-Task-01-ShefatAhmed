const productsData = [
  {
    image: "https://i.postimg.cc/8zQg7YRs/1b89465022467739126c952b588bb48d.jpg",
    heading: "Starp for gym",
    price: 3189,
  },
  {
    image: "https://i.postimg.cc/SR2HsLjW/6876a672a49bd11641c687ca78ea4467.jpg",
    heading: "Floor Matt for gym",
    price: 8561,
  },
  {
    image: "https://i.postimg.cc/y6DN9wZT/c86de9c62dbe06e4e53e721f1b895db3.jpg",
    heading: "5kg dumble",
    price: 1485,
  },
  {
    image: "https://i.postimg.cc/Qx5xY1S9/d9bf8d6d70a460e780acb7a0d44718d0.jpg",
    heading: "Push up bar",
    price: 3874,
  },
  {
    image: "https://i.postimg.cc/Qd3N2Cn6/554d324903dc32b64abd58826c2a5674.jpg",
    heading: "Pull up bar",
    price: 5740,
  },
  {
    image: "https://i.postimg.cc/Bvv33K5C/611b-Zwn-YQ1-L-AC-SL1500.jpg",
    heading: "5 in 1 gym set",
    price: 7500,
  },
];
const AllProducts = () => {
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.heading} has been added to the cart!`);
    window.location.reload();
  };
  return (
    <div >
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 border-2 border-slate-500 rounded-xl shadow-2xl"
            >
              <img
                src={product.image}
                alt={`Product ${index + 1}`}
                className="mb-2 w-full h-52 object-cover  rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-2">{product.heading}</h2>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 font-bold">${product.price}</p>
                <button
                  className="flex items-center border-2 border-slate-500 font-bold px-2 py-1 rounded transition duration-300 ease-in-out hover:text-white hover:bg-black"
                  onClick={() => addToCart(product)}
                >
                  <i className="fa-solid fa-cart-shopping mr-2"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
