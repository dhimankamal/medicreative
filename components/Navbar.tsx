import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "utils/useScrollposition";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const scrollPosition = useScrollPosition()

  return (
    <nav id="topnav" className={`defaultscroll is-sticky bg-white ${scrollPosition > 0 ? 'shadow' : 'shadow-none'} transition-all`}>
      <div className="container flex justify-between items-center transition-all">
        {/* Logo container*/}
        <a className="logo pl-0" href="index.html">
      
          <Image
            src="/assets/logo-dark.svg"
            className="inline-block dark:hidden transition-all"
            alt=""
            width={scrollPosition > 0?80:120}
            height={0}
          />
          {/* <img
            src="/assets/images/logo-light.png"
            className="hidden dark:inline-block"
            alt=""
          /> */}
        </a>
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
            <li>
              <Link href="/" className="sub-menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/ourwork" className="sub-menu-item">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className="sub-menu-item">
                Contact us
              </Link>
            </li>
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
