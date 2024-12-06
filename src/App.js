import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation.jsx";
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
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
