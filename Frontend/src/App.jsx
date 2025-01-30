import { useState } from "react";
import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import SearchTopics from "./components/SearchTopics";
import Tech from "./components/Categories/Tech";
import AI from "./components/Categories/AI";
import Movies from "./components/Categories/Movies";
import Food from "./components/Categories/Food";
import Kpop from "./components/Categories/Kpop";
import Music from "./components/Categories/Music";
const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<Router>
			{isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
			<Routes>
				<Route path="/signup" element={<Signup />} />
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path='/search' element={<SearchTopics />} />
				<Route path='/topicTech' element={<Tech />} />
				<Route path='/topicAI' element={<AI />} />
				<Route path='/topicFood' element={<Food />} />
				<Route path='/topicKpop' element={<Kpop />} />
				<Route path='/topicMusic' element={<Music />} />
				<Route path='/topicMovies' element={<Movies />} />
			</Routes>
		</Router>
	);
};

export default App;
