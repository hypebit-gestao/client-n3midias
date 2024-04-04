"use client";

import ContentPage from "../ContentPage";
import { Girassol } from "next/font/google";
import { motion } from "framer-motion";
import { FaArrowDown, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import LinkNext from "next/link";

import Button from "../Button";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import localFont from "next/font/local";

const Hero = () => {
  return (
    <ContentPage id="hero" heightScreen centralized background="bg-white">
      <div className="flex flex-row justify-center xl:justify-start items-center">
        <div className="flex flex-col w-full xl:w-1/2 relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <h1
              className={` uppercase text-[60px] lg:text-[90px] leading-none text-green-dark font-bold text-center xl:text-start`}
            >
              Decole sua
            </h1>
            <h1
              className={` uppercase text-green-dark text-[60px] lg:text-[90px] leading-none font-bold text-center xl:text-start`}
            >
              Empresa
            </h1>
          </motion.div>
          <motion.div
            className="w-full md:w-[90%]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <h2 className="text-green-light text-3xl mt-5 font-bold text-center  xl:text-start">
              <span className="text-green-dark">Transformando</span> sonhos em
              realidade digital
              {/* <span className="text-green-dark"> desde 2023.</span> */}
            </h2>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="mt-6 md:mt-12 "
          >
            <LinkNext href="https://wa.me/5521997036854" target="_blank">
              <Button
                background={"bg-green-dark"}
                label={"Trabalhe conosco"}
                rounded={"rounded-lg md:rounded-xl"}
                width={"w-full xl:w-[50%] "}
                fontSize={"text-lg md:text-xl"}
                color={"text-white"}
              />
            </LinkNext>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="mt-12 flex flex-row items-center justify-center xl:justify-start w-full "
          >
            <div className="xl:absolute xl:-left-6 xl:mt-12 flex items-center  z-0">
              <Image
                className="z-0"
                src={"/element2_black.png"}
                alt="Elemento"
                width={80}
                height={80}
              />
              <ul className="flex flex-row items-center">
                <li className="bg-green-dark rounded-full p-3 mr-5 cursor-pointer hover:bg-opacity-80 text-black-primary    transition-all duration-200">
                  <LinkNext
                    href="https://www.instagram.com/n3midias/"
                    target="_blank"
                  >
                    <RiWhatsappFill className="text-3xl text-white" />
                  </LinkNext>
                </li>
                <li className="bg-green-dark rounded-full p-3 mr-5 cursor-pointer hover:bg-opacity-80 text-black-primary    transition-all duration-200">
                  <LinkNext
                    href="https://www.instagram.com/n3midias/"
                    target="_blank"
                  >
                    <AiFillInstagram className="text-3xl text-white" />
                  </LinkNext>
                </li>
                <li className="bg-green-dark rounded-full p-3  cursor-pointer hover:bg-opacity-80 text-black-primary    transition-all duration-200">
                  <LinkNext
                    href="https://www.instagram.com/n3midias/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-3xl text-white" />
                  </LinkNext>
                </li>
              </ul>
              <Image
                className=""
                src={"/element2_black.png"}
                alt="Elemento"
                width={80}
                height={80}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className=" h-full hidden xl:block z-0 xl:w-1/2 relative "
        >
          <Image
            className="object-cover h-[881px] w-[855px]"
            src={"/img_hero.png"}
            alt="Imagem ilustrativa"
            width={855}
            height={881}
          />
        </motion.div>
      </div>
      {/* <div className=" justify-center items-end hidden md:flex absolute left-0 bottom-0 md:bottom-8 w-full">
        <Link to="services" spy={true} smooth={true} offset={0} duration={700}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.2 }}
            className="rounded-full bg-yellow-primary text-black p-2 md:p-3 text-3xl cursor-pointer hover:bg-opacity-80 transition-all duration-200"
          >
            <FaArrowDown />
          </motion.div>
        </Link>
      </div> */}
    </ContentPage>
  );
};

export default Hero;
