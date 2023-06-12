import React from "react";

export const PortfolioImg = ({darkMode}) => {
    const strokeColor = darkMode ? "#e7e6e7" : "#1F2128";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill='none'
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={strokeColor}
      width="35"
      height="35"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
      />
    </svg>
  );
};

export const OverviewImg = ({darkMode}) => {
    const strokeColor = darkMode ? "#e7e6e7" : "#1F2128";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill='none'
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={strokeColor}
      height="35"
      width="35"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
      />
    </svg>
  );
};

export const SearchImg = ({darkMode}) => {
    const strokeColor = darkMode ? "#e7e6e7" : "#1F2128";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill='none'
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={strokeColor}
      width='35'
      height='35'
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};
