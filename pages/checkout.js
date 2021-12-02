import React, { useState } from 'react';
import Navbar from "@/components/_App/NavbarHome";
import Footer from "@/components/_App/Footer";
import CheckoutContent from "@/components/Booking/checkout";
import * as Icon from 'react-feather';

import GetCheckoutItem from "api/Kamar/kamar";

const Checkout = function ({ backend, checkoutItem, ...props }) {
    return (
        <>
            <Navbar /><br /><br />

            <CheckoutContent checkoutItem={checkoutItem} backend={backend} />

            <Footer />
        </>
    )
}

export default Checkout;

export async function getServerSideProps(context) {
    var {query} = context;
    var checkoutItem = [];
    const backend = process.env.BACKEND_SERVER_URI;

    var res = await GetCheckoutItem.GetDetailKamar(query.s||0);
	if (res["STATUS"] === 1) {
		checkoutItem = res["DATA"]["jenisKamars"];
	}
    
    return {
        props: { checkoutItem, backend }, // will be passed to the page component as props
    };
}