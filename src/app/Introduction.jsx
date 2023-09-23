import Image from "next/image";
import IntroImage from "../../public/images/intro_image.png";
import StarPurple from "../../public/images/star-purple.png";

export default function Introduction() {
  return (
    <div className="bg-primary text-white lg:flex pt-20 px-6 lg:px-24 justify-between items-center">
      <Image
        src={IntroImage}
        alt="Introduction"
        className="w-3/4 lg:w-1/2 mr-auto ml-auto"
      />
      <div>
        <div className="lg:flex items-center space-x-32 text-center lg:text-start">
          <div>
            <h1 className="text-[30px] lg:text-[43px] font-extrabold">
              Introduction to getlinked
            </h1>
            <h1 className="text-secondary text-[30px] lg:text-[43px] font-extrabold">
              tech Hackathon 1.0
            </h1>
          </div>
          <Image src={StarPurple} alt="star-purple" className="animate-ping" />
        </div>
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
