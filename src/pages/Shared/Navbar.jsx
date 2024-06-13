import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-200 shadow-2xl">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/">
            <p className="text-xl font-extrabold">E Commerce Cart</p>
          </Link>
        </div>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </nav>
  );
};

export default Navbar;
