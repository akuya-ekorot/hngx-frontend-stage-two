"use client";

import { useState } from "react";

const FavoriteIcon = () => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center p-1 ${
        favorite ? "bg-red-100" : "bg-gray-100"
      } rounded-full`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={favorite ? "fill-red-500" : "fill-gray-400"}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
        />
      </svg>
    </button>
  );
};

export default FavoriteIcon;
