import "./ContactMe.scss";
import { useRef } from "react";

function ContactMe() {
  const form = useRef(null);
  // {
  //   userFname: null,
  //   userLname: null,
  //   userEmail: null,
  //   userPhone: null,
  //   userMessage: null,
  // }

  const submitHandler = (e: any) => {
    e.preventDefault();
    //form?.current["userFname"].value
    const mailto: string = `mailto:g.stavroulakis@gmail.com?subject=Interested in your work subject&body=My message`;
    window.location.href = mailto;
  };

  return (
    <div id="contact-me" className="contact__section">
      <h2 className="contact__title">CONTACT ME</h2>
      <form
        className="contact__form"
        ref={form}
        onSubmit={(e) => submitHandler(e)}
      >
        {/* <div className="contact__form__row">
          <input
            type="text"
            name="userFname"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="userLname"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="contact__form__row">
          <input
            type="email"
            name="userEmail"
            placeholder="Your Email"
            required
          />
          <input
            type="tel"
            name="usePhone"
            id="phone"
            placeholder="Phone"
            required
          />
        </div>
        <div className="form__textarea">
          <label htmlFor="subject">My Message *</label>
          <textarea
            name="userMessage"
            id="subject"
            cols={30}
            rows={10}
            required
          ></textarea>
        </div> */}
        <button className="form__submit" type="submit" value="sent">
          Send me a message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
