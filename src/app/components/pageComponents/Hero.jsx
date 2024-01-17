"use client";

import ContentPage from "../ContentPage";
import { Girassol } from "next/font/google";
import { motion } from "framer-motion";
import { FaArrowDown, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import LinkNext from "next/link";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import Button from "../Button";
const girassolFont = Girassol({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <ContentPage
      id="hero"
      heightScreen
      centralized
      background="bg-black-primary"
    >
      <div className="flex flex-row justify-center lg:justify-start items-center mt-24 mb-0 md:mb-16">
        <div className="flex flex-col">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <h1
              className={`uppercase text-[50px] sm:text-[80px] md:text-[95px] lg:text-[115px] xl:text-[130px] 3xl:text-[160px] 4xl:text-[180px] leading-none text-green-primary font-bold text-center  md:text-start`}
            >
              Decole sua
            </h1>
            <h1
              className={`uppercase text-white text-[50px] sm:text-[80px] md:text-[95px] lg:text-[115px] xl:text-[130px] 4xl:text-[180px] 3xl:text-[160px] leading-none font-bold text-center  md:text-start`}
            >
              Empresa
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <h2 className="text-green-primary text-3xl mt-5 font-bold text-center  md:text-start">
              Conectando sonhos ao digital
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="mt-12"
          >
            <LinkNext href="https://wa.me/5521997036854" target="_blank">
              <Button
                background={"bg-green-primary"}
                label={"Saiba mais"}
                rounded={"rounded-lg md:rounded-xl"}
                width={"w-full md:w-[40%]"}
                fontSize={"text-lg md:text-xl"}
              />
            </LinkNext>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-0 right-2 lg:right-16 hidden z-0 sm:flex"
        >
          <Image
            className="hidden lg:block sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] 3xl:w-[700px] 3xl:h-[700px] 4xl:w-[800px] 4xl:h-[800px]"
            src={"/image-hero.png"}
            alt="Imagem de uma foguete"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
      <div className=" justify-center items-end hidden md:flex absolute left-0 bottom-0 md:bottom-8 w-full">
        <Link to="services" spy={true} smooth={true} offset={0} duration={700}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.2 }}
            className="rounded-full bg-green-primary text-black p-2 md:p-3 text-3xl cursor-pointer hover:bg-opacity-80 transition-all duration-200"
          >
            <FaArrowDown />
          </motion.div>
        </Link>
      </div>
    </ContentPage>
  );
};

export default Hero;
