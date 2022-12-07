import axios, { AxiosResponse } from "axios";
import { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { IGoogleReCaptchaConsumerProps, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FooterSection } from "../components/common/footer_section/footer_section";
import { SalesLeadSection } from "../components/sales_lead_page/sales_lead_section/sales_lead_section";
import { SellingPointsSection } from "../components/sales_lead_page/selling_points_section/selling_points_section";


const LandingPage: NextPage = (props) => {
    return (
        <>
            <SalesLeadSection />

            <SellingPointsSection />

            <FooterSection />
        </>
    );
};

export default LandingPage;