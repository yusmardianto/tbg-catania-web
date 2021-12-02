import React, { useState } from 'react';
import Navbar from "@/components/_App/NavbarHome";
import Footer from "@/components/_App/Footer";
import ReviewContent from '@/components/Booking/review';

const Checkout = () => {
    return (
        <>
            <Navbar /><br /><br />

            <ReviewContent />

            <Footer />
        </>
    )
}

export default Checkout;