import "./App.css";
import Details from "./Details";
import DataFetching from "./DataFetching";
import CountryNavbar from "./CountryNavbar";
import { Routes, Route } from "react-router-dom";
import PopupCountry from "./PopupCountry";

function App() {
  return (
    <div>
      <PopupCountry/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CountryNavbar />
              <DataFetching />
            </>
          }
        ></Route>
        <Route
          path="/details"
          element={
            <>
              <Details />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
