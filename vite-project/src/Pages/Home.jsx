import { UseEffect, useState } from "react";

const [ps, setps] = useState(Boolean);

const castoro = () => {
  setps((beep) => beep === true);
};

export default () => {
  return (
    <>
      <input type="text" value={ps}></input>
      <button type="button" onClick={castoro}>
        clliccami
      </button>
    </>
  );
};
