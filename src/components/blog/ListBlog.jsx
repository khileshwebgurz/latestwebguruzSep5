"use client";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Pagination from "react-bootstrap/Pagination";
import blogtabdata from "../../utils/blogtabdata"; // Adjust the import path as necessary
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ListBlog = ({ posts, currentPage, totalPages }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");

  // Filter posts based on the active tab's event key
  const filteredPosts =
    activeTab === "all" || activeTab === "viewall"
      ? posts
      : posts.filter((post) => {
          // Check if the post category is an array or a string and match it to the event key
          const categories = post.acf.list_all_category;
          return Array.isArray(categories)
            ? categories.includes(activeTab) // If it's an array, check if it includes the active tab's eventKey
            : categories === activeTab; // If it's a string, directly compare
        });

  const handlePageChange = (newPage) => {
    if (newPage === 1) {
      router.push("/blogs");
    } else {
      router.push(`/blogs/page/${newPage}/`);
    }
  };

  return (
    <div className="list-blog-tab-with-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              id="bloglist-tab"
              className="pb-5"
            >
              {blogtabdata.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div className="image-content">
                    <div className="row">
                      {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                          <div
                            className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
                            key={index}
                          >
                            <div className="card-blog-list">
                              <Image
                                width={700}
                                height={340}
                                src={
                                  post.yoast_head_json.schema["@graph"][0]
                                    .thumbnailUrl
                                }
                                alt={post.title.rendered}
                              />
                              <div className="content_card_blog">
                                <h4>{post.title.rendered}</h4>

                                <Link
                                  className="readBlog"
                                  href={`/blog/${post.slug}`}
                                >
                                  Read Full Article
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-md-12">
                          <p>No posts available.</p>
                        </div>
                      )}
                    </div>

                    {/* Pagination */}
                    <div className="row mt40">
                      <div className="col-md-12">
                        {/* <Pagination className="my-blog-paginations">
                          {currentPage > 1 && (
                            <Pagination.Prev
                              href={`/blogs/page/${currentPage - 1}`}
                            />
                          )}
                          {[...Array(totalPages)].map((_, i) => (
                            <Pagination.Item
                              key={i}
                              active={i + 1 === currentPage}
                              href={`/blogs/page/${i + 1}`}
                            >
                              {i + 1}
                            </Pagination.Item>
                          ))}
                          {currentPage < totalPages && (
                            <Pagination.Next
                              href={`/blogs/page/${currentPage + 1}`}
                            />
                          )}
                        </Pagination> */}

                        <ul  className="my-blog-paginations">
                          <li className="btn-no-color">
                            <button
                              onClick={() => handlePageChange(currentPage - 1)}
                              disabled={currentPage <= 1}
                            >
                              Prev
                            </button>
                          </li>
                          {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index}>
                              <button
                                onClick={() => handlePageChange(index + 1)}
                                className={
                                  index + 1 === currentPage ? "active" : ""
                                }
                              >
                                {index + 1}
                              </button>
                            </li>
                          ))}
                          <li className="btn-no-color">
                            <button
                              onClick={() => handlePageChange(currentPage + 1)}
                              disabled={currentPage >= totalPages}
                            >
                              Next
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
