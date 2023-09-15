const HeroPaginationBox = ({
  active,
  length,
}: {
  active: number;
  length: number;
}) => {
  // create array of length starting from 1
  const pages = Array.from({ length }, (_, i) => i + 1);
  return (
    <div className="flex flex-col">
      {pages.map((page) => (
        <div
          key={page}
          className={`${
            page === active + 1 ? "text-white font-bold" : "text-white/50"
          } mr-8 flex flex-row items-center gap-1 cursor-pointer justify-end`}
        >
          {active + 1 === page && <div className="h-[3px] w-5 bg-white"></div>}
          <p>{page}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroPaginationBox;
