import { useEffect } from "react";
import BlogPosts from "./BlogPosts";
import Footer from "../Footer/Footer";

const Blog = () => {
  useEffect(() => {
    document.title = "Martin Scarponi | Photography";
  });
  return (
    <>
      <section className="sm:col-span-5 md:col-span-4 min-h-screen scrollbar-hide p-2">
        <h2 className="text-4xl text-center uppercase text-black mt-36 p-4">
          Blog
        </h2>
        <BlogPosts />
      </section>
      <Footer />
    </>
  );
};

export default Blog;
