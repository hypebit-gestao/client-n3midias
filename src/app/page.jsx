import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/pageComponents/Contact";
import Hero from "./components/pageComponents/Hero";
import Portfolio from "./components/pageComponents/Portfolio";
import Services from "./components/pageComponents/Services";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
