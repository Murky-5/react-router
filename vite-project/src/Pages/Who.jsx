import React from "react";
import laptopModels from "../Arrays/List";

export default (Who) => {
  return (
    <>
      <div>
        siamo
        <h3>
          quelli
          <p>
            che
            <hr />
            creano<a>questi</a>non
          </p>
          interpretabili
        </h3>
        codici
      </div>
      <div>
        <h1>Modelli di Computer Portatili</h1>
        <div>
          {laptopModels.map((laptop) => (
            <div key={laptop.id}>
              <h2>{laptop.titolo}</h2>
              <p>Data di Pubblicazione: {laptop.dataDiPubblicazione}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
