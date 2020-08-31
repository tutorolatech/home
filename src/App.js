import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import HomePage from "./Home";
import Courses from "./Courses";
import Program from "./Program";
import Teacher from "./Teacher";
import Review from "./Review";
import ChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
function App() {
	return (
		<div className="site-wrap">
			<Navbar />
			<HomePage />
			<Courses />
			<Program />
			<Teacher />
			<Review />
			<ChooseUs />
			<ContactUs />
			<Footer />
		</div>
	);
}
export default App;
