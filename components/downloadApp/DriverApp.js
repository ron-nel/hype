import React, {useState} from "react";
import Popup from "reactjs-popup";
import Link from 'next/link';
import AppStore from "./AppStore";
import PlayStore from "./PlayStore";
import "../../static/style.css";
import "../../static/style2.css";
import { ServerStyleSheet } from "styled-components";

const DriverApp = props => {

	let driverAppBtn = "";

	if (props.showModal === true) {
		driverAppBtn = 
			<React.Fragment>
				<Popup
					open = {props.showModal}
					closeOnDocumentClick
					onClose = {props.handleCloseButton}
				>
					<div className="row">
						<div className="col-12 ">
							<a className="close" onClick={props.handleCloseButton}>
             				 &times;
            				</a>
							<AppStore
							showDownloadDriverAppBtn= {props.showDownloadDriverAppBtn}
							showDownloadRiderAppBtn= {props.showDownloadRiderAppBtn}
							driverAppStoreState = {props.driverAppStoreState}
							riderAppStoreState = {props.riderAppStoreState}
							handleSubmitBtn = {props.handleSubmitBtn}
							/>
							<PlayStore
							showDownloadDriverAppBtn= {props.showDownloadDriverAppBtn}
							showDownloadRiderAppBtn= {props.showDownloadRiderAppBtn}
							driverPlayStoreState = {props.driverPlayStoreState}
							riderPlayStoreState = {props.riderPlayStoreState}
							handleSubmitBtn = {props.handleSubmitBtn}
							/>
						</div>
					</div>
				</Popup>
			</React.Fragment>
	}

	return driverAppBtn;
}

export default DriverApp;