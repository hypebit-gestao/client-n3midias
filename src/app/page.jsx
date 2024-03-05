import { FaWhatsapp } from "react-icons/fa6";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Hero from "./components/pageComponents/Hero";
import Portfolio from "./components/pageComponents/Portfolio";
import Services from "./components/pageComponents/Services";
import Testimonials from "./components/pageComponents/Testimonials";
import Pitch from "./components/pageComponents/Pitch";
import Contact from "./components/pageComponents/Contact";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Header />
        <Hero />
        <Services />
        <Pitch />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        {/* <div className="hidden lg:block fixed bottom-12 right-12">
          <motion.div animate={{ scale: [1, 1.1, 1] }}>
            <RiWhatsappFill className="text-[70px] text-green-500" />
          </motion.div>
        </div> */}
      </main>
    </>
  );
}
