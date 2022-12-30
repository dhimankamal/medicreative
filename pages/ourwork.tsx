import ContactUs from "components/ContactUs";
import Header from "components/Header";
import { NextPage } from "next";

interface Props {}

const Ourwork: NextPage<Props> = ({}) => {
  return (
    <>
      <Header title="Our work" />
      <section className="relative md:py-24 py-16">
        <div className="container">
          {/* <div className="grid grid-cols-1 items-center gap-[30px]">
            <div className="filters-group-wrap text-center">
              <div className="filters-group">
                <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                  <li
                    className="inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500 active"
                    data-group="all"
                  >
                    All
                  </li>
                  <li
                    className="inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500"
                    data-group="branding"
                  >
                    Branding
                  </li>
                  <li
                    className="inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500"
                    data-group="designing"
                  >
                    Designing
                  </li>
                  <li
                    className="inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500"
                    data-group="photography"
                  >
                    Photography
                  </li>
                  <li
                    className="inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500"
                    data-group="development"
                  >
                    Development
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {/*grid*/}
          <div
            id="grid"
            className="md:grid grid-cols-3 justify-center mx-auto mt-4"
          >
            <div className="w-full p-4 picture-item" data-groups='["branding"]'>
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/1.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/1.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="title absolute z-10 hidden group-hover:block bottom-6 left-6">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full p-4 picture-item"
              data-groups='["designing"]'
            >
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/2.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/2.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full p-4 picture-item"
              data-groups='["photography"]'
            >
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/3.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/3.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full p-4 picture-item"
              data-groups='["development"]'
            >
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/4.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/4.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 picture-item" data-groups='["branding"]'>
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/5.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/5.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 picture-item" data-groups='["branding"]'>
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/6.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/6.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full p-4 picture-item"
              data-groups='["designing"]'
            >
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/7.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/7.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full p-4 picture-item"
              data-groups='["development"]'
            >
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/8.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/8.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full p-4 picture-item"
              data-groups='["photography"]'
            >
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/20.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/20.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full p-4 picture-item"
              data-groups='["photography"]'
            >
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/21.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/21.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 picture-item" data-groups='["branding"]'>
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/22.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/22.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 picture-item" data-groups='["branding"]'>
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <img
                  src="assets/images/portfolio/23.jpg"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt=""
                />
                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 transition duration-500 z-0 rounded-md" />
                <div className="content transition-all duration-500">
                  <div className="icon absolute z-10 hidden group-hover:block top-6 right-6 transition-all duration-500">
                    <a
                      href="assets/images/portfolio/23.jpg"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white btn-icon rounded-full lightbox"
                    >
                      <i className="uil uil-camera" />
                    </a>
                  </div>
                  <div className="absolute z-10 hidden group-hover:block bottom-6 left-6 transition-all duration-500">
                    <a
                      href="portfolio-detail-three.html"
                      className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      Mockup Collection
                    </a>
                    <p className="text-slate-400 mb-0">Abstract</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-l-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <i className="uil uil-angle-left text-[20px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-r-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <i className="uil uil-angle-right text-[20px]" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/*end container*/}
        <ContactUs />
        {/*end container*/}
      </section>
    </>
  );
};

export default Ourwork;
