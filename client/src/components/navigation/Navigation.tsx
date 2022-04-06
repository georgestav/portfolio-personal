import "./Navigation.scss";

function Navigation() {
	return (
		<nav className="header__links__container">
			<a className="nav__items" href="#home">
				HOME
			</a>
			<a className="nav__items" href="#skills">
				SKILLS
			</a>
			<a className="nav__items" href="#portfolio">
				PORTFOLIO
			</a>
			<a className="nav__items" href="#about-me">
				ABOUT ME
			</a>
			<a className="nav__items" href="#contact-me">
				CONTACT
			</a>
		</nav>
	);
}

export default Navigation;
