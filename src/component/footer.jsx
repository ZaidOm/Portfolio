import React from "react";

import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div id="starsfooter" />
				<div id="starsfooter2" />
				<div id="starsfooter3" />
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="px-3"
								href="https://github.com/zaidom"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt="github"/>
							</a>
							<a
								href="https://www.linkedin.com/in/zaid-omar-66b065136/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt="linkedin"/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Zaid Omar &copy; {(new Date().getFullYear())}</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
