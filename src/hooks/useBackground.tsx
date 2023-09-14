// create a hook that returns the background image
// use the hook in the Hero component
// The background images will be cyclic
// and on hover, the image will pause
import { useState, useEffect } from "react";

const useBackground = (backdrops: Movie["backdrop_path"][]) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [background, setBackground] = useState<string>(base_url + backdrops[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setBackground(base_url + backdrops[i]);
      i = (i + 1) % backdrops.length;
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return background;
};

export default useBackground;
