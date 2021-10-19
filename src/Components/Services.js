import React from "react";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="neutral">
      <div className="services-wrap">
        <div className="services-background">services</div>
        <div className="services">
          <div
            className="services-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <img
              src="https://www.rekupe.com/wp-content/uploads/2019/06/icon_web-design.svg"
              alt=""
            />
            <h1>Web Design</h1>
            <p>
              Good web design is how companies stand out from their competitors.
              High quality web design leads to increased user conversion and
              engagement. Through a proven web design process, we help clients
              launch websites and products that improve on their bottom line.
            </p>
          </div>
          <div
            className="services-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <img
              src="https://www.rekupe.com/wp-content/uploads/2019/06/icon_web-development.svg"
              alt=""
            />
            <h1>Web Development</h1>
            <p>
              Modern websites need to be responsive and fully functional at all
              sizes. We develop all of our sites with a mobile first approach
              and ensure that our code quality is clean, organized and
              performant. Already have a design but need it developed? We’re
              here to help!
            </p>
          </div>
          <div
            className="services-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <img
              src="https://www.rekupe.com/wp-content/uploads/2019/06/icon_ux.svg"
              alt=""
            />
            <h1>User Experience</h1>
            <p>
              In order to build successful products you have to understand the
              user. We create user personas, wireframes and prototypes to test
              with users. This allows us to gather feedback which helps to shape
              the product and can quickly eliminate potential risks – saving you
              time and money.
            </p>
          </div>
          <div
            className="services-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <img
              src="https://www.rekupe.com/wp-content/uploads/2019/06/icon_graphic-design.svg"
              alt=""
            />
            <h1>Logo Design + Branding</h1>
            <p>
              Nike, Apple, Coca-Cola, Starbucks. What do all of these brands
              have in common? Easily recognizable logos and brand identity. The
              best brands stand out from the crowd by having a clear and unique
              point of view. We will work with you to understand your vision and
              help create a unique brand identity and style guide for your
              company.
            </p>
          </div>
          <div
            className="services-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <img
              src="https://www.rekupe.com/wp-content/uploads/2019/06/icon_seo.svg"
              alt=""
            />
            <h1>SEO</h1>
            <p>
              Do you want your site to rank higher in search results? Google is
              constantly changing their algorithms for how they rank pages.
              Don’t worry about constantly playing catch-up. We will make sure
              your website it optimized, providing you the best opportunities
              for organic search exposure.
            </p>
          </div>
          <div
            className="services-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <img
              src="https://www.rekupe.com/wp-content/uploads/2019/06/icon_copywriting.svg"
              alt=""
            />
            <h1>Copywriting</h1>
            <p>
              Brand messaging needs to be clear, direct and easy to understand
              to be effective. A unique tone of voice will help you stand out
              from the crowd and build brand loyalty. We work with you to
              establish your brand bible and ensure your messaging is focused
              and targeted.
            </p>
          </div>
        </div>
      </div>
      <div className="triangle-services"></div>
    </div>
  );
}

export default Services;
