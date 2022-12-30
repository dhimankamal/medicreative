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
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
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
                  According to most sources, Lorum Ipsum can be traced back to a
                  text composed by Cicero.
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
        {/*end grid*/}
      </div>
      {/*end container*/}
     
      {/*end container*/}
    </section>
  );
};

export default Testimonial;
