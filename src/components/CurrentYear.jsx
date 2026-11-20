"use client";

import { useEffect, useState } from "react";

// Pages are pre-rendered at build time, so the year is refreshed in the browser
// to stay correct without a rebuild.
const CurrentYear = () => {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <span suppressHydrationWarning>{year}</span>;
};

export default CurrentYear;
