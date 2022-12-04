import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog.js';
import Recettes from './components/Recettes.js';

function App() {
	let page = 0;
	if(page == 0){
		return (
			<div>
				<Blog />
			</div>
		);
	}else{
		return(
			<div>
				<Recettes />
			</div>
		);

	}
}

export default App;
