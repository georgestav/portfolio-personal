import "./FindMe.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function FindMe() {
	return (
		<div className="networks__section">
			<h2 className="networks__title">FIND ME HERE</h2>
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
		</div>
	);
}

export default FindMe;
