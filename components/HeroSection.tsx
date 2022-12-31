import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const HeroSection: NextPage<Props> = ({}) => {
  return (
    <section className="relative table w-full py-36 lg:py-44">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
          <div className="md:col-span-6">
            <div className="md:mr-6">
              <img
                src="assets/images/logo-icon-40.png"
                className="mb-5"
                alt=""
              />
              <p className="text-indigo-600 text-lg font-medium mb-4">
                We are a very dedicated team
              </p>
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">
                We are a full-service digital agency
              </h4>
              <p className="text-slate-400 text-lg max-w-xl">
                We collaborate with people, teams, and businesses to develop
                design systems, strategies, and processes to do a better
                creative work everyday.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
                >
                  <i className="uil uil-phone" /> Contact us
                </Link>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="md:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-5">
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src="assets/images/digital/02.jpg"
                    className="shadow rounded-lg"
                    alt=""
                  />
                  <div className="ml-auto">
                    <div className="w-28 h-28 bg-indigo-600/10 rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  <img
                    src="assets/images/digital/01.jpg"
                    className="shadow rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
  );
};

export default HeroSection;
