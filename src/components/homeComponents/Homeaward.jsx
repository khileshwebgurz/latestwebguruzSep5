import React from 'react'
import Image from 'next/image'
import awards from '../../../public/images/awards.webp'
const Homeaward = () => {
  return (
    <div>
        <section className="award-main py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
                        <h3>Award & <span>Recognition</span></h3>
                        <p>Using the latest technology and industry expertise, we built top-end Android and IOS-based applications that add value to the business and user experience</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <ul>
                            <li>
                                <Image src={awards} alt=''/>
                                <p>APPFUTURA</p>
                            </li>
                            <li>
                                <Image src={awards} alt=''/>
                                <p>APPFUTURA</p>
                            </li>
                            <li>
                                <Image src={awards} alt=''/>
                                <p>APPFUTURA</p>
                            </li>
                            <li>
                                <Image src={awards} alt=''/>
                                <p>APPFUTURA</p>
                            </li>
                            <li>
                                <Image src={awards} alt=''/>
                                <p>APPFUTURA</p>
                            </li>
                            <li>
                                <Image src={awards} alt=''/>
                                <p>APPFUTURA</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Homeaward
