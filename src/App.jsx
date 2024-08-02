import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import RegisterDetail from "./pages/RegisterDetail";
import OpenChat from "./pages/OpenChat";
import Mypage from "./pages/Mypage/App";
import Community from "./pages/Community/App";
import "/src/stylesheets/Common.css";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/registerDetail" element={<RegisterDetail />} />
				<Route path="/Chat" element={<OpenChat />} />
				<Route path="/mypage" element={<Mypage />} />
				<Route path="/community/*" element={<Community />} />
			</Routes>
		</Router>
	);
}

export default App;
