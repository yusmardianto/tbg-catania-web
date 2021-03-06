import React from 'react';
import Navbar from "@/components/_App/NavbarHome";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import LatestNews from '@/components/LatestNews/LatestNews';

// import GetLatestNews from "api/latest_news/news.js"

const News = function ({ backend, news, othernews, user, ...props }) {
    return (
        <>
            <Navbar username={user} />

            <PageBanner pageTitle="Latest News" />

            <LatestNews news={news} othernews={othernews} backend={backend} />

            <Footer />
        </>
    )
}

export default News;

// export async function getServerSideProps(context) {
//     var news = [];
//     var othernews = [];
//     const backend = process.env.BACKEND_SERVER_URI;

//     var { req, resp } = context;
//     const cookies = new Cookies(req, resp);
//     var user = "";
//     var userObj = (await cookies.get("user"))
//         ? JSON.parse(await cookies.get("user"))
//         : null;
//     if (userObj) {
//         let sessionId = userObj["partners_login_states"].filter(function (i) {
//             return (
//                 i.business_partner && i.business_partner.name.toUpperCase() == "YAMAHA"
//             );
//         });
//         if (sessionId.length != 0) user = userObj["username"];
//     }

//     var res = await GetLatestNews.GetNewsYamaha();
//     if (res["STATUS"] === 1) {
//         news = res["DATA"]["latestNews"];
//     }

//     var res = await GetLatestNews.GetOtherNewsYamaha();
// 	if (res["STATUS"] === 1) {
// 		othernews = res["DATA"]["latestNews"];
// 	}

//     return {
//         props: { news, othernews, backend, user }, // will be passed to the page component as props
//     };
// }