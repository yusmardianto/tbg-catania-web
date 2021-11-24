import React, { useState } from 'react';
import Navbar from "@/components/_App/NavbarHome";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';

const Checkout = () => {
    return (
        <>
            <Navbar /><br /><br />

            <div className="checkout-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="user-actions" style={{backgroundColor:"#eb1928"}}>
                                <h4 style={{ color: 'white' }}><Icon.Edit style={{ color: 'white' }} width="50px" /> Important Notice</h4><br/>
                                <p style={{ color: 'white' }}>
                                    <b>As COVID-19 situation evolves, make sure the cancellation policy suits your needs.</b><br/>
                                    In reference to the circular letter by the government regarding the spread control of Covid-19, please ensure that you are aware of your booking's refund, cancellation, and reschedule policy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="billing-details">
                                    <h3 className="title">Masukan Informasi Pemesan</h3>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Nama Lengkap <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Alamat Email <span className="required">*</span></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Masukan Ulang Alamat Email <span className="required">*</span></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Nomer Telepon <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Saya Memesan Untuk ? <span className="required">*</span></label>

                                                <div className="select-box">
                                                    <select className="form-select">
                                                        <option value="1">Saya Sendiri</option>
                                                        <option value="2">Orang Lain</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="billing-details">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <img style={{ borderRadius:"10px" }} src="https://origin.pegipegi.com/jalan/images/pictM/Y4/Y972594/Y972594002.jpg" height="120px" />
                                        </div>
                                        <div className="col-lg-8 col-md-6">
                                            <h3 className="title">Catania Double Room</h3>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <p>Fasilitas : </p>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <p><Icon.Wifi /> Free Wifi</p>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <p><Icon.Phone /> Telepon</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Check In<span className="required">*</span></label>
                                                <input type="date" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Check Out <span className="required">*</span></label>
                                                <input type="date" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Jumlah Pengunjung <span className="required">*</span></label>

                                                <div className="select-box">
                                                    <select className="form-select">
                                                        <option value="1">1 Orang</option>
                                                        <option value="2">2 Orang</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{ marginTop: "50px" }}>
                                <div className="billing-details">
                                    <h3 className="title">Permintaan Khusus Untuk Kamar</h3>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="1-large-bed" />
                                                <label className="form-check-label" htmlFor="1-large-bed">1 Kasur Besar</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="2-single-bed" />
                                                <label className="form-check-label" htmlFor="2-single-bed">2 Kasur Single</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="extra-bed" />
                                                <label className="form-check-label" htmlFor="extra-bed">Extra Kasur</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="notes" id="notes" cols="30" rows="4" placeholder="Catatan" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{ marginTop: "50px" }}>
                                <div className="order-details">
                                    <h3 className="title">Total Pesanan</h3>

                                    <div className="order-table table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Jenis Kamar</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="product-name">
                                                        <a href="#">Double Room</a>
                                                    </td>

                                                    <td className="product-total">
                                                        <span className="subtotal-amount">Rp.180.000</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-name">
                                                        <a href="#">Extra Bed</a>
                                                    </td>

                                                    <td className="product-total">
                                                        <span className="subtotal-amount">Rp.50.000</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-name">
                                                        <a href="#">Pajak 10%</a>
                                                    </td>

                                                    <td className="product-total">
                                                        <span className="subtotal-amount">Rp.23.000</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <a href="/review" className="btn btn-primary order-btn">Book</a>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Checkout;