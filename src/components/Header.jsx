import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full sticky top-4 bg-transparent z-50 px-4">
      <div className="flex justify-between items-center p-3 border bg-background/95 backdrop-blur-sm mx-auto max-w-6xl mt-4 rounded-2xl font-orbitron shadow-sm">
        <div>
          <Link href="/" className="font-bold text-lg">
            Skandan
          </Link>
        </div>

        <div>
          <nav className="hidden md:block">
            <ul>
              <li className="flex gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="hover:text-purple-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <Button>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 mx-4 bg-background border rounded-2xl p-6 font-orbitron">
          <nav>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    onClick={toggleMenu}
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Button className="w-full" onClick={toggleMenu}>
                  <Link href="#contact">Get Started</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
