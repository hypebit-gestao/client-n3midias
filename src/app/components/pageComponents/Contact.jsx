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
import Link from "next/link";

const Contact = () => {
  return (
    <ContentPage id="services" centralized background="bg-black-secondary">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center  items-center p-4 lg:p-12 ">
        <div>
          <h1 className="text-3xl md:text-6xl text-white-secondary mb-2 lg:text-start text-center">
            Quer <span className="text-yellow-primary">impulsionar</span> seu
            negócio no digital?
          </h1>
          <p className="mt-6 text-gray-300 text-xl lg:text-start text-center">
            Marque uma reunião com a nossa agência especializada em marketing
            digital.
          </p>
        </div>
        <div className="mt-9 lg:mt-0  w-full flex justify-center lg:justify-end  ">
          <Link href="https://wa.me/5521997036854" target="_blank">
            <Button
              background={"bg-yellow-primary"}
              label={"Entre em Contato"}
              rounded={"rounded-lg md:rounded-xl"}
              width={"w-full lg:w-[400px]"}
              fontSize={"text-lg md:text-xl"}
            />
          </Link>
        </div>
      </div>
    </ContentPage>
  );
};

export default Contact;
