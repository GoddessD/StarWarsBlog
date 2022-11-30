import React from "react";

export const Vehicles = (props) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={"https://loremflickr.com/320/240/" + props.vehicle.name}
          alt="Card image cap"
        />
        <div className="card-body">
        <h5 className="card-title">{props.vehicle.name}</h5>
          <p className="card-text">
            Model : {props.vehicle.model}
          </p>
          <p className="card-text">
            Cost in Credits : {props.vehicle.cost_in_credits}
          </p>
          <p className="card-text">
            Cargo Capacity : {props.vehicle.cargo_capacity}
          </p>

          <div className="navbar">
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
             <button className="btn btn-primary" onClick={() => props.addToFavorites(props.vehicle.name)}>
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
