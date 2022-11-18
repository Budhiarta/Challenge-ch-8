import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import OurService from "./OurService";
import WhyUs from "./WhyUs";
import Testimoni from "./Testimoni";
import Faq from "./Faq";
import Footer from "./Footer";

const HomePage = () => {
    return(
        <>
        <Navbar/>
        <Header/>
        <OurService/>
        <WhyUs/>
        <Testimoni/>
        <Faq/>
        <Footer/>
        </>
    )
}

export default HomePage;