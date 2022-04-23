import React from "react";
import portadaimg from "./assets/portadaimg.png";

const Portada = () => {
  return (
    <div className="w-full bg-fixed h-96 bg-slate-700">
      <img  src={portadaimg} alt="helados" className="object-contain w-full h-96" />
    </div>
  );
};

export default Portada;
