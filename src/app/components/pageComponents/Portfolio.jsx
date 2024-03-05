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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useState } from "react";

const Portfolio = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className={
          "p-1 z-[100] rounded-full absolute right-3 top-1/2 transform -translate-y-1/2 bg-white"
        }
      >
        <MdOutlineKeyboardArrowRight className="text-2xl text-black" />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className={
          "p-1 z-[100] rounded-full absolute left-3 top-1/2 transform -translate-y-1/2 bg-white"
        }
      >
        <MdOutlineKeyboardArrowLeft className="text-2xl text-black" />
      </button>
    );
  }

  const [sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => setSliderIndex(index),
  };

  return (
    <ContentPage id="portfolio" heightScreen background="bg-white-secondary">
      <div className="flex flex-col my-0 ">
        <div className="flex flex-row ">
          <div className="border-l-8 border-green-dark h-44 hidden xl:block"></div>
          <div className="xl:ml-12 w-full">
            <h1
              className={` text-2xl text-center xl:text-start text-black-light font-bold uppercase`}
            >
              Portfólio
            </h1>
            <h1 className="text-4xl xl:text-6xl text-center xl:text-start mt-4 font-bold w-full xl:max-w-[80%] text-black-primary">
              Alguns de nossos trabalhos
            </h1>
          </div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 xl:mt-12 flex flex-wrap gap-24 flex-row xl:grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 justify-center items-center xl:items-start  "
        >
          <div className="col-span-1 w-[400px]">
            <Slider {...settings}>
              <div className="rounded-lg">
                <Image
                  className="rounded-lg"
                  src="/portfolio/chaveiro/img_1.jpg"
                  width={400}
                  height={400}
                />
              </div>
              <div className="rounded-lg">
                <Image
                  className="rounded-lg"
                  src="/portfolio/chaveiro/img_2.jpg"
                  width={400}
                  height={400}
                />
              </div>
              <div className="rounded-lg">
                <Image
                  className="rounded-lg"
                  src="/portfolio/chaveiro/img_3.jpg"
                  width={400}
                  height={400}
                />
              </div>
              <div className="rounded-lg">
                <Image
                  className="rounded-lg"
                  src="/portfolio/chaveiro/img_4.jpg"
                  width={400}
                  height={400}
                />
              </div>
              <div className="rounded-lg">
                <Image
                  className="rounded-lg"
                  src="/portfolio/chaveiro/img_5.jpg"
                  width={400}
                  height={400}
                />
              </div>
              <div className="rounded-lg">
                <Image
                  className="rounded-lg"
                  src="/portfolio/chaveiro/img_6.jpg"
                  width={400}
                  height={400}
                />
              </div>
              <div className="rounded-lg">
                <Image
                  className="rounded-lg"
                  src="/portfolio/chaveiro/img_7.jpg"
                  width={400}
                  height={400}
                />
              </div>
              <div className="rounded-lg">
                <Image
                  className="rounded-lg"
                  src="/portfolio/chaveiro/img_8.jpg"
                  width={400}
                  height={400}
                />
              </div>
            </Slider>
          </div>

          <div className="col-span-1 w-[400px]">
            <Slider {...settings}>
              <div className=" w-full h-[400px]">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src="/portfolio/descartaveis/img_1.png"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src="/portfolio/descartaveis/img_2.png"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src="/portfolio/descartaveis/img_3.png"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src="/portfolio/descartaveis/img_4.png"
                  width={400}
                  height={400}
                />
              </div>
            </Slider>
          </div>

          <div className="col-span-1 w-[400px]">
            <Slider {...settings}>
              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_1.png"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_2.png"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_3.png"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_4.jpg"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_5.png"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_6.png"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_7.png"
                  width={400}
                  height={400}
                />
              </div>

              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_8.png"
                  width={400}
                  height={400}
                />
              </div>
              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_9.png"
                  width={400}
                  height={400}
                />
              </div>
              <div className=" w-full h-[400px]">
                <Image
                  className="rounded-lg"
                  src="/portfolio/salao/img_10.png"
                  width={400}
                  height={400}
                />
              </div>
            </Slider>
          </div>
        </motion.div>
      </div>
    </ContentPage>
  );
};

export default Portfolio;
