import React from 'react'
import ListBlog from '@/app/blog/listBlog'
import ExploreTopic from '@/app/blog/exploretopic'
import BlogNewsletter from '@/app/blog/blogNewsletter'
const page = () => {
    return (
        <>
        <div className='blog-page-wrap'>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                        <h1 className='blog-page-banner-title text-center'> Our <span> Blog </span> </h1>
                        <p className='blog-page-banner-descripation text-center px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ultrices arcu. Maecenas sagittis, felis sed gravida pulvinar, eros ligula condimentum magna, a malesuada ex dolor sit amet magna.</p>
                    </div>
                </div>
            </div>
        </div>
        <ListBlog/>
        <ExploreTopic/>
        <BlogNewsletter/>
        </>
    )
}

export default page
