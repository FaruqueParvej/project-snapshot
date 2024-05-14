import Image from "next/image";
import Link from "next/link";
import LogoSvg from "../public/logo.svg";
export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image
          className="max-w-[100px] md:max-w-[165px] "
          src={LogoSvg}
          alt="Lws"
          height={50}
          width={100}
        />
      </Link>
    </div>
  );
}
