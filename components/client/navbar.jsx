import Link from "next/link";
import useOffsetY from "@/hooks/useOffsetY";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const offsetY = useOffsetY();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className={
          offsetY > 260
            ? "flex justify-between px-6 lg:px-8 py-4 lg:py-5 items-center bg-dark duration-300 ease-linear"
            : "flex justify-between px-9 lg:px-12 py-5 lg:py-6 items-center duration-300 ease-linear"
        }
      >
        <div>
          <h1 className="font-black">Banyumas</h1>
        </div>
        <div className="hidden lg:block md:block">
          <div className="flex items-center space-x-8 font-semibold text-sm">
            <Link href="/">Beranda</Link>
            <Link href="/">Kuliner</Link>
            <Link href="/">Blogs</Link>
            <Link href="/">Sejarah</Link>
          </div>
        </div>
        <div className="block md:hidden lg:hidden">
          <Hamburger toggle={setOpen} toggled={isOpen} size={23} />
        </div>
      </div>
      {isOpen ? (
        <div className="h-screen w-full bg-dark flex justify-center">
          <div className="text-lg font-semibold  translate-y-1/4 space-y-5 text-center">
            <div>
              <Link href="/">Beranda</Link>
            </div>
            <div>
              <Link href="/">Kuliner</Link>
            </div>
            <div>
              <Link href="/">Blogs</Link>
            </div>
            <div>
              <Link href="/">Sejarah</Link>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Navbar;
