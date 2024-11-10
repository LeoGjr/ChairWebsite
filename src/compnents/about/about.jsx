import React from "react";
import "./about.css";
import { SiAdguard } from "react-icons/Si";
import { AiFillStar } from "react-icons/Ai";
import { BsCheckLg } from "react-icons/Bs";
import { IoIosPeople } from "react-icons/Io";

const about = () => {
  return (
    <div>
      <section className="about container" id="about">
        <div className="about-img">
          <img src="./about.png" alt="" />
        </div>
        {/* About Data */}
        <div className="about-data">
          <h2 className="heading">
            Why <span className="gradient-text">Choose</span> Us?
          </h2>
          <p>
            Our products are of the best quality that is suitable for all
            activities for you, this is the reason why you consider us as your
            choice
          </p>
          <div className="about-box-data">
            <div className="about-box">
              <span className="about-icon">
                <SiAdguard />
              </span>
              <h3 className="box-title">Longevity</h3>
              <p>
                When the problems you're solving are meaningful to people, and
                the solutions you propose are honest
              </p>
            </div>
            <div className="about-box">
              <span className="about-icon">
                <AiFillStar />
              </span>
              <h3 className="box-title">Heritage</h3>
              <p>
                We are a a pioneer, and we continue in new ways of living and
                working, just as we've done repeatedly
              </p>
            </div>
            <div className="about-box">
              <span className="about-icon">
                <BsCheckLg />
              </span>
              <h3 className="box-title">Quality</h3>
              <p>
                Our manufacturing facilities use the best, sustainable materials
                and follow world-class to ensure quality
              </p>
            </div>
            <div className="about-box">
              <span className="about-icon">
                <IoIosPeople />
              </span>
              <h3 className="box-title">Community</h3>
              <p>
                We always pay attention to our users, we have a community that
                always accompanies us
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
