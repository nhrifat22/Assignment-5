import { useState } from "react";
import logo from "../assets/logo-text.png";

const links = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home">
      <img src={logo} alt="Dev Stack logo" className="h-9 w-auto" />
    </a>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* hamburger button, only on mobile */}
        <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        <Logo />

        {/* nav links, only on desktop */}
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-pink-600">{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-sm">Sign In</button>
          <button className="bg-brand text-white text-sm rounded-full px-4 sm:px-5 py-2">Sign Up</button>
        </div>
      </nav>

      {/* mobile menu, shows when hamburger is clicked */}
      {menuOpen && (
        <ul className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-3">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="block">{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;


