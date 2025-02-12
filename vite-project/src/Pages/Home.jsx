import { useEffect, useState } from "react";

export default () => {
  const [ps, setps] = useState("ciao");
  return (
    <>
      <input type="text"></input>
      <button type="button" value={ps} onClick={(e) => setps(e.target.value)}>
        clliccami
      </button>
    </>
  );
};
