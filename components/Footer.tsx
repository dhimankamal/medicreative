import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "utils/data";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid md:grid-cols-3 grid-cols-1 items-center">
            <div className="md:text-left text-center">
              <a href="#" className="text-[22px] focus:outline-none">
                <Image
                height={40}
                width={80}
                  src="/assets/logo-white.svg"
                  className="mx-auto md:mr-auto md:ml-0"
                  alt=""
                />
              </a>
            </div>
            <div className="text-center mt-0 md:mt-0">
              <p className="mb-0 capitalize">
                © {companyInfo.name}. Design by 
                <Link href="/" className="text-reset">
                  {" "}kamal
                </Link>
                .
              </p>
            </div>
            <ul className="list-none md:text-right text-center my-2 md:mt-0">
              {/* <li className="inline">
                <Link
                  href="/"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i
                    className="uil uil-shopping-cart align-middle"
                    title="Buy Now"
                  />
                </Link>
              </li> */}
              {/* <li className="inline">
                <Link
                  href="/"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i
                    className="uil uil-dribbble align-middle"
                    title="dribbble"
                  />
                </Link>
              </li> */}
              <li className="inline">
                <Link
                  href="https://www.behance.net/medicreatives"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i className="uil uil-behance" title="behance" />
                </Link>
              </li>
              {/* <li className="inline">
                <Link
                  href="/"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i className="uil uil-linkedin" title="Linkedin" />
                </Link>
              </li> */}
              <li className="inline">
                <Link
                  href="https://www.facebook.com/people/Medicreatives/100089166789018/"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i
                    className="uil uil-facebook-f align-middle"
                    title="facebook"
                  />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://www.instagram.com/_medicreatives_/"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i
                    className="uil uil-instagram align-middle"
                    title="instagram"
                  />
                </Link>
              </li>
              {/* <li className="inline">
                <Link
                  href="/"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i className="uil uil-twitter align-middle" title="twitter" />
                </Link>
              </li> */}
              <li className="inline">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i className="uil uil-envelope align-middle" title="email" />
                </a>
              </li>
              <li className="inline">
                <Link
                  href="/contact"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                >
                  <i
                    className="uil uil-file align-middle"
                    title="contact"
                  />
                </Link>
              </li>
            </ul>
            {/*end icon*/}
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </div>
    </footer>
  );
};

export default Footer;
