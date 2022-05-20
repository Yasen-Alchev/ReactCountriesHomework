import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./App.css";
import PopupCountry from "./PopupCountry";

function DataFetching() {
  const [responseData, setResponseData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [searchedCountries, setSearchedCountries] = useState([]);
  const [searchedRegion, setSearchedRegion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isOff, setIsOff] = useState(true);

  const fetchData = useCallback(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        let res = response.data;
        setResponseData(res);
        setSearchedRegion(res);
        setSearchedCountries(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const searchCountry = (data, regionCountries) => {
    setUserInput(data);
    setSearchedCountries(
      regionCountries.filter((country) =>
        country.name.toLowerCase().includes(data.toLowerCase())
      )
    );
  };

  const selectRegion = (data) => {
    var regionCountires;
    if (data === "All") {
      regionCountires = responseData;
    } else {
      regionCountires = responseData.filter(
        (country) => country.region.toLowerCase() === data.toLowerCase()
      );
    }
    setSearchedRegion(regionCountires);
    searchCountry(userInput, regionCountires);
  };

  const Countries = [
    { label: "All", value: "All" },
    { label: "Africa", value: "Africa" },
    { label: "Americas", value: "Americas" },
    { label: "Asia", value: "Asia" },
    { label: "Europe", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
    { label: "Polar", value: "Polar" },
    { label: "Antarctic Ocean", value: "Antarctic Ocean" },
  ];

  const styles = {
    menu: ({ width, ...css }) => ({
      ...css,
      backgroundColor: "var(--items-background);",
      width: "20rem",
      margin: "1rem 10rem 0rem 13rem",
    }),
    control: (base) => ({
      ...base,
      backgroundColor: "var(--items-background);",
      border: 0,
      width: "20rem",
      fontSize: "1.7rem;",
      height: "4rem;",
      margin: "10rem 13rem 0rem 13rem",
      boxShadow: "var(--shadow)",
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      fontSize: "1.7rem",
      backgroundColor: state.data.color,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
  };

  const showPopup = (country) => {
    setSelectedCountry(country);
    setModalShow(true);
  };

  return (
    <div>
      {isLoading ? (
        <div className="LoadingMessage">Loading...</div>
      ) : (
        <>
          <div className="switchButton">
            Use LightBox
            <button className="lightboxbutton" onClick={() => setIsOff(!isOff)}>
              {isOff ? "ON" : "OFF"}
            </button>
          </div>
          <div className="searchContainer">
            <div className="searchBox">
              <i className="fa fa-search"></i>
              <input
                className="inputBox"
                type="text"
                placeholder="Search Country...  "
                value={userInput}
                onChange={(data) =>
                  searchCountry(data.target.value, searchedRegion)
                }
              />
            </div>
            <Select
              closeMenuOnScroll={(e, b) =>
                e.target.className !== undefined ? false : true
              }
              options={Countries}
              styles={styles}
              onChange={(data) => selectRegion(data.value)}
            />
          </div>

          <div className="popup">
            {modalShow ? (
              <PopupCountry
                show={modalShow}
                onHide={() => setModalShow(false)}
                state={selectedCountry}
              />
            ) : null}
          </div>

          <div className="countries">
            {searchedCountries
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((res) => (
                <>
                  {isOff ? (
                    <div
                      className="country"
                      key={res.name}
                      onClick={() => showPopup(res)}
                    >
                      <img
                        className="countryFlag"
                        src={res.flags.png}
                        alt={res.name.common}
                      />
                      <div className="countryInfo">
                        <div className="officialName">{res.name}</div>
                        <div className="population">
                          {res.population !== 0 ? (
                            <>
                              <b>Population: </b>{" "}
                              {res.population.toLocaleString()}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="region">
                          {res.region != null ? (
                            <>
                              <b>Region: </b> {res.region}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="capital">
                          {res.capital != null ? (
                            <>
                              <b>Capital: </b> {res.capital}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="country" key={res.name}>
                      <Link className="countryLink" to={"details"} state={res}>
                        <img
                          className="countryFlag"
                          src={res.flags.png}
                          alt={res.name.common}
                        />
                        <div className="countryInfo">
                          <div className="officialName">{res.name}</div>
                          <div className="population">
                            {res.population !== 0 ? (
                              <>
                                <b>Population: </b>{" "}
                                {res.population.toLocaleString()}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="region">
                            {res.region != null ? (
                              <>
                                <b>Region: </b> {res.region}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="capital">
                            {res.capital != null ? (
                              <>
                                <b>Capital: </b> {res.capital}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default DataFetching;
