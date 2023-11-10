import React from "react";
import moment from "moment/moment";
import Link from "next/link";

const Post = ({ post, currentPage, featuredPost }) => {
  return (
    <div
      className={`post group lg:col-span-2 
      ${featuredPost ? "lg:col-span-3" : ""} 
      ${currentPage === 1 ? "lg:[&:nth-child(1)]:col-span-6" : ""} 
      ${currentPage === 1 ? "lg:[&:nth-child(2)]:col-span-3" : ""} 
      ${currentPage === 1 ? "lg:[&:nth-child(3)]:col-span-3" : ""}  
      
       p-0 lg:p-4 mb-16 `}
    >
      <div className="relative  overflow-hidden pb-60 rounded-xl border-2 border-fuchsia-600">
        <img
          src={post.image?.url}
          alt={post.title}
          className="object-top absolute h-60 w-full object-cover  group-hover:scale-125 duration-500"
        />
        <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fuchsia-400 bg-fixed opacity-20 transition duration-300 ease-in-out group-hover:opacity-0"></div>
      </div>
      <div className="my-2">
        {post.categories.map((category) => {
          return (
            <Link
              className="text-md mr-2 text-fuchsia-500 font-semibold"
              href={`/category/${category.slug}`}
              key={category.slug}
            >
              #{category.name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-between text-primaryText dark:text-darkText">
        <h1 className="transition duration-700  mb-4 cursor-pointer hover:text-fuchsia-600 dark:hover:text-fuchsia-300 text-2xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <p>{post.text}</p>
        <div className="flex items-center justify-around mb-4 w-full">
          {/* <div className="flex item-center justify-center mb-4 w-full w-auto ">
          <img
            className="align-middle "
            alt={post?.author.name}
            height="50px"
            width="50px"
            src={post?.author.photo.url}
          />
          <p className="inline align-middle pt-3 text-primaryText dark:text-darkText  ml-2 text-lg">
            {post.author.name}
          </p>
        </div> */}
          {/* <div className="font-medium mb-4 pt-3 ml-6 text-gray-700 h-12 ">
          <span className="text-primaryText  dark:text-darkText">
            {moment(post.createdAt).format("DD- MM- YYYY")}
          </span>
        </div> */}
        </div>

        <div className="text-center p-4 ">
          <Link href={`/post/${post.slug}`}>
            <button className="font-semibold p-2 hover:text-fuchsia-500 hover:scale-125  duration-300">
              Czytaj dalej...
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
