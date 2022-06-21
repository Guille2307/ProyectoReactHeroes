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
import { BrowserRouter as Router } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import EditHero from "./pages/EditHero/EditHero";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { useState } from "react";
import { JwtContext } from "./shared/context/JwtContext";

const App = () => {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));
  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <Router>
        <div>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/heroes" element={<Heroes />}></Route>
            <Route path="/fields" element={<Fields />}></Route>
            <Route
              path="/create-heroes"
              element={
                <RequireAuth>
                  <CreateHeroes />
                </RequireAuth>
              }
            ></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Logout" element={<Logout />}></Route>
            <Route path="/heroes/:id" element={<Detail />}></Route>
            <Route path="/editHero/:id" element={<EditHero />}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </JwtContext.Provider>
  );
};

export default App;
