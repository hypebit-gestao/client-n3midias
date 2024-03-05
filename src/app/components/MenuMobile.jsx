import {
  RiWhatsappFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import LinkNext from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import Image from "next/image";
import useMenu from "../utils/hooks/useMenu";

const MenuMobile = () => {
  const menu = useMenu();

  return (
    <div className="z-50 absolute top-0 left-0  w-full min-h-screen bg-black-secondary transition-all duration-700 animate-in slide-in-from-left flex flex-col items-center justify-center text-center">
      <div className="absolute top-4 right-4 text-black">
        <AiOutlineClose
          onClick={() => menu.onClose()}
          className="text-green-primary text-5xl cursor-pointer"
        />
      </div>
      <ul className="flex flex-col  w-full py-12 mb-6">
        <Link
          onClick={() => menu.onClose()}
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          <li className="text-white  mb-4 text-3xl  hover:text-yellow-primary transition-all duration-500 cursor-pointer  py-3">
            Home
          </li>
        </Link>
        <Link
          onClick={() => menu.onClose()}
          to="services"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          <li className="text-white  mb-4 text-3xl  hover:text-yellow-primary transition-all duration-500 cursor-pointer  py-3">
            Soluções
          </li>
        </Link>
        <Link
          onClick={() => menu.onClose()}
          to="portfolio"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          <li className="text-white mb-4 text-3xl  hover:text-yellow-primary transition-all duration-500 cursor-pointer  py-3">
            Portfólio
          </li>
        </Link>
        <Link
          onClick={() => menu.onClose()}
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          <li className="text-white text-3xl  hover:text-yellow-primary transition-all duration-500 cursor-pointer  py-3">
            Contato
          </li>
        </Link>
      </ul>

      <div className="absolute top-3 left-7">
        <Image alt="logo" src="/logo.png" width={60} height={10} />
      </div>

      <div className="">
        <div className="flex flex-col">
          <h1 className="text-white-secondary  text-2xl mb-12 hover:text-yellow-primary transition-all duration-500 cursor-pointer">
            <a href="mailto:hypebitcontato@gmail.com.br">n3midias@gmail.com</a>
          </h1>
          <div className="flex justify-center">
            <LinkNext
              href="https://www.instagram.com/n3midias/"
              target="_blank"
            >
              <div className="bg-white-secondary rounded-full p-2 mr-5 cursor-pointer hover:bg-opacity-80 hover:text-white-secondary  transition-all duration-500">
                <RiInstagramFill className="text-3xl text-green-dark" />
              </div>
            </LinkNext>
            <LinkNext href="https://wa.me/5521997036854" target="_blank">
              <div className="bg-white-secondary rounded-full p-2 mr-5 cursor-pointer hover:bg-opacity-80  hover:text-white-secondary  transition-all duration-500">
                <RiWhatsappFill className="text-3xl text-green-dark" />
              </div>
            </LinkNext>
            <div className="bg-white-secondary rounded-full p-2 mr-5 cursor-pointer hover:bg-opacity-80  hover:text-white-secondary  transition-all duration-500">
              <RiLinkedinFill className="text-3xl text-green-dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
