import React from 'react';
import * as Icon from 'react-feather';
import SliderImage from 'react-zoom-slider';

import { AiFillStar } from "react-icons/ai";

const data = [
    {
        image: 'https://origin.pegipegi.com/jalan/images/pict1L/Y2/Y996372/Y996372001.jpg',
        text: 'img1'
    },
    {
        image: 'https://pix10.agoda.net/hotelImages/602/6025213/6025213_18111511050069716941.jpg?s=1024x768',
        text: 'img2'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-p3S-ls6H91EnKbEf3T9SO2Sz8Hh9BjpIA&usqp=CAU',
        text: 'img3'
    },
    {
        image: 'https://origin.pegipegi.com/jalan/images/pict1L/Y2/Y996372/Y996372001.jpg',
        text: 'img4'
    },
    {
        image: 'https://pix10.agoda.net/hotelImages/602/6025213/6025213_18111511050069716941.jpg?s=1024x768',
        text: 'img5'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-p3S-ls6H91EnKbEf3T9SO2Sz8Hh9BjpIA&usqp=CAU',
        text: 'img6'
    },
];

const ServicesArea = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="services-area ptb-80">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <img src="https://origin.pegipegi.com/jalan/images/pict1L/Y2/Y996372/Y996372001.jpg" width="800px" alt="image" />
                        </div>

                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Room Facilities</h2>
                                <div className="bar"></div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Free Wifi</b>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Car Park [ on-site ]</b>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Air conditioning</b>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Closet</b>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Desk</b>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Free Bottle Water</b>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Satellit/Cable Channel</b>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Shower</b>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Toilertries</b>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <AiFillStar style={{ marginTop: "7px" }} /><b>Towels</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesArea;