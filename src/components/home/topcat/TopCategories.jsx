import React from "react";
import "./topCategories.css"; // Import your custom CSS for styling

const categoriesData = [
    {
      name: "Web Development",
      image: "/web.jpg",
    },
    {
      name: "Mobile App Development",
      image: "/mobile.jpg",
    },
    {
      name: "Data Science",
      image: "/datas.png",
    },
    {
      name: "Graphic Design",
      image: "/graphic.jpg",
    },
    {
      name: "Digital Marketing",
      image: "/digital.jpg",
    },
    {
      name: "Machine Learning",
      image: "/mach.jpg",
    },
    {
      name: "philosophy",
      image: "/phil.jpg",
    },
    // Add more categories with names and image URLs as needed
  ];
  

const TopCategories = () => {
  return (
    <div className="top-categories-container">
      <h2>Popular Categories</h2>
      <div className="category-list">
        {categoriesData.map((category, index) => (
          <div className="category-item" key={index}>
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
