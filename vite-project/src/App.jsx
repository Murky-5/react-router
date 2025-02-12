import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./Components/Header";

import Default from "./Layout/Default";

import Home from "./Pages/Home";
// import List from "./Pages/List";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="/List" element={<List />} />
            <Route path="/Who" element={<Who />} />
            <Route path="/List:id" element={<List req={element} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <RouterDOM>
        <Header />
      </RouterDOM>
    </>
  );
}

export default App;
