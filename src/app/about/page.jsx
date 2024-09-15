import About from "../components/About/AboutPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Wheel from "../components/Wheel";
import AboutCake from "../components/AboutCake";
export default function AboutPage() {
  return (
    <main className="h-full w-full bg-[#F5EDED]  ">
      <Navbar />
      <About />
      <Wheel />
      <AboutCake />
      <Footer />
    </main>
  );
}
