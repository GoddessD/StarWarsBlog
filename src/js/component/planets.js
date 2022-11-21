import React from "react";

export const Planets = (props) => {
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
          The Star Wars galaxy contains several broad sub-regions within the Legends galactic map.
As a general rule, most of the galaxy's wealth, power, and population are concentrated near the middle of the galactic circle – the "Core Worlds".</p>
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
