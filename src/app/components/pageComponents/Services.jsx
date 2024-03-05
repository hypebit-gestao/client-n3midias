"use client";

import ContentPage from "../ContentPage";

import { motion } from "framer-motion";
import Button from "../Button";
import useServiceModal from "../../utils/hooks/useServiceModal";
import localFont from "next/font/local";

const Services = () => {
  const serviceModal = useServiceModal();
  return (
    <ContentPage id="services" heightScreen background="bg-white-secondary">
      <div className="flex flex-col ">
        <div className="flex flex-row ">
          <div className="border-l-8 border-green-dark h-44 hidden xl:block"></div>
          <div className="xl:ml-12 w-full ">
            <h1
              className={` text-2xl text-center xl:text-start text-black-light font-bold uppercase`}
            >
              Nossos serviços
            </h1>
            <h1
              className={` text-4xl xl:text-6xl text-center xl:text-start mt-4 font-bold w-full xl:max-w-[80%] text-black-primary`}
            >
              O que podemos oferecer a você
            </h1>
          </div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 xl:mt-20 flex flex-col xl:grid xl:grid-cols-3 justify-center gap-12 md:gap-20"
        >
          <div className="col-span-1 flex flex-col justify-center items-center bg-white p-6 group   hover:border-2  hover:border-black transition-colors duration-300 rounded-lg shadow-md ">
            <div className="flex justify-center items-center rounded-full bg-black-secondary w-24 h-24 group-hover:bg-green-dark transition-all duration-300">
              <h1 className="text-xl text-white">01</h1>
            </div>
            <div className="flex flex-col items-center mt-4 w-[80%]">
              <h1 className={` font-bold text-2xl text-center`}>
                Tráfego Pago
              </h1>
              <ul className="mt-5 w-fit ">
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Estratégia
                  Publicitária
                </li>
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Otimização de
                  Campanhas
                </li>
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Análise
                  Métricas
                </li>
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Segmentação da
                  audiência
                </li>
                <li>
                  <span className="mr-2 text-green-dark">●</span> Anúncios
                </li>
              </ul>

              <div className="mt-6 w-full flex justify-center">
                <Button
                  onClick={() => {
                    useServiceModal.setState({
                      text: `O gestor irá analisar e segmentar o público-alvo, escolher as melhores palavras-chave, desenvolver anúncios atraentes, monitorar o desempenho das campanhas e mais.`,
                    });
                    serviceModal.onOpen();
                  }}
                  background={"bg-black-secondary group-hover:bg-green-dark"}
                  label={"Saiba mais"}
                  rounded={"rounded-lg md:rounded-xl"}
                  width={"w-[80%]"}
                  fontSize={"text-lg md:text-xl"}
                  color={"text-white"}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center bg-white p-6 group   hover:border-2  hover:border-black transition-colors duration-300 rounded-lg shadow-md ">
            <div className="flex justify-center items-center rounded-full bg-black-secondary w-24 h-24 group-hover:bg-green-dark transition-all duration-300">
              <h1 className="text-xl text-white">02</h1>
            </div>
            <div className="flex flex-col items-center mt-4 w-[80%]">
              <h1 className={` font-bold text-2xl text-center`}>Branding</h1>
              <ul className="mt-5 w-fit">
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Identidade
                  Visual
                </li>
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Paleta de
                  cores
                </li>
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Cartão de
                  visita
                </li>
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Logotipo
                </li>
                <li>
                  <span className="mr-2 text-green-dark">●</span> Identidade da
                  marca
                </li>
              </ul>
              {/* <p className="font-semibold text-center text-black-light mt-3">
                Branding é uma estratégia vital para construir e gerenciar a
                identidade de uma marca, criando uma imagem única e memorável no
                mercado e estabelecendo uma conexão emocional com o público.
              </p> */}

              <div className="mt-6 w-full flex justify-center">
                <Button
                  onClick={() => {
                    useServiceModal.setState({
                      text: `Branding é uma estratégia vital para construir e gerenciar a
                    identidade de uma marca, criando uma imagem única e memorável no
                    mercado e estabelecendo uma conexão emocional com o público.`,
                    });
                    serviceModal.onOpen();
                  }}
                  background={"bg-black-secondary group-hover:bg-green-dark"}
                  label={"Saiba mais"}
                  rounded={"rounded-lg md:rounded-xl"}
                  width={"w-[80%]"}
                  fontSize={"text-lg md:text-xl"}
                  color={"text-white"}
                />
              </div>
              {/* <ul className="mt-5">
                <li className="mb-1">● Estratégia Publicitária</li>
                <li className="mb-1">● Otimização de Campanhas</li>
                <li className="mb-1">● Análise Métricas</li>
                <li className="mb-1">● Segmentação da audiência</li>
                <li>● Anúncios</li>
              </ul> */}
            </div>
          </div>
          <div className="col-span-1  flex flex-col justify-center items-center bg-white p-6 group   hover:border-2  hover:border-black transition-colors duration-300 rounded-lg shadow-md ">
            <div className="flex justify-center items-center rounded-full bg-black-secondary w-24 h-24 group-hover:bg-green-dark transition-all duration-300">
              <h1 className="text-xl text-white">03</h1>
            </div>
            <div className="flex flex-col items-center mt-4 w-[80%]">
              <h1 className={` font-bold text-2xl text-center`}>
                Social Media
              </h1>
              {/* <p className="font-semibold text-center text-black-light mt-3">
                Gerenciamento e posicionamento nas redes sociais com estratégia
                e objetivos. Criação de conteúdos envolventes que ressoa com o
                público-alvo e gera conversões através de estratégias de
                marketing no Instagram.
              </p> */}
              <ul className="mt-5 w-fit">
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Estratégia de
                  conteúdos
                </li>
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Gerenciamento
                  de Redes Sociais
                </li>
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Análise de
                  Dados - Insights
                </li>
                <li className="mb-1">
                  <span className="mr-2 text-green-dark">●</span> Design
                </li>
              </ul>
              <div className="mt-6 w-full flex justify-center">
                <Button
                  onClick={() => {
                    useServiceModal.setState({
                      text: `Gerenciamento e posicionamento nas redes sociais com estratégia e objetivos. Criação de conteúdos
                      envolventes que ressoa com o público alvo e gera conversões através de estratégias de marketing no Instagram.`,
                    });
                    serviceModal.onOpen();
                  }}
                  background={"bg-black-secondary group-hover:bg-green-dark"}
                  label={"Saiba mais"}
                  rounded={"rounded-lg md:rounded-xl"}
                  width={"w-[80%]"}
                  fontSize={"text-lg md:text-xl"}
                  color={"text-white"}
                />
              </div>
              {/* <ul className="mt-5">
                <li className="mb-1">● Estratégia Publicitária</li>
                <li className="mb-1">● Otimização de Campanhas</li>
                <li className="mb-1">● Análise Métricas</li>
                <li className="mb-1">● Segmentação da audiência</li>
                <li>● Anúncios</li>
              </ul> */}
            </div>
          </div>
        </motion.div>
      </div>
    </ContentPage>
  );
};

export default Services;
