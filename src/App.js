// import Header from "./components/Header/Header";
// import Navigation from "./components/Navigation/Navigation.jsx";
import Windows from "./components/Windows/Windows.jsx";
import Doors from "./components/Doors/Doors.jsx";
import Balcons from "./components/Balcons/Balcons.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import "./App.css";
import Calculator from "./components/Calculator/Calculator.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/doors" element={<Doors />} />
          <Route path="/balcons" element={<Balcons />} />
          <Route path="/contacts" element={<Contacts />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
