import React from "react";
import "./Form.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Form() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="form-neutral">
      <div className="form-wrap">
        <div
          className="form"
          id="footer"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="800"
        >
          <h1>Let's Work Together</h1>
          <p>Have a question? Need a quote? Let us know!</p>
          <form action="">
            <label htmlFor="">Name</label>
            <br />
            <input type="text" placeholder="Name" />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <label htmlFor="">Message</label>
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <br />
            <div className="button">
              <button>SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
