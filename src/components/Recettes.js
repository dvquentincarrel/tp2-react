import React from 'react';
import axios from "axios";
import Card from "./Card";
import './Recettes.css'

const Recettes = () => {

	const [data, setData] = React.useState([]);
	const [input, setInput] = React.useState("");

	React.useEffect(() => {
		axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+input).then((res) => {
			if(res.data.meals){
				setData(res.data.meals)
			}else{
				setData([])
			}
		});
	},[input]);

    return (
		<div id="root">
			<h1>Appli recettes de cuisine</h1>
			<input id="inp" placeholder="ingredient name..." onChange={(event) => setInput(event.target.value)} value={input}/>
			<div>
				{
					data.map(
						(element) => <Card props={element} />
					)
				}
			</div>
        </div>
    );
};

export default Recettes;
