import React, { useState } from 'react';
import * as Icon from 'react-feather';

import NumberFormat from 'react-number-format';

const Checkout = function ({ transactionToken, backend, review, ...props }) {

    console.log(transactionToken);

    const Checkin = review[0].checkIn;
    const [Checkinyear, Checkinmonth, Checkinday] = Checkin.split('-')

    const Checkout = review[0].checkOut;
    const [Checkoutnyear, Checkoutnmonth, Checkoutnday] = Checkout.split('-')

    const date = (new Date(review[0].checkIn)).getTime();
    const today = (new Date(review[0].checkOut)).getTime();
    const msDay = 24 * 60 * 60 * 1000; // milliseconds per day

    const days = Math.floor((today - date) / msDay);

    const ReviewContens = review.map((data) => {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-6">
                    <div className="billing-details">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <img style={{ borderRadius: "10px" }} src="https://origin.pegipegi.com/jalan/images/pictM/Y4/Y972594/Y972594002.jpg" width="100%" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <h2 className="title">{data.namaKamar}</h2>
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
                                        <h6><p>{`${Checkinday}/${Checkinmonth}/${Checkinyear}`}</p></h6>
                                        <h6><p>Setelah 14:00</p></h6>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <h6>Check Out </h6>
                                        <h6><p>{`${Checkoutnday}/${Checkoutnmonth}/${Checkoutnyear}`}</p></h6>
                                        <h6><p>Sebelum 14:00</p></h6>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <h6>Durasi Hari </h6>
                                        <h6><p>{days} Hari</p></h6>
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
                                        <h6>Nama Pemesan : {data.namaPemesan}</h6>
                                    </div>
                                    <div className="col-lg-12 col-md-4">
                                        <h6>Nomer HP Pemesan : {data.teleponPemesan} </h6>
                                    </div>
                                    <div className="col-lg-12 col-md-4">
                                        <h6>Alamat Email Pemesan : {data.emailPemesan}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-4">
                                <div className="row">
                                    <div className="col-lg-12 col-md-4">
                                        <h6>Pesan Khusus : {data.requestKamar}</h6>
                                    </div>
                                    <div className="col-lg-12 col-md-4">
                                        <h6>Jumlah Pengunjung : {data.jumlahPengunjung} Orang</h6>
                                    </div>
                                    <div className="col-lg-12 col-md-4">
                                        <h6>Catatan : {data.catatan} Orang</h6>
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
                                            <span href="#">Catania {data.namaKamar}</span>
                                        </td>

                                        <td className="product-total">
                                            <span className="subtotal-amount"><NumberFormat value={data.hargaKamar * days} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product-name">
                                            <span href="#">Pajak 10%</span>
                                        </td>

                                        <td className="product-total">
                                            <span type="disable" className="subtotal-amount"><NumberFormat value={data.hargaKamar * days * 0.1} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product-name">
                                            <span href="#">Total</span>
                                        </td>

                                        <td className="product-total">
                                            <span type="disable" className="subtotal-amount"><NumberFormat value={data.hargaKamar * days + data.hargaKamar * days * 0.1} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <button
                            onClick={(e) => { snap.pay(transactionToken); }}
                            className="btn btn-primary order-btn"
                        >
                            Bayar Pesanan
                        </button>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <>
            <script type="text/javascript"
                src="https://app.sandbox.midtrans.com/snap/snap.js"
                data-client-key="SB-Mid-client-srx674LjNbEybd4-">
            </script>
            <div className="checkout-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="user-actions">
                                <h4><Icon.Edit width="50px" /> Mohon Periksa Ulang Pesanan Anda</h4><br />
                            </div>
                        </div>
                    </div>

                    {ReviewContens}

                </div>
            </div>
        </>
    )
}

export default Checkout;