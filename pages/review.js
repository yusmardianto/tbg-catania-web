import React, { useState } from 'react';
import Navbar from "@/components/_App/NavbarHome";
import Footer from "@/components/_App/Footer";
import ReviewContent from '@/components/Booking/review';

import GetReviewItem from "api/Booking/booking";

const Checkout = function ({ transactionToken, backend, review, ...props }) {
    return (
        <>
            <Navbar /><br /><br />

            <ReviewContent review={review} transactionToken={transactionToken} />

            <Footer />
        </>
    )
}

export default Checkout;

export async function getServerSideProps(context) {
    var { query } = context;
    var review = [];
    const backend = process.env.BACKEND_SERVER_URI;

    var res = await GetReviewItem.getReview(query.s || 0);
    if (res["STATUS"] === 1) {
        review = res["DATA"]["bookings"];
    }

    // midtrans
    var parameters = await GetReviewItem.getReview();
    console.log("parameters", parameters);
    var transactionToken = [];
    if (parameters["STATUS"] === 1) {
        const midtransClient = require('midtrans-client');
        let snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: 'SB-Mid-server-SfBhLkXXlTxCBx7EYP5T2k3d',
            clientKey: 'SB-Mid-client-srx674LjNbEybd4-'
        });
        let parameter = {
            "transaction_details": {
                // "order_id": parameters["DATA"]["bookings"][0]["NamaPemesan"],
                "gross_amount": parameters["DATA"]["bookings"][0]["hargaTotal"],
                "order_id":"Trx-Ord-2545343543",
                // "gross_amount":33750000,
            }, "credit_card": {
                "secure": true
            },
            "customer_details": {
                "first_name": parameters["DATA"]["bookings"][0]["namaPemesan"],
                "phone": parameters["DATA"]["bookings"][0]["teleponPemesan"],
                // "first_name":"Yusmar",
                // "phone":"087797315685",
                "billing_address":
                {
                    "first_name": parameters["DATA"]["bookings"][0]["namaPemesan"],
                    "phone": parameters["DATA"]["bookings"][0]["teleponPemesan"],
                    "email": parameters["DATA"]["bookings"][0]["emailPemesan"],
                    // "first_name":"Yusmar",
                    // "phone":"087797315685",
                    // "address":"THAMRIN INDRAPURA JL.AIPDA KAREL SATSUIT TUBUN,17 ILIR, KEC.ILIR TIM.I, PALEMBANG, KOTA PALEMBANG - ILIR TIMUR II, SUMATERA SELATAN, ID 30114"
                },
            },
        };

        await snap.createTransaction(parameter)
            .then((transaction) => {
                // transaction token
                transactionToken = transaction.token;
                console.log('transactionToken:', transactionToken);

                // transaction redirect url
                let transactionRedirectUrl = transaction.redirect_url;
                console.log('transactionRedirectUrl:', transactionRedirectUrl);
            })
            .catch((e) => {
                console.log('Error occured:', e.message);
            });
    }


    return {
        props: { transactionToken, review, backend }, // will be passed to the page component as props
    };
}