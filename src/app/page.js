import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Guidelines from "./Guidelines";
import Attributes from "./Attributes";
import Faq from "./Faq";
import Timeline from "./Timeline";
import Rewards from "./Rewards";
import Partners from "./Partners";
import Policy from "./Policy";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Introduction />
      <Guidelines />
      <Attributes />
      <Faq />
      <Timeline />
      <Rewards />
      <Partners />
      <Policy />
      <Footer />
    </div>
  );
}
