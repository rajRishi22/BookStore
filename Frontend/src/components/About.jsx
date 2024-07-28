// import React from 'react'
// function About() {
//   return (
//     <div>About</div>
//   )
// }
// export default About


import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function About() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center justify-center text-center">
                <h1 className="text-2xl md:text-4xl">
                    Welcome to our Online Book Store!{" "}
                    <span className="text-pink-500">Here! :)</span>
                </h1>
                <p className="mt-12">
                    At our book store, we are passionate about providing you with a wide selection of books to choose from. Whether you're a fan of fiction, non-fiction, or anything in between, we've got you covered. Our team of dedicated book enthusiasts carefully curates our collection to ensure that you have access to the latest releases, timeless classics, and everything in between.
                </p>
                <Link to="/">
                    <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                        Back
                    </button>
                </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                {book.map((item) => (
                    <Cards key={item.id} item={item} />
                ))}
            </div>
        </div>
    </>
);
}

export default About;
