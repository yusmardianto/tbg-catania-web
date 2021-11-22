import React from 'react';
import Navbar from "@/components/_App/NavbarHome";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 

import SuperiorContent from '@/components/Accomodation/Superior';
 
const BlogDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Superior Room" /> 

            <SuperiorContent />

            <Footer />
        </>
    )
}

export default BlogDetails;