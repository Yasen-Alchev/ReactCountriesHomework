import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./PopupCountry.css";

function PopupCountry(props) {
  return (
    <>
      {props.state ? (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.state.name}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img
              className="popupImage"
              src={props.state.flags.png}
              alt={props.state.name.common}
            />
            <div className="detailsCountryInfo">
              <div className="detailsCountryName">{props.state.name}</div>
              <div className="countryDetail">
                {props.state.nativeName !== 0 ? (
                  <>
                    <b>Native Name: </b> {props.state.nativeName}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="countryDetail">
                {props.state.population !== 0 ? (
                  <>
                    <b>Population: </b>{" "}
                    {props.state.population.toLocaleString()}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="countryDetail">
                {props.state.area !== 0 ? (
                  <>
                    <b>Area: </b> {props.state.area.toLocaleString()}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="countryDetail">
                {props.state.region != null ? (
                  <>
                    <b>Region: </b> {props.state.region}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="countryDetail">
                {props.state.subregion != null ? (
                  <>
                    <b>Sub Region: </b> {props.state.subregion}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="countryDetail">
                {props.state.capital != null ? (
                  <>
                    <b>Capital: </b> {props.state.capital}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="countryDetail">
                {props.state.currencies != null
                  ? props.state.currencies.map((currency) => (
                      <div key={currency.name}>
                        <>
                          <b>Currencies: </b> {currency.name}
                        </>
                      </div>
                    ))
                  : ""}
              </div>
              <div className="countryDetail">
                {props.state.languages != null ? (
                  <>
                    <b>Languages: </b>
                    {props.state.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="countryDetail">
                {props.state.topLevelDomain != null ? (
                  <>
                    <b>Top Level Domains: </b>
                    {props.state.topLevelDomain.join(", ")}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="closeButton" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
}

export default PopupCountry;
