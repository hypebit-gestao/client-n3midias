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
import Button from "../Button";

const Contact = () => {
  return (
    <ContentPage id="services" centralized background="bg-black-secondary">
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-12">
        <div>
          <h1 className="text-3xl md:text-5xl text-white mb-2">
            Venha <span className="text-green-primary">decolar</span> seu
            negócio e faça já seu{" "}
            <span className="text-green-primary">orçamento</span>
          </h1>
        </div>
        <div className="mt-5 lg:mt-0 w-full">
          <Button
            background={"bg-green-primary"}
            label={"Entre em Contato"}
            rounded={"rounded-lg md:rounded-xl"}
            width={"w-full lg:w-[400px]"}
            fontSize={"text-lg md:text-xl"}
          />
        </div>
      </div>
    </ContentPage>
  );
};

export default Contact;
