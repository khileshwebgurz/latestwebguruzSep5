import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import singleblog from "../../../../public/images/singleblogimages/seo-banner.svg";
import logowhite from "../../../../public/images/singleblogimages/logo-wht.svg";
import system from "../../../../public/images/singleblogimages/systm.svg";
import crossarow from "../../../../public/images/singleblogimages/crossarow.svg";
import topranking from "../../../../public/images/singleblogimages/top-ranking.svg";
const page = async ({ params }) => {
  const { slug } = params;
  // console.log('my slug is >>',slug)
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?limit=1000`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const { data } = await response.json();
  const post = data.find((p) => p.slug === slug);
  const formatCategory = (category) => {
  return category
    .split('-')                // Split by hyphens
    .map(word =>               // Map over each word
      word.charAt(0).toUpperCase() + word.slice(1)  // Capitalize first letter
    )
    .join(' ');                // Join words with space
};

  if (!post) {
    notFound();
  }
  return (
    <>
      <section className="single-blog-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center ">
              <h3 className="mb-4">
                Boost Your Online Presence with{" "}
                <span>Medical SEO Strategies</span>
              </h3>
              <Image
                src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                width={825}
                height={431}
                alt="singleblog"
              />
              <div className="published-main pt-4 d-flex align-items-center justify-content-between">
                <ul className="d-flex align-items-center">
                  <li className="me-2 pe-2">
                    <span>Published on: </span>
                    {post.yoast_head_json.schema[
                      "@graph"
                    ][0].datePublished.slice(0, 10)}
                  </li>
                  {/* <li>
                    <span>Updated on: </span>
                    {post.yoast_head_json.schema[
                      "@graph"
                    ][0].datePublished.slice(0, 10)}
                  </li> */}
                </ul>
                {/* <ul className="social-icons">
                  Share this article :<li></li>
                  <li></li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <span className="tag">{post.acf.list_all_category}</span>
              <div className="author-card">
                <h4>Author</h4>
                <div className="author-content-img d-flex align-items-center mb-4">
                  <Image src={singleblog} alt="" />
                  <div className="content">
                    <h5>
                      {post.yoast_head_json.schema["@graph"][4].image.caption}
                    </h5>
                    <p className="mb-0">Director Growth Marketing</p>
                  </div>
                </div>
                <p>
                {post.yoast_head_json.schema["@graph"][4].description}
                </p>
                {/* <p>
                  <span className="article-bold">Article Reviewed By:</span>{" "}
                  Arpit Srivastava
                </p> */}
              </div>
              <div className="table-content">
                <h4>Table of Contents</h4>
                <ul>
                  <li>
                    <a href="/">The Importance of SEO for Medical Websites</a>
                  </li>
                  <li>
                    <a href="/">Best SEO Practices for Healthcare Providers</a>
                  </li>
                  <li>
                    <a href="/">How to Improve Medical Website Rankings</a>
                  </li>
                  <li>
                    <a href="/">Benefits of Medical SEO for Practitioners</a>
                  </li>
                  <li>
                    <a href="/">Common Mistakes to Avoid in Medical SEO</a>
                  </li>
                  <li>
                    <a href="/">
                      How to Choose the Right Keywords for Medical SEO
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      Importance of Local SEO for Medical Practices
                    </a>
                  </li>
                  <li>
                    <a href="/">SEO Strategies for Healthcare Marketing</a>
                  </li>
                  <li>
                    <a href="/">Conclusion</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6" key={post._id}>
              {/* Render dynamic content */}
              {post.acf.post_inner_details &&
                post.acf.post_inner_details.length > 0 && (
                  <div className="inner-description">
                    {post.acf.post_inner_details.map((detail, index) => (
                      <div key={index}>
                        {detail.heading && <h4>{detail.heading}</h4>}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: detail.description,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>
      <section className="latest-blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
                Our Latest <span>Blog</span>
              </h3>
            </div>
            {data.slice(1, 4).map(
              (post, index) =>
             (
                  <div className="col-sm-4 col-xs-12" key={index}>
                    <div className="blog-card-main">
                      <div className="image">
                        <Image
                          src={
                            post.yoast_head_json.schema["@graph"][0]
                              .thumbnailUrl
                          }
                          alt={`img${index + 1}`}
                          width={700}
                          height={340}
                        />
                      </div>
                      <div className="content">
                        <ul>
                          <li>
                            <a href="/">
                              {
                                post.yoast_head_json.schema["@graph"][4].image
                                  .caption
                              }
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              {post.yoast_head_json.schema[
                                "@graph"
                              ][0].datePublished.slice(0, 10)}
                            </a>
                          </li>
                          <li>
                            <a href="/">7 min read</a>
                          </li>
                        </ul>
                        <h4>{post.title.rendered}</h4>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered
                              .replace(/<p>/g, "")
                              .replace(/<\/p>/g, ""),
                          }}
                        />
                        <Link href={`/blog/${post.slug}`}>
                          Read More <span className="arrow"> {">"} </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
            )}

          
          </div>
        </div>
      </section>
      <section className="blog-single-banner mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <div className="singleblog-img-content d-flex align-items-center">
                <Image src={logowhite} />
                <h3>
                  Bring Your Brand to Life With
                  <span>Innersive & Interactive Storytelling</span>
                </h3>
                <Image src={crossarow} />
                <Image src={system} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
