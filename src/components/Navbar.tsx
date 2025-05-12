"use client";
import { useState } from "react";
import { DotsImage } from "@/assets";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavLinks = [
  { id: 1, title: "work", href: "/work" },
  { id: 2, title: "about", href: "/about" },
  { id: 3, title: "services", href: "/services" },
  { id: 4, title: "technologies", href: "/technologies" },
  { id: 5, title: "blog", href: "/blog" },
  { id: 6, title: "contact", href: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 start-0 end-0 z-[999999] bg-secondary"
    >
      <div className="container py-3 flex justify-between items-center max-md:px-5 px-10">
        <Link href="/" aria-label="Go to homepage">
          <Image alt="logo" width={100} height={50} src="/logo.svg" />
        </Link>
        <ul className="hidden xl:flex gap-2 items-center text-sm font-light">
          {NavLinks.map((link) => (
            <li key={link.id} className="relative group">
              <Link href={link.href} aria-label={`Link to ${link.title}`}>
                <button className="btn flex items-center gap-1">
                  <span>[</span> {link.title} <span>]</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <Link href="/" className="relative overflow-hidden">
            <div className="btn py-2.5 ps-0 bg-primary/40">
              <button
                aria-label="Get a Quote"
                className="btn py-0 border-0 bg-transparent text-primary text-sm"
              >
                <span>[</span> get a quote <span>]</span>
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
          <button
            onClick={toggleMobileMenu}
            className="text-white btn px-2 py-1.5 flex items-center xl:hidden"
            aria-label="Toggle mobile menu"
          >
            <Menu size={27} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-secondary z-[9999999] flex items-start flex-col gap-5 p-10 text-white font-light text-xl overflow-y-auto"
          >
            <button
              onClick={toggleMobileMenu}
              className="text-white absolute top-5 end-5"
              aria-label="Close mobile menu"
            >
              <X size={30} className="-ms-1" />
            </button>

            {NavLinks.map((link) => (
              <div key={link.id}>
                <div
                  className="flex items-center justify-between"
                  onClick={() =>
                    setOpenDropdownId(
                      openDropdownId === link.id ? null : link.id
                    )
                  }
                >
                  <Link
                    href={link.href}
                    aria-label={`Link to ${link.title}`}
                    onClick={toggleMobileMenu}
                    className="capitalize"
                  >
                    {link.title}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
