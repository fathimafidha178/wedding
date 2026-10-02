
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <div className="wedding-card">

        <div className="card-content">

          <p className="home-small-text">
            TOGETHER WITH THEIR FAMILIES
          </p>

          <h1 className="home-title">
            Wedding
            <br />
            Invitation
          </h1>

          <div className="home-divider">
            <span></span>
            <b>♥</b>
            <span></span>
          </div>

          <p className="home-welcome">
            We are delighted to invite you
            <br />
            to celebrate our special day with us.
          </p>

          <p className="couple-name">
            Shibnan <span>&</span> Fidha
          </p>

          <div className="wedding-date">
            <p>SAVE THE DATE</p>
            <strong>COMING SOON</strong>
          </div>

          <Link
            to="/invitation"
            className="invitation-btn"
          >
            TAP TO OPEN
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;



