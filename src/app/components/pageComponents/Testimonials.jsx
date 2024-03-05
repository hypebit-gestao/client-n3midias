"use client";

import ContentPage from "../ContentPage";

import { motion } from "framer-motion";
import Button from "../Button";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(1);
  const testimonials = [
    {
      id: 1,
      avatar: "avatar-testimonial.png",
      name: "Kevin Andrew",
      description: "CEO - Company",
      text: "Sed ruia non numquam eius modi tempora incidunt ut labore uam dolore magnam aliruam quaerat voluptatem autenim ad mini quae veniam nostrum exercita ionem ullam molestiae non recusanrarav Itaque earum rerum auic.",
    },
    {
      id: 2,
      avatar: "avatar-testimonial.png",
      name: "Adsa Andrew",
      description: "CEO - Company",
      text: "Sed ruia non numquam eius modi tempora incidunt ut labore uam dolore magnam aliruam quaerat voluptatem autenim ad mini quae veniam nostrum exercita ionem ullam molestiae non recusanrarav Itaque earum rerum auic.",
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
                className={`text-2xl text-center xl:text-start text-black-light font-bold uppercase`}
              >
                Depoimentos
              </h1>
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl text-center xl:text-start mt-4 font-bold w-full text-black-primary">
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
                  className="mt-6 xl:mt-12 flex flex-col justify-center gap-12 md:gap-20 w-full xl:w-[70%]"
                >
                  <div className="">
                    <p className="font-light">
                      <span className="text-green-dark text-2xl">"</span>{" "}
                      {item.text}{" "}
                      <span className="text-green-dark text-2xl">"</span>
                    </p>
                    <div className="flex flex-col xl:flex-row items-center mt-6">
                      <div className="flex justify-center items-center rounded-full bg-black-secondary w-20 h-20 group-hover:bg-green-dark transition-all duration-300">
                        <Image
                          className="rounded-full"
                          alt="avatar"
                          src={`/${item.avatar}`}
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="ml-4">
                        <h1 className="font-bold text-3xl text-green-dark">
                          {item.name}
                        </h1>
                        <h2 className="text-black-secondar mt-1">
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
