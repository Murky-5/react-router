import { useEffect, useState, useContext } from "react";
import { useDataContext } from "../Components/CountContext";

export default () => {
  const [ps, setps] = useState(1);
  const submit = (a) => {
    a.preventDefault();
    setps(ps); /* { azz: "caione", mazz: "ciaome", cazz: "cuione" } */
  };

  const { jet } = useDataContext();
  const { titolo, dataDiPubblicazione, id } = jet.find((a) => a.id === ps);
  return (
    <>
      <form onSubmit={submit}>
        <input
          placeholder="s-c-r-i-v-i"
          type="number"
          value={ps}
          onChange={({ target }) => setps(target.value)}
          min={0}
          max={7}
        ></input>
        <button type="submit" onClick={({ target }) => setps(target.value + 1)}>
          {ps}
        </button>
      </form>
      {id}
      {/*   {jet.id.map(() => {
        <div key={id}>
          <p>{titolo}</p>
          <p>{dataDiPubblicazione}</p>
        </div>;
      })} */}
    </>
  );
};
