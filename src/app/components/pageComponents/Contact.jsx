"use client";

import ContentPage from "../ContentPage";
import Button from "../Button";
import Link from "next/link";
import localFont from "next/font/local";

const titleFont = localFont({
  src: "../../../../public/fonts/EastmanAlternateTrial-Regular.otf",
});
const Contact = () => {
  return (
    <ContentPage id="services" centralized background="bg-black-secondary">
      <div className="flex flex-col xl:flex-row lg:justify-between justify-center  items-center p-4 xl:p-12 ">
        <div>
          <h1
            className={`${titleFont.className} text-3xl md:text-6xl text-white-secondary mb-2 xl:text-start text-center`}
          >
            Quer <span className="text-yellow-primary">impulsionar</span> seu
            negócio no digital?
          </h1>
          <p className="mt-6 text-gray-300 text-xl xl:text-start text-center">
            Marque uma reunião com a nossa agência especializada em marketing
            digital.
          </p>
        </div>
        <div className="mt-9 xl:mt-0  w-full flex justify-center xl:justify-end  ">
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
