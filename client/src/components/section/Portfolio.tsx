import "./Portfolio.scss";

function Portfolio() {
	return (
		<div id="portfolio" className="portfolio__section">
			<h2 className="portfolio__title">MY PORTFOLIO</h2>

			<div className="portfolio__projects__container">
				<div className="project__container">
					<img
						className="project__image"
						src="./img/1033-300x200.jpg"
						alt=""
					/>
					<div className="project__description__tag">
						<p className="project__description__text">
							{" "}
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam nulla ipsa dolores odio
							reprehenderit!
						</p>
						<h4 className="project__description__tech-stack">
							Tech Stack: HTML, CSS, Sass, Bootstrap
						</h4>
					</div>
				</div>
				<div className="project__container">
					<img
						className="project__image"
						src="./img/106-300x200.jpg"
						alt=""
					/>
					<div className="project__description__tag">
						<p className="project__description__text">
							{" "}
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam nulla ipsa dolores odio
							reprehenderit!
						</p>
						<h4 className="project__description__tech-stack">
							Tech Stack: HTML, CSS, Sass, Bootstrap
						</h4>
					</div>
				</div>
				<div className="project__container">
					<img
						className="project__image"
						src="./img/385-300x200.jpg"
						alt=""
					/>
					<div className="project__description__tag">
						<p className="project__description__text">
							{" "}
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam nulla ipsa dolores odio
							reprehenderit!
						</p>
						<h4 className="project__description__tech-stack">
							Tech Stack: HTML, CSS, Sass, Bootstrap
						</h4>
					</div>
				</div>
				<div className="project__container">
					<img
						className="project__image"
						src="./img/588-300x200.jpg"
						alt=""
					/>
					<div className="project__description__tag">
						<p className="project__description__text">
							{" "}
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam nulla ipsa dolores odio
							reprehenderit!
						</p>
						<h4 className="project__description__tech-stack">
							Tech Stack: HTML, CSS, Sass, Bootstrap
						</h4>
					</div>
				</div>
				<div className="project__container">
					<img
						className="project__image"
						src="./img/639-300x200.jpg"
						alt=""
					/>
					<div className="project__description__tag">
						<p className="project__description__text">
							{" "}
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam nulla ipsa dolores odio
							reprehenderit!
						</p>
						<h4 className="project__description__tech-stack">
							Tech Stack: HTML, CSS, Sass, Bootstrap
						</h4>
					</div>
				</div>
				<div className="project__container project--final">
					<img
						className="project__image project__image--final"
						src="./img/947-300x200.jpg"
						alt=""
					/>
					<div className="project__description__tag">
						<p className="project__description__text">
							{" "}
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam nulla ipsa dolores odio
							reprehenderit!
						</p>
						<h4 className="project__description__tech-stack">
							Tech Stack: HTML, CSS, Sass, Bootstrap
						</h4>
						<div className="find__more">
							<a
								className="custom--button"
								href="http://www.google.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								Explore
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
