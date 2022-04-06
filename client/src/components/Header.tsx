import "./Header.scss";
import Navigation from "./navigation/Navigation";
import Svg from "./helpers/Svg";

function Header() {
	return (
		<header id="home">
			<div className="header__logo__nav">
				<div className="logo">&gt;</div>
				<Navigation />
			</div>
			<div>
				<div className="header__container">
					<Svg />
					<div className="header__main__container">
						<h1 className="header__main__title">
							Hi, I am{" "}
							<span className="header__name"> George.</span>
						</h1>
						<h2 className="header__main__subtitle">
							And I'm a Full-stack Web Developer.
						</h2>
					</div>
				</div>
				<div className="header__main__text">
					<p>
						Let's work together to make{" "}
						<strong>your product stand out</strong>. I create
						beautiful and functional websites. I work with my
						clients step by step{" "}
						<strong>
							from idea stage until the fully functioning web
							application
						</strong>
						.
					</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
