import React, {useState} from "react";
import Link from 'next/link';
import Layout from "../../components/Layout";

const RegistrationRequirement = props => {

	let test = 

		<React.Fragment>
		<Layout>
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
		</Layout>
		</React.Fragment>
	
	return test;
}

export default RegistrationRequirement;


