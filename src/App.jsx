import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CountryDetails from "./pages/CountryDetails";
import CountryList from "./pages/CountryList";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CountryList />}></Route>
          <Route path="/country/:name" element={<CountryDetails/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
