import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'} className="flex gap-6 items-center py-4 px-48">
      <Image src={"/tv.png"} alt="Movie Box Logo" width={50} height={50} />
	  <p className="font-bold text-2xl text-white">Movie Box</p>
    </Link>
  );
};

export default Logo;
