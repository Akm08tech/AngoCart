import React from "react";
import Header from "../shared-components/header/header"
import Footer from "../shared-components/footer/footer"

const AboutUs = () => {
    
    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {} ;

    return <>
        <Header
            userDetails={userDetails}
        />
        <div className="row m-0 about_us_page">
            <div className="col-0 col-md-1"></div>
            <div className="col-12 col-md-10">

        <div className="">
            <h1 className="font-bold text-2xl mb-10">
                About <span className="text-primary">Us</span>
            </h1>
            <p>
                India’s Ultimate Online dental Shopping Destination. Instadent’s vision is to create India’s most reliable and frictionless marketplace ecosystem that creates life-changing experiences for buyers and sellers.
            </p>
            <p className="mt-5 mb-8">
                Instadent is the preferred choice of hundreds of thousands of Dentists given its mammoth assortment of 500+ products, quick delivery even to theremotest corners of the Delhi NCR and Haryana.
            </p>
            <h1 className="font-bold text-2xl mb-10">Our <span className="text-primary">Story</span></h1>
            <p>In February 2022, Vasa denticity Pvt Ltd started a pilot project of Instadent to gather immediate demand of dental products by dentists of delhi, with the widest assortment of 500+ plus products across 80 plus diverse categories from Delhi NCR and Haryana Region, national, and international brands.
            </p>
            <p class="mt-5 mb-8">
                Instadent is the shopping destination for Dentists across the country, Currently delivering to Haryana And Delhi NCR in India. Online Shopping – A Boon The trend of online shopping is becoming a household name and so is Instadent.
            </p>
            <h1 class="font-bold text-2xl mb-10">What we <span class="text-primary">offers</span></h1>
            <p>Shopping online particularly at Instadent is a child’s play; all you need is a mobile phone or laptop or tablet with Internet connection to get started. Simply log into Instadent.in and browse through the wide assortment of products across categories.
            </p>
            <p class="mt-5 mb-8">
                Once you have zeroed in on your favourite products, simply place the order by filling in the details; the products will be delivered right at your doorstep. Shop on the Go – Install Instadent WebApp Today! You can shop for your favourite products at Instadent.in.
            </p>
            <ul class="list-disc">
                <li>
                    <strong>Delhi NCR and Haryana+
                        <span class="text-primary font-bold">
                            City
                        </span>
                    </strong>
                </li>
                <li>
                    <strong>
                        39+
                        <span class="text-primary font-bold">
                            Top Brands
                        </span>
                    </strong>
                </li>
                <li>
                    <strong>
                        500+
                        <span class="text-primary font-bold">
                            Products
                        </span>
                    </strong>
                </li>
            </ul>
            <h1 class="font-bold text-2xl mb-10 mt-10">
                Our Core
                <span class="text-primary">
                    Values
                </span>
            </h1>
            <ul class="list-disc">
                <li>
                    <strong>
                        ETHICS
                    </strong>
                </li>
            </ul>
            <p>We own our behaviour, keep our promises, value honesty, honor the community environment in which we operate and embrace diversity
            </p>
            <ul class="list-disc mt-4">
                <li>
                    <strong>TEAM AND DEDICATION</strong></li></ul><p>Dedication to team achieves best-in-class solutions in products, processes and people</p><ul class="list-disc mt-4"><li><strong>CUSTOMER FOCUS</strong></li></ul><p>Customer satisfaction is at the center of what we do everyday.We are a trusted partner of our customers. </p><ul class="list-disc mt-4"><li><strong>EMPOWER AND DELIBRATE</strong></li></ul><p>Employees are encouraged to take action and ensure timely delivery of expectations.</p><ul class="list-disc mt-4"><li><strong>SAFETY, QUALITY &amp; WELL BEING</strong></li></ul><p>Exceed Industry standards for safety and performance by leveraging our core values.</p></div>

            </div>
            <div className="col-0 col-md-1"></div>
        </div>
            <Footer />
    <style jsx>
        {`
        
        .about_us_page{
            margin-top: 120px !important;
            box
        }

        `}
    </style>
    </>
}

export default AboutUs;