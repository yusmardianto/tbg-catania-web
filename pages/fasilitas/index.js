import React from 'react';
import Navbar from "@/components/_App/NavbarHome";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import FasilitasContent from '@/components/Fasilitas/Fasilitas';
 
const Services5 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Catania Hotel Facilities" />

            <FasilitasContent />

            <Footer />
        </>
    )
}

export default Services5;