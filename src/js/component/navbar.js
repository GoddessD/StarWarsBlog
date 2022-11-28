import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">StarWars Blog</a>

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
              <div className="mx-2 bg-warning rounded">
               
              </div>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {/* <li>{favList}</li> */}
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};
