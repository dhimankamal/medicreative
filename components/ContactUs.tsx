import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const ContactUs: NextPage<Props> = ({}) => {
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 text-center">
        <span className="text-slate-400 mb-4">
          Available for freelance projects
        </span>
        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
          Do you have designing project? <br /> Lets talk.
        </h3>
        <div className="mt-6">
          <Link
            href="/contact"
            className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
          >
            <i className="uil uil-phone" /> Contact us
          </Link>
        </div>
      </div>
      {/*end grid*/}
    </div>
  );
};

export default ContactUs;
