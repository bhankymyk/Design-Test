import React from "react";
import Navbar from "@/app/Components/Blog/NavBar";
import Hero from "./Components/Blog/SectionBlog";
import Footer from "./Components/Blog/Footer";

export default function page() {
  return (
    <>
      <div className="container-fluid bg-[#F4F4F4] ">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
