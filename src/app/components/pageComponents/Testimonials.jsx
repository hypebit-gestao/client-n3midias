"use client";

import ContentPage from "../ContentPage";

import { motion } from "framer-motion";
import Button from "../Button";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import localFont from "next/font/local";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const testimonials = [
    {
      id: 1,
      avatar: "testimonial-img-1.png",
      name: "Adriana Carvalho",
      description: "CEO - Company",
      text: "Que experiência incrível estou tendo com a agência cuidando das minhas redes! O tráfego, o trabalho do social media, é muito bom ter a agência cuidado das minhas redes sociais, deixando minhas páginas muito mais interessantes, me deixa livre pra cuidar do que eu gosto e sei fazer.",
    },
    {
      id: 2,
      avatar: "testimonial-img-2.jpg",
      name: "Leonardo Vidile",
      description: "CEO - Company",
      text: "⁠A vida da minha empresa mudou depois que contratei a N3 Mídias para gerenciar o tráfego e o social mídia para minhas redes sociais. Além de ter ganhado mais tempo para administrar e gerenciar todo resto da empresa.",
    },
  ];

  const handleNextTestimonial = () => {
    if (currentTestimonial === testimonials.length) {
      setCurrentTestimonial(1);
    } else {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };

  const handlePrevTestimonial = () => {
    if (currentTestimonial === 1) {
      setCurrentTestimonial(testimonials.length);
    } else {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  return (
    <ContentPage id="testimonials" centralized background="bg-white">
      <div className="flex flex-row w-full">
        <div className="flex flex-col my-0 xl:py-16 w-full xl:w-[80%] ">
          <div className="flex flex-row w-full">
            <div className="border-l-8 border-green-dark h-44 hidden xl:block"></div>
            <div className="xl:ml-12 w-full ">
              <h1
                className={` text-2xl text-center xl:text-start text-black-light font-bold uppercase`}
              >
                Depoimentos
              </h1>
              <h1
                className={` text-4xl xl:text-5xl 2xl:text-6xl text-center xl:text-start mt-4 font-bold w-full text-black-primary`}
              >
                O que nossos clientes satisfeitos estão dizendo!
              </h1>
            </div>
          </div>
          {testimonials?.map(
            (item, index) =>
              item.id === currentTestimonial && (
                <motion.div
                  key={index}
                  initial={{
                    x: 300,
                  }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 xl:mt-8 flex flex-col justify-center gap-12 md:gap-20 w-full xl:w-[70%]"
                >
                  <div className="">
                    <p className="font-light text-lg">
                      <span className="text-3xl">"</span>
                      {item.text}
                      <span className="text-3xl">"</span>
                    </p>
                    <div className="flex flex-col xl:flex-row items-center mt-6">
                      <div className="flex justify-center items-center  w-20 h-20 rounded-full group-hover:bg-green-dark transition-all duration-300">
                        <Image
                          className="bg-cover rounded-full h-20 w-20"
                          alt="avatar"
                          src={`/testimonials/${item.avatar}`}
                          objectFit="cover"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="ml-4">
                        <h1 className="font-bold text-3xl text-green-dark">
                          {item.name}
                        </h1>
                        <h2 className="text-black-secondary mt-1">
                          {item.description}
                        </h2>
                      </div>
                      <div className="xl:ml-auto mt-8 lg:mt-0">
                        <div className="flex flex-row items-center">
                          <div>
                            <FaArrowLeft
                              onClick={() => handlePrevTestimonial()}
                              className="text-black-secondary cursor-pointer hover:text-green-dark transition-all duration-200 text-2xl mr-5"
                            />
                          </div>
                          <div>
                            <FaArrowRight
                              onClick={() => handleNextTestimonial()}
                              className="text-black-secondary cursor-pointer hover:text-green-dark transition-all duration-200 text-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-full hidden xl:flex  justify-center"
        >
          <Image
            className=""
            src={"/testimonial-cartoon.png"}
            alt="Imagem de uma foguete"
            width={626}
            height={626}
          />
        </motion.div>
      </div>
    </ContentPage>
  );
};

export default Testimonials;
