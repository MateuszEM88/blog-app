import React from "react";

const Author = ({ author }) => {
  return (
    <div className="flex justify-center items-center w-full flex-col  mt-8 mb-8 p-2 relative ">
      <div className=" lg:w-1/2">
        <h3 className="text-xl text-primaryText dark:text-darkText text-left mb-8 font-semibold border-b pb-4">
          Autor
        </h3>

        <div className="flex max-md:flex-col">
          <div className="flex flex-col mr-4">
            <h3 className=" text-lg text-primaryText dark:text-darkText font-bold">
              {author.name}
            </h3>
            <img
              src={author.photo.url}
              alt=""
              className="w-16 h-16 m-2 align-middle text-primaryText dark:text-darkText rounded-full"
            />
          </div>

          <p className=" text-md text-primaryText dark:text-darkText">
            {author.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Author;
