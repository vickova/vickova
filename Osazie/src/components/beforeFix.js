import React from "react";
import Floward from "../images/Floward.png";
import Souqalmal from "../images/Souqalmal.png";
import GrubTech from "../images/grubtech.svg";
import Sultana from "../images/Sulthana.svg";
import Laimoon from "../images/laimoon.jpeg";
import Vicky from "../images/Vicky.png";
import Fix from "./fix";

function BeforeFix() {
  // const remark = document.getElementsByClassName('profileCover');
  // remark[1].style.display = 'none';
  // remark[2].style.display = 'none';
  // remark[3].style.display = 'none';
  // remark[4].style.display = 'none';
  return (
    <div>
      <div className="before">
        <div>
          <h2>The only coding school with a virtual internship guaranteed!</h2>
          <p>
            Get trained as a full stack web developer and build your confidence
            <b>while doing real work for tech companies</b>
          </p>
          <p>
            Qualified students will secure a virtual internship with VC-backed
            growth ventures:
          </p>
        </div>
        <div className="iconImages">
          <a href="#" className="iconImageCover">
            <img src={Floward} alt="Floward_logo" className="iconImage" />
          </a>
          <a href="#" className="iconImageCover">
            <img src={GrubTech} alt="grubtech_logo" className="iconImage" />
          </a>
          <a href="#" className="iconImageCover">
            <img src={Souqalmal} alt="sougalmal_logo" className="iconImage" />
          </a>
          <a href="#" className="iconImageCover">
            <img src={Laimoon} alt="laimon_logo" className="iconImage" />
          </a>
          <a href="#" className="iconImageCover">
            <img
              src={Sultana}
              alt="sultana_logo"
              className="iconImage sulthana"
            />
          </a>
        </div>
        <div className="buttons">
          <button className="firstbutton">Apply now</button>
          <button>Ask a question</button>
        </div>
      </div>
      <div className="remarks">
        <div className="profileCover">
          <blockquote>
            I would highly recommend TopInterns to anyone who wants to start a
            career as a JavaScript full stack web developer.
          </blockquote>
          <div className="profile">
            <img src={Vicky} alt="profile_picture" />
            <p>Farah Moussa</p>
          </div>
        </div>
        <div className="profileCover remarkDisplay">
          <blockquote>
            TopInterns is just the perfect place to gain both professional and
            interpersonal skills.
          </blockquote>
          <div className="profile">
            <img src={Vicky} alt="profile_picture" />
            <p>Wassim Harake</p>
          </div>
        </div>
        <div className="profileCover remarkDisplay">
          <blockquote>
            A great team behind the scenes 👏 they have been helping me with my
            journey since day one.
          </blockquote>
          <div className="profile">
            <img src={Vicky} alt="profile_picture" />
            <p>M Hakimi</p>
          </div>
        </div>
        <div className="profileCover remarkDisplay">
          <blockquote>
            I was taught the fundamentals and offered a junior web developer
            position at Laimoon, and then was given an opportunity to intern at
            Souqalmal.
          </blockquote>
          <div className="profile">
            <img src={Vicky} alt="profile_picture" />
            <p>Ahmed Mohamed</p>
          </div>
        </div>
        <div className="profileCover remarkDisplay">
          <blockquote>
            TopInterns is just the perfect place to gain both professional and
            interpersonal skills.
          </blockquote>
          <div className="profile">
            <img src={Vicky} alt="profile_picture" />
            <p>Wassim Harake</p>
          </div>
        </div>
      </div>
      {/* <div>
          <button onClick="pickDevs(-1)">&#10094</button>
          <button onClick="pickDevs(+1)">&#60</button>
      </div> */}
      <Fix />
    </div>
  );
}

export default BeforeFix;
