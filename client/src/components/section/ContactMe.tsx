import "./ContactMe.scss";

function ContactMe() {
  return (
    <div id="contact-me" className="contact__section">
      <h2 className="contact__title">CONTACT ME</h2>
      <form action="" method="get" className="contact__form">
        <div className="contact__form__row">
          <input
            type="text"
            name="firstname"
            id="fname"
            placeholder="First Name *"
          />
          <input
            type="text"
            name="firstname"
            id="lname"
            placeholder="Last Name *"
          />
        </div>
        <div className="contact__form__row">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email *"
          />
          <input type="tel" name="firstname" id="phone" placeholder="Phone" />
        </div>
        <div className="form__textarea">
          <label htmlFor="subject">My Message *</label>
          <textarea name="" id="subject" cols={30} rows={10}></textarea>
        </div>
        <button className="form__submit" type="submit" value="sent" disabled>
          Send me a message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
