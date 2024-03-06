"use client";

import ContentPage from "../ContentPage";

import { motion } from "framer-motion";
import Button from "../Button";
import useServiceModal from "../../utils/hooks/useServiceModal";
import localFont from "next/font/local";

const Faq = () => {
  const serviceModal = useServiceModal();
  return (
    <ContentPage id="services" background="bg-white-secondary">
      <div className="flex flex-col ">
        <div className="flex flex-row ">
          <div className="border-l-8 border-green-dark h-44 hidden xl:block"></div>
          <div className="xl:ml-12 w-full ">
            <h1
              className={` text-2xl text-center xl:text-start text-black-light font-bold uppercase`}
            >
              Perguntas Frequentes
            </h1>
            <h1
              className={` text-4xl xl:text-6xl text-center xl:text-start mt-4 font-bold w-full xl:max-w-[80%] text-black-primary`}
            >
              Tire suas dúvidas com nosso FAQ
            </h1>
          </div>
        </div>
      </div>
    </ContentPage>
  );
};

export default Faq;
