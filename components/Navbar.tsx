import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "utils/useScrollPosition";
import { useRouter } from "next/router";

interface Props {}

interface MenuData {
  name: string;
  href: string;
}

const Navbar: NextPage<Props> = ({}) => {
  const router = useRouter();
  const scrollPosition = useScrollPosition();

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
      <div className="container flex justify-between items-center transition-all">
        {/* Logo container*/}
        <Link className="logo pl-0" href="/">
          <Image
            src={
              router.pathname == "/" || scrollPosition > 100
                ? "/assets/logo-dark.svg"
                : "/assets/logo-white.svg"
            }
            className="inline-block dark:hidden transition-all"
            alt=""
            width={scrollPosition > 0 ? 80 : 120}
            height={0}
          />
          {/* <img
            src="/assets/images/logo-light.png"
            className="hidden dark:inline-block"
            alt=""
          /> */}
        </Link>
        {/* End Logo container*/}
        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle*/}
            <a className="navbar-toggle" id="isToggle">
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
            {/* End mobile menu toggle*/}
          </div>
        </div>
        {/*Login button Start*/}

        {/*Login button End*/}
        <div id="navigation">
          {/* Navigation Menu*/}
          <ul className="navigation-menu">
            {menuData.map(value => (
              <li key={value.name.replaceAll(" ", "")}>
                <Link
                  href={value.href}
                  className={`sub-menu-item transition-all duration-500 ${
                    router.pathname == value.href ? "opacity-100" : "opacity-50"
                  } ${
                    router.pathname == "/" || scrollPosition > 100
                      ? "!text-black"
                      : "!text-white"
                  }`}
                >
                  {value.name}
                </Link>
              </li>
            ))}
          </ul>
          {/*end navigation menu*/}
        </div>
        {/*end navigation*/}
      </div>
      {/*end container*/}
    </nav>
  );
};

export default Navbar;
