import React from "react";
import PropTypes from "prop-types";
import ReactTypingEffect from 'react-typing-effect';
import WOW from "wowjs";

import logo from './../img/z.png';

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
					<img
						className={"img-fluid " + this.props.fadeIn + this.props.bounceIn}
						src={logo}
						alt=""
						style={{
							borderRadius: 50 + "%",
							height: 250 + "px",
							width: 250 + "px"
						}}
					/>
					<h1>
						Hey!, I&apos;m Zaid Omar.
					</h1>
					<ReactTypingEffect
						className="typewriter"
						staticText="I'm a"
						text={["Developer.","Software Developer.","Full Stack Developer."]}
						speed='100'
						typingDelay='500'
						eraseDelay='1000'
					/>
					{/* offset can be cahnged in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
