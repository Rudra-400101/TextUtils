import React from "react";

export default function navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg position-sticky w-100 top-0"
        style={props.navbarColor}
      >
        <div className="container-fluid">
          <a className="navbar-brand" style={props.navbarColor} href="/">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={props.navbarColor}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={props.navbarColor}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={props.navbarColor}>
                  Pricing
                </a>
              </li>
            </ul>
            <div className="form-check form-switch justify-content-end align-items-center responsive">
              <div>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={props.blueTheme}
                ></button>
                <button
                  type="button"
                  className="btn btn-secondary mx-2"
                  onClick={props.liteBlackTheme}
                ></button>
                <button
                  type="button"
                  className="btn btn-success mx-2"
                  onClick={props.greenTheme}
                ></button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={props.redTheme}
                ></button>
              </div>
              <input
                className="form-check-input mx-3"
                type="checkbox"
                role="switch"
                id="checkbox"
                onClick={props.changeColor}
              />
              <label htmlFor="checkbox">
                <i className={props.themeMode.modeName}></i>
              </label>
            </div>
          </div>
        </div>
        <div
          className="form-check form-switch d-flex justify-content-end align-items-center w-50 mx-5"
          id="responsive"
        >
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={props.blueTheme}
          ></button>
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={props.liteBlackTheme}
          ></button>
          <button
            type="button"
            className="btn btn-success mx-2"
            onClick={props.greenTheme}
          ></button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={props.redTheme}
          ></button>
          <input
            className="form-check-input mx-3"
            type="checkbox"
            role="switch"
            id="checkbox"
            onClick={props.changeColor}
          />
          <label htmlFor="checkbox">
            <i className={props.themeMode.modeName}></i>
          </label>
        </div>
      </nav>
    </>
  );
}
