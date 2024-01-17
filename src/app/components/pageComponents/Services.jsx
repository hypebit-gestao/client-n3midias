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

const Services = () => {
  return (
    <ContentPage
      id="services"
      heightScreen
      centralized
      background="bg-black-primary"
    >
      <div className="flex flex-col items-center my-0 lg:mt-6">
        <div>
          <h1
            className={`text-center text-6xl 3xl:text-[100px] text-green-primary font-bold`}
          >
            Serviços
          </h1>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 flex flex-col md:grid md:grid-cols-3 justify-center gap-12 md:gap-20"
        >
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-solid border-blue-secondary flex justify-center items-center">
              <div className="bg-green-primary rounded-full w-[88px] h-[88px] flex items-center justify-center ">
                <MdDesignServices size={48} />
              </div>
            </div>
            <div className="my-4 w-[300px]">
              <h1
                className={`text-center text-3xl text-green-primary font-bold`}
              >
                Design Gráfico
              </h1>
              <h2 className="mt-2 text-center font-semibold text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-solid border-blue-secondary flex justify-center items-center">
              <div className="bg-green-primary rounded-full w-[88px] h-[88px] flex items-center justify-center ">
                <GrDocumentPerformance size={48} />
              </div>
            </div>
            <div className="my-4 w-[300px]">
              <h1
                className={`text-center text-3xl text-green-primary font-bold`}
              >
                Performance
              </h1>
              <h2 className="mt-2 text-center font-semibold text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-solid border-blue-secondary flex justify-center items-center">
              <div className="bg-green-primary rounded-full w-[88px] h-[88px] flex items-center justify-center ">
                <FaInvision size={48} />
              </div>
            </div>
            <div className="my-4 w-[300px]">
              <h1
                className={`text-center text-3xl text-green-primary font-bold`}
              >
                Identidade Visual
              </h1>
              <h2 className="mt-2 text-center font-semibold text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-solid border-blue-secondary flex justify-center items-center">
              <div className="bg-green-primary rounded-full w-[88px] h-[88px] flex items-center justify-center ">
                <MdOutlineDeveloperMode size={48} />
              </div>
            </div>
            <div className="my-4 w-[300px]">
              <h1
                className={`text-center text-3xl text-green-primary font-bold`}
              >
                Desenvolvimento
              </h1>
              <h2 className="mt-2 text-center font-semibold text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-solid border-blue-secondary flex justify-center items-center">
              <div className="bg-green-primary rounded-full w-[88px] h-[88px] flex items-center justify-center ">
                <SiDesignernews size={48} />
              </div>
            </div>
            <div className="my-4 w-[300px]">
              <h1
                className={`text-center text-3xl text-green-primary font-bold`}
              >
                UI/UX Designer
              </h1>
              <h2 className="mt-2 text-center font-semibold text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-solid border-blue-secondary flex justify-center items-center">
              <div className="bg-green-primary rounded-full w-[88px] h-[88px] flex items-center justify-center ">
                <FaVideo size={48} />
              </div>
            </div>
            <div className="my-4 w-[300px]">
              <h1
                className={`text-center text-3xl text-green-primary font-bold`}
              >
                Edição de Vídeo
              </h1>
              <h2 className="mt-2 text-center font-semibold text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </ContentPage>
  );
};

export default Services;
