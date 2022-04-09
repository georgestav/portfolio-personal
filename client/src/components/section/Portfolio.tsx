import "./Portfolio.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio__section">
      <h2 className="portfolio__title">MY PORTFOLIO</h2>

      <div className="portfolio__projects__container">
        <div className="project__container">
          <img className="project__image" src="./img/1033-300x200.jpg" alt="" />
          <div className="project__description__tag">
            <div className="project__description__text">
              <h5>IVAO NPO website Greece</h5>
              <ul>
                <li>Collaborative design process</li>
                <li>Management and configuration of submited content</li>
                <li>Content delivery</li>
                <li>Migration from Joomla CMS to Wordpress CMS</li>
              </ul>
            </div>
            <h6 className="project__description__tech-stack">
              Tech Stack: HTML, CSS, Joomla, Wordpress
            </h6>
            <div className="find__more">
              <a
                className="custom--button"
                href="https://gr.ivao.aero/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eplore
              </a>
            </div>
          </div>
        </div>
        <div className="project__container">
          <img className="project__image" src="./img/pig_game.jpg" alt="" />
          <div className="project__description__tag">
            <div className="project__description__text">
              <h5>Vanilla Javascript browser game</h5>
              <p>
                Dice roll game, alternating turns between two players, great for
                404 or 500 pages!
              </p>
            </div>
            <h6 className="project__description__tech-stack">
              Tech Stack: HTML, CSS, Javascript
            </h6>
            <div className="find__more">
              <a
                href="https://github.com/georgestav/pig_game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="code" />
              </a>
              <a
                className="custom--button"
                href="https://georgestav.github.io/pig_game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eplore
              </a>
            </div>
          </div>
        </div>
        <div className="project__container">
          <img className="project__image" src="./img/bankist.jpg" alt="" />
          <div className="project__description__tag">
            <div className="project__description__text">
              <h5>Bank App Project</h5>
              <p>
                Vanilla Javascript, exloring private and public classes for
                ES2022.
              </p>
            </div>
            <h6 className="project__description__tech-stack">
              Tech Stack: HTML, CSS, Javascript, ES21
            </h6>
            <div className="find__more">
              <a
                href="https://github.com/georgestav/bankist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="code" />
              </a>
              <a
                className="custom--button"
                href="https://georgestav.github.io/bankist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eplore
              </a>
            </div>
          </div>
        </div>
        <div className="project__container">
          <img className="project__image" src="./img/mapty.jpg" alt="" />
          <div className="project__description__tag">
            <div className="project__description__text">
              <h5>Mapty - Map your Workout</h5>
              <p>
                Using Leaflet API and vanilla JS to log your workouts, cycling
                or running to the local storage.
              </p>
            </div>
            <h6 className="project__description__tech-stack">
              Tech Stack: HTML, CSS, Javascript, API consumer, OOP, ES21, ES22
            </h6>
            <div className="find__more">
              <a
                href="https://github.com/georgestav/mapty/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="code" />
              </a>
              <a
                className="custom--button"
                href="https://georgestav.github.io/mapty/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eplore
              </a>
            </div>
          </div>
        </div>
        <div className="project__container">
          <img className="project__image" src="./img/cms.jpg" alt="" />
          <div className="project__description__tag">
            <div className="project__description__text">
              <h5>PHP - CMS</h5>
              <p>
                Full stack Vanilla PHP content management system for blog posts,
                focusing on Authentication and Authorisation of registered
                users. Post, Comment, category management.
              </p>
            </div>
            <h6 className="project__description__tech-stack">
              Tech Stack: PHP, MySQL, HTML, CSS, Javascript, Bootstrap 5
            </h6>
            <div className="find__more">
              <a
                href="https://github.com/georgestav/cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="code" />
              </a>
            </div>
          </div>
        </div>
        <div className="project__container project--final">
          <img
            className="project__image project__image--final"
            src="./img/storeit.jpg"
            alt=""
          />
          <div className="project__description__tag">
            <div className="project__description__text">
              <h5>Store It</h5>
              <p>
                Full stack original project, social economy MVP for storage
                space near you or your desired location.
              </p>
            </div>
            <h6 className="project__description__tech-stack">
              Tech Stack: Laravel, ReactJS, CSS, Webpack, MySQL
            </h6>
            <div className="find__more">
              <a
                href="https://github.com/georgestav/store-it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="code" />
              </a>
              <a
                className="custom--button"
                href="https://storeit.codeboot.cz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eplore
              </a>
            </div>
          </div>
        </div>
        <div className="project__container">
          <img
            className="project__image"
            src="./img/real_estates_component.jpg"
            alt=""
          />
          <div className="project__description__tag">
            <div className="project__description__text">
              <h5>Real Estate Comparison</h5>
              <p>
                React JS component, comparing two selected estates, fetched from
                an API using axios
              </p>
            </div>
            <h6 className="project__description__tech-stack">
              Tech Stack: React, Api, Axios
            </h6>
            <div className="find__more">
              <a
                href="https://github.com/georgestav/case_study_react/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="code" />
              </a>
            </div>
          </div>
        </div>
        <div className="project__container">
          <img className="project__image" src="./img/106-300x200.jpg" alt="" />
          <div className="project__description__tag">
            <div className="project__description__text">
              <h5>Porfolio</h5>
              <p>
                Full stack website,CMS portfolio using Typescript react using
                MongoDB, in development.
              </p>
            </div>
            <h6 className="project__description__tech-stack">
              Tech Stack: React Typescript, NodeJS, Express, MongoDB
            </h6>
            <div className="find__more">
              <a
                href="https://github.com/georgestav/portfolio-personal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="code" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
