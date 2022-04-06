import "./About.scss";
function About() {
	return (
		<div id="about-me" className="about__section">
			<h2 className="about__title">ABOUT ME</h2>
			<div className="about__description">
				<img
					className="about__image"
					src="./img/660-300x300.jpg"
					alt=""
				/>
				<br />
				<div className="about__bio">
					<p>
						<strong>My name is George Stavroulakis.</strong> I am a
						full-stack web developer and enjoy learning new trends.{" "}
						<strong>
							{" "}
							I am developing user interfaces and applications in
							JavaScript and React while the backend of my
							projects is in PHP, Laravel and nodeJS with express.
						</strong>
					</p>
					<p>
						I am open to learning new technologies and enjoy working
						with people{" "}
						<span className="about__underline">
							{" "}
							who are as passionate about all web-related just
							like me.
						</span>
					</p>

					<div className="about__cta">
						<h3>
							Get in touch and let's create something great
							together
						</h3>
						<a className="custom--button" href="#contact-me">
							Contact me
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
