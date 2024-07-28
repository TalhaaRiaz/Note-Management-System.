import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header className="bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-900 p-6 shadow-lg">
      <h1 className="text-5xl text-white font-bold flex items-center justify-center space-x-3">
        <HighlightIcon className="text-yellow-300" />
        <span className="font-signature text-3xl">Keeper</span>
      </h1>
    </header>
  );
}

export default Header;
