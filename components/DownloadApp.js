import React, {useState} from "react";
import Popup from "reactjs-popup";
import AppStore from "./downloadApp/AppStore";
import DriverApp from "./downloadApp/DriverApp";
import "../static/style.css";
import "../static/style2.css";


const DownloadApp = () => {

	const [driverAppBtnState, setDriverAppBtnState] = useState(false);
	const [riderAppBtnState, setRiderAppBtnState] = useState(false);
	const [showDownloadDriverAppBtn, setShowDownloadDriverAppBtn] = useState(false);
	const [showDownloadRiderAppBtn, setShowDownloadRiderAppBtn] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [driverAppStoreState, setDriverAppStoreState] = useState("https://apps.apple.com/ph/app/hype-driver/id1439434957?mt=8");
	const [riderAppStoreState, setRiderAppStoreState] = useState("https://apps.apple.com/ph/app/hype-transport/id1411402298");
	const [driverPlayStoreState, setDriverPlayStoreState] = useState("https://play.google.com/store/apps/details?id=com.hype.driver");
	const [riderPlayStoreState, setRiderPlayStoreState] = useState("https://play.google.com/store/apps/details?id=com.hype.user");

	const handleShowDriverAppBtn = () => {
		setShowDownloadDriverAppBtn(true);
		setShowDownloadRiderAppBtn(false);
		setShowModal(true);
		setDriverAppBtnState(true);
		setRiderAppBtnState(false);
	}
	
	const handleShowRiderAppBtn = () => {
		setShowDownloadDriverAppBtn(false);
		setShowDownloadRiderAppBtn(true);
		setShowModal(true);
		setRiderAppBtnState(true);
		setDriverAppBtnState(false);
	}

	const handleSubmitBtn = () => {
		console.log(riderAppStoreState);

	}

	const handleCloseButton = () => {
		setShowModal(false);
	}


	let downloadAppComponent = 
		<React.Fragment>
			<div className="row">
				<div className="col-12 margin-y-1em">
					<span className="fontsizeAppDownLoad mx-4">Download the App</span>
				</div>
				<div className="col-12 mx-4">
					<button
						onClick={handleShowDriverAppBtn}
						className="btn bg-orange mx-2"
					>Driver App
					</button>
					<button
						onClick={handleShowRiderAppBtn}
						className="btn bg-orange mx-2"
					>Rider App
					</button>
				</div>
				<div className="col-12 mx-3">
				<DriverApp
						showModal = {showModal}
						showDownloadDriverAppBtn = {showDownloadDriverAppBtn}
						showDownloadRiderAppBtn= {showDownloadRiderAppBtn}
						driverAppStoreState = {driverAppStoreState}
						riderAppStoreState = {riderAppStoreState}
						driverPlayStoreState = {driverPlayStoreState}
						riderPlayStoreState = {riderPlayStoreState}
						handleSubmitBtn = {handleSubmitBtn}
						handleCloseButton = {handleCloseButton}
					/>
				</div>
				
			</div>
		</React.Fragment>

	return downloadAppComponent;
}

export default DownloadApp;