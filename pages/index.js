import React from 'react';
import Navbar from "@/components/_App/NavbarHome";
import MainBanner from "@/components/Home/MainBanner";
import Nearby from "@/components/Home/Nearby";
import Facilities from "@/components/Home/Facilities";
import PromoCarousel from "@/components/Home/PromoCarousel";
import Footer from "@/components/_App/Footer";

const Index = () => {
    return (
        <>
            <Navbar />
            {/* <PromoCarousel /> */}
            <MainBanner />
            <Facilities />
            <Nearby />
            <Footer />
        </>
    )
}

export default Index;