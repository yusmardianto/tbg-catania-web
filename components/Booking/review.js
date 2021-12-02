import React, { useState } from 'react';
import * as Icon from 'react-feather';

const Checkout = () => {
    return (
        <>
            <div className="checkout-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="user-actions">
                                <h4><Icon.Edit width="50px" /> Mohon Periksa Ulang Pesanan Anda</h4><br />
                            </div>
                        </div>
                    </div>

                    <form>
                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                                <div className="billing-details">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <img style={{ borderRadius: "10px" }} src="https://origin.pegipegi.com/jalan/images/pictM/Y4/Y972594/Y972594002.jpg" width="100%" />
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <h2 className="title">Catania Double Room</h2>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <p>Fasilitas : </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <p><Icon.Wifi /> Free Wifi</p>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <p><Icon.Phone /> Telepon</p>
                                                </div>
                                            </div><br /><br />
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <h6>Check In </h6>
                                                    <h6><p>25 Nov 2021</p></h6>
                                                    <h6><p>From 14:00</p></h6>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <h6>Check Out </h6>
                                                    <h6><p>25 Nov 2021</p></h6>
                                                    <h6><p>Before 14:00</p></h6>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <h6>Durasi Hari </h6>
                                                    <h6><p>1 Hari</p></h6>
                                                </div>
                                                <div className="col-lg-2 col-md-6">
                                                    <h6>Pengunjung </h6>
                                                    <h6><p>1 Orang</p></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br />
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-6" style={{ marginTop: "50px" }}>
                                <div className="billing-details">
                                    <h3 className="title">Informasi Pemesan</h3>

                                    <div className="row">
                                        <div className="col-lg-7 col-md-4">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-4">
                                                    <h6>Nama Pemesan : Yusmardianto</h6>
                                                </div>
                                                <div className="col-lg-12 col-md-4">
                                                    <h6>Nomer HP Pemesan : 087797315685 </h6>
                                                </div>
                                                <div className="col-lg-12 col-md-4">
                                                    <h6>Alamat Email Pemesan : yusmardianto@thamrin.co.id</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-4">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-4">
                                                    <h6>Pesan Khusus : Yusmardianto</h6>
                                                </div>
                                                <div className="col-lg-7 col-md-4">
                                                    <h6> </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-6" style={{ marginTop: "50px" }}>
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

                                    <a href="#" className="btn btn-primary order-btn">Bayar Pesanan</a>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Checkout;