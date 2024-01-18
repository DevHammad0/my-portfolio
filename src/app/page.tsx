import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <Projects/>
      <br /><br />
    </main>
  );
};

export default Home;
