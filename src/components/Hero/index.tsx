"use client";

import useHero from "@/hooks/useHero";
import { FC } from "react";
import HeroDetails from "./Details";
import HeroPaginationBox from "./PaginationBox";
import NavBar from "./NavBar/NavBar";

const Hero: FC<{ details: Movie[] }> = ({ details }) => {
  const activeMovie = useHero(details);

  return (
    <section
      style={{ backgroundImage: `url("${activeMovie.backdrop}")` }}
      className={`h-[600px] bg-cover bg-center text-white`}
    >
      <div className="bg-slate-900/50 w-full h-full">
        <NavBar />
        <div className="flex items-center justify-between h-full">
          <HeroDetails activeMovie={activeMovie} />
          <HeroPaginationBox
            active={activeMovie.index}
            length={details.length}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
