"use client";

import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 px-4 py-2 bg-gray-900 flex items-center justify-between z-50">
      <nav className="flex gap-4">
        <Logo />
        <ul className="flex gap-2 text-white">
          <li>Movie</li>
          <li>Dramas</li>
        </ul>
      </nav>

      <div className="flex w-full max-w-72 gap-2 items-center p-2 border border-white bg-transparent text-white rounded-md">
        <i className="fas fa-search"></i>
        <input
          className="bg-transparent w-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
    </header>
  );
}
