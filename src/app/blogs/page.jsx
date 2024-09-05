import React from "react";
import ListBlog from "@/components/blog/ListBlog";
import ExploreTopic from "@/components/blog/ExploreTopic";
import './blogs.css'
import BlogNewsletter from "../../components/blog/BlogNewsletter";

const page = async({searchParams}) => {
  
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const limit = 9;

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/getdata?page=${page}&limit=${limit}`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const { data, currentPage, totalPages } = await response.json();
  return (
    <>
      <div className="blog-page-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="blog-page-banner-title text-center">
             
                Our <span> Blog </span>
              </h1>
              <p className="blog-page-banner-descripation text-center px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut ultrices arcu. Maecenas sagittis, felis sed gravida pulvinar,
                eros ligula condimentum magna, a malesuada ex dolor sit amet
                magna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ListBlog posts={data} currentPage={currentPage} totalPages={totalPages}/>
      <ExploreTopic/>
      <BlogNewsletter/>
    </>
  );
};

export default page;
