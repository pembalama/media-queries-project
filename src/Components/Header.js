import React from 'react';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			dropdownView: false
		};
	}

	handleToggle = () => {
		this.setState({ dropdownView: !this.state.dropdownView });
	};

	render() {
		return (
			<div className="header">
				<div>
					<div className="dropdown-button" onClick={this.handleToggle}>
						Menu
					</div>
					<div className="nav-section">
						{this.state.dropdownView ? (
							<nav className="dropdown-menu">
								<span>SERVICES</span>
								<span>PORTFOLIO</span>
								<span>ABOUT</span>
								<span>TEAM</span>
								<span>CONTACT</span>
							</nav>
						) : null}

						<nav className="desktop-links">
							<span>SERVICES</span>
							<span>PORTFOLIO</span>
							<span>ABOUT</span>
							<span>TEAM</span>
							<span>CONTACT</span>
						</nav>
					</div>
				</div>

				<div className="welcome-section">
					<h1>Welcome To Our Studio!</h1>
					<h1>IT'S NICE TO MEET YOU</h1>
					<button className="btn">TELL ME MORE</button>
				</div>
			</div>
		);
	}
}

export default Header;
