import React from "react";
import "./index.css"; // Import CSS file
import cybersecurity from "../../assets/images/cybersecurity.png";
import logo2 from "../../assets/images/logo2.png";
import wannacry2 from "../../assets/images/wannacry2.jpg";
import Header from "./Header";

function HomeComponent() {
  return (
    <div className="bodys">
      <div className="heading">
        <Header />
        <h1
          style={{
            marginTop: "10px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          <b>💻 CYBER-SECURITY 💻</b>
        </h1>
      </div>
      <main>
        <div className="content">
          <span className="c1">
            <div className="toppart">
              <div className="title">
                CYBERSECURITY
                <br />
                AWARENESS
              </div>
            </div>
            <p className="subtitle">
              The internet has made the world smaller in many ways, but it has
              also opened us up to a multitude of villainous influences that
              have never been so diverse and challenging.
              <br />
              Cybersecurity begins with you....<b>is your password strong?</b>
            </p>
            <div className="links">
              <div className="btn">
                <a
                  href="https://youtu.be/inWWhr5tnEA?si=i1ntfhEJUpjajEgh"
                  target="_blank"
                >
                  WATCH VIDEO
                </a>
              </div>
            </div>
          </span>

          <span className="c2">
            <img id="gallery" src={cybersecurity} alt="image here" />
          </span>
        </div>
      </main>

      <footer style={{ marginBottom: 0 }}>
        <a href="facts.html">
          <img
            style={{ filter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5))" }}
            className="card3"
          />
        </a>
        <a href="contact.html">
          <img
            style={{ filter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5))" }}
            className="card2"
          />
        </a>
      </footer>
      <footer style={{ marginBottom: 0 }}>
        <a href="facts.html">
          <img
            style={{ filter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5))" }}
            className="card3"
          />
        </a>
        <a href="contact.html">
          <img
            style={{ filter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5))" }}
            className="card2"
          />
        </a>
      </footer>
      <footer style={{ marginBottom: 0 }}>
        <a href="facts.html">
          <img
            style={{ filter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5))" }}
            className="card3"
          />
        </a>
        <a href="contact.html">
          <img
            style={{ filter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.5))" }}
            className="card2"
          />
        </a>
      </footer>
    </div>
  );
}

export default HomeComponent;
