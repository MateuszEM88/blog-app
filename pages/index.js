import Head from "next/head";
import Pagination from "../components/Pagination.jsx";
import { Categories, Post, Widget, Scroll } from "../components/index.js";
import { useState } from "react";
import { getPosts } from "../components/services";

export default function Home({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = posts.reverse().slice(firstPostIndex, lastPostIndex);
  const lastPosiblePage = Math.ceil(posts.length / postPerPage);
  const featuredPosts = posts.filter((post) => post.node.featuredPost);
  console.log(lastPosiblePage);

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
    <div className="container  mx-auto px-6 py-8">
      <Head>
        <title>rozprogramowany.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:px-[5vw]">
        {/* <Scroll /> */}
        {/* <Categories /> */}
        <h1 className="col-span-1 md:col-span-2 lg:col-span-6 border-b-2 text-lg font-semibold">
          Polecane posty
        </h1>
        <div className="post-container grid md:grid-cols-2 lg:grid-cols-6 lg:col-span-12  gap-5 col-span-1">
          {featuredPosts.map((posts, index) => (
            <Post
              className="recent"
              post={posts.node}
              key={index}
              featuredPost={featuredPosts}
            />
          ))}
        </div>
        <h1 className="col-span-1 md:col-span-2 lg:col-span-6 border-b-2 text-lg font-semibold">
          Ostatnie posty
        </h1>
        <div className="post-container grid md:grid-cols-2 lg:grid-cols-6 lg:col-span-12  gap-5 col-span-1">
          {currentPosts.map((posts, index) => (
            <Post
              className="recent"
              post={posts.node}
              key={index}
              currentPage={currentPage}
            />
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
          lastPosiblePage={lastPosiblePage}
        />

        {/* <div className="lg:col-span-4  col-span-1">
          <div className="lg:sticky relative top-20">
            <Widget />
            <Categories />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 60,
  };
}
