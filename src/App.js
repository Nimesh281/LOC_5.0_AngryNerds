import "./App.css";
import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
// import InformationPage  from '../src/Components/LandingPage/InformationPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wedding from "./Components/Wedding/Wedding";
import Login from "./Components/User/Login";
import Home from "../src/Components/Home/Home";
import { purple } from "@mui/material/colors";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import Register from "./Components/User/Register";
import PhotographerProfile from "./Components/Profile/PhotographerProfile";
import Navbar from "./Components/Common/Navbar";
import { useParams } from "react-router";
// import PhotographerProfile from "./Components/Profile/PhotographerProfile";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e85a4f",
    },
    secondary: {
      main: "#6b3e26",
    },
    typography: {
      fontFamily: "Montserrat",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />4
            <Route path="/Photographer/Profile" element={<><Navbar />,<PhotographerProfile /></>} />
    
            {/* <InformationPage/> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

// "start": "react-scripts start",
export default App;
