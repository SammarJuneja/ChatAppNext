import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <NavBar />
      <div>
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
