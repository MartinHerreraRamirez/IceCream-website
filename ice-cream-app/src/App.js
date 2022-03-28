import React from "react";
import BotonRadio from "./components/ButtonRadio";
import BotonRound from "./components/ButtonRound";
import BotonSquare from "./components/ButtonSquare";

function App() {
  return (
    <>
    <div>
      <BotonRadio>
        Producto A
      </BotonRadio>
    </div>
    <div>
      <BotonRound>
        Agregar
      </BotonRound>
    </div>
    <div>
      <BotonSquare>
       Producto B
      </BotonSquare>
    </div>
    </>
  );
}

export default App;
