import "./Home.css";

import prophetImage from "../assets/media/prophet.jpg";
import congregationImage from "../assets/media/congregation.jpg";
import serviceVideo from "../assets/media/service.mp4";

function Home() {
  return (
    <main className="home">
      <section className="home-intro">
        <div className="home-intro__content">
          <p className="home-intro__church-name">
            House Of Miracles Prophetic Ministries
          </p>

          <h1 className="home-intro__title">
            Welcome to the House.
          </h1>

          <p className="home-intro__description">
            A place of prayer, prophecy, worship and the Word.
          </p>

          <p className="home-intro__service-time">
            Sunday Service · 11:30 AM
          </p>

          <div className="home-intro__actions">
            <a className="home-intro__primary-link" href="#visit">
              Plan Your Visit
            </a>

            <a className="home-intro__secondary-link" href="#testimonies">
              View Testimonies
            </a>
          </div>
        </div>

        <div className="home-intro__video">
          <video
            src={serviceVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-label="House of Miracles church service"
          />
        </div>

        <div className="home-intro__prophet">
          <img
            src={prophetImage}
            alt="The prophet standing inside House of Miracles"
          />

          <p className="home-intro__media-caption">
            Prophetic ministry rooted in prayer, faith and the Word.
          </p>
        </div>

        <div className="home-intro__congregation">
          <img
            src={congregationImage}
            alt="House of Miracles congregation during a candle service"
          />

          <p className="home-intro__media-caption">
            A house alive with faith.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;