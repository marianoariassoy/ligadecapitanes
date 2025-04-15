"use client";
import { useEffect } from "react";
import { Instagram, Menu } from "@/lib/icons";
import Link from "next/link";
import Nav from "./nav";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    const logo = document.querySelector(".logo-main") as HTMLElement;
    const header = document.querySelector("#header") as HTMLElement;

    if (pathname === "/") {
      header.classList.remove("backdrop-blur");
      header.classList.remove("bg-header");
    } else {
      header.classList.add("backdrop-blur");
      header.classList.add("bg-header");
    }

    window.onscroll = () => {
      if (window.scrollY > 0) {
        logo.classList.add("text-xs");
      } else {
        logo.classList.remove("text-xs");
      }
    };
  }, [pathname]);

  useEffect(() => {
    ReactGA.initialize("G-0ZMTELW8GH");
  }, []);

  const handleMenu = () => {
    const nav = document.querySelector("#menu") as HTMLElement;
    nav.classList.toggle("hidden");
  };

  return (
    <>
      <header
        className="sticky top-0 flex w-full items-center gap-x-4 px-4 py-2 z-50 mb-3"
        id="header"
      >
        <div>
          <button
            className="hover:text-primary"
            onClick={handleMenu}
            aria-label="Menu"
          >
            <Menu />
          </button>
        </div>
        <div className="flex-1 flex justify-center text-primary logo-main transition-all">
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
            href="https://www.instagram.com/ligadecapitanes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>
      </header>

      <Nav />
    </>
  );
};

export default Header;
