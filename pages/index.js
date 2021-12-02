import React from 'react';
import Navbar from "@/components/_App/NavbarHome";
import MainBanner from "@/components/Home/MainBanner";
import Nearby from "@/components/Home/Nearby";
import Facilities from "@/components/Home/Facilities";
import PromoCarousel from "@/components/Home/PromoCarousel";
import Footer from "@/components/_App/Footer";

import GetKamar from "api/Kamar/kamar.js"

const Index = function ({ backend, kamar, ...props }) {
    return (
        <>
            <Navbar />
            {/* <PromoCarousel /> */}
            <MainBanner kamar={kamar} backend={backend} />
            <Facilities />
            <Nearby />
            <Footer />
        </>
    )
}

export default Index;

export async function getServerSideProps() {
    var kamar = [];
    const backend = process.env.BACKEND_SERVER_URI;

    // var { req, resp } = context;
    // const cookies = new Cookies(req, resp);
    // var user = "";
    // var userObj = (await cookies.get("user"))
    //     ? JSON.parse(await cookies.get("user"))
    //     : null;
    // if (userObj) {
    //     let sessionId = userObj["partners_login_states"].filter(function (i) {
    //         return (
    //             i.business_partner && i.business_partner.name.toUpperCase() == "YAMAHA"
    //         );
    //     });
    //     if (sessionId.length != 0) user = userObj["username"];
    // }

    var res = await GetKamar.GetKamar();
    if (res["STATUS"] === 1) {
        kamar = res["DATA"]["jenisKamars"];
    }
    
    return {
        props: { kamar, backend }, // will be passed to the page component as props
    };
}