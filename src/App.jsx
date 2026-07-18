import "./App.css";

import prophetImage from "./assets/media/prophet.jpg";
import congregationImage from "./assets/media/congregation.jpg";
import serviceVideo from "./assets/media/service.mp4";

function App() {
  return (
    <main className="site">
      <section className="home-intro">
        <div className="home-intro__content">
          <p className="home-intro__eyebrow">
            House Of Miracles Prophetic Ministries
          </p>

          <h1>Welcome to the House.</h1>

          <p className="home-intro__description">
            A place of prayer, prophecy, worship and the Word.
          </p>

          <p className="home-intro__service">
            Sunday Service <span>11:30 AM</span>
          </p>

          <div className="home-intro__actions">
            <a className="button button--primary" href="#visit">
              Plan Your Visit
            </a>

            <a className="button button--text" href="#testimonies">
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
            controls
          >
            Your browser does not support video playback.
          </video>
        </div>

        <figure className="home-intro__prophet">
          <img
            src={prophetImage}
            alt="The prophet standing among the congregation"
          />

          <figcaption>
            Prophetic ministry rooted in prayer, faith and the Word.
          </figcaption>
        </figure>

        <figure className="home-intro__congregation">
          <img
            src={congregationImage}
            alt="The congregation holding candles during a church service"
          />

          <figcaption>A house alive with faith.</figcaption>
        </figure>
      </section>
    </main>
  );
}

export default App;