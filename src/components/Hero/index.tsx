"use client";

import useBackground from "@/hooks/useBackground";

const Hero = ({ backdrops }: { backdrops: string[] }) => {
  const background = useBackground(backdrops.slice(0, 5));

  return (
    <section
      style={{ backgroundImage: `url("${background}")` }}
      className={`h-[600px] bg-cover bg-center`}
    >
      <div className="bg-slate-900/40 w-full h-full">
        <nav></nav>
      </div>
    </section>
  );
};

export default Hero;
