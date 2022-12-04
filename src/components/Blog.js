import Article from './Article';
import './Blog.css'
import axios from "axios";
import React, { useEffect, useState } from 'react';

function Blog(){

	const MIN_CHAR_COUNT = 100

	function controlSend(){
		if(content.length < MIN_CHAR_COUNT || name == ''){
			console.log(content.length)
			return false
		} else {
			return true
		}
	}

	function updateFunc(){
		console.log("update")
		axios.get("http://localhost:3003/articles").then((res) => setArticles(res.data));
	}

	function sendArticle(){
			let nameElem = document.querySelector('#name')
			let contentElem = document.querySelector('#content')
		if(controlSend()){
			axios.post("http://localhost:3003/articles", {
				'author': name,
				'date': new Date().getTime(),
				'content': content
			}).then(() => {
				updateFunc()
				nameElem.value = ''
				contentElem.value = ''
				setName('')
				setContent('')
			})
		} else {
			console.log("pas conforme")
		}
	}

	const [articles, setArticles] = useState([]);
	const [content, setContent] = useState("");
	const [name, setName] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3003/articles").then((res) => setArticles(res.data))
	}, [])

    return (
		<div>
			<div id="blog_input">
				<h1>Blog</h1>
				<input onChange={() => {setName(document.querySelector('#name').value)}}  id="name" placeholder="nom" className="input_zone"/><br/>
				<textarea onChange={() => {setContent(document.querySelector('#content').value)}} id="content" placeholder="Message" className="input_zone"/><br/>
				<button onClick={() => sendArticle()}>Envoyer</button><br/>
			</div>
				{articles.map((element) => <Article props={element} updateFunc={updateFunc} />)}
		</div>
    )

}
export default Blog;
