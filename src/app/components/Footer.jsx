"use client";
import Image from "next/image";
import Star from "../../../public/images/star.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import GreyStar from "../../../public/images/grey-star.png";
import { HiLocationMarker } from "react-icons/hi";
import PurpleStar from "../../../public/images/star-purple.png";
export default function Footer() {
  return (
    <div className="bg-footer_black text-white pt-5 lg:pt-20 px-6 lg:px-24 space-y-4 lg:space-y-10 pb-10">
      <div className="pt-10 lg:flex justify-between">
        <div className=" lg:flex items-center lg:items-start lg:space-x-10">
          <Image
            src={Star}
            alt="star"
            className="hidden lg:block animate-pulse"
          />
          <div>
            <h1 className="text-lg lg:text-2xl font-bold">
              get<span className="text-secondary">linked</span>
            </h1>{" "}
            <p className="text-sm">
              Getlinked Tech Hackathon is a technology innovation program
            </p>
            <p className="text-sm">
              established by a group of organizations with the aim of showcasing
            </p>
            <p className="text-sm">
              young and talented individuals in the field of technology
            </p>
            <p className="mt-10 mb-10 lg:mb-0 lg:mt-20 text-sm">
              Terms of Use <span className="text-secondary">| </span>Privacy
              Policy
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-secondary flex">
            <span className="pr-32">Useful Links</span>
            <Image src={GreyStar} className="animate-ping" />
          </h3>
          <p className="text-sm">Overview</p>
          <p className="text-sm">Timeline</p>
          <p className="text-sm">FAQs</p>
          <p className="text-sm">Register</p>
          <div className="flex items-center mb-10 lg:mb-0">
            <p className="text-secondary pr-5">Follow us</p>
            <div className="flex items-center space-x-3">
              <AiOutlineInstagram size={28} />
              <RiTwitterXFill size={28} />
              <FaFacebookF size={28} />
              <FaLinkedinIn size={28} />
            </div>
          </div>
        </div>
        <div className="mr-32">
          <h3 className="text-secondary">Contact Us</h3>
          <p className="flex items-center space-x-2">
            <BiSolidPhoneCall />
            <span className="text-sm">+234 679 81819</span>
          </p>
          <p className="flex items-start space-x-2 mt-5">
            <HiLocationMarker />
            <div>
              <p className="text-sm">27,Alara Street</p>
              <p className="text-sm"> Yaba 100012</p>
              <p className="text-sm">Lagos State</p>
            </div>
          </p>
        </div>
      </div>
      <div className="text-center">
        <Image
          src={PurpleStar}
          alt="purple-star"
          className="mr-auto ml-auto mb-5 animate-pulse"
        />
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </div>
  );
}
