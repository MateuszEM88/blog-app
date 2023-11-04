import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "./services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className=" flex content-center rounded-lg ">
      <button
        className=" p-2 text-xl font-semibold m-2 
          "
      >
        Kategorie:
      </button>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <button
            className=" p-2 rounded-lg text-gray-100 bg-indigo-600 hover:bg-indigo-800 m-2 
          "
          >
            {category.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
