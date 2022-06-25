import React from "react";

import { About, Footer, Header, Testimonial, Work, Skills } from "./container";
import { Navbar } from "./components";

// Styles
import "./App.scss";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default App;
