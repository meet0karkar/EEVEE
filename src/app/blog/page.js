"use client";
import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { blogs } from "../../utils/routes";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { RxDash } from "react-icons/rx";

const Page = () => {
  return (
    <div>
      {/* Include the Navbar */}
      <Navbar />

      {/* Main Content with Padding for Navbar */}
      <div className="w-[90%] mx-auto pt-[85px]">
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-12">
            {/* Blog Image */}
            <Fade direction="down" triggerOnce cascade delay={300}>
              <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
            </Fade>
            <div className="md:w-5/6 mx-auto   mb-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full"
              />
            </div>

            {/* Blog Title and Description */}

            
            <p className="text-gray-400 mb-6">{blog.description}</p>

            {/* Blog Blocks */}
            <div>
              {blog.blocks.map((block) => (
                <div key={block.title} className="mb-6">
                  <h2 className="text-lg text-start font-semibold mb-2">{block.title}</h2>
                  <div className="ml-4 text-gray-400">
                    {block.blockitems.map((item, idx) => (
                      <p key={idx} className="mb-2 flex items-top">
                        <RxDash className="text-2xl"/>{item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
