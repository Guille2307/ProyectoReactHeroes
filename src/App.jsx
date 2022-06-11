import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CreateHeroes from "./pages/CreateHeroes/CreateHeroes";
import Fields from "./pages/Fields/Fields";
import Heroes from "./pages/Heroes/Heroes";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/heroes" element={<Heroes />}></Route>
        <Route path="/fields" element={<Fields />}></Route>
        <Route path="/create-heroes" element={<CreateHeroes />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Logout" element={<Logout />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
