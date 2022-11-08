import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "./services";
import { useTheme } from "next-themes";
import sun from "../components/img/sun.png";
import moon from "../components/img/moon.png";
import Image from "next/image";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getCategories().then((newCategories) => {
  //     setCategories(newCategories);
  //   });
  // }, []);

  return (
    <div className="mb-8 w-100 sticky top-0 z-10  bg-indigo-400 bg-opacity-50 backdrop-blur bg-containerBg dark:bg-containerDark border-b-2 dark:border-borderDark dark:bg-opacity-50 py-6  ">
      <div className="w-full inline-block">
        <div className="md:float-left block ml-16">
          <Link href="/">
            <span className="transition duration-700 cursor-pointer font-bold text-primaryText dark:text-darkText hover:text-indigo-600 dark:hover:text-indigo-200 text-xl ">
              rozprogramowany.musk
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="absolute top-5 right-12  rounded-full p-1"
          >
            {theme === "light" ? (
              <Image src={sun} alt="me" width="32" height="32" />
            ) : (
              <Image src={moon} alt="me" width="32" height="32" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
