import React from "react";
import {People} from "../component/people.js";
import {Planets} from "../component/planets.js";
import {Vehicles} from "../component/vehicles.js";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1> Welcome!</h1>
		<People />
		<Planets />
		<Vehicles />		
	</div>
);
