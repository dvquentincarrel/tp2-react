import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.js'
import NoPage from "./pages/NoPage.js";
import Blog from "./components/Blog.js";
import Recettes from "./components/Recettes.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index  element={<Blog />} />
				<Route path="blog" element={<Blog />} />
				<Route path="recettes" element={<Recettes />} />
				<Route path="*" element={<NoPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
