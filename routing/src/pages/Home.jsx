import React from "react";
import Header from "../common/Header";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Course from "./Course";

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/course" element={<Course />} />
      </Routes>

      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laborum
        ipsum, quidem temporibus nesciunt eligendi, accusantium soluta libero
        eum delectus ut veniam. Voluptatibus laborum, odit id consequuntur culpa
        enim quaerat!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laborum
        ipsum, quidem temporibus nesciunt eligendi, accusantium soluta libero
        eum delectus ut veniam. Voluptatibus laborum, odit id consequuntur culpa
        enim quaerat!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laborum
        ipsum, quidem temporibus nesciunt eligendi, accusantium soluta libero
        eum delectus ut veniam. Voluptatibus laborum, odit id consequuntur culpa
        enim quaerat!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laborum
        ipsum, quidem temporibus nesciunt eligendi, accusantium soluta libero
        eum delectus ut veniam. Voluptatibus laborum, odit id consequuntur culpa
        enim quaerat!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias laborum
        ipsum, quidem temporibus nesciunt eligendi, accusantium soluta libero
        eum delectus ut veniam. Voluptatibus laborum, odit id consequuntur culpa
        enim quaerat!
      </p>
    </div>
  );
}

export default Home;
