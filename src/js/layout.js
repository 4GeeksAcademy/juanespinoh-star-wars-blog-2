import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import SinglePagePerson from "./views/SinglePagePerson.jsx";
import SinglePagePlanet from "./views/SinglePagePlanet.jsx";
import SinglePageVehicle from "./views/SinglePageVehicle.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{padding:"0px 60px",background:"black"}}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/character/:itemId" element={<SinglePagePerson />} />
						<Route path="/planet/:itemId" element={<SinglePagePlanet />} />
						<Route path="/vehicle/:itemId" element={<SinglePageVehicle />} />
			
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
