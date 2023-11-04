import React, { useState } from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  previousPage,
  nextPage,
  firstPage,
  lastPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex lg:col-span-12 justify-center">
      <button
        className={`flex justify-center items-center m-1 lg:m-2 border-2 p-2  h-8  lg:h-12 rounded-md `}
        onClick={firstPage}
      >
        First
      </button>
      <button
        className={`flex justify-center items-center m-1 lg:m-2 border-2 p-2  w-8 h-8 lg:w-12 lg:h-12 rounded-md `}
        onClick={previousPage}
      >
        &lt;
      </button>
      {pages.map((page, index) => {
        return (
          <button
            className={`flex justify-center items-center m-1 lg:m-2 border-2 p-2 w-8 h-8 lg:w-12 lg:h-12 rounded-md ${
              page == currentPage ? "bg-indigo-500 text-white" : ""
            } ${
              page > currentPage + 1 || page < currentPage - 1 ? "hidden" : ""
            }`}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className={`flex justify-center items-center m-1 lg:m-2 border-2 p-2  w-8 h-8 lg:w-12 lg:h-12 rounded-md `}
        onClick={nextPage}
      >
        &gt;
      </button>
      <button
        className={`flex justify-center items-center m-1 lg:m-2 border-2 p-2  h-8  lg:h-12 rounded-md `}
        onClick={lastPage}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
