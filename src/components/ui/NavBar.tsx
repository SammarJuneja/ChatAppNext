import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-row items-center space-x-4">
        <Link href="/" passHref>
          <button className="text-2xl font-bold">OpenChat</button>
        </Link>
        <p className="text-gray-500">
          A modern chat app built with Next.js and Tailwind CSS
        </p>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <Link href="/login">
          <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-600 hover:text-white">
            Log In
          </button>
        </Link>
        <Link href="/signup" passHref>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;