"use client";

import { Girassol } from "next/font/google";
import ContentPage from "../ContentPage";
import Image from "next/image";
import { MdDesignServices } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaInvision } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiDesignernews } from "react-icons/si";
import { FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <ContentPage
      id="portfolio"
      heightScreen
      centralized
      background="bg-black-primary"
    >
      <div className="my-0 lg:mt-6">
        <div>
          <h1
            className={`text-center text-6xl 3xl:text-[100px] text-green-primary font-bold`}
          >
            Portfólio
          </h1>
        </div>
        <div className="flex flex-col  lg:flex-row mt-12">
          <div className="relative border-8 border-solid border-white rounded-xl p-5 w-full h-[500px] lg:w-[500px]  bg-cover object-cover">
            <Image
              className="absolute bg-cover object-cover"
              alt="image"
              src={"/portfolio01.jpg"}
              fill
            />
          </div>
          <div className="relative ml-0 lg:ml-12 mt-8 lg:mt-24 border-8 border-solid border-white rounded-xl p-5w-full h-[500px] lg:w-[500px] bg-cover object-cover">
            <Image
              className="absolute bg-cover object-cover"
              alt="image"
              src={"/portfolio02.jpg"}
              fill
            />
          </div>
          <div className="relative ml-0 lg:ml-12 mt-8 lg:mt-48 border-8 border-solid border-white rounded-xl p-5 w-full h-[500px] lg:w-[500px]  bg-cover object-cover">
            <Image
              className="absolute bg-cover object-cover"
              alt="image"
              src={"/portfolio03.jpg"}
              fill
            />
          </div>
        </div>
      </div>
    </ContentPage>
  );
};

export default Portfolio;
