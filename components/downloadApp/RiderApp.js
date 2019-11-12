import React, {useState} from "react";

const RiderApp = props => {

	let riderAppBtn = "";

	if (props.showDownloadRiderAppBtn===true) {
		riderAppBtn = 
			<React.Fragment>
				<button onClick={handleDownloadIOSApp}>
					<img src="../static/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" className="img-container7" height="100%" width="100%"/>
				</button>
				<button onClick={handleDownloadAndroidApp}>
					<img src="../static/google-play-badge.svg" className="img-container7" height="100%" width="100%"/>
				</button>
			</React.Fragment>
	}
	return riderAppBtn;
}

export default RiderApp;