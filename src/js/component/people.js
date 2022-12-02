import React from "react";
import { Link } from "react-router-dom";
export const People = (props) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={"https://loremflickr.com/320/240/" + props.character.name}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.character.name}</h5>
          <p className="card-text">Gender: {props.character.gender}</p>
          <p className="card-text">Hair Color: {props.character.hair_color}</p>
          <p className="card-text">Eye Color: {props.character.eye_color}</p>
          <div className="navbar">
            <Link to={"/people/"+ props.index} >
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => props.addToFavorites(props.character.name)}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
