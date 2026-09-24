import { useState } from "react";
import logo from "../assets/logo-text.png";

const links = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  function handleClick(name) {
    setActive(name);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        <a href="#home"><img src={logo} alt="Dev Stack logo" className="h-9 w-auto" /></a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => handleClick(link.name)} className={active === link.name ? "text-pink-600 font-medium" : "text-gray-700 hover:text-pink-600"}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-sm text-gray-700">Sign In</button>
          <button className="bg-brand text-white text-sm rounded-full px-4 sm:px-5 py-2">Sign Up</button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-3">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => handleClick(link.name)} className={active === link.name ? "block text-pink-600 font-medium" : "block text-gray-700"}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;