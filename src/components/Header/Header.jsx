import React from "react";
import logo from "../../assets/logo.webp";

const Header = () => (
  <header className="flex items-center gap-4 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg rounded-xl mb-6">
    <img
      src={logo}
      alt="Logo"
      className="h-10 w-10 object-contain rounded-lg"
    />
    <h1 className="text-2xl font-semibold tracking-wide">AI Models Web</h1>
  </header>
);

export default Header;
