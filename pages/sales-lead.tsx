import { NextPage } from "next";
import { CommonNavBar } from "../components/common/common_navbar/common_navbar";
import { FooterSection } from "../components/common/footer_section/footer_section";
import { SalesLeadSection } from "../components/sales_lead_page/sales_lead_section/sales_lead_section";
import { SellingPointsSection } from "../components/sales_lead_page/selling_points_section/selling_points_section";


const SalesLeadPage: NextPage = (props) => {
    return (
        <>
            <CommonNavBar />

            <SalesLeadSection />

            <SellingPointsSection />

            <FooterSection />
        </>
    );
};

export default SalesLeadPage;