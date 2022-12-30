import Header from "components/Header";
import { NextPage } from "next";
import { companyInfo } from "utils/data";

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
    <>
      <Header title="Contact us" />
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6 mt-6">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-phone" />
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Phone</h5>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className="mt-5">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center px-6 mt-6">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-envelope" />
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Email</h5>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>
                <div className="mt-5">
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center px-6 mt-6">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-map-marker" />
              </div>
              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Location</h5>
                <p className="text-slate-400 mt-3">
                 {companyInfo.address}
                </p>
                <div className="mt-5">
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    data-type="iframe"
                    className="video-play-icon read-more lightbox btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src="assets/images/contact.svg" alt="" />
            </div>
            <div className="lg:col-span-5 md:col-span-6 mt-8 md:mt-0">
              <div className="lg:ml-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>
                  <form method="post" name="myForm" id="myForm">
                    <p className="mb-0" id="error-msg" />
                    <div id="simple-msg" />
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-left">
                          <label htmlFor="name" className="font-semibold">
                            Your Name:
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="user"
                              className="w-4 h-4 absolute top-3 left-4"
                            />
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-input pl-11"
                              placeholder="Name :"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-left">
                          <label htmlFor="email" className="font-semibold">
                            Your Email:
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="mail"
                              className="w-4 h-4 absolute top-3 left-4"
                            />
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-input pl-11"
                              placeholder="Email :"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <div className="text-left">
                          <label htmlFor="subject" className="font-semibold">
                            Your Question:
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="book"
                              className="w-4 h-4 absolute top-3 left-4"
                            />
                            <input
                              name="subject"
                              id="subject"
                              className="form-input pl-11"
                              placeholder="Subject :"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-5">
                        <div className="text-left">
                          <label htmlFor="comments" className="font-semibold">
                            Your Comment:
                          </label>
                          <div className="form-icon relative mt-2">
                            <i
                              data-feather="message-circle"
                              className="w-4 h-4 absolute top-3 left-4"
                            />
                            <textarea
                              name="comments"
                              id="comments"
                              className="form-input pl-11 h-28"
                              placeholder="Message :"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Section*/}
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
              style={{ border: 0 }}
              className="w-full h-[500px]"
            />
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </>
  );
};

export default Contact;
