import logo from './logo.svg';
import Blog from './components/Blog.js';
import Recettes from './components/Recettes.js';

function App() {
	let page = 0;
	if(page == 0){
		return (
			<div>
				<Blog />
				<Recettes />
			</div>
		);
	}else{
		return(
			<div id="root">
			</div>
		);

	}
}

export default App;
