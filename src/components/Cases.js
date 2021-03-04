import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
import Image1 from "../assets/img-1.jpg";
import Image2 from "../assets/img-2.jpg";
import Image3 from "../assets/img-3.jpg";

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          <div className="case">
            <div className="case-details">
              <span>We love</span>
              <h2>Plants</h2>
            </div>
            <div className="case-image">
              <img src={Image1} alt="Plant 1" />
            </div>
          </div>
          <div className="case">
            <div className="case-details">
              <span>We love</span>
              <h2>Plants</h2>
            </div>
            <div className="case-image">
              <img src={Image3} alt="Plant 2" />
            </div>
          </div>
          <div className="case">
            <div className="case-details">
              <span>We love</span>
              <h2>Plants</h2>
            </div>
            <div className="case-image">
              <img src={Image2} alt="Plant 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
