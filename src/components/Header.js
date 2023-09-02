import React from "react";

function Header(props) {
  const { date, changeHandler } = props;
  return (
    <header>
      <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" />
      <input
        type="date"
        name="tarih"
        value={date}
        onChange={changeHandler}
      ></input>
    </header>
  );
}

export default Header;
