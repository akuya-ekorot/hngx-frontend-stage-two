"use client";

import useHero from "@/hooks/useHero";
import { FC } from "react";
import HeroDetails from "./Details";

const Hero: FC<{ details: Movie[] }> = ({ details }) => {
  const activeMovie = useHero(details);

  return (
    <section
      style={{ backgroundImage: `url("${activeMovie.backdrop}")` }}
      className={`h-[600px] bg-cover bg-center text-white`}
    >
      <div className="bg-slate-900/50 w-full h-full">
        <nav className="h-20 w-full border-b border-b-slate-900"></nav>
        <div className="flex items-center justify-between h-full">
          <HeroDetails activeMovie={activeMovie} />
		  <div className="w-4 h-4 bg-red-600"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
