import Image from "next/image";
import PartnersImage from "../../public/images/partners.png";
export default function Partners() {
  return (
    <div className="bg-primary text-white pt-5 lg:pt-20 px-6 lg:px-24 space-y-4 lg:space-y-10">
      <div className="text-center">
        <h1 className="text-[30px] lg:text-[43px] font-extrabold">
          Partners and Sponsors
        </h1>
        <p className="text-lg lg:w-2/4 mr-auto ml-auto">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <Image
        src={PartnersImage}
        alt="partners"
        className="mr-auto ml-auto w-full"
      />
    </div>
  );
}
