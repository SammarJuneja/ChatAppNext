import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white text-gray-900">
        <h1>Chat List</h1>
        <ol>
          <li>Chat 1</li>
          <li>Chat 2</li>
          <li>Chat 3</li>
        </ol>
      </div>

      <Footer />
    </>
  );
};

export default page;
