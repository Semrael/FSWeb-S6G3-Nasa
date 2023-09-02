import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ApodData from "./components/ApodData";
import axios from "axios";
import "./App.css";

function App() {
  const [apodData, setapodData] = useState(null);
  const [date, setDate] = useState("2020-08-31");
  const changeHandler = (event) => {
    const { value } = event.target;
    setapodData(null);
    setDate(value);
  };

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
      .then((response) => {
        setapodData(response.data);
      })
      .catch((error) => {
        console.error("APOD DATA ALINAMADI", error);
      });
  }, [date]);
  return (
    <>
      <Header date={date} changeHandler={changeHandler} />
      <div className="App">
        {apodData ? <ApodData apodData={apodData} /> : <h2>Yükleniyor.....</h2>}
      </div>
    </>
  );
}

export default App;
