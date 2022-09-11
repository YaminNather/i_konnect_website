import classnames from "classnames";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/future/image";
import { NavBar } from "../../components/NavBar";
import blogStyles from "../../styles/Blog.module.scss";
import titleImage from "../../public/list-of-hp-laptop-authorized-service-centres-in-coimbatore/title-image.png";
import Head from "next/head";
import { ServiceCentreLocationsTable } from "../../components/Blogs/ServiceCentreLocationsTable/ServiceCentreLocationsTable";

const ListOfHpLaptopAuthorizedServiceCentresInCoimbatorePage: NextPage = () => {
    return (
        <div className={blogStyles.blog}>
            <Head>
                <title>List of Hp laptop Authorized Service Centres in Coimbatore</title>
            </Head>

            <header><NavBar /></header>

            <div className={classnames("container", blogStyles.content_area)}>
                <div className={blogStyles.content_container}>
                    <p className={blogStyles.date}>July 14, 2022</p>

                    <h1>List of HP laptop Authorized Service Centres in Coimbatore!</h1>

                    <Image src={titleImage} alt="List of HP laptop Authorized Service Centres in Coimbatore" />

                    <p>
                        Authorized HP Laptop service centres to provide fast and professional repair services
                        for all models of laptops at a reasonable price point!
                    </p>

                    <p>
                        Here is a list of the top 8 authorized service centres of HP Laptops in Coimbatore!
                    </p>                    

                    <p>
                        The best HP laptop service centers in Coimbatore is IT Konnect. 
                        With an overall rating of 5.0, they have several locations around Coimbatore. 
                        Their customers like them for their overall top of the line service and technicians.
                    </p>

                    <ServiceCentreLocationsTable />

                    <Link href="/blogs/find-the-best-laptop-service-centre-in-coimbatore">
                        <a><h2>Why choose IT Konnect?</h2></a>
                    </Link>

                    <ol>
                        <li>We ensure your issue is addressed in 180 Min</li>
                        
                        <li>Trained & Certified Engineers</li>
                        
                        <li>Multiple Locations - 8</li>
                        
                        <li>Complete solution</li>
                        
                        <li>Multi brand Service</li>
                        
                        <li>We are Open all 7 days</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default ListOfHpLaptopAuthorizedServiceCentresInCoimbatorePage;