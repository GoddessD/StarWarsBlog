import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">StarWars Blog</a>

        <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form>

        <form class="d-flex" role="search">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
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
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {store.favorites.map((item, index) => {
                return <li key={index}>{item} <i class="fa-regular fa-trash-can" onClick={() =>actions.deleteFavorites(index)}></i></li>;
              })}
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};
