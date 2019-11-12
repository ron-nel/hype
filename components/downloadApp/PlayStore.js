import React, {useState} from "react";
import Link from 'next/link';
import "../../static/style.css";
import "../../static/style2.css";

const PlayStore = props => {

	let playStoreBtn = "";

	if (props.showDownloadDriverAppBtn==true) {

		playStoreBtn = 
			<React.Fragment>
				<a href={props.driverPlayStoreState} className="margin-x-1em">
					<img src="../static/google-play-badge.svg" className="img-container7" height="100%" width="100%"/>
				</a>
			</React.Fragment>

	}

	if (props.showDownloadRiderAppBtn==true) {

		playStoreBtn = 
			<React.Fragment>
				<a href={props.riderPlayStoreState} className="margin-x-1em">
					<img src="../static/google-play-badge.svg" className="img-container7" height="100%" width="100%"/>
				</a>
			</React.Fragment>

	}

	return playStoreBtn;

}

export default PlayStore;