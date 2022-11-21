import React from "react";

export const Vehicles = (props) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={"https://loremflickr.com/320/240/" + props.item}
          alt="Card image cap"
        />
        <div className="card-body">
        <h5 className="card-title">{props.item}</h5>
          <p className="card-text">
          The Fictional Star Wars Trilogy has terrestrial vehicles, including armoured fighting vehicles, military aircraft, and naval ships.
          </p>
          <div className="navbar">
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
            <button className="btn btn-primary">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
