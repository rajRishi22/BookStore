

import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Contact() {
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
                    Contact Us!{" "}
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
            
            <div className="flex justify-center"> {/* Modified line */}
                <div className="dflex bg-center w-80 md:w-90"> {/* Modified line */}
                    <h1 className="text-4xl">Contact Form</h1>
                    <form id="contact_form" name="contact_form" method="post" className="mt-5">
                        <div class="mb-5 row">
                            <div class="col">
                                <label>First Name</label>
                                <input type="text" required maxLength="200" className="form-control" id="first_name" name="first_name" />
                            </div>
                            <div class="col">
                                <label>Last Name</label>
                                <input type="text" required maxLength="200" className="form-control" id="last_name" name="last_name" />
                            </div>
                        </div>
                        <div class="mb-5 row">
                            <div class="col">
                                <label for="email_addr">Email address</label>
                                <input type="email" required maxLength="200" className="form-control" id="email_addr" name="email"
                                    placeholder="name@example.com" />
                            </div>
                            <div class="col">
                                <label for="phone_input">Phone</label>
                                <input type="tel" required maxLength="200" className="form-control" id="phone_input" name="Phone"
                                    placeholder="Phone" />
                            </div>
                        </div>
                        <div class="mb-5">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" name="message" rows="7"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary px-4 btn-lg">Post</button>
                    </form>
                </div>
            </div>
            
            {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                {book.map((item) => (
                    <Cards key={item.id} item={item} />
                ))}
            </div> */}
        </div>
    </>
);
}

export default Contact;
