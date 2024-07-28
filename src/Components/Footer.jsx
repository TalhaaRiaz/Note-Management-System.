import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-800 text-white py-4 flex justify-center shadow-inner mt-auto">
      <p className="text-sm">&copy; {year} Keeper. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
