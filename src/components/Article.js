import React, { useEffect, useState } from 'react';
import axios from "axios";
import './Article.css'

function delArticle(id, callback){
	axios.delete("http://localhost:3003/articles/"+id).then(() => {callback()})
}


function Article({props, updateFunc}) {
	let date_time_obj = new Date(props.date)
	let date_opts = {
		'day': 'numeric',
		'month': 'long', 
		'year': 'numeric'
	}
	let locale = 'fr'
	let date = date_time_obj.toLocaleDateString(locale, date_opts)
	let time = date_time_obj.toLocaleTimeString(locale)

	const [edition, setEdition] = useState(false);
	const [content, setContent] = useState(props.content);

	function updateArticle(id){
		// Lack of check on size of article is voluntary. 
		axios.put(
			"http://localhost:3003/articles/"+id,
			{content: content, author: props.author, date: props.date}
		).then(() => {setEdition(false)})
		console.log("updated article")
	}

	if(edition == false){
		return (
			<article className="blogArticle">
				<div className="header">
					<h3>{props.author}</h3>
					<i><p>Posté le {date} à {time}</p></i>
				</div>
				<p>{content}</p>
				<div className="footer">
					<button onClick={setEdition.bind(this, true)}>Modifier</button>
					<button onClick={delArticle.bind(this, props.id, updateFunc)}>Supprimer</button>
				</div>
			</article>
		)
	} else {
		return (
			<article className="blogArticle">
				<div className="header">
					<h3>{props.author}</h3>
					<i><p>Posté le {date} à {time}</p></i>
				</div>
				<textarea onChange={() => setContent(document.querySelector('#editedContent').value)} id="editedContent">{props.content}</textarea>
				<div className="footer">
					<button onClick={updateArticle.bind(this, props.id)}>Enregistrer</button>
					<button onClick={delArticle.bind(this, props.id, updateFunc)}>Supprimer</button>
				</div>
			</article>
		)
	}
}
export default Article;
