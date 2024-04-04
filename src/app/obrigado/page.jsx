"use client";

import React from "react";
import ContentPage from "../components/ContentPage";
import Image from "next/image";
import Button from "../components/Button";

import LinkNext from "next/link";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Thanks = () => {
  const router = useRouter();
  return (
    <ContentPage heightScreen background={"bg-white-secondary"}>
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <Image src="/logo.png" alt="Logo N3Midias" width={80} height={80} />
          <div className="w-[70%]">
            <h1 className="text-4xl font-bold text-green-dark text-center">
              Obrigado por se conectar com a N3 Mídias!
            </h1>
            <hr className="my-4 border border-green-dark rounded-3xl" />
            <p className="text-center text-green-dark text-lg mt-4">
              <span className="font-bold text-xl">Fantástico!</span> Seu
              interesse em saber mais sobre como podemos impulsionar sua
              presença digital nos deixa animados! Agradecemos por se conectar
              conosco para mais informações.
            </p>

            <p className="text-center text-green-dark text-lg mt-2">
              Fique de olho na sua caixa de entrada, pois entraremos em contato
              em breve para discutir como podemos trabalhar juntos para alcançar
              seus objetivos digitais. Se surgir alguma dúvida antes disso, não
              hesite em nos contatar. Estamos aqui para ajudar em cada passo do
              caminho!
            </p>
            <div className="mt-6 flex justify-center w-full">
              <Button
                onClick={() => router.push("/")}
                background={"bg-green-dark"}
                label={"Voltar ao site"}
                rounded={"rounded-lg md:rounded-xl"}
                width={"w-full  "}
                fontSize={"text-lg md:text-xl"}
                color={"text-white"}
                outline
              />
            </div>
            <div className="flex justify-center mt-12">
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
            </div>
          </div>
        </div>
      </div>
    </ContentPage>
  );
};

export default Thanks;
