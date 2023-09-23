import Navbar from "../components/Navbar";
import PurpleStar from "../../../public/images/star-purple.png";
import Star from "../../../public/images/star.png";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import BackNav from "../../../public/images/back-nav.png";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
        <div className="bg-primary text-white pt-32 lg:pt-40 px-6 lg:px-24 space-y-4 lg:space-y-10 lg:flex justify-between hidden pb-20">
          <div>
            <Image src={PurpleStar} alt="purple-star" />
            <h1 className="text-[30px] lg:text-[43px] font-extrabold text-secondary">
              Get in touch
            </h1>
            <div className="mb-5">
              <p>Contact</p>
              <p>Information</p>
            </div>
            <div className="mb-5">
              <p>27 Alara Street</p>
              <p>Yaba 100012</p>
              <p>Lagos State</p>
            </div>
            <p className="mb-5">Call Us: 08134325735</p>
            <div className="mb-5">
              <p>we are open from Monday - Friday</p>
              <p>8:00am - 5:00px</p>
            </div>
            <h3 className="text-secondary mb-2">Share on</h3>
            <div className="flex space-x-2">
              <AiOutlineInstagram size={28} />
              <RiTwitterXFill size={28} />
              <FaFacebookF size={28} />
              <FaLinkedinIn size={28} />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-end mb-4">
              <Image src={Star} alt="star" />
            </div>
            <div className=" bg-purple-950 pl-10 pr-20 pt-10 pb-10 text-start">
              <h1 className="text-xl font-extrabold text-secondary text-start">
                Questions or need assistance?
              </h1>
              <h1 className="text-xl font-extrabold text-secondary">
                Let us know about it!
              </h1>
              <input
                type="text"
                placeholder="First Name"
                className="border-2 border-white bg-inherit mt-10 w-full h-16 pl-4"
              />
              <input
                type="text"
                placeholder="Mail"
                className="border-2 border-white bg-inherit mt-10 w-full h-16 pl-4"
              />{" "}
              <textarea
                type="text"
                placeholder="Message"
                className="border-2 border-white bg-inherit mt-10 w-full h-40 pl-4 pt-4"
              />
              <div className="flex justify-center">
                <button className="w-36 mt-4 py-2 px-4 rounded-sm font-light  bg-gradient-to-r from-secondary from-10%  to-tertiary to-90% ..">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white pt-32  px-6  space-y-4  lg:hidden justify-between block pb-20">
        <Link href="/">
          <Image src={BackNav} alt="back-nav" className="mb-5" />
        </Link>
        <h1 className="text-xl font-extrabold text-secondary">
          Questions or need
        </h1>
        <h1 className="text-xl  font-extrabold text-secondary">assistance?</h1>
        <h1 className="text-xl  font-extrabold text-secondary">
          Let us know about it
        </h1>
        <p className="text-sm">Email us below to answer questions related</p>
        <p className="text-sm">to our event</p>
        <input
          type="text"
          placeholder="Team's Name"
          className="border-2 border-white bg-inherit mt-10 w-full h-16 pl-4"
        />
        <input
          type="text"
          placeholder="Team's Name"
          className="border-2 border-white bg-inherit mt-10 w-full h-16 pl-4"
        />
        <input
          type="text"
          placeholder="Team's Name"
          className="border-2 border-white bg-inherit mt-10 w-full h-16 pl-4"
        />
        <textarea
          type="text"
          placeholder="Message"
          className="border-2 border-white bg-inherit mt-10 w-full h-40 pl-4 pt-4"
        />
        <div className="flex justify-center">
          <button className="w-36 mt-4 py-2 px-4 rounded-sm font-light  bg-gradient-to-r from-secondary from-10%  to-tertiary to-90% ..">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
