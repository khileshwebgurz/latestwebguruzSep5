import React from "react";
import Image from "next/image";
import upload from "../../../../public/images/webimages/upload.svg";

const WebCompany = () => {
  return (
    <div>
      <section className="web-company pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 content color-wt">
              <h4 className="color-wt mb-4">
                No.1 Web Development Company In India
              </h4>
              <p className="color-wt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut ultrices arcu. Maecenas sagittis, felis sed gravida pulvinar,
                eros ligula condimentum magna, a malesuada ex dolor sit amet
                magna. Vivamus vitae vestibulum dui, in interdum augue. Nulla
                vitae aliquam lectus, ac porttitor lacus. Praesent rhoncus nisl
                mi, ac laoreet.
              </p>
              <p className="color-wt">
                Ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
                ultrices arcu. Maecenas sagittis, felis sed gravida pulvinar,
                eros ligula condimentum magna, a malesuada ex dolor sit amet
                magna.
              </p>
              <ul>
                <li>Quick and easy quote process</li>
                <li>Quick and easy quote process</li>
                <li>Quick and easy quote process</li>
              </ul>
              <a href="" className="explore-btn">
                View Our Portfolio
              </a>
            </div>
            <div className="col-sm-6 col-xs-12 web-form">
              <form className="web-connect text-center">
                <h4 className="color-wt">Connect With Our Experts</h4>
                <p className="color-wt mb-4">
                  We respond to 97% of messages within 1-2 business hour(s),
                  really!
                </p>
                <div className="merge">
                  <label>
                    <input type="text" placeholder="Your Name" />
                  </label>
                  <label>
                    <input type="text" placeholder="Email" />
                  </label>
                </div>
                <div className="merge">
                  <label>
                    <input type="number" placeholder="Phone Number" />
                  </label>
                  <label>
                    <input type="number" placeholder="Your Budget" />
                  </label>
                </div>
                <textarea
                  className="project-requiremnt"
                  placeholder="Project Requirement"
                ></textarea>
                <label className="fileupload">
                  <input type="file" id="myFile" name="filename" />
                  <Image src={upload} />
                  (Attach Files (doc, xls, pdf, txt and ppt files only, Max Size
                  2MB)
                </label>
                <label className="submit">
                  <input type="submit" value="Send Your Enquiry" />
                </label>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebCompany;
