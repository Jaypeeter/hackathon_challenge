import Image from "next/image";
import PurpleStar from "../../public/images/star-purple.png";
import AttributeImage from "../../public/images/attributes-image.png";
export default function Attributes() {
  return (
    <div className="bg-primary lg:flex text-white pt-2 pb-6 px-6 lg:px-24 justify-between items-start">
      <div>
        <Image
          src={PurpleStar}
          alt="purple-star"
          className="ml-24 animate-pulse"
        />
        <Image
          src={AttributeImage}
          alt="attribute-image"
          className="lg:w-3/4 xl:w-full mr-auto ml-auto"
        />
      </div>
      <div className="text-white lg:w-1/2 space-y-4 text-center lg:text-start">
        <div>
          <h1 className="text-[30px] lg:text-[43px] font-extrabold ">
            Judging Criteria
          </h1>
          <h1 className="text-[30px] lg:text-[43px] font-extrabold text-secondary">
            Keys attributes
          </h1>
        </div>
        <p>
          <span className="text-secondary text-lg">
            Innovation and Creativity:
          </span>{" "}
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p>
          <span className="text-secondary text-lg">Functionality: </span>Assess
          how well the solution works. Does it perform its intended functions
          effectively and without major issues? Judges would consider the
          completeness and robustness of the solution.
        </p>
        <p>
          <span className="text-secondary text-lg">Impact and Relevance:</span>{" "}
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p>
          <span className="text-secondary text-lg">Technical Complexity:</span>{" "}
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>
        <p>
          <span className="text-secondary text-lg">
            Adherence to Hackathon Rules:
          </span>{" "}
          Judges will Ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <button className="w-36 mt-4 py-2 px-4 rounded-sm font-light  bg-gradient-to-r from-secondary from-10%  to-tertiary to-90% ..">
          Read More
        </button>
      </div>
    </div>
  );
}
