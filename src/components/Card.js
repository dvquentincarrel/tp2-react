import React from 'react';

function Card({props}) {
	return(
		<div className="vignette">
			<h3 className="title">{props.strMeal}</h3>
			<p className="origin">origin: {props.strArea}</p>
			<div className="img_wrp"><img src={props.strMealThumb}></img></div>
			<p className="algo">{props.strInstructions}</p>
		</div>
	)
}
export default Card;
