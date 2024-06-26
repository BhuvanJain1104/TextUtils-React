import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disable" to="/about">About</Link>
            </li>
          </ul>
          <div className="btn-toolbar" role="toolbar" >
            <div className="btn- me-2 btn-group-lg"  >
              <button type="button" onClick={props.toggleMode} className="btn btn-primary mx-2"></button>
              <button type="button" onClick={props.toggleMode} className="btn btn-danger mx-2"></button>
              <button type="button" onClick={props.toggleMode} className="btn btn-success mx-2"></button>
              <button type="button" onClick={props.toggleMode} className="btn btn-warning mx-2"></button>
              <button type="button" onClick={props.toggleMode} className="btn btn-info mx-2"></button>
              <button type="button" onClick={props.toggleMode} className="btn btn-secondary mx-2"></button>
            </div>
          </div>
            <div className={`form-check form-switch mx-2 text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.mode === "light" ? " ENABLE DARK MODE " : " ENABLE LIGHT MODE"}</label>
            </div>
          </div>
        </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string,

}

