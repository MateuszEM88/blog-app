import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import Categories from "./Categories";

const Post = ({ post }) => {
  return (
    <div className="transition-shadow text-justify duration-300 dark:hover:shadow-indigo-900 bg-containerBg dark:bg-containerDark border-2 border-gray dark:border-borderDark hover:shadow-lg dark:hover:shadow-md  rounded-lg p-0 lg:p-4 pb-12 mb-4">
      <div className="relative overflow-hidden shadow-md pb-60 mb-6">
        <img
          src={post.image?.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center text-primaryText dark:text-darkText mb-4 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-300 text-2xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <p className="text-center text-lg text-primaryText h-14 overflow-hidden dark:text-darkText font-formal px-4 mb-8">
        {post.text}
      </p>
      <div className="flex items-center justify-around mb-8 w-full">
        <div className="flex item-center justify-center mb-4 w-full w-auto ">
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
        </div>
        <div className="font-medium mb-4 pt-3 ml-6 text-gray-700 h-12 ">
          <span className="text-primaryText  dark:text-darkText">
            {moment(post.createdAt).format("DD- MM- YYYY")}
          </span>
        </div>
      </div>

      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block text-lg font-medium bg-indigo-600 rounded-lg py-2 px-6 cursor-pointer text-white">
            Czytaj dalej...
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Post;
