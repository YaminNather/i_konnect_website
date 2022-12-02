import classnames from "classnames";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/future/image";
import { NavBar } from "../../components/NavBar";
import blogStyles from "../../styles/Blog.module.scss";
import titleImage from "../../public/looking-for-a-trusted-laptop-service-centre-in-coimbatore/title-image.gif";
import Head from "next/head";
import { ServiceCentreLocationsTable } from "../../components/Blogs/ServiceCentreLocationsTable/ServiceCentreLocationsTable";

const LookingForATrustedLaptopServiceCentreInCoimbatorePage: NextPage = () => {
    return (
        <div className={blogStyles.blog}>
            <Head>
                {/* <!-- Google Tag Manager --> */}
                <script 
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-PG2HL6K');
                        `
                    }}
                />     
                {/* <!-- End Google Tag Manager --> */}

                <title>Looking for a trusted laptop service centre in Coimbatore</title>
            </Head>

            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript>
                <iframe 
                    src="https://www.googletagmanager.com/ns.html?id=GTM-PG2HL6K"
                    height="0" width="0" style={{display: "none", visibility: "hidden"}} />
            </noscript>
            {/* <!-- End Google Tag Manager (noscript) --> */}

            <header><NavBar /></header>

            <div className={classnames("container", blogStyles.content_area)}>
                <div className={blogStyles.content_container}>
                    <p className={blogStyles.date}>July 14, 2022</p>

                    <h1>Looking for a trusted laptop service centre in Coimbatore</h1>

                    <Image src={titleImage} alt="Looking for a trusted laptop service centre in Coimbatore" />

                    <p>
                        Are you worried about your laptop not getting quality servicing? 
                        Well lucky for you, we are here to introduce you to find ways to get 
                        a trusted<Link href="/blogs/find-the-best-laptop-service-centre-in-coimbatore"><a> laptop service centre in Coimbatore!</a></Link>
                    </p>

                    <h2>Number 1: Company History</h2>

                    <p>
                        Before you hand over your laptop to the service centre,
                        it is always a good decision to look up the company&#39;s existence and experience 
                        in the industry!
                    </p>

                    <h2>Number 2: Reputation</h2>

                    <p>
                        What do people have to say about the service centre? 
                        Check out google reviews and testimonials from the company&#39;s website.
                    </p>

                    <h2>Number 3: Location</h2>

                    <p>
                        Where is their service centre? Can you physically visit it? 
                        Always see to find the best geographical proximity! 
                        Bonus points if they have multiple locations!
                    </p>

                    <p>
                        Well, all in all, finding a professional and reputable service centre is going 
                        to give you value for your money! 
                        IT Konnect in this regard comes up as a
                        <Link href="/blogs/list-of-hp-authorized-service-centres-in-coimbatore"><a> trustworthy service centre</a></Link> with 
                        numerous satisfied customers.
                    </p>

                    <p>
                        Check our website for more information or call us to 
                        schedule a check-up for your laptop!
                    </p>

                    <ServiceCentreLocationsTable style={{marginTop: "32px"}} />
                </div>
            </div>
        </div>
    );
};

export default LookingForATrustedLaptopServiceCentreInCoimbatorePage;