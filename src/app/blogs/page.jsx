import "./blogs.css";
import AllPost from "../../components/blogComponents/02AllPosts";
import Link from "next/link";
import Contact from "@/components/homeComponents/11HomeContact";
import Addresshome from "@/components/homeComponents/12Addresshome";
import ExploreTopic from "@/components/blogComponents/ExploreTopic";
import BlogNewsletter from "@/components/blogComponents/BlogNewsletter";

const page = async ({ searchParams }) => {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const limit = 10;

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/getdata?page=${page}&limit=${limit}`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const { data, currentPage, totalPages } = await response.json();
  


  return (
    <>
      <section className="blog-content-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <ul>
                <li>
                  <Link href="/categories/web-design">Web Design</Link>
                </li>
                <li>
                  <Link href="/categories/online-reputation-management">
                    Online Reputation Management
                  </Link>
                </li>
                <li>
                  <Link href="/categories/hubspot">Hubspot</Link>
                </li>
                <li>
                  <Link href="/categories/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/categories/google-remarketing">
                    Google Remarketing
                    </Link>
                </li>
                 
                <li>
                  <Link href="/categories/artificial-intelligence">
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <AllPost posts={data} currentPage={currentPage} totalPages={totalPages} />
        </div>
          <ExploreTopic/>
          <BlogNewsletter/>
      </section>
    </>
  );
};

export default page;
