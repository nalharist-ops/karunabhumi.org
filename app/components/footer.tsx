"use client";

import React from "react";
import Link from "next/link";

const START_YEAR = 2024;
const YEAR = new Date().getFullYear();

export default function Footer() {
  const yearText = START_YEAR === YEAR ? `${YEAR}` : `${START_YEAR} - ${YEAR}`;

  return (
    <footer className="mt-12 py-8">
      {/* Top navigation row */}
 

      {/* Copyright line in parentheses like the screenshot */}
      <div className="mt-6 text-center text-sm text-neutral-400 dark:text-neutral-300">
        (<time dateTime={`${YEAR}`}>© {yearText}</time>)
      </div>
    </footer>
  );
}
