import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
// import InformationPage  from '../src/Components/LandingPage/InformationPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wedding from "./Components/Wedding/Wedding";
import LoginSignupPage from "./Components/User/LoginSignupPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/login" element={<LoginSignupPage />} />
          {/* <InformationPage/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
