import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	const date = new Date().getFullYear();
	return (
		<footer className="footer__container">
			<h2 className="footer__title">
				<span className="footer--line">Nice to meet you!</span>
			</h2>
			<div className="fab__icons">
				<a
					href="https://github.com/georgestav"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} className="fab" />
				</a>
				<a
					href="https://www.linkedin.com/in/george-stavroulakis/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} className="fab" />
				</a>
				<a
					href="https://www.instagram.com/george.stavroulakis"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faInstagram} className="fab" />
				</a>
			</div>
			<p>Copyright @ George Stavroulakis {date}</p>
		</footer>
	);
}

export default Footer;
