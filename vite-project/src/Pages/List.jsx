import React from "react";
import laptopModels from "../Arrays/List";

export default (List) => {
  return (
    <>
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
