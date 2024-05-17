import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full">
      <div className="bg-[#2c69e4] flex text-[#FFFFFF] p-4 items-center">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src="/images/logo.png"
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="flex">
          <Link href={"/rastrear"} className="mx-8 text-xl cursor-pointer font-medium">Rastrear</Link>
          <Link href={"/sucursales"} className="mx-8 text-xl cursor-pointer font-medium">Sucursales</Link>
          <Link href={"/nosotros"} className="mx-8 text-xl cursor-pointer font-medium">Nosotros</Link>
        </div>
      </div>
    </nav>
  );
}
