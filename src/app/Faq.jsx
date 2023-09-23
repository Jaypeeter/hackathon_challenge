import Image from "next/image"
import PurpleStar from "../../public/images/star-purple.png";
import QuestionMark from "../../public/images/question-mark.png";
import QuestionImage from "../../public/images/question-image.png";
export default function () {
  return (
    <div className="bg-primary text-white lg:flex pt-20 px-6 lg:px-24 justify-between items-center">
        <div className="lg:w-1/2">
            <Image src={PurpleStar} alt="purple" className="animate-pulse"/>
            <h1 className="text-[30px] lg:text-[43px] font-extrabold text-center lg:text-start">Frequently Ask</h1>
            <h1 className="text-secondary text-[30px] lg:text-[43px] font-extrabold text-center lg:text-start">Questions</h1>
            <p className="pt-2 text-lg w-full lg:w-3/4 text-center lg:text-start">We got answers to the questions that you might
            want to ask about getlinked Hackathon 1.0</p>

            <div className="pt-12">
                <div className=" border-b-2 border-secondary pb-4 text-lg flex justify-between mb-6">
                <p >Can I work on a project I started before the hackathon?</p>
                <p className="text-secondary text-2xl">+</p>


                </div>
                <div className=" border-b-2 border-secondary pb-4 text-lg flex justify-between mb-6">
                <p >What happens if I need help during the hackathon?</p>
                <p className="text-secondary text-2xl">+</p>


                </div> <div className=" border-b-2 border-secondary pb-4 text-lg flex justify-between mb-6">
                <p >What happens if I don't have an idea for a project?</p>
                <p className="text-secondary text-2xl">+</p>


                </div> <div className=" border-b-2 border-secondary pb-4 text-lg flex justify-between mb-6">
                <p >Can I join a team or do I have to come with one?</p>
                <p className="text-secondary text-2xl">+</p>


                </div> <div className=" border-b-2 border-secondary pb-4 text-lg flex justify-between mb-6">
                <p >What happens after the hackathon ends?</p>
                <p className="text-secondary text-2xl">+</p>


                </div>
                
                

            </div>


        </div>
        <div className="flex flex-col items-center">
            <Image src={QuestionMark} alt="question-mark" className="animate-pulse"/>
            <Image src={QuestionImage} alt="question-image"/>
        </div>

    </div>
  )
}
