import React from "react";
import terralogo from "../img/terralogo.png";
import terrabush from "../img/terrabush.png";
import spokelogo from "../img/spoke.png";
import logo from "../img/daybooklogo.png"

import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"daybookbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>DayBook</h2>
									</div>
									<div>
										<button
											id="daybook-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var daybookModal = document.getElementById(
													"daybook"
												);
												modalBG.style.display = "block";
												daybookModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"terrabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<img src={terrabush}
								style={{
									textAlign: 'center',
									display: 'block',
									justifyContent: 'center',
									alignItems: 'center',
									margin: 'auto',
									marginTop: 100,
									width: 125,
									height:100}}/>

								<div className="overlay">
									<div className="text">
										<h2>T.E.R.R.A</h2>
									</div>
									<div>
										<button
											id="terra-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var terraModal = document.getElementById(
													"terraluz"
												);
												modalBG.style.display = "block";
												terraModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"spokebg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<img src={spokelogo}
								style={{
									textAlign: 'center',
									display: 'block',
									justifyContent: 'center',
									alignItems: 'center',
									margin: 'auto',
									marginTop: 50,
									width: 200,
									height:200}}/>
								<div className="overlay">
									<div className="text">
										<h2>Spoke Mobile</h2>
									</div>
									<div>
										<button
											id="spoke-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var spokeModal = document.getElementById(
													"spokelist"
												);
												modalBG.style.display = "block";
												spokeModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="daybook" className="modal-card">
						<div className="visual">
							<img 
							src={logo}
							alt=""/>
						</div>
						<div className="modal-info">
							<h2>Daybook - Coming Soon!</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype team management web application developed
										using the MERN Stack.
									</li>
									<li>
										Designed to keep track of everyday work, workflows,
										projects, initiatives and tasks
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://github.com/ZaidOm/mern"
									target="_blank">
									<h3>View Source Code</h3>
								</a>
								<br />
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var daybookModal = document.getElementById(
											"daybook"
										);
										modalBG.style.display = "none";
										daybookModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="terraluz" className="modal-card">
						<div className="visual">
							<img src={terralogo} alt=""/>
						</div>
						<div className="modal-info">
							<h2>T.E.R.R.A</h2>
							<div className="modal-description">
								<ul>
									<li>
										TERRA is an application that allows the user to keep track of their fields while looking at specific details 
										pertaining to each field. The system gives the ability to track field details such as:
										yield, seeds planted, fertilizer use, pesticide use, and other details that may come to 
										light as progress is made. 
									</li>
									<li>
										TERRA has the ability to visualize Nasa’s Earth Data overtop 
										of the users fields to give them information about the quality of their field overtime. 
										It is a solution, to give the user potential solutions to help improve their field quality based on the 
										information gathered and given by the user.
									</li>
									<li>
										Developed in ReactJS, .NET Core, PosegreSQL, Unity & C#
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://github.com/ZaidOm/Capstone-TERRA"
									target="_blank">
									<h3>View Source Code</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var terraModal = document.getElementById(
											"terraluz"
										);
										modalBG.style.display = "none";
										terraModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="spokelist" className="modal-card">
						<div className="visual">
							<img src={spokelogo} 
							style={{
								textAlign: 'center',
								display: 'block',
								justifyContent: 'center',
								alignItems: 'center',
								margin: 'auto',
								marginTop: 50,
								width: 200,
								height:200}}/>
						</div>
						<div className="modal-info">
							<h2>Spoke Mobile</h2>
							<div className="modal-description">
								<ul>
									<li>
										Real-time news coverage and digital storytelling from the students of Conestoga College’s Journalism program.
									</li>
									<li>
										Developed with React Native. Currently on the App Store
										& Google Play Store
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="https://play.google.com/store/apps/details?id=ca.on.conestogac.spoke" target="_blank">
									<h3>View App</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var spokeModal = document.getElementById(
											"spokelist"
										);
										modalBG.style.display = "none";
										spokeModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
