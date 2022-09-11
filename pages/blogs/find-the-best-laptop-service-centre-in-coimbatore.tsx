import classnames from "classnames";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/future/image";
import { NavBar } from "../../components/NavBar";
import blogStyles from "../../styles/Blog.module.scss";
import titleImage from "../../public/find-the-best-laptop-service-centre-in-coimbatore/title-image.png";
import Head from "next/head";
import { ServiceCentreLocationsTable } from "../../components/Blogs/ServiceCentreLocationsTable/ServiceCentreLocationsTable";
import { ServiceCentreLocationInfo } from "../../components/Blogs/ServiceCentreLocationInfo";

const FindTheBestLaptopServiceCentreInCoimbatorePage: NextPage = () => {
    return (
        <div className={blogStyles.blog}>
            <Head>
                <title>Find the best laptop service centre in Coimbatore</title>
            </Head>

            <header><NavBar /></header>

            <div className={classnames("container", blogStyles.content_area)}>
                <div className={blogStyles.content_container}>
                    <p className={blogStyles.date}>July 14, 2022</p>

                    <h1>Find the best laptop service centre in Coimbatore</h1>

                    <Image src={titleImage} alt="Find the best laptop service centre in Coimbatore" />

                    <p>
                        Finding the right service centre for your laptop can be confusing. 
                        With various centres around Coimbatore, how does one decide which is the right option
                        for them?
                    </p>

                    <p>
                        Remember, always choose authorized service centres. Authorized stores not only help your
                        save money but also guarantree that you get quality and original parts for replacement.
                    </p>

                    <h2>But what makes authorized centres the best for laptop service in Coimbatore?</h2>

                    <ol>
                        <li>
                            Authorized laptop service centres often offer timely assistance 
                            this is great for all of your working pals cause they <strong>will</strong> deliver on time!
                        </li>

                        <li>
                            They have trained and experienced technicians so you can rest assured 
                            that your laptop is in good hands.
                        </li>

                        <li>
                            They have the best deal in town. 
                            Seriously. 
                            With expert technicians, timely assistance, and quality service, 
                            they are the 
                            <Link href="/blogs/looking-for-a-trusted-laptop-service-centre-in-coimbatore"><a> best laptop service centre in Coimbatore</a></Link>.
                        </li>

                        <li>Here find our best laptop service centres all around the city.</li>

                        <ServiceCentreLocationsTable />

                        <p>
                            So go ahead and look for authorized centres for your laptop in Coimbatore! 
                            You can get started by visiting our website now
                        </p>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default FindTheBestLaptopServiceCentreInCoimbatorePage;