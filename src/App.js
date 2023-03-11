import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
// import InformationPage  from '../src/Components/LandingPage/InformationPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wedding from "./Components/Wedding/Wedding";
import LoginSignupPage from "./Components/User/LoginSignupPage";
import Home from "../src/Components/Home/Home";
import { purple } from "@mui/material/colors";
import { createMuiTheme, ThemeProvider } from "@mui/material";

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
            <Route path="/login" element={<LoginSignupPage />} />
            <Route path="/home" element={<Home />} />
            {/* <InformationPage/> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
