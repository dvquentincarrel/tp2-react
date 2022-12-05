import Menu from './components/Menu.js';
import { Outlet } from "react-router-dom";

function App() {
	return(
		<div>
			<Menu />
			<Outlet />
		</div>
	)
}

export default App;
