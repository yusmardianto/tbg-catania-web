import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

import NumberFormat from 'react-number-format';

const MainBanner = function ({ backend, kamar, ...props }) {
	const kamarContent = kamar.map((data) => {
		return (
			<div className="col-lg-5 offset-lg-1">
				<div className="agency-services-box">
					<img src={`${backend}${data.imgKamar["url"]}`} alt="image" />

					<div className="content">
						<h3>
							<Link href={"/checkout?s=" + data.id}>
								<a>{data.namaKamar}<br /><NumberFormat value={data.hargaKamar} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></a>
							</Link>
						</h3>

						<Link href={"/checkout?s=" + data.id}>
							<a className="read-more-btn">
								Booking Now <Icon.PlusCircle />
							</a>
						</Link>
					</div>
				</div>
			</div>
		)
	})

	return (
		<div className="main-banner" style={{ marginTop: "-50px" }}>
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5">
								<div className="hero-content">
									<h1 style={{ color: 'white' }}>Catania Hotel & Resort</h1>
									<p style={{ color: 'white' }}>Catania Bangau is home to 5 guestrooms. All are tastefully furnished, and many even provide such comforts as towels, closet, internet access – wireless (complimentary), air conditioning, desk. The property's host of recreational offerings ensures you have plenty to do during your stay. Enjoy a great location and services to match at Catania Bangau.</p>

									<Link href="/contact">
										<a className="btn btn-primary">Get Started</a>
									</Link>
								</div>
							</div>

							{kamarContent}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainBanner;