import React from "react";
import "./newcard.css"; // link your CSS file

function NewCard({ playerimg, playername, matches, won, lost, events, rank }) {
  return (
    <div className="container">
      <div className="golden">
        <div className="transparent">
          <div className="border-part">
            <div className="card">
              <div className="img">
                <img src={playerimg} height={150} width={100} alt="player" />
              </div>

              <div className="name">
                <p className="nameplayer">{playername}</p>
                <p className="dash">_________________</p>
              </div>

              <div className="details">
                <div className="details-left">
                  <p>Matches : {matches}</p>
                  <p>Won : {won}</p>
                  <p>Lost : {lost}</p>
                </div>
                <div className="details-right">
                  <p>Events : {events}</p>
                  <p>Rank : {rank}</p>
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
