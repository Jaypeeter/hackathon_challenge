import CurvedUnderline from "../../public/images/curved-underline.png";
import Star from "../../public/images/star.png";
import Image from "next/image";
import Lightbulb from "../../public/images/light-bulb.png";
import Spark from "../../public/images/spark.png";
import VRImage from "../../public/images/vr-image-3.png";
import { Unica_One } from "next/font/google";
const uo = Unica_One({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="px-6 lg:px-24 pt-32 bg-hero relative bg-primary h-full">
      <div className="flex justify-center lg:justify-end text-2xl">
        <h2 className="flex text-sm lg:text-xl">
          Igniting a Revolution in
          <span className="ml-2">
            HR innovation
            <Image
              src={CurvedUnderline}
              className="w-24 lg:w-36"
              alt="underline"
            />
          </span>
        </h2>
      </div>
      <div>
        <Image src={Star} className="animate-pulse w-2 lg:w-6" />
      </div>
      <div className="lg:flex text-center lg:text-start">
        <div>
          <h1 className="flex lg:ml-0 items-end mt-10 text-[35px] lg:text-[60px] xl:text-[70px] font-extrabold text-white justify-center lg:justify-start">
            getlinked{" "}
            <span>
              <div className="pl-2 lg:pl-5">
                <Image
                  src={Lightbulb}
                  alt="light-bule"
                  className="ml-20 lg:ml-32 w-4 lg:w-12"
                />
                <h1>Tech</h1>{" "}
              </div>
            </span>
          </h1>
          <h1 className="font-extrabold flex text-[35px] lg:text-[60px] xl:text-[70px] justify-center lg:justify-start">
            Hackathon <span className="text-[#D434FE] pl-4">1.0</span>
            <Image src={Spark} alt="spark-chain" className="w-20 lg:w-32" />
          </h1>
          <p className="lg:text-xl lg:w-[400px] xl:w-[600px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button className="w-36 mt-4 py-2 px-4 rounded-sm font-light  bg-gradient-to-r from-secondary from-10%  to-tertiary to-90% ..">
            Register
          </button>
          <div className="flex mt-3 space-x-5 justify-center lg:justify-start">
            <div className="flex items-center">
              <h1 className={uo.className}>
                <span className="text-[50px]">01</span>
              </h1>
              <p className="mt-5">H</p>
            </div>
            <div className="flex items-center">
              <h1 className={uo.className}>
                <span className="text-[50px]">01</span>
              </h1>
              <p className="mt-5">M</p>
            </div>{" "}
            <div className="flex items-center">
              <h1 className={uo.className}>
                <span className="text-[50px]">01</span>
              </h1>
              <p className="mt-5">S</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={VRImage}
            alt="vr-chain"
            className="w-[80vw] lg:w-[50vw] xl:mt-[-80px]"
          />
        </div>
      </div>
    </div>
  );
}
