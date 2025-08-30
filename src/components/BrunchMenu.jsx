import React from "react";

const MENU_ITEMS = [
  {
    title: "Full English Breakfast",
    description: "Sausages, bacon, poached egg, beans, tomato, sourdough bread",
    price: "£12.50",
    image: "/images/menu-full-english.jpg",
    tags: ["hearty"],
  },
  {
    title: "Vegetarian/Vegan English Breakfast",
    description: "Vegan sausage, scrambled tofu, tomato, avocado, sourdough bread",
    price: "£10.50",
    image: "/images/menu-vegan-breakfast.png",
    tags: ["hearty", "vegetarian", "vegan"],
  },
  {
    title: "Full English Cob",
    description: "Sausage, bacon, egg, cheese",
    price: "£7.50",
    image: "/images/menu-english-cob.jpg",
    tags: ["hearty"],
  },
  {
    title: "Focaccia, Smashed Avocado & Poached Egg",
    description: "Side of mixed salad, lemon, sriracha",
    price: "£8.50",
    image: "/images/menu-focaccia-avocado.jpg",
    tags: ["healthy", "vegetarian"],
  },
  {
    title: "Eggs Benedict",
    description: "English muffin, crispy bacon or smoked salmon, hollandaise",
    price: "£8.50",
    image: "/images/menu-eggs-benedict.jpg",
    tags: ["hearty"],
  },
  {
    title: "Honeycomb & Nutella Filled Croissant",
    description: "Nutella spread, banana, honeycomb brittle",
    price: "£7.50",
    image: "/images/menu-honeycomb-croissant.png",
    tags: ["sweet", "vegetarian"],
  },
  {
    title: "Acai Bowl",
    description: "Frozen berries, chia seeds, fresh fruit, honey",
    price: "£8.50",
    image: "/images/menu-acai-bowl.jpg",
    tags: ["healthy", "vegetarian", "vegan"],
  },
  {
    title: "Belgium Berry Waffle",
    description: "Fresh berries, maple syrup, icing sugar",
    price: "£8.50",
    image: "/images/menu-berry-waffle.png",
    tags: ["sweet", "vegetarian"],
  },
];

const BrunchMenu = () => {
  return (
    <section id="menu" className="py-16 px-4 bg-[#edf9f4]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Brunch Menu
          </h2>
          <p className="text-lg md:text-xl text-emerald-600 font-medium italic mb-4">
            "Where the world’s finest tastes meet Leicester’s most indulgent setting."
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Freshly prepared dishes using the finest local ingredients, served with love in our
            welcoming atmosphere.
          </p>
        </div>

        {/* Filters (Optional UI only, no logic) */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-md">
            All Items
          </button>
          {["Hearty", "Healthy", "Sweet"].map((label) => (
            <button
              key={label}
              className="text-emerald-600 border border-emerald-600 hover:bg-emerald-50 text-sm font-medium px-4 py-2 rounded-md"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 rounded-md">
            All Dietary
          </button>
          {["Vegetarian", "Vegan"].map((label) => (
            <button
              key={label}
              className="text-teal-600 border border-teal-600 hover:bg-teal-50 text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.5 12 13 13 12" />
              </svg>
              {label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white flex flex-col gap-6 rounded-xl border border-emerald-100 py-6 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-semibold text-gray-800 leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-2xl font-bold text-emerald-600 ml-4">{item.price}</span>
                </div>

                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md ${
                        tag === "hearty"
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                          : "border border-teal-300 text-teal-700"
                      }`}
                    >
                      {["vegetarian", "vegan"].includes(tag) ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
                          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.5 12 13 13 12" />
                        </svg>
                      ) : null}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrunchMenu;
