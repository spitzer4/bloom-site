import React from "react";

const App = () => {
  return (
    <div className="bg-white text-gray-900">
	  {/* Navbar */}
	  <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-center items-center z-50">
        <h1 className="text-2xl font-bold text-green-600">bloom</h1>
      </nav>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-blue-500 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="text-center z-10 text-white">
          <h1 className="text-5xl font-bold">Bring Nature Home</h1>
          <p className="mt-4 text-lg">Beautiful, easy-care plants delivered to your door.</p>
          <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg">
            Shop Now
          </button>
        </div>
      </header>

      {/* Featured Plants Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Our Bestsellers</h2>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[
            { id: 1, name: "Monstera", price: "$29.99", image: "/monstera.jpg" },
            { id: 2, name: "Snake Plant", price: "$19.99", image: "/snake.jpg" },
            { id: 3, name: "Fiddle Leaf Fig", price: "$39.99", image: "/fiddleleaf.jpg" },
          ].map((plant) => (
            <div key={plant.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={plant.image} alt={plant.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{plant.name}</h3>
                <p className="text-green-600 font-bold">{plant.price}</p>
                <button className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-green-100 py-10 px-6 text-center">
        <h2 className="text-2xl font-semibold">Stay in the Loop</h2>
        <p className="mt-2 text-gray-700">Sign up & get 10% off your first order.</p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg border border-gray-300"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; {new Date().getFullYear()} bloom. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
