"use client";
import { useState } from "react";
import { Instagram, Menu } from "@/lib/icons";
import Link from "next/link";
import Nav from "./nav";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="top-0 flex w-full items-center gap-x-4 px-4 py-2 z-50 transition-all header-animation mb-2">
        <div>
          <button
            className="hover:text-primary"
            onClick={openMenu}
            aria-label="Menu"
          >
            <Menu />
          </button>
        </div>
        <div className="flex-1 flex justify-center text-primary transition-all">
          <Link href="/" aria-label="Logo">
            <img
              src="/assets/logo.png"
              alt="Logo"
              width={100}
              className="logo-animation"
            />
          </Link>
        </div>
        <div>
          <a
            href="https://www.instagram.com/imltenis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>
      </header>

      {menu && <Nav setMenu={setMenu} />}
    </>
  );
};

export default Header;
