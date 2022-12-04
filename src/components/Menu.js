import React, { useEffect, useState } from 'react';
import axios from "axios";
import Blog from './Blog.js';
import Recettes from './Recettes.js';

function Menu(){
	return(
		<div>
			<Blog />
			<Recettes />
		</div>
	)
}
export default Menu;
