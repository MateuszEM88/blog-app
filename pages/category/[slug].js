import React, { useState } from "react";
import Pagination from "../../components/Pagination.jsx";
import { getCategories, getCategoryPost } from "../../components/services";
import { Post, Categories } from "../../components/index.js";

const CategoryPost = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentCategoryPosts = posts
    .reverse()
    .slice(firstPostIndex, lastPostIndex);
  const lastPosiblePage = Math.ceil(posts.length / postPerPage);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastPosiblePage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(lastPosiblePage);
  };
  return (
    <div className="container mx-auto pt-8 px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:px-[5vw]">
        <div className="max-md:hidden">
          <Categories />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 lg:col-span-12 gap-5 col-span-1">
          {currentCategoryPosts.map((post, index) => (
            <Post key={index} post={post.node} />
          ))}
        </div>
        <Pagination
          totalPosts={posts.length}
          postsPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          previousPage={previousPage}
          nextPage={nextPage}
          firstPage={firstPage}
          lastPage={lastPage}
        />
        {/* <div className="col-span-1 lg:col-span-4"> */}
        {/* <div className="relative lg:sticky top-8"> */}

        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
