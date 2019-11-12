import Layout from "../components/Layout";
import {useRouter} from 'next/router';
import DownloadApp from "../components/DownloadApp";
import SimpleSlider from "../components/SimpleSlider";
import Link from 'next/link';

const Partner = () => {
	return (
		<Layout>
			<div className="row bg-white container80vh font-mont line-height2em  padding-y-4em padding-x-em">
				<div className="col-12 margin-x-1em color-orange">
					<h2 className="font-weight1000 fontsize1dot5em">Own your time.</h2>
					<h1 className="font-weight1000 fontsize2dot5em">Be your own Boss!</h1>
					<h2 className="font-weight1000 fontsize2em">Partner with HYPE now.</h2>
				</div>
				<div className="col-12">
					<DownloadApp />
				</div>
			</div>
			<div className="row container100vh padding-y-5em bg-gray padding-x-em">
				<div className="col-12">
					<h3 className="text-center font-weight1000 fontsize1dot5em font-mont color-orange padding-y-1em" id="whyPartnerWithHYPE">Why join HYPE?</h3>
					<div className="row padding-y-5em display-sm">
						<div className="col-12 padding-x-1em">
							<div className="row padding-y-5">
								<div className="col-6 img-container200px">
									<img src="../static/undraw_invest_88iw.svg" height="100%" width="100%"/>
								</div>
								<div className="col-6">
									<h3>Earn on your terms</h3>
									<p className="line-height1dot8em">Work whenever you’re feeling it?
									<br/>Partner with Hype.
									<br/>Do not miss out on special events of your loved ones while providing for them. Spend time with your family, start your special project, hit the gym, catch up with friends. Do it all with your flexible time when you partner with HYPE.</p>
								</div>
							</div>
						</div>
						<div className="col-12 padding-x-1em">
							<div className="row padding-y-5">
								<div className="col-6">
									<h3>Your safety matters</h3>
									<p className="line-height1dot8em">We care for your safety thus, we are letting you know who you let in your car. Check rider rating and profile upon their booking request.<br/>You can also access emergency button built inside the mobile application to alert our support.</p>
								</div>
								<div className="col-6 img-container200px">
									<img src="../static/undraw_add_user_ipe3.svg" height="100%" width="100%"/>
								</div>
							</div>
						</div>
						<div className="col-12 padding-x-1em">
							<div className="row padding-y-5">
								<div className="col-6 img-container200px">
									<img src="../static/undraw_active_support_6rwo.svg" height="100%" width="100%"/>
								</div>
								<div className="col-6">
									<h3>You got a support</h3>
									<p className="line-height1dot8em">We are partners, HYPE is one call away to support you. We are open 24/7 to assist you on and off the road.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row padding-y-5em display-md display-lg">
						<div className="col-12 col-md-4 padding-x-1em">
							<div className="row img-container200px">
								<img src="../static/undraw_invest_88iw.svg" height="100%" width="100%"/>
							</div>
							<div className="row padding-y-1em">
								<h3>Earn on your terms</h3>
								<p className="line-height1dot8em">Work whenever you’re feeling it?
								<br/>Partner with Hype.
								<br/>Do not miss out on special events of your loved ones while providing for them. Spend time with your family, start your special project, hit the gym, catch up with friends. Do it all with your flexible time when you partner with HYPE.</p>
							</div>
						</div>
						<div className="col-12 col-md-4 padding-x-1em">
							<div className="row img-container200px">
								<img src="../static/undraw_add_user_ipe3.svg" height="100%" width="100%"/>
							</div>
							<div className="row padding-y-1em">
								<h3>Your safety matters</h3>
								<p className="line-height1dot8em">We care for your safety thus, we are letting you know who you let in your car. Check rider rating and profile upon their booking request.<br/>You can also access emergency button built inside the mobile application to alert our support.</p>
							</div>
						</div>
						<div className="col-12 col-md-4  padding-x-1em">
							<div className="row img-container200px">
								<img src="../static/undraw_active_support_6rwo.svg" height="100%" width="100%"/>
							</div>
							<div className="row padding-y-1em">
								<h3>You got a support</h3>
								<p className="line-height1dot8em">We are partners, HYPE is one call away to support you. We are open 24/7 to assist you on and off the road.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row bg-orange container50vh font-mont line-height2em color-white bolder padding-y-5em padding-x-em">
				<div className="col-12 margin-x-em">
					<h1 className="font-weight1000 fontsize10 line-height2em text-center">TNVS Requirements</h1>
				</div>
				<div className="col-12 col-md-4 padding-x-5em line-height1dot8em font-weight500">
				</div>
				<div className="col-12 col-md-8 padding-x-1em line-height1dot8em font-weight500">
					<h5>Operator Documents</h5>
					<ol>
						<li>Government ID</li>
						<li>Proof of TIN (e.g. TIN ID, BIR Form 2303 (Certificate of Registration), ITR</li>
						<li>PA/CPC</li>
					</ol>
					<h5>Vehicle Documents</h5>
					<ol>
						<li>Official Receipt(OR)</li>
						<li>Certificate of Registration(CR)</li>
						<li>Comprehensive Isurance</li>
						<li>Passenger Insurance(PAMI)</li>
						<li>Images of vehicle(front, rear, left side, right side, dashboard, back passenger seat)</li>
					</ol>
					<h5>Driver Documents</h5>
					<ol>
						<li>Professional Driver's ID</li>
						<li>NBI Clearance</li>
						<li>Police Clearance</li>
						<li>Medical Certificate (for drivers age 60 and above)</li>
					</ol>
					<span>*Please bring both original and photocopy of document upon registration.</span>
				</div>
			</div>
			<div className="row container50vh padding-y-5em padding-x-em">
				<div className="col-12">
					<SimpleSlider />
				</div>
			</div>
			<div className="row container50vh padding-y-5em padding-x-em">
				<div className="col-12">
				<h3 className="font-mont font-weight1000 fontsize1dot5em color-orange margin-x-1em text-center padding-y-1em">Start earning with HYPE.</h3>
					<div className="row display-md display-lg">
						<div className="col-12 col-md-4 padding-x-1em">
							<div className="row padding-y-2em">
								<h3>Earn on standard fare</h3>
								<p className="line-height1dot8em">Earn on base fare which highers depending on the number of trips you’re able to make in a day.</p>
							</div>
						</div>
						<div className="col-12 col-md-4 padding-x-1em">
							
							<div className="row padding-y-2em">
								<h3>Earn on surge</h3>
								<p className="line-height1dot8em">Earn more on top of standard trip fare. Hype driver’s app is equipped with heat map for you to see areas where riders’ demands are high.</p>
							</div>
						</div>
						<div className="col-12 col-md-4  padding-x-1em">
								
							<div className="row padding-y-2em">
								<h3>Earn on promo</h3>
								<p className="line-height1dot8em">On top of commission, you can also earn on our ongoing promos upon passing the mechanics.</p>
							</div>
						</div>
					</div>
					<div className="row display-sm">
						<div className="col-md-8 offset-md-4 padding-x-1em">
							<div className="row padding-y-2em">
								<h3>Earn on standard fare</h3>
								<p className="line-height1dot8em">Earn on base fare which highers depending on the number of trips you’re able to make in a day.</p>
							</div>
						</div>
						<div className="col-md-8 offset-md-4 padding-x-1em">
							<div className="row padding-y-2em">
								<h3>Earn on surge</h3>
								<p className="line-height1dot8em">Earn more on top of standard trip fare. Hype driver’s app is equipped with heat map for you to see areas where riders’ demands are high.</p>
							</div>
						</div>
						<div className="col-md-8 offset-md-4 padding-x-1em">
							<div className="row padding-y-2em">
								<h3>Earn on promo</h3>
								<p className="line-height1dot8em">On top of commission, you can also earn on our ongoing promos upon passing the mechanics.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row container50vh padding-y-5em padding-x-em bg-gray">
				<div className="col-12">
					<h3 className="font-mont font-weight1000 fontsize1dot5em color-orange text-center padding-y-1em">Safety is our priority.</h3>
					<div className="row display-md display-lg">
						<div className="col-12 col-md-4 padding-x-1em">
							<div className="row">
							</div>
							<div className="row padding-y-2em">
								<h3>Insurance</h3>
								<p className="line-height1dot8em">Drive in peace knowing that you and your loved ones are secured. With accident insurance coverage, you can drive the extra mile.</p>
							</div>
						</div>
						<div className="col-12 col-md-4 padding-x-1em">
							<div className="row">
							</div>
							<div className="row padding-y-2em">
								<h3>Emergency Button</h3>
								<p className="line-height1dot8em">Let our support know when you need help with the SOS feature built in the app. It is our duty to save you if we sense that you are in trouble.</p>
							</div>
						</div>
						<div className="col-12 col-md-4 padding-x-1em">
							<div className="row">
							</div>
							<div className="row padding-y-2em">
								<h3>Data Privacy</h3>
								<p className="line-height1dot8em">While we let our riders know your name, we will never share your email and contact number to anyone and keep them secure in our system.</p>
							</div>
						</div>
					</div>
					<div className="row display-sm">
						<div className="col-md-8 offset-md-4 padding-x-1em">
							<div className="row">
							</div>
							<div className="row padding-y-2em">
								<h3>Insurance</h3>
								<p className="line-height1dot8em">Drive in peace knowing that you and your loved ones are secured. With accident insurance coverage, you can drive the extra mile.</p>
							</div>
						</div>
						<div className="col-md-8 offset-md-4 padding-x-1em">
							<div className="row">
							</div>
							<div className="row padding-y-2em">
								<h3>Emergency Button</h3>
								<p className="line-height1dot8em">Let our support know when you need help with the SOS feature built in the app. It is our duty to save you if we sense that you are in trouble.</p>
							</div>
						</div>
						<div className="col-md-8 offset-md-4 padding-x-1em">
							<div className="row">
							</div>
							<div className="row padding-y-2em">
								<h3>Data Privacy</h3>
								<p className="line-height1dot8em">While we let our riders know your name, we will never share your email and contact number to anyone and keep them secure in our system.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
				</div>
			</div>
			<div className="row">
				<div className="col-12">
				</div>
			</div>
		</Layout>
	)
}

export default Partner;