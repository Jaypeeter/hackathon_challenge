import React from "react";
import Image from "next/image";
import GreyStar from "../../public/images/grey-star.png";
import PurpleStar from "../../public/images/star-purple.png";
import Tick from "../../public/images/tick.png";
import PolicyImage from "../../public/images/policy-image.png";

export default function Policy() {
  return (
    <div className="bg-primary text-white pt-5 lg:pt-20 px-6 lg:px-24 space-y-4 lg:space-y-10 lg:flex pb-20">
      <div className="text-center lg:text-start">
        <h1 className="text-[30px] lg:text-[43px] font-extrabold flex">
          Privacy Policy and{" "}
          <span>
            <Image
              src={GreyStar}
              alt="star"
              className="ml-5 w-5 lg:w-10 animate-pulse"
            />
          </span>
        </h1>
        <h1 className="text-[30px] lg:text-[43px] font-extrabold text-secondary">
          Terms
        </h1>
        <p className="text-xs pt-4 pb-4 lg:pt-10 lg:pb-12">
          Last updated on September 12, 2023
        </p>
        <p className="text-lg text-center lg:text-start">
          Below are our privacy & policy, which outline a lot of goodies.
        </p>
        <p className="text-lg text-center lg:text-start">
          it’s our aim to always take of our participant
        </p>
        <div className="mt-32 w-full lg:w-1/2 p-10 border-2 border-secondary">
          <p className="text-lg text-center lg:text-start">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h3 className="text-lg font-bold text-secondary mt-5">
            Licensing Policy
          </h3>
          <h3 className="text-md font-bold mb-5">
            Here are terms of our Standard License:
          </h3>
          <p className="flex items-start space-x-3 text-lg text-start :mt-5">
            <Image src={Tick} alt="tick" />
            <span>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </span>
          </p>
          <p className="flex items-start space-x-3 text-lg text-start mt-2 lg:mt-5">
            <Image src={Tick} alt="tick" />
            <span>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </span>
          </p>
          <div className="flex justify-center">
            <button className="w-36 mt-4 py-2 px-4 rounded-sm font-light  bg-gradient-to-r from-secondary from-10%  to-tertiary to-90% ..">
              Register
            </button>{" "}
          </div>
        </div>
      </div>
      <Image
        src={PolicyImage}
        alt="policy image"
        className="lg:w-1/3 items-center mr-auto ml-auto"
      />
    </div>
  );
}
