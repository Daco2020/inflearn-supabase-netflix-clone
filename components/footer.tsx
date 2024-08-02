"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed text-center text-white bottom-0 left-0 right-0 p-4 bg-gray-900">
      <p>
        Movie Database Scraped from{" "}
        <Link
          className="text-blue-600"
          href="https://www.themoviedb.org/"
          target="bnk" // 새탭열기
        >
          TMDB
        </Link>
      </p>
    </footer>
  );
}
