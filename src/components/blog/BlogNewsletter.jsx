import React from 'react'
import NewLetterLogo from '../../../public/images/newLetter-logo.png'
import Image from 'next/image'
const BlogNewsletter = () => {
    return (
        <>
        <div className='blog-news-letter-section'>
            <div className="container">                
                <div className="row">
                    <div className='col-md-12'>
                        <div className='newletter-wrap-section'>
                            <div className='news-letter-left'>
                                <Image src={NewLetterLogo}/>
                                <div className='content-news-letter-wrap'>
                                    <h4> Subscribe to Webguruz Bulletin </h4>
                                    <p> Join our growing community at webguruz and receive exclusive monthly updates directly from us! </p>
                                </div>
                            </div>
                            <div className='news-form-right'>
                                <form>
                                    <input type='text' placeholder='Enter Email'/>
                                    <button type='submit'>Subscribe Now!</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        </>
    )
}

export default BlogNewsletter
