import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdownView: false,
		};
	}

	handleToggle = () => {
		this.setState({ dropdownView: !this.state.dropdownView });
	};

	render() {
		return (
			<div className="header-wrapper">
				<h3 className="logo">Start Bootstrap</h3>
				<div className="btn-container">
					<button className="dropdown-btn" onClick={this.handleToggle}>
						Menu
					</button>
				</div>
				{this.state.dropdownView ? (
					<nav className="dropdown-menu">
						<span>SERVICES</span>
						<span>PORTFOLIO</span>
						<span>ABOUT</span>
						<span>TEAM</span>
						<span>CONTACT</span>
					</nav>
				) : null}
				<nav className="desktop-nav">
					<span>SERVICES</span>
					<span>PORTFOLIO</span>
					<span>ABOUT</span>
					<span>TEAM</span>
					<span>CONTACT</span>
				</nav>
			</div>
		);
	}
}

export default Header;
