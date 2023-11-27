import React from "react";

const Contact = () => {
  return (
    <div id="contactDiv">
      <video
        className="background relative"
        src="/Video/tennis.mp4"
        autoPlay
        loop
        muted
      />
      <div className="contactDiv-Main absolute">
        <div className="contactDiv-Top headerPosition">
          <h1 className="titleDivider titleDividerWhite">CONTACT</h1>
          <p>
            Innovative developer open for collaboration and new opportunities.
            Let's build something amazing together! Contact me to connect or
            discuss your project.
          </p>
        </div>
        <div className="contactDiv-Bottom">
          <div className="mailingDiv">
            <form className="contactForm" action="">
              <div className="contact-form textDesign">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div className="contact-form textDesign">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              <div className="contact-form textDesign">
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
