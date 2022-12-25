import { NextPage } from "next";

interface Props {}

const Testimonial: NextPage<Props> = ({}) => {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-indigo-600 font-semibold mb-2">Testimonial</h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            What our customer <br /> say about us
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Techwind that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
        </div>
        {/*end grid*/}
        <div className="grid grid-cols-1 mt-8">
          <div className="tiny-three-item">
            <div className="tiny-slide text-center">
              <div className="customer-testi">
                <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600" />
                  <p className="text-slate-400">
                    It seems that only fragments of the original text remain in
                    the Lorem Ipsum texts used today.
                  </p>
                  <ul className="list-none mb-0 text-amber-400 mt-3">
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-5">
                  <img
                    src="assets/images/client/01.jpg"
                    className="h-14 w-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 className="mt-2 font-semibold">Calvin Carlo</h6>
                  <span className="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>
            <div className="tiny-slide text-center">
              <div className="customer-testi">
                <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600" />
                  <p className="text-slate-400">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century.
                  </p>
                  <ul className="list-none mb-0 text-amber-400 mt-3">
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-5">
                  <img
                    src="assets/images/client/02.jpg"
                    className="h-14 w-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 className="mt-2 font-semibold">Christa Smith</h6>
                  <span className="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>
            <div className="tiny-slide text-center">
              <div className="customer-testi">
                <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600" />
                  <p className="text-slate-400">
                    One disadvantage of Lorum Ipsum is that in Latin certain
                    letters appear more frequently than others.
                  </p>
                  <ul className="list-none mb-0 text-amber-400 mt-3">
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-5">
                  <img
                    src="assets/images/client/03.jpg"
                    className="h-14 w-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 className="mt-2 font-semibold">Jemina CLone</h6>
                  <span className="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>
            <div className="tiny-slide text-center">
              <div className="customer-testi">
                <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600" />
                  <p className="text-slate-400">
                    Thus, Lorem Ipsum has only limited suitability as a visual
                    filler for German texts.
                  </p>
                  <ul className="list-none mb-0 text-amber-400 mt-3">
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-5">
                  <img
                    src="assets/images/client/04.jpg"
                    className="h-14 w-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 className="mt-2 font-semibold">Smith Vodka</h6>
                  <span className="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>
            <div className="tiny-slide text-center">
              <div className="customer-testi">
                <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600" />
                  <p className="text-slate-400">
                    There is now an abundance of readable dummy texts. These are
                    usually used when a text is required.
                  </p>
                  <ul className="list-none mb-0 text-amber-400 mt-3">
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-5">
                  <img
                    src="assets/images/client/05.jpg"
                    className="h-14 w-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 className="mt-2 font-semibold">Cristino Murfi</h6>
                  <span className="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>
            <div className="tiny-slide text-center">
              <div className="customer-testi">
                <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600" />
                  <p className="text-slate-400">
                    According to most sources, Lorum Ipsum can be traced back to
                    a text composed by Cicero.
                  </p>
                  <ul className="list-none mb-0 text-amber-400 mt-3">
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star" />
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-5">
                  <img
                    src="assets/images/client/06.jpg"
                    className="h-14 w-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 className="mt-2 font-semibold">Cristino Murfi</h6>
                  <span className="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      <div className="container md:mt-24 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
          <div className="lg:col-span-8 md:col-span-6 md:text-left text-center">
            <h6 className="text-indigo-600 font-semibold mb-2">Portfolio</h6>
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Our Digital Product
            </h3>
            <p className="text-slate-400 max-w-xl">
              Start working with Techwind that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
          </div>
          <div className="lg:col-span-4 md:col-span-6 md:text-right hidden md:block">
            <a
              href=""
              className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              See More <i className="uil uil-arrow-right align-middle" />
            </a>
          </div>
        </div>
        {/*end grid*/}
        <div className="sm:flex mt-4" id="grid">
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className="">
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                  <img
                    src="assets/images/portfolio/pro1.jpg"
                    className="rounded-t-md shadow"
                    alt=""
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    href="https://1.envato.market/techwind"
                    className="hover:text-indigo-600 transition-all duration-500 ease-in-out"
                  >
                    Techwind Personal Portfolio
                  </a>
                </h5>
                <span className="text-slate-400">Creative</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className="">
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30">
                  <img
                    src="assets/images/portfolio/pro2.jpg"
                    className="rounded-t-md shadow"
                    alt=""
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    href="https://1.envato.market/techwind"
                    className="hover:text-emerald-600 transition-all duration-500 ease-in-out"
                  >
                    Techwind Minimal Portfolio
                  </a>
                </h5>
                <span className="text-slate-400">Minimal</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className="">
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-red-600/5 dark:bg-red-600/30">
                  <img
                    src="assets/images/portfolio/pro3.jpg"
                    className="rounded-t-md shadow"
                    alt=""
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    href="https://1.envato.market/techwind"
                    className="hover:text-red-600 transition-all duration-500 ease-in-out"
                  >
                    Techwind NFT Market
                  </a>
                </h5>
                <span className="text-slate-400">Crypto</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className="">
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-sky-600/5 dark:bg-sky-600/30">
                  <img
                    src="assets/images/portfolio/pro4.jpg"
                    className="rounded-t-md shadow"
                    alt=""
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    href="https://1.envato.market/techwind"
                    className="hover:text-sky-600 transition-all duration-500 ease-in-out"
                  >
                    Techwind Portfolio
                  </a>
                </h5>
                <span className="text-slate-400">Portfolio</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className="">
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-amber-600/5 dark:bg-amber-600/30">
                  <img
                    src="assets/images/portfolio/pro5.jpg"
                    className="rounded-t-md shadow"
                    alt=""
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    href="https://1.envato.market/techwind"
                    className="hover:text-amber-600 transition-all duration-500 ease-in-out"
                  >
                    Techwind Constuction
                  </a>
                </h5>
                <span className="text-slate-400">Corporate</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
            <div className="">
              <div className="relative">
                <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                  <img
                    src="assets/images/portfolio/pro6.jpg"
                    className="rounded-t-md shadow"
                    alt=""
                  />
                </div>
              </div>
              <div className="pt-4 px-3">
                <h5 className="mb-1 font-semibold text-lg">
                  <a
                    href="https://1.envato.market/techwind"
                    className="hover:text-indigo-600 transition-all duration-500 ease-in-out"
                  >
                    Techwind SEO
                  </a>
                </h5>
                <span className="text-slate-400">SEO</span>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
          <div className="md:col-span-12 text-center">
            <a
              href=""
              className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
            >
              See More <i className="uil uil-arrow-right align-middle" />
            </a>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      <div className="container md:mt-24 mt-16">
        <div className="grid grid-cols-1 text-center">
          <h6 className="text-indigo-600 text-sm font-bold mb-2">
            Available for freelance projects
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Do you have digital project? <br /> Let's talk.
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Techwind that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
          <div className="mt-6">
            <a
              href="contact-one.html"
              className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"
            >
              <i className="uil uil-phone" /> Contact Us
            </a>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
  );
};

export default Testimonial;
