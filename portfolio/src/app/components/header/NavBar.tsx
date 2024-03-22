"use client";
import Image from "next/image";
import intro from "@/app/config/intro.json";
import ToggleNav from "./ToggleNav";
import { Fragment, useState } from "react";
import navs from "@/app/config/navs.json";

const Logo = () => {
  return (
    <Image
      width={50}
      height={50}
      src={"/user.jpg"}
      alt={`${intro.name} | ${intro.tagLine}`}
      className="rounded-full"
    />
  );
};

export default function NavBar() {
  const [hidden, setHidden] = useState(true);
  const toggleMenu = () => setHidden(!hidden);
  return (
    <>
      {/* component */}
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <Logo />
        </a>
        <ToggleNav onToggle={toggleMenu} />
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {navs.map((item, idx) => (
            <Fragment key={item.href}>
              <li>
                <a
                  className="text-sm text-gray-400 hover:text-gray-500"
                  href={item.href}
                >
                  {item.title}
                </a>
              </li>{" "}
              {idx < navs.length - 1 && (
                <li className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#"
        >
          GitGub
        </a>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Linkedin
        </a>
      </nav>
      <div className={`navbar-menu relative z-50 ${hidden && "hidden"}`}>
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={toggleMenu}
        />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a
              className="mr-auto text-3xl font-bold leading-none"
              href="#portfolio"
            >
              <Logo />
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {navs.map((item) => (
                <li className="mb-1" key={item.href}>
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href={item.href}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                GitHub
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                href="#"
              >
                Linkedin
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
