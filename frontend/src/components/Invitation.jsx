
import React from "react";
import { Link } from "react-router-dom";

function Invitation() {
  return (
    <div className="wedding-book">

      {/* =========================================
          PAGE 1
      ========================================= */}

      <div className="a4-page">

        <div className="page-border">

          <div className="page-content">

            <p className="page-bismillah">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>

            <p className="page-small-heading">
              IN THE NAME OF ALLAH
            </p>

            <div className="page-line"></div>

            <h1 className="greeting-title">
              With Hearts Full of Joy
            </h1>

            <p className="greeting-text">
              Two hearts, two souls, and one beautiful journey
              blessed by Allah.
            </p>

            <p className="greeting-text">
              May this new beginning be filled with
              love, peace, happiness and countless blessings.
            </p>

            <div className="ornament">
              <span></span>
              <b>✦</b>
              <span></span>
            </div>

            <p className="quote">
              “And We created you in pairs.”
            </p>

            <p className="quran-reference">
              — The Holy Qur'an 78:8
            </p>

            <div className="page-spacer"></div>

            <p className="page-footer-text">
              A beautiful beginning to a lifetime together
            </p>

          </div>

        </div>

      </div>


      {/* =========================================
          PAGE 2
      ========================================= */}

      <div className="a4-page">

        <div className="page-border">

          <div className="page-content">

            <p className="page-small-heading">
              TOGETHER WITH THEIR FAMILIES
            </p>

            <h1 className="celebration-title">
              Celebrate With Us
            </h1>

            <div className="ornament">
              <span></span>
              <b>♥</b>
              <span></span>
            </div>

            <p className="page-intro">
              With the blessings and love of our families,
              we joyfully invite you to celebrate the
              Nikkah of
            </p>

            <div className="couple-section">

              <h2 className="bride-name">
                Fidha
              </h2>

              <p className="and-text">
                &
              </p>

              <h2 className="groom-name">
                Shibnan
              </h2>

            </div>

            <div className="date-box">

              <p className="date-label">
                NIKKAH CEREMONY
              </p>

              <h3>
                25 December 2026
              </h3>

              <p>
                Friday
              </p>

            </div>

            <div className="page-spacer"></div>

            <p className="page-footer-text">
              Your presence is the greatest blessing
            </p>

          </div>

        </div>

      </div>


      {/* =========================================
          PAGE 3
      ========================================= */}

      <div className="a4-page">

        <div className="page-border">

          <div className="page-content">

            <p className="page-small-heading">
              JOIN US
            </p>

            <h1 className="details-title">
              The Wedding Day
            </h1>

            <div className="ornament">
              <span></span>
              <b>✦</b>
              <span></span>
            </div>

            <div className="detail-item">

              <span className="detail-icon">
                ♡
              </span>

              <p className="detail-heading">
                NIKKAH
              </p>

              <p className="detail-value">
                25 December 2026
              </p>

              <p className="detail-sub">
                11:00 AM
              </p>

            </div>


            <div className="detail-item">

              <span className="detail-icon">
                ✦
              </span>

              <p className="detail-heading">
                VENUE
              </p>

              <p className="detail-value">
                Alif Convention Centre
              </p>

              <p className="detail-sub">
                Malappuram, Kerala
              </p>

            </div>


            <div className="detail-item">

              <span className="detail-icon">
                ♧
              </span>

              <p className="detail-heading">
                RECEPTION
              </p>

              <p className="detail-value">
                12:30 PM
              </p>

              <p className="detail-sub">
                Followed by lunch
              </p>

            </div>

            <div className="page-spacer"></div>

            <p className="page-footer-text">
              We look forward to celebrating this special day with you
            </p>

          </div>

        </div>

      </div>


      {/* =========================================
          PAGE 4
      ========================================= */}

      <div className="a4-page">

        <div className="page-border">

          <div className="page-content">

            <p className="page-bismillah">
              بِسْمِ اللهِ
            </p>

            <h1 className="final-title">
              A Lifetime of Love
            </h1>

            <div className="ornament">
              <span></span>
              <b>♥</b>
              <span></span>
            </div>

            <p className="final-message">
              As we begin this beautiful journey together,
              we ask Allah to bless our marriage with
              endless love, understanding, happiness and
              peace.
            </p>

            <p className="final-message">
              Your prayers, blessings and presence on our
              special day will always remain close to our hearts.
            </p>

            <div className="final-names">

              <h2>
                Shibnan
              </h2>

              <span>
                &
              </span>

              <h2>
                Fidha
              </h2>

            </div>

            <p className="thank-you">
              Thank You
            </p>

            <p className="page-footer-text">
              With love and gratitude
            </p>

            <Link
              to="/"
              className="home-button"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Invitation;

