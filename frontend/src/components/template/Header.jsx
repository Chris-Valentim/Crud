import React from "react";
import './Header.css'

const Header = (props) => {
  return (
    <header className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`} />
        {props.title}
      </h1>
      <p className="lead text-muted">
        {props.subtitle}
      </p>
    </header>
  )
}

export default Header
