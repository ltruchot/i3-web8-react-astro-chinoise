import React from "react";
import "./App.scss";
import FormControl from "./components/FormControl";
import Sign from "./components/Sign";
import { animals } from "./data/animals";
import { getSign } from "./services/astro";

function App() {
  const htmlAnimals = [];
  for (let i = 0; i < animals.length; i++) {
    htmlAnimals.push(<Sign animal={animals[i]} />);
  }

  const checkYear = () => {
    const y = parseInt(document.querySelector("input").value, 10);
    const sign = getSign(y);
    alert("Vous signe chinois est " + sign.name);
  };

  return (
    <div className="container">
      <h2>Horoscope chinois</h2>
      <FormControl labelText="Année de naissance" />
      <button className="btn btn-primary" onClick={checkYear}>
        Vérifier l'année
      </button>
      <div className="card-columns">{htmlAnimals}</div>
    </div>
  );
}

export default App;
