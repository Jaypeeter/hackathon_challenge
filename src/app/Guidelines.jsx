import GuidelineImage from "../../public/images/guideline-image.png";
import Image from "next/image";
export default function Guidelines() {
  return (
    <div className="bg-primary text-white lg:flex flex-row-reverse pt-6 pb-6 px-6 lg:px-24 justify-between items-center">
      <Image
        src={GuidelineImage}
        alt="guideline-line"
        className="lg:w-3/4 mr-auto ml-auto"
      />
      <div className="lg:w-1/2">
        <h1 className="text-[30px] lg:text-[43px] font-extrabold text-center lg:text-start">
          Rules and
        </h1>
        <h1 className="text-secondary text-[30px] lg:text-[43px] font-extrabold text-center lg:text-start">
          Guidelines
        </h1>
        <p className="text-lg text-center lg:text-start">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
}
