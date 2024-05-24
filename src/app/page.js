import Aboutme from "@/components/aboutme";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Homepage from "@/components/homepage";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="h-full w-full  ">
      <Header home="#home" about="#about" project="#projects" />
      <Homepage />
      <Aboutme />
      <Projects />
      <Footer />
    </div>
  );
}
