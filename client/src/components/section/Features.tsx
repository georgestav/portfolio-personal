import "./Features.scss";

const Features = () => {
	return (
		<div id="features" className="features__skills">
			<div className="features__container">
				<div className="features__feature">
					<span className="features__feature__dot"></span>
					<h3 className="features__feature__title">Discover</h3>
					<p>
						Tell me about your project and we will brainstorm
						together the features to create a plan for your product
						to launch.
					</p>
				</div>
				<div className="features__feature">
					<span className="features__feature__dot"></span>
					<h3 className="features__feature__title">Design</h3>
					<p>
						We design the wireframe and agree together how to create
						the best experience for your users to present your brand
					</p>
				</div>
				<div className="features__feature">
					<span className="features__feature__dot"></span>
					<h3 className="features__feature__title">Deploy</h3>
					<p>
						We prototype and develop your product. We work together
						intensily to incorporate your feedback.
					</p>
				</div>
				<div className="features__feature">
					<span className="features__feature__dot"></span>
					<h3 className="features__feature__title">Be Ready</h3>
					<p>
						We deploy your product and now your website is ready to
						get the traction. Get out there and grow your audience.
					</p>
				</div>
			</div>
			<div id="skills" className="skills__section">
				<h2 className="skills__section__title">MY SKILLS</h2>

				<div className="skills_container">
					<div className="skills__skill-unique__container">
						<div className="skills__skill-unique__title">HTML</div>
						<div className="skills__skill-unique__percent bg-80">
							80%
						</div>
					</div>
					<div className="skills__skill-unique__container">
						<div className="skills__skill-unique__title">
							CSS, Sass
						</div>
						<div className="skills__skill-unique__percent bg-80">
							80%
						</div>
					</div>
					<div className="skills__skill-unique__container">
						<div className="skills__skill-unique__title">
							Javascript
						</div>
						<div className="skills__skill-unique__percent bg-80">
							80%
						</div>
					</div>
					<div className="skills__skill-unique__container">
						<div className="skills__skill-unique__title">React</div>
						<div className="skills__skill-unique__percent bg-80">
							80%
						</div>
					</div>
					<div className="skills__skill-unique__container">
						<div className="skills__skill-unique__title">
							Typescript
						</div>
						<div className="skills__skill-unique__percent bg-60">
							60%
						</div>
					</div>
					<div className="skills__skill-unique__container">
						<div className="skills__skill-unique__title">
							NodeJs
						</div>
						<div className="skills__skill-unique__percent bg-60">
							60%
						</div>
					</div>
					<div className="skills__skill-unique__container">
						<div className="skills__skill-unique__title">PHP</div>
						<div className="skills__skill-unique__percent bg-70">
							70%
						</div>
					</div>
					<div className="skills__skill-unique__container">
						<div className="skills__skill-unique__title">
							Laravel
						</div>
						<div className="skills__skill-unique__percent bg-70">
							70%
						</div>
					</div>
					<div className="skills__skill-unique__container">
						<div className="skills__skill-unique__title">UX</div>
						<div className="skills__skill-unique__percent bg-50">
							50%
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
