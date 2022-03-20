import React, { useState } from "react";
/* import Button from './Button'; */
import logo from "./assets/logo.png";

const Nav = () => {
  let Links = [
    { name: "NUESTRA HISTORIA", link: "/" },
    { name: "NUESTROS HELADOS", link: "/" },
    { name: "NUESTRAS FRANQUICIAS", link: "/" },
    { name: "CONTACTO", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-15 left-0">
      <div className="flex items-center justify-between bg-white py-1 md:px-5 px-7">
        <div>
          <img src={logo} alt="logo" class="w-1/5 m-0" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-4xl right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center sx:mt-14 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-32" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
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
