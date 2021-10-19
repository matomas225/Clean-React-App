import React from "react";
import "./Content.css";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import Card from "./Card";
function Content() {
  //states
  //functions
  return (
    <div className="container">
      <div className="background-text">work</div>
      <div className="content">
        <div className="card-left">
          <div className="text">
            <h1>Rolling Stone</h1>
            <p>
              You know Rolling Stone. It’s the definitive voice in music,
              politics and culture. It’s a global icon.
            </p>
            <a className="link" href="">
              VIEW PROJECTS
            </a>
          </div>
          <Card
            url={
              "https://www.rekupe.com/wp-content/uploads/2019/05/RollingStone3.jpg"
            }
          />
        </div>
        <div className="card-right">
          <Card
            positive={true}
            url={
              "https://www.rekupe.com/wp-content/uploads/2019/05/Variety2.jpg"
            }
          />
          <div className="text">
            <h1>Variety</h1>
            <p>
              Variety is an industry leader for breaking entertainment news,
              reviews and box office results with archive of content dating back
              to 1905.
            </p>
            <a className="link" href="">
              VIEW PROJECTS
            </a>
          </div>
        </div>
        <div className="card-left">
          <div className="text">
            <h1>Variety500</h1>
            <p>
              Variety500 is an index of the 500 most influential business
              leaders shaping the global $2 trillion entertainment industry.
            </p>
            <a className="link" href="">
              VIEW PROJECTS
            </a>
          </div>
          <Card
            url={"https://www.rekupe.com/wp-content/uploads/2019/05/V500.jpg"}
          />
        </div>
        <div className="card-right">
          <Card
            positive={true}
            url={
              "https://www.rekupe.com/wp-content/uploads/2019/10/worth_cover.jpg"
            }
          />
          <div className="text">
            <h1>Worth</h1>
            <p>
              A global media platform connecting a community that embraces worth
              beyond wealth.
            </p>
            <a className="link" href="">
              VIEW PROJECTS
            </a>
          </div>
        </div>
        <div className="card-left">
          <div className="text">
            <h1>Association Health Plans</h1>
            <p>
              Association health plans are a new alternative to provide small
              business owners, sole proprietors and freelancers with health
              insurance at a reduced cost.
            </p>
            <a className="link" href="">
              VIEW PROJECTS
            </a>
          </div>
          <Card
            url={"https://www.rekupe.com/wp-content/uploads/2019/05/AHP.jpg"}
          />
        </div>
        <div className="card-right">
          <Card
            positive={true}
            url={
              "https://www.rekupe.com/wp-content/uploads/2019/05/SchoolKit.jpg"
            }
          />
          <div className="text">
            <h1>SchoolKit</h1>
            <p>
              SchoolKit works with local educators to improve curriculum so that
              students can be college and career ready.
            </p>
            <a className="link" href="">
              VIEW PROJECTS
            </a>
          </div>
        </div>
      </div>
      <div className="triangle-content"></div>
    </div>
  );
}

export default Content;
