import React, {useState} from "react";
import Link from 'next/link';
import "../../static/style.css";
import "../../static/style2.css";

const AppStore = props => {

	let appStoreBtn = "";

	if (props.showDownloadDriverAppBtn==true) {

		appStoreBtn = 
			<React.Fragment>
				<a href={props.driverAppStoreState} className="margin-x-1em" onClick={props.handleSubmitBtn}>
					<img src="../static/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" className="img-container7" height="100%" width="100%"/>
				</a>
			</React.Fragment>

	}

	if (props.showDownloadRiderAppBtn==true) {

		appStoreBtn = 
			<React.Fragment>
				<a href={props.riderAppStoreState} onClick={props.handleSubmitBtn} className="margin-x-1em">
					<img src="../static/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" className="img-container7" height="100%" width="100%"/>
				</a>
			</React.Fragment>

	}

	return appStoreBtn;

}

export default AppStore;