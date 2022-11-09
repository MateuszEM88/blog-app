import React from "react";
import moment from "moment";
import Scroll from "./Scroll";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-containerBg text-justify hover:shadow-md dark:hover:shadow-md transition-shadow duration-300 dark:hover:shadow-indigo-900 dark:bg-containerDark shadow-lg border-2 border-gray dark:border-borderDark rounded-lg lg:p-8 pb-12 mb-8">
      <Scroll />
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.image.url}
          alt={post.title}
          className="object-top w-full h-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-4">
        <div className="flex items-center justify-around mb-8 w-full">
          <div className="flex item-center  mb-4  w-full">
            <img
              className="align-middle text-primaryText dark:text-darkText"
              alt={post.author.name}
              height="50px"
              width="50px"
              src={post.author.photo.url}
            />
            <p className="inline align-middle pt-3 text-primaryText dark:text-darkText ml-2 text-lg">
              {post?.author.name}
            </p>
          </div>
          <div className="font-medium mb-4 pt-4 ml-6 text-gray-700  h-12 w-44">
            <span className="text-primaryText dark:text-darkText">
              {moment(post.createdAT).format("DD-MM-YYYY")}
            </span>
          </div>
        </div>
        <h1 className="mb-8 text-primaryText dark:text-darkText text-3xl font-semibold">
          {post.title}
        </h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
