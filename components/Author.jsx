import React from "react";

const Author = ({ author }) => {
  return (
    <div className="text-center border-2 border-gray dark:border-borderDark bg-containerBg dark:bg-containerDark dark:hover:shadow-md transition-shadow duration-300 dark:hover:shadow-indigo-900 shadow-lg mt-8 mb-8 p-8 relative rounded-lg ">
      <h3 className="text-xl text-primaryText dark:text-darkText text-left mb-8 font-semibold border-b pb-4">
        Autor
      </h3>
      <h3 className=" my-4 text-xl text-primaryText dark:text-darkText font-bold">
        {author.name}
      </h3>
      <p className=" text-lg text-primaryText dark:text-darkText">
        {author.description}
      </p>
    </div>
  );
};

export default Author;
