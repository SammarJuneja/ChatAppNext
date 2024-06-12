import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-4">
      <div className="flex fixed">
        <Link href="">
        <span></span>
        </Link>
        <Link href="">
        <span></span>
        </Link>
        <Link href="">
        <span></span>
        </Link>
        <Link href="">
        <span></span>
        </Link>
        <Link href="">
        <span></span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;