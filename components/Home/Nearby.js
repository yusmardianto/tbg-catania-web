import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const ServicesArea = () => {
    return (
        <>
            <div className="services-area ptb-80">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4877.20160768357!2d104.7667749109232!3d-2.9676806176934054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b772d29451467%3A0x283d2cd7399d18dd!2sCatania%20BANGAU!5e0!3m2!1sid!2sid!4v1637288512772!5m2!1sid!2sid" width="100%" height="600" allowFullScreen="" loading="lazy"></iframe>
                        </div>

                        <div className="col-lg-6 col-md-12 services-content">
                            <div className="section-title">
                                <h2>Hotel Location</h2><br />
                                <p>Jalan Bangau RT 029 , RW 008, Ilir Timur, Palembang, Indonesia, 30113</p>
                                <div className="bar"></div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Dempo Car Area <br /> 1.5 km
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Dempo Old Park <br /> 1.5 km
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Lapangan Hatta <br /> 1.6 km
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Great Mosque of Palembang <br /> 2.4 km
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Monpera <br /> 2.6 km
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Ampera Bridge <br /> 2.7 km
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Kambang Iwak Besak Park <br /> 3.5 km
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Benteng Kuto Besak <br /> 4.5 km
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Kemaro Island <br /> 5.2 km
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="box">
                                        <Link href="/gallery">
                                            <a target="_blank">
                                                <Icon.MapPin style={{ marginTop: "12px" }} /> Jakabaring Sport Complex <br /> 6.3 km
                                            </a>
                                        </Link>
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