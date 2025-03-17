"use client";

import { menu, categories } from "../lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const handleMenu = () => {
    const nav = document.querySelector("#menu") as HTMLElement;
    nav.classList.toggle("hidden");
  };

  const pathname = usePathname();

  return (
    <nav
      className="fade-in fixed top-0 left-0 w-full bg-black/20 h-screen content-center text-center backdrop-blur-md z-50 hover:cursor-pointer hidden"
      id="menu"
      onClick={handleMenu}
    >
      <ul className="mb-3">
        {categories.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className={`text-primary italic font-black text-xl ${
                pathname === item.url ? "underline" : "hover:underline"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col font-medium lg:text-base">
        {menu.map((item, index) => (
          <li key={index + 12}>
            <Link
              href={item.url}
              className={
                pathname === item.url
                  ? "text-primary"
                  : "hover:underline text-white/70"
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://usuarios.ligadecapitanes.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white/70"
          >
            Capitanes
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
