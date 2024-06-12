import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 w-full fixed bottom-0 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full">
          <Link href="/" passHref>
            <button className="text-2xl font-bold text-blue-500 hover:text-blue-600">
              OpenChat
            </button>
          </Link>
          <p className="text-gray-200 mt-4 sm:mt-0 text-center sm:text-left">
            A modern chat app built with Next.js and Tailwind CSS
          </p>
        </div>
        <div className="text-gray-500 mt-20 sm:mt-8 flex flex-row items-center justify-between w-full space-x-4">
          <Link href="/home">
            <span>Home</span>
          </Link>
          <Link href="/login">
            <span>Login</span>
          </Link>
          <Link href="/register">
            <span>Register</span>
          </Link>
          <Link href="/tos">
            <span>Terms of Service</span>
          </Link>
          <Link href="/pp">
            <span>Privacy Policy</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;