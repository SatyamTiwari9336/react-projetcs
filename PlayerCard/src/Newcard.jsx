import React from "react";
import "./newcard.css"; // link your CSS file
import playerImg from "./player_img.png";

function NewCard() {
  return (
    <div className="container">
      <div className="golden">
        <div className="transparent">
          <div className="border-part">
            <div className="card">
              <div className="img">
                <img src={playerImg} height={150} width={100} alt="player" />
              </div>

              <div className="name">
                <p className="nameplayer">SATYAM</p>
                <p className="dash">_________________</p>
              </div>

              <div className="details">
                <div className="details-left">
                  <p>Matches : 30</p>
                  <p>Won : 19</p>
                  <p>Lost : 11</p>
                </div>
                <div className="details-right">
                  <p>Events : 6</p>
                  <p>Rank : 35</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCard;
