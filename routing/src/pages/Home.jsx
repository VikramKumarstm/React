import React from "react";
import Header from "../common/Header";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Course from "./Course";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Error404 from "./Error404";

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="*" element={<Error404 />} /> 
      </Routes>
    </div>
  );
}

export default Home;
