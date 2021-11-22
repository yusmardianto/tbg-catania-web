import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
	return (
		<div className="main-banner" style={{ marginTop: "-50px" }}>
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5">
								<div className="hero-content">
									<h1 style={{ color: 'white' }}>Catania Hotel & Resort</h1>
									<p style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

									<Link href="/contact">
										<a className="btn btn-primary">Get Started</a>
									</Link>
								</div>
							</div>

							<div className="col-lg-5 offset-lg-1">
								<div className="pricing-table">
									<div className="pricing-header">
										<h3>Superior Room</h3>
									</div>

									<div className="price">
										<span><sup>Rp.</sup>200.000,- <span>/Night</span></span>
									</div>

									<div className="pricing-features">
										<ul>
											<li className="active">5 GB Bandwidth</li>
											<li className="active">Highest Speed</li>
											<li className="active">1 GB Storage</li>
											<li className="active">Unlimited Website</li>
										</ul>
									</div>

									<div className="pricing-footer">
										<Link href="#">
											<a className="btn btn-primary">Book Now</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainBanner;