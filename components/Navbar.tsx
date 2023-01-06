import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "utils/useScrollPosition";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

interface Props {}

interface MenuData {
  name: string;
  href: string;
}

const Navbar: NextPage<Props> = ({}) => {
  const router = useRouter();
  const scrollPosition = useScrollPosition();
  const [showMobileNavbar, setshowMobileNavbar] = useState(false);

  useEffect(() => {
    setshowMobileNavbar(false);
  }, [router.pathname]);

  const menuData: MenuData[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Our work",
      href: "/ourwork",
    },
    {
      name: "Contact us",
      href: "/contact",
    },
  ];

  return (
    <nav
      id="topnav"
      className={`defaultscroll is-sticky ${
        scrollPosition > 100 ? "shadow bg-white" : "shadow-none"
      } transition-all duration-700`}
    >
      <div className="container flex justify-between items-center transition-all z-10">
        {/* Logo container*/}
        <Link className="logo pl-0 z-10" href="/">
          <Image
            src={
              router.pathname == "/" || scrollPosition > 100
                ? "/assets/logo-dark.svg"
                : "/assets/logo-white.svg"
            }
            className="hidden md:inline-block transition-all duration-500"
            alt=""
            width={scrollPosition > 100 ? 80 : 120}
            height={0}
          />
          <Image
            src={"/assets/logo-dark.svg"}
            className="md:!hidden transition-all duration-500"
            alt=""
            width={scrollPosition > 100 ? 80 : 120}
            height={0}
          />
        </Link>
        {/* End Logo container*/}
        <div className="menu-extras z-10">
          <div className="menu-item">
            {/* Mobile menu toggle*/}
            <button
              className="navbar-toggle"
              id="isToggle"
              onClick={() => setshowMobileNavbar(!showMobileNavbar)}
            >
              <div className="lines">
                <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      showMobileNavbar ? "rotate-45" : " -translate-y-1.5"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                      showMobileNavbar ? "opacity-0" : ""
                    } `}
                  />
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                      showMobileNavbar ? "-rotate-45" : " translate-y-1.5"
                    }`}
                  />
                </div>
              </div>
            </button>
            {/* End mobile menu toggle*/}
          </div>
        </div>

        {showMobileNavbar ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute left-0 w-full bg-white transition-all duration-500 open !top-0 !max-h-screen`}
          >
            {/* Navigation Menu*/}

            <motion.ul
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="!h-screen flex justify-center items-end flex-col p-10 gap-4"
            >
              {menuData.map(value => (
                <li key={value.name.replaceAll(" ", "")}>
                  <Link
                    href={value.href}
                    className={`sub-menu-item transition-all duration-500 text-2xl ${
                      router.pathname == value.href
                        ? "opacity-100 font-bold !text-blue-600"
                        : "opacity-50"
                    } ${
                      router.pathname == "/" || scrollPosition > 100
                        ? "!text-black"
                        : "md:!text-white"
                    }`}
                  >
                    {value.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
            {/*end navigation menu*/}
          </motion.div>
        ) : (
          <div id="navigation" className={`transition-all duration-500 `}>
            {/* Navigation Menu*/}

            <ul className={`navigation-menu`}>
              {menuData.map(value => (
                <li key={value.name.replaceAll(" ", "")}>
                  <Link
                    href={value.href}
                    className={`sub-menu-item transition-all duration-500 !text-lg ${
                      router.pathname == value.href
                        ? "opacity-100"
                        : "opacity-50"
                    } ${
                      router.pathname == "/" || scrollPosition > 100
                        ? "!text-black"
                        : "md:!text-white"
                    }`}
                  >
                    {value.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/*end navigation menu*/}
          </div>
        )}
        {/*end navigation*/}
      </div>
      {/*end container*/}
    </nav>
  );
};

export default Navbar;
