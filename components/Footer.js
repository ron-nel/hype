import Link from 'next/link';
import "../static/style.css";
import "../static/style2.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF as facebook ,
    faTwitter as twitter ,
    faInstagram as instagram
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
	return (
		<React.Fragment>
			<style jsx>{`
				a {
					text-decoration: none;
					color: white;
				}

				a:hover {
					color: orange;
				}
				`}</style>
			<footer className="container30vh posrelative bg-black color-white">
				<div className="row padding-y-5em padding-x-footer">
					<div className="col-12 col-md-3">
						<ul className="liststyleno line-height1dot3em">
							<li>
								<div className="img-container5">
									<img src="../static/hypelogo3.svg" className="d-flex align-items-start" width="100%" height="100%"/>
								</div>
							</li>
							<li>
								<a href="https://goo.gl/maps/tiG5suvJqSVnpFCLA">Manila</a>
							</li>
							<li>
								<a href="https://goo.gl/maps/EZEJhEU4jWyacb8N8">Cebu</a>
							</li>
							<li className="padding-y-1em">
								<a href="https://www.facebook.com/HypePilipinas/"><FontAwesomeIcon icon={facebook} size="fa-sm"/></a>
								<a href="https://twitter.com/hypepilipinas?lang=en" className="padding-x-1em"><FontAwesomeIcon icon={twitter} size="fa-sm"/></a>
								<a href="https://www.instagram.com/hypepilipinas/?hl=en"><FontAwesomeIcon icon={instagram} size="fa-sm"/></a>
							</li>
						</ul>
					</div>
					<div className="col-12 col-md-3">
						<ul className="liststyleno line-height1dot3em">
							<li>
								<Link href="/partner"><a><h4>Partner</h4></a></Link>
							</li>
							<li>
								<Link href="/partner/why-partner-with-HYPE"><a>Why partner with HYPE</a></Link>
							</li>
							<li>
								<Link href="/partner/registration-requirement"><a>Registration Requirements</a></Link>
							</li>
							<li>
								<Link href="/partner/how-to-use-the-driver-app"><a>How to use the App</a></Link>
							</li>
							<li>
								<Link href="/partner/earnings"><a>Earnings</a></Link>
							</li>
							<li>
								<Link href="/partner/driver-safety"><a>Safety</a></Link>
							</li>
						</ul>
					</div>
					<div className="col-12 col-md-3">
						<ul className="liststyleno line-height1dot3em">
							<li>
								<Link href="/rider"><a><h4>Rider</h4></a></Link>
							</li>
							<li>
								<Link href="/rider/ride-with-HYPE"><a>Why ride with HYPE</a></Link>
							</li>
							<li>
								<Link href="/rider/how-to-use-the-rider-app"><a>How to use the App</a></Link>
							</li>
							<li>
								<Link href="/rider/fare-estimates"><a>Fare estimates</a></Link>
							</li>
							<li>
								<Link href="/rider/promocodes"><a>Promocodes</a></Link>
							</li>
							<li>
								<Link href="/rider/rider-safety"><a>Safety</a></Link>
							</li>
						</ul>
					</div>
					<div className="col-12 col-md-3">
						<ul className="liststyleno line-height1dot3em">
							<li>
								<Link href="/about"><a><h4>Our Company</h4></a></Link>
							</li>
							<li>
								<Link href="/about/overview"><a>Overview</a></Link>
							</li>
							<li>
								<Link href="/about/our-values"><a>Our Values</a></Link>
							</li>
							<li>
								<Link href="/about/our-mission"><a>Our Mission</a></Link>
							</li>
							<li>
								<Link href="/about/our-vision"><a>Our Vision</a></Link>
							</li>
							<li>
								<Link href="/about/careers"><a>Careers</a></Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-12 text-center bottom0 posabsolute">
						<h6 className="">HYPE Transport Systems, Inc.&copy;2019</h6>
					</div>
				</div>
			</footer>
		</React.Fragment>
	)
}

export default Footer;