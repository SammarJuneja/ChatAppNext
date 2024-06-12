import React from "react";
import Link from "next/link";

const Greet = () => {
    return (
        <div className="app-bg fixed w-full h-full">
            <div className="flex mt-20 w-full justify-center">
                <h2 className="text-lg text-gray-500">A modern chat app built with Next.js and Tailwind CSS</h2>
            </div>
            <div className="grid mt-20 justify-center">
                <Link href="/login">
                <button className="px-4 text-center w-24 py-2 my-2 border-2 border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-600 hover:text-white">
                    Log In
                </button>
                </Link>
                <Link href="/signup" passHref>
                <button className="px-4 text-center w-24 py-2 my-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600">
                    Sign Up
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Greet;