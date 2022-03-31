import React, { useState } from "react";
/* import Button from './Button'; */
import lunaice from "./assets/lunaice.png"

const Nav = () => {
  let Links = [
    { name: "NUESTRA HISTORIA", link: "/" },
    { name: "NUESTROS HELADOS", link: "/" },
    { name: "NUESTRAS FRANQUICIAS", link: "/" },
    { name: "CONTACTO", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="left-0 shadow-md z-w-full top-15">
      <div className="flex items-center justify-between py-1 bg-white md:px-5 px-7">
        <div>
          <img src={lunaice} alt="logo" class="w-1/5 m-0" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-4xl cursor-pointer right-8 top-6 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center sx:mt-14 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-50 left-0 w-260 md:w-auto md:pl-0 pl-2 pr-2 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/*         <Button>
          Menú
        </Button> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
