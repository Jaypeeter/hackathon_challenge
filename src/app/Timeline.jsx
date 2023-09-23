import PurpleStar from "../../public/images/star-purple.png";
import Image from "next/image";
import TimelineMiddleOne from "../../public/images/timeline-middle-1.png";
import TimelineMiddleTwo from "../../public/images/timeline-middle-2.png";
import TimelineMiddleThree from "../../public/images/timeline-middle-3.png";
import TimelineMiddleFour from "../../public/images/timeline-middle-4.png";
import TimelineMiddleFive from "../../public/images/timeline-middle-5.png";
import TimelineMiddleSix from "../../public/images/timeline-middle-6.png";

export default function Timeline() {
  return (
    <div className="bg-primary text-white  pt-6 pb-24 px-6 lg:px-24  text-center box-border w-full space-y-2 lg:space-y-24 xl:space-y-0">
      <div className="flex flex-col items-center">
        <h1 className="text-[30px] lg:text-[43px] font-extrabold text-center">
          Timeline
        </h1>
        <p className="text-lg text-center lg:w-1/3">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <Image
        src={PurpleStar}
        alt="purple-star"
        className="ml-64 animate-pulse"
      />
      <div className="hidden lg:block">
        <div className="pt-6 flex lg:justify-center relative">
          <Image src={TimelineMiddleOne} alt="Timeline-middle-one" />

          <div className="lg:absolute lg:left-[-20px] xl:left-0 lg:top-16 xl:top-36  lg:text-2xl font-extrabold text-start lg:text-end">
            <h1 className=" text-secondary text-xl xl:text-[30px] lg:mr-24 xl:mr-0">
              Hackathon Announcement
            </h1>
            <p className="w-[80%] xl:w-[550px] text-base font-normal ">
              The getlinked tech hackathon 1.0 is formally announced
            </p>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              to the general public and teams begin to get ready to register
            </p>
          </div>
          <div className="absolute top-60 right-24 lg:right-40 xl:right-64 lg:top-32 xl:top-48  lg:text-2xl font-extrabold text-start">
            <h1 className="top-48 text-secondary text-xl xl:text-[30px]">
              November 18, 2023
            </h1>
          </div>
        </div>
        <div className="pt-6 flex lg:justify-center relative">
          <Image src={TimelineMiddleTwo} alt="Timeline-middle-two" />

          <div className="lg:absolute lg:left-44 xl:left-64 top-32  lg:text-2xl font-extrabold text-end">
            <h1 className=" text-secondary text-xl xl:text-[30px]">
              December 18,2023
            </h1>
          </div>
          <div className="absolute lg:right-[70px] xl:right-28 lg:top-12 xl:top-20  lg:text-2xl font-extrabold text-start w-1/3">
            <h1 className=" text-secondary text-xl xl:text-[30px]">
              Team Registration Begins
            </h1>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              Interested teams can now show their interest in the{" "}
            </p>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              getlinked tech hackathon 1.0 2023 by proceeding to register{" "}
            </p>
          </div>
        </div>
        <div className="pt-6 flex justify-center relative">
          <Image src={TimelineMiddleThree} alt="Timeline-middle-three" />

          <div className="lg:absolute lg:left-16 xl:left-0 top-28  lg:text-2xl font-extrabold text-end">
            <h1 className=" text-secondary text-xl xl:text-[30px] lg:mr-[75px] xl:mr-0">
              Teams Registration ends{" "}
            </h1>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              Interested Participants are no longer allowed to{" "}
            </p>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              register{" "}
            </p>
          </div>
          <div className="absolute lg:right-[160px] xl:right-64 lg:top-24 xl:top-24  lg:text-2xl font-extrabold text-start">
            <h1 className=" text-secondary text-xl xl:text-[30px]">
              December 23, 2023
            </h1>
          </div>
        </div>
        <div className="pt-6 flex justify-center relative">
          <Image src={TimelineMiddleFour} alt="Timeline-middle-four" />

          <div className="lg:absolute lg:left-40 xl:left-60 top-32  lg:text-2xl font-extrabold text-end">
            <h1 className=" text-secondary text-xl xl:text-[30px]">
              December 30, 2023
            </h1>
          </div>
          <div className="absolute lg:right-[-95px] xl:right-2 top-16  lg:text-2xl font-extrabold text-start">
            <h1 className=" text-secondary text-xl xl:text-[30px] w-[80%] xl:w-[550px]">
              Announcement of the accepted teams and ideas{" "}
            </h1>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              The getlinked tech hackathon 1.0 is formally announced
            </p>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              to the general public and teams begin to get ready to register
            </p>
          </div>
        </div>
        <div className="pt-6 flex justify-center relative">
          <Image src={TimelineMiddleFive} alt="Timeline-middle-five" />

          <div className="lg:absolute lg:left-6 xl:left-0 top-20  lg:text-2xl font-extrabold text-end">
            <h1 className=" text-secondary text-xl xl:text-[30px] w-[80%] xl:w-[550px]">
              Getlinked Hackathon 1.0 Offically Begins{" "}
            </h1>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              Accepted teams can now proceed to build their
            </p>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              ground breaking skill driven solutions{" "}
            </p>
          </div>
          <div className="absolute lg:right-[165px] xl:right-64 top-32  lg:text-2xl font-extrabold text-end">
            <h1 className=" text-secondary text-xl xl:text-[30px]">
              December 30, 2023
            </h1>
          </div>
        </div>
        <div className="pt-6 flex justify-center relative">
          <Image src={TimelineMiddleSix} alt="Timeline-middle-six" />

          <div className="lg:absolute lg:left-44 xl:left-[270px] top-32  lg:text-2xl font-extrabold text-end">
            <h1 className=" text-secondary text-xl xl:text-[30px]">
              Febuary 1st, 2024
            </h1>
          </div>
          <div className="absolute lg:right-[-10px] xl:right-3 top-24  lg:text-2xl font-extrabold text-start">
            <h1 className=" text-secondary text-xl xl:text-[30px]">Demo Day</h1>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              Accepted teams can now proceed to build their
            </p>
            <p className="w-[80%] xl:w-[550px] text-base font-normal">
              ground breaking skill driven solutions{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="block lg:hidden space-y-8">
        <div className="flex items-center justify-between space-x-2">
          <Image src={TimelineMiddleOne} className="h-36" />
          <div className="text-start">
            <h1 className="text-secondary font-bold">Hackathon Announcement</h1>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
            <h1 className="font-bold text-secondary">November 18, 2023</h1>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Image src={TimelineMiddleTwo} className="h-28" />
          <div className="text-start">
            <h1 className="text-secondary font-bold">
              Teams Registration begins
            </h1>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
            <h1 className="font-bold text-secondary">November 28, 2023</h1>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Image src={TimelineMiddleThree} className="h-28" />
          <div className="text-start">
            <h1 className="text-secondary font-bold">
              Teams Registration ends{" "}
            </h1>
            <p>Interested Participants are no longer Allowed to register</p>
            <h1 className="font-bold text-secondary">December 13,2023</h1>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Image src={TimelineMiddleFour} className="h-28" />
          <div className="text-start">
            <h1 className="text-secondary font-bold">
              Announcement of the accepted teams and ideas{" "}
            </h1>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
            <h1 className="font-bold text-secondary">December 28, 2023</h1>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Image src={TimelineMiddleFive} className="h-28" />
          <div className="text-start">
            <h1 className="text-secondary font-bold">
              Getlinked Hackathon 1.0 Offically Begins{" "}
            </h1>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
            <h1 className="font-bold text-secondary">December 31, 2023</h1>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Image src={TimelineMiddleTwo} className="h-28" />
          <div className="text-start">
            <h1 className="text-secondary font-bold">Demo Day </h1>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
            <h1 className="font-bold text-secondary">January 28, 2024</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
