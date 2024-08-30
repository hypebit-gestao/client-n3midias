"use client";

import ContentPage from "../ContentPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import localFont from "next/font/local";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";
import { useRouter } from "next/navigation";
import axios from "axios";

const formSchema = yup.object({
  fullName: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("E-mail é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  subject: yup.string().required("Assunto é obrigatório"),
  message: yup.string().required("Mensagem é obrigatório"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("https://crm-lps-srv.onrender.com/lead/8472c2b9-7ee8-4424-bd8d-de24988cad73", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: data.fullName,
          email: data.email,
          cellphone: data.phone,
          description: data.message,
          status: 1
        }),
      }).then((res) => {
        router.push("/obrigado");
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log("Error: ", error);
    }
  };

  return (
    <ContentPage id="contact" background="bg-black-secondary">
      <div className="flex flex-col my-0 pb-12">
        <div className="flex flex-row">
          <div className="border-l-8 border-yellow-primary h-36 hidden xl:block"></div>
          <div className="xl:ml-12 w-full">
            <h1
              className={`text-2xl text-center xl:text-start text-white-secondary font-bold uppercase`}
            >
              Contato
            </h1>
            <h1
              className={` text-3xl xl:text-4xl text-center xl:text-start mt-4 font-bold w-full max-w-full xl:max-w-[80%] text-white-secondary`}
            >
              Envie-nos uma{" "}
              <span className="text-yellow-primary">mensagem</span> e concorra a
              uma{" "}
              <span className="text-yellow-primary">consultoria gratuita</span>{" "}
              sobre gerenciador de anúncios!
            </h1>
          </div>
        </div>
        <div>
          <form
            className="mt-8 w-full xl:w-[60%] "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-row w-full">
              <div className="mr-3 w-full">
                <input
                  placeholder="Nome completo"
                  className="p-4 rounded-lg outline-none w-full"
                  {...register("fullName")}
                />
                <p className="text-red-500">{errors.fullName?.message}</p>
              </div>
              <div className="w-full">
                <input
                  placeholder="E-mail"
                  className="p-4 rounded-lg outline-none w-full"
                  {...register("email")}
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>
            </div>
            <div className="flex flex-row mt-10 w-full">
              <div className="mr-3 w-full">
                <input
                  placeholder="Telefone"
                  className="p-4 rounded-lg outline-none w-full"
                  {...register("phone")}
                />
                <p className="text-red-500">{errors.phone?.message}</p>
              </div>
              <div className="w-full">
                <input
                  placeholder="Assunto"
                  className="p-4 rounded-lg outline-none w-full"
                  {...register("subject")}
                />
                <p className="text-red-500">{errors.subject?.message}</p>
              </div>
            </div>
            <div className="mt-10 w-full">
              <div className="w-full">
                <textarea
                  className="p-4 rounded-lg outline-none w-full"
                  name="message"
                  id="message"
                  placeholder="Mensagem"
                  {...register("message")}
                ></textarea>

                <p className="text-red-500">{errors.subject?.message}</p>
              </div>
            </div>
            <div className="mt-6">
              <Button
                background={"bg-yellow-primary"}
                label={"Enviar"}
                loading={loading}
                rounded={"rounded-lg md:rounded-xl"}
                width={"w-full"}
                fontSize={"text-lg md:text-xl"}
              />
            </div>

            {/* <input {...register("age")} />
            <p>{errors.age?.message}</p>

            <input type="submit" /> */}
          </form>
        </div>
      </div>
    </ContentPage>
  );
};

export default Contact;
