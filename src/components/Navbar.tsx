import { DotsImage } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 end-0 start-0 z-[99999999] bg-secondary">
      <div className="container py-3 flex justify-between items-center px-10">
        <Link href={"/"} aria-label="Logo, link for home page">
          <Image alt="logo" width={100} height={50} src="/logo.svg" />
        </Link>
        <ul className="flex font-[300] max-xl:hidden text-sm gap-5 items-center">
          <li>
            <Link href={"/"} className="btn" aria-label="Link for Work page">
              <span>[</span> work <span>]</span>
            </Link>
          </li>
          <li>
            <Link href={"/"} className="btn" aria-label="Link for about page">
              <span>[</span> about <span>]</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="btn"
              aria-label="Link for services page"
            >
              <span>[</span> services <span>]</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="btn"
              aria-label="Link for technologies page"
            >
              <span>[</span> technologies <span>]</span>
            </Link>
          </li>
          <li>
            <Link href={"/"} className="btn" aria-label="Link for blog page">
              <span>[</span> blog <span>]</span>
            </Link>
          </li>
          <li>
            <Link href={"/"} className="btn" aria-label="Link for contact page">
              <span>[</span> contact <span>]</span>
            </Link>
          </li>
        </ul>
        <Link href={"/"} className="relative overflow-hidden">
          <div className="btn py-2.5 ps-0 bg-primary/40">
            <button
              aria-label="Get a Quote"
              className="btn py-0 border-0 bg-transparent text-primary text-sm"
            >
              <span>[</span>
              get a quote
              <span>]</span>
            </button>
          </div>
          <span className="border-t-2 border-primary bg-secondary w-10 absolute z-10 -bottom-6 -right-5 -rotate-45 aspect-square inline-block"></span>
          <Image
            className="absolute end-0 top-0"
            src={DotsImage}
            alt="dots"
            width={25}
            height={50}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
