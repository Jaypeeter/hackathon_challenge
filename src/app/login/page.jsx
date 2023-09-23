import Navbar from "../components/Navbar";
import LoginImage from "../../../public/images/login_image.png";
import Image from "next/image";
import { BiCheckbox } from "react-icons/bi";

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="bg-primary text-white pt-5 lg:pt-20 px-6 lg:px-24 space-y-4 lg:space-y-10 pb-10">
        <div className="pt-14 lg:lg:flex justify-between">
          <Image src={LoginImage} alt="login" />
          <div className=" bg-purple-950 pl-10 pr-20 pt-10 pb-10 text-start w-full">
            <h1 className="text-secondary text-[30px] lg:text-[43px] font-extrabold mb-4">
              Register
            </h1>
            <p className="text-xs mb-4">
              Be a part of this movement ......🚶‍♂️..🚶‍♀️....
            </p>
            <h2 className="text-xl font-bold">CREATE YOUR ACCOUNT</h2>
            <div className="lg:flex justify-between space-x-0">
              <div className="space-y-2">
                <label for="teams">Team's name</label>
                <input
                  placeholder="Enter the name of your group"
                  type="text"
                  id="teams"
                  className="border-2 border-white bg-inherit mt-10 h-16 pl-4"
                />
              </div>
              <div className="space-y-2">
                <label for="phone">Phone</label>
                <input
                  placeholder="Enter the name of your phone number"
                  type="text"
                  id="phone"
                  className="border-2 border-white bg-inherit mt-10 h-16 pl-4"
                />
              </div>
            </div>
            <div className="lg:flex justify-between space-x-14">
              <div className="space-y-2">
                <label for="email">Email</label>
                <input
                  placeholder="Enter your email address"
                  type="text"
                  id="email"
                  className="border-2 border-white bg-inherit mt-10 h-16 pl-4"
                />
              </div>
              <div className="space-y-2">
                <label for="project">Project Topic</label>
                <input
                  placeholder="What is your group project"
                  type="text"
                  id="project"
                  className="border-2 border-white bg-inherit mt-10 h-16 pl-4"
                />
              </div>
            </div>{" "}
            <div className="lg:flex justify-between space-x-14">
              <div className="space-y-2">
                <label for="category">Category</label>
                <input
                  placeholder="select"
                  type="text"
                  id="category"
                  className="border-2 border-white bg-inherit mt-10 h-16 pl-4"
                />
              </div>
              <div className="space-y-2">
                <label for="group">Group Size</label>
                <input
                  placeholder="select"
                  type="text"
                  id="group"
                  className="border-2 border-white bg-inherit mt-10 h-16 pl-4"
                />
              </div>
            </div>{" "}
            <p className="text-xs mt-2 text-pink-500">
              Please review your registration details before submitting
            </p>
            <div className="lg:flex mt-2 items-center">
              <BiCheckbox />
              <span className="text-xs">
                I agreed with the event terms and conditions and privacy policy
              </span>
            </div>
            <button className="w-full mt-4 py-2 px-4 rounded-sm font-light  bg-gradient-to-r from-secondary from-10%  to-tertiary to-90% ..">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
