import Image from "next/image";
import PurpleStar from "../../public/images/star-purple.png";
import Cup from "../../public/images/cup.png";
import Trophy from "../../public/images/trophy.png";
export default function Rewards() {
  return (
    <div className="bg-primary text-white pt-5 lg:pt-20 px-6 pb-20 lg:px-24 justify-between items-center">
      <div className="lg:flex items-center justify-between">
        <Image src={PurpleStar} alt="purple-star" className="animate-ping" />
        <div className="lg:w-2/5 text-center lg:text-start">
          <h1 className="text-[30px] lg:text-[43px] font-extrabold">
            Prizes and
          </h1>
          <h1 className="text-[30px] lg:text-[43px] font-extrabold text-secondary">
            Rewards
          </h1>
          <p className="text-lg text-center lg:text-start relative">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
      </div>
      <div className="lg:flex mr-auto ml-auto ">
        <Image src={Cup} alt="cup" className="mr-auto ml-auto lg:w-1/2 " />
        <Image src={Trophy} alt="trophy" className="mr-auto ml-auto lg:w-1/2" />
      </div>
    </div>
  );
}
