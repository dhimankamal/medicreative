import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const Services: NextPage<Props> = ({}) => {
  return   <section className="relative md:py-24 py-16">
  <div className="container">
    <div className="grid grid-cols-1 pb-8 text-center">
      <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
        Our Services
      </h3>
      <p className="text-slate-400 max-w-xl mx-auto">
        Start working with Techwind that can provide everything you need to
        generate awareness, drive traffic, connect.
      </p>
    </div>
    {/*end grid*/}
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
      <div className="text-center md:px-6">
        <div className="w-28 h-28 bg-indigo-600/5 text-indigo-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
          <i className="uil uil-airplay" />
        </div>
        <div className="content mt-7">
          <Link
            href="/"
            className="title h5 text-lg font-medium hover:text-indigo-600"
          >
            Digital Marketing
          </Link>
          <p className="text-slate-400 mt-3">
            The phrasal sequence of the Lorem Ipsum text is now so that many
          </p>
        </div>
      </div>
      <div className="text-center md:px-6">
        <div className="w-28 h-28 bg-red-600/5 text-red-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
          <i className="uil uil-presentation-play" />
        </div>
        <div className="content mt-7">
          <Link
            href="/"
            className="title h5 text-lg font-medium hover:text-red-600"
          >
            Video Production
          </Link>
          <p className="text-slate-400 mt-3">
            The phrasal sequence of the Lorem Ipsum text is now so that many
          </p>
        </div>
      </div>
      <div className="text-center md:px-6">
        <div className="w-28 h-28 bg-emerald-600/5 text-emerald-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
          <i className="uil uil-mobile-android" />
        </div>
        <div className="content mt-7">
          <Link
            href="/"
            className="title h5 text-lg font-medium hover:text-emerald-600"
          >
            Web &amp; Mobile
          </Link>
          <p className="text-slate-400 mt-3">
            The phrasal sequence of the Lorem Ipsum text is now so that many
          </p>
        </div>
      </div>
      <div className="text-center md:px-6">
        <div className="w-28 h-28 bg-amber-600/5 text-amber-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
          <i className="uil uil-crop-alt" />
        </div>
        <div className="content mt-7">
          <a
            href=""
            className="title h5 text-lg font-medium hover:text-amber-600"
          >
            UX / UI Design
          </a>
          <p className="text-slate-400 mt-3">
            The phrasal sequence of the Lorem Ipsum text is now so that many
          </p>
        </div>
      </div>
    </div>
    {/*end grid*/}
  </div>
  {/*end container*/}
  <div className="container md:mt-24 mt-16">
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
      <div className="md:col-span-6">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-7">
            <div className="grid grid-cols-1 gap-4">
              <img
                src="assets/images/digital/03.jpg"
                className="shadow rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-1 gap-4">
              <img
                src="assets/images/digital/04.jpg"
                className="shadow rounded-lg"
                alt=""
              />
              <div className="w-28 h-28 bg-indigo-600/10 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      {/*end col*/}
      <div className="md:col-span-6">
        <div className="md:ml-6">
          <p className="text-indigo-600 text-lg font-medium mb-4">
            Graphic designing and web development
          </p>
          <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Analyze your entire market <br /> pricing &amp; stock availability
          </h4>
          <p className="text-slate-400 max-w-xl">
            We collaborate with people, teams, and businesses to develop
            design systems, strategies, and processes to do a better creative
            work everyday.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/*end col*/}
    </div>
    {/*end grid*/}
  </div>
  {/*end container*/}
</section>
}

export default Services