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
      <p
        className=" p-2 text-xl dark:text-darkText font-semibold m-2 
          "
      >
        Kategorie:
      </p>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <p
            className="p-2 text-xl dark:text-darkText font-semibold m-2  
          "
          >
            <span className="text-fuchsia-500">#</span>
            <span className="hover:border-b-2 pb-1 hover:border-fuchsia-500">
              {category.name}
            </span>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
