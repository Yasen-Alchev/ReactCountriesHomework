import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CountryNavbar from "./CountryNavbar";
import "./Details.css";

function Details() {
  let { state } = useLocation();
  const navigate = useNavigate();

  const goHomeBtn = () => navigate("/");

  return (
    <>
      <CountryNavbar />
      <button className="backButton" onClick={goHomeBtn}>
        <i className="fa fa-arrow-left"></i>
        Back
      </button>
      <div className="details">
        <img
          className="detailsFlag"
          src={state.flags.png}
          alt={state.name.common}
        />
        <div className="detailsCountryInfo">
          <div className="detailsCountryName">{state.name}</div>
          <div className="countryDetail">
            {state.nativeName !== 0 ? (
              <>
                <b>Native Name: </b> {state.nativeName}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="countryDetail">
            {state.population !== 0 ? (
              <>
                <b>Population: </b> {state.population.toLocaleString()}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="countryDetail">
            {state.area !== 0 ? (
              <>
                <b>Area: </b> {state.area.toLocaleString()}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="countryDetail">
            {state.region != null ? (
              <>
                <b>Region: </b> {state.region}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="countryDetail">
            {state.subregion != null ? (
              <>
                <b>Sub Region: </b> {state.subregion}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="countryDetail">
            {state.capital != null ? (
              <>
                <b>Capital: </b> {state.capital}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="countryDetail">
            {state.currencies != null
              ? state.currencies.map((currency) => (
                  <div key={currency.name}>
                    <>
                      <b>Currencies: </b> {currency.name}
                    </>
                  </div>
                ))
              : ""}
          </div>
          <div className="countryDetail">
            {state.languages != null ? (
              <>
                <b>Languages: </b>
                {state.languages.map(language => language.name).join(", ")}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="countryDetail">
            {state.topLevelDomain != null ? (
              <>
                <b>Top Level Domains: </b>
                {state.topLevelDomain.join(", ")}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
