import React, { useState } from 'react';
import * as Icon from 'react-feather';

import NumberFormat from 'react-number-format';

//sweet alert
import swal from 'sweetalert';

const Checkout = function ({ backend, checkoutItem, ...props }) {

    // const [HargaFasilitas, setHargaFasilitas] = useState('');
    // const [NamaFasilitas, setNamaFasilitas] = useState('');

    const [formValue, setFormValue] = React.useState({
        namaPemesan: "",
        emailPemesan: "",
        teleponPemesan: "",
        pemesan: "",
        checkIn: "",
        checkOut: "",
        jumlahPengunjung: "",
        requestKamar: "",
        catatan: "",
        hargaKamar: "",
        namaKamar: "",
        ppnKamar: 0.1,
        hargaTotal: checkoutItem[0].hargaKamar + checkoutItem[0].hargaKamar * 0.1,
    });

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const CheckoutKamar = checkoutItem.map((data) => {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <img style={{ borderRadius: "10px" }} src={`${backend}${data.imgKamar["url"]}`} height="120px" />
                </div>
                <div className="col-lg-8 col-md-6">
                    <h3 className="title">Catania {data.namaKamar}</h3>
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
            </div>
        )
    })

    const CheckoutHarga = checkoutItem.map((data) => {
        return (
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
                                <span className="subtotal-amount"><NumberFormat value={data.hargaKamar} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></span>
                            </td>
                        </tr>
                        <tr>
                            <td className="product-name">
                                <span href="#">Pajak 10%</span>
                            </td>

                            <td className="product-total">
                                <span type="disable" className="subtotal-amount"><NumberFormat value={data.hargaKamar + data.hargaKamar * 0.1} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    })
    return (
        <>
            <div className="checkout-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="user-actions" style={{ backgroundColor: "#eb1928" }}>
                                <h4 style={{ color: 'white' }}><Icon.Edit style={{ color: 'white' }} width="50px" /> Important Notice</h4><br />
                                <p style={{ color: 'white' }}>
                                    <b>As COVID-19 situation evolves, make sure the cancellation policy suits your needs.</b><br />
                                    In reference to the circular letter by the government regarding the spread control of Covid-19, please ensure that you are aware of your booking's refund, cancellation, and reschedule policy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            var newformValue = {
                                ...formValue,
                                namaKamar: checkoutItem[0].namaKamar,
                                hargaKamar: checkoutItem[0].hargaKamar,
                            }
                            setFormValue(newformValue)
                            console.log(JSON.stringify(newformValue));
                            const response = await fetch(
                                "/api/Booking/CreateBooking",
                                {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(newformValue),
                                }
                            );
                            console.log("response :", response);
                            if (response.ok) {
                                var res = await response.json();
                                console.log("cek response :", res);
                                if (res["STATUS"] === 1) {
                                    res["DATA"]["booking"];
                                    swal("Produk Berhasil Ditambah ke Keranjang", "Silahkan Cek Keranjang Belanja Anda", "success");
                                    router.push("/review");
                                }
                                else {
                                    swal("Produk Gagal Ditambah ke Keranjang", "Silahkan Coba Lagi", "error");
                                }
                            } else {
                                swal("Transaksi Gagal", "Silahkan Coba Lagi", "error");
                            }
                            return false;
                        }}
                    >
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="billing-details">
                                    <h3 className="title">Masukan Informasi Pemesan</h3>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Nama Lengkap <span className="required">*</span></label>
                                                <input
                                                    name="namaPemesan"
                                                    type="text"
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            namaPemesan: e.target.value.toString(),
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Alamat Email <span className="required">*</span></label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            emailPemesan: e.target.value.toString(),
                                                        })
                                                    }}
                                                />
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
                                                <input
                                                    name="teleponPemesan"
                                                    type="text"
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            teleponPemesan: e.target.value.toString(),
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Saya Memesan Untuk ? <span className="required">*</span></label>

                                                <div className="select-box">
                                                    <select
                                                        name="pemesan"
                                                        className="form-select"
                                                        onInput={(e) => {
                                                            setFormValue({
                                                                ...formValue,
                                                                pemesan: e.target.value.toString(),
                                                            })
                                                        }}
                                                    >
                                                        <option value="0">- Pilih Salah Satu -</option>
                                                        <option value="Saya Sendiri">Saya Sendiri</option>
                                                        <option value="Orang Lain">Orang Lain</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="billing-details">
                                    {CheckoutKamar}
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Check In<span className="required">*</span></label>
                                                <input
                                                    name="checkIn"
                                                    type="date"
                                                    min={disablePastDate()}
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            checkIn: e.target.value,
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Check Out <span className="required">*</span></label>
                                                <input
                                                    data-date-format="DD MMMM YYYY"
                                                    name="checkOut"
                                                    type="date"
                                                    min={disablePastDate()}
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            checkOut: e.target.value,
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Jumlah Pengunjung <span className="required">*</span></label>

                                                <div className="select-box">
                                                    <select
                                                        name="jumlahPengunjung"
                                                        className="form-select"
                                                        onInput={(e) => {
                                                            setFormValue({
                                                                ...formValue,
                                                                jumlahPengunjung: e.target.value.toString(),
                                                            })
                                                        }}
                                                    >
                                                        <option value="0">- Pilih Salah Satu -</option>
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
                                        {checkoutItem[0]["fasilitas_kamars"].map((option) => (
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-check">
                                                    <input
                                                        name="requestKamar"
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        value={option.namaFasilitas}
                                                        onInput={(e) => {
                                                            setFormValue({
                                                                ...formValue,
                                                                requestKamar: e.target.value.toString(),
                                                            })
                                                        }}
                                                    />
                                                    <label className="form-check-label" value={option.namaFasilitas}>{option.namaFasilitas}</label>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="catatan"
                                                    id="notes"
                                                    cols="30"
                                                    rows="4"
                                                    placeholder="Catatan"
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            catatan: e.target.value.toString(),
                                                        })
                                                    }}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{ marginTop: "50px" }}>
                                <div className="order-details">
                                    <h3 className="title">Total Pesanan</h3>

                                    {CheckoutHarga}

                                    <button type="submit" className="btn btn-primary order-btn">Book</button>
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