import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand"><img className="logo" src="https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png" /></a>

        <form className="form-inline my-2 my-lg-0">
          <div className="d-flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></div></form>
     

        <form className="d-flex" role="search">
          <div className="dropdown">
            <button 
              className="btn btn-secondary dropdown-toggle d-flex"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
              <div className="mx-2 bg-info rounded">
                ({store.favorites.length})
              </div>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {store.favorites.map((item, index) => {
                return <li key={index}>{item} <i className="fa-regular fa-trash-can" onClick={() =>actions.deleteFavorites(index)}></i></li>;
              })}
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};
