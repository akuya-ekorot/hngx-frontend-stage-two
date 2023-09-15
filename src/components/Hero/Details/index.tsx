import HeroButton from "../Button";

const HeroDetails = ({
  activeMovie,
}: {
  activeMovie: Movie & { trailer: string; index: number };
}) => {
  return (
    <div className="max-w-md ml-48 flex flex-col gap-4">
      <h1 className="font-bold text-5xl">{activeMovie.title}</h1>
      {
        //TODO: Add Ratings
      }
      <p className="font-medium text-sm">{activeMovie.overview}</p>
      <HeroButton trailer={activeMovie.trailer} />
    </div>
  );
};

export default HeroDetails;
