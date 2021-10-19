import React from "react";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
function Card({ positive, url }) {
  const [tiltNum, setTiltNum] = useState(positive ? 2 : -2);
  return (
    <div className="image">
      <Tilt tiltEnable={true} tiltAngleYManual={tiltNum}>
        <img
          onMouseEnter={() => setTiltNum(positive ? 10 : -10)}
          onMouseLeave={() => setTiltNum(positive ? 2 : -2)}
          src={url}
          alt=""
        />
      </Tilt>
    </div>
  );
}

export default Card;
