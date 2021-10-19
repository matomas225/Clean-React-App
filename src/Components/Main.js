import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="Main"
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-once="true"
    >
      <div className="backgroundText" id="about">
        hello
      </div>
      <div className="text">
        <p>Rekupe is a digital agency in Los Angeles.</p>
        <p>
          We use strategic UX, SEO optimization and beautiful visual
          <br /> designs to help your business grow.
        </p>
        <p>
          We see every project as a fresh opportunity, pushing
          <br /> ourselves to create new digital experiences.​
        </p>
        <p className="underText">
          Have a question? <a href="">Click here</a> to contact us!
        </p>
      </div>
      <div className="Triangle"></div>
    </section>
  );
}

export default Main;
