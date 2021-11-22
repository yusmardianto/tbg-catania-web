import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import SliderImage from 'react-zoom-slider';

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

const SuperiorRoom = () => {
    return (
        <>
            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <SliderImage
                                        data={data}
                                        showDescription={true}
                                        direction="left"
                                    />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock /> September 31, 2021
                                            </li>
                                            <li>
                                                <Icon.User /> <a href="#">Steven Smith</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Room Description</h2>

                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p><br />

                                    {/* <h2>Gallery</h2>
                                    <ul className="block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog-image/blog8.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog-image/blog7.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog-image/blog9.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul> */}

                                    <h3>Fasilitas</h3>

                                    <ul className="features-list">
                                        <li><Icon.Wifi /> Free Wifi</li>
                                        <li><Icon.Phone /> Telpon</li>
                                        <li><Icon.Coffee /> Breakfas</li>
                                    </ul>
                                </div>

                                {/* <div className="article-footer">
                                    <div className="article-tags">
                                        <a href="#">Fashion</a>
                                        <a href="#">Smart</a>
                                        <a href="#">Marketing</a>
                                        <a href="#">Games</a>
                                        <a href="#">Travel</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="widget-area" id="secondary">
                                <div className="widget widget_search">
                                    <h1 align="center">Booking Room</h1><br />
                                    <h3 className="widget-title" align="center">Rp.400.000,- / Night</h3><br /><br />

                                    <form className="search-form">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Check In</label>
                                                <input type="date" className="search-field" placeholder="Search..." />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Check Out</label>
                                                <input type="date" className="search-field" placeholder="Search..." />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Person</label>
                                                <div className="select-box">
                                                    <select className="form-select">
                                                        <option value="0">- Jumlah Pengunjung -</option>
                                                        <option value="1">1 Orang</option>
                                                        <option value="2">2 Orang</option>
                                                        <option value="3">3 Orang</option>
                                                        <option value="4">4 Orang</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div><br />
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group" align="center">
                                                <a href="/booking" className="btn btn-primary order-btn">Book Now!</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SuperiorRoom;