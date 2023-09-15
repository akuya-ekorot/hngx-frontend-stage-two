import PlayIcon from "@/components/PlayIcon";

const HeroButton = ({ trailer }: { trailer: string }) => {
  return (
    <a
      target="_blank"
      href={`https://youtube.com/watch?v=${trailer}`}
      className="bg-rose-700 text-white text-sm font-bold flex items-center gap-2 px-4 py-[6px] w-48 rounded-md"
    >
      <PlayIcon />
      WATCH TRAILER
    </a>
  );
};

export default HeroButton;
