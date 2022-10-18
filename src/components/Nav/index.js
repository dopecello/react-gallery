import React from "react";

const Nav = () => {
  const categories = [
    {
      name: "Commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "Portraits", description: "Portraits of people in my life" },
    { name: "Food", description: "Delicious delecacies" },
    {
      name: "Landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  const categorySelected = (name) => {
    console.log(`${name} clicked`);
  };

  return (
    <header className="flex-row px-1" data-testid="link">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            📸
          </span>
          React Gallery
        </a>
      </h2>
      <nav>
      <ul className="flex-row" data-testid="about">
          <li className="mx-2">
            <a href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <span>
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li className="mx-2" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

//key attributes are important so that React can keep track of what you're trying to manipulate. Outermost element must have a key
