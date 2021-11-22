import React from 'react';
import Navbar from "@/components/_App/NavbarHome";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import Gallery from '@/components/Gallery/Gallery';

const Contact = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Gallery" />

            <Gallery />
           
            <Footer />
        </>
    )
}

export default Contact;