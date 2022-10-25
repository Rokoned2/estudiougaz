import Image from "next/image";
import React from "react";
import logo from "../images/graphicLawyer.svg";

const ContactSection = () => {
  return (
    <footer className="flex flex-col w-full h-[58.331rem] sm:h-[36.25rem] px-[1.375rem] pt-[18.5625rem] sm:pt-[7.375rem] bg-[#004169] text-[#CCC] text-sm font-bold overflow-hidden">
      <div className="max-w-[75rem] flex flex-col w-full h-full mx-auto">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className="w-[11.375rem] sm:w-[9.375rem]"
        >
          <img
            className="object-cover w-full"
            src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/brand-white-ugaz-zegarra.svg"
            alt=""
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className="flex flex-col sm:flex-row max-w-[32.875rem]"
        >
          <div className="mt-10 sm:w-[50%]">
            <h4 className="pb-1 text-lg text-white">Dirección</h4>
            <p>Calle 31 N° 295, CORPAC</p>
            <p>San Isidro, Lima - Perú</p>
          </div>
          <div className="mt-10 sm:w-[50%]">
            <h4 className="pb-1 text-lg text-white">Teléfonos</h4>
            <div className="pb-1 flex mt-1">
              <img
                className="w-[1.375rem] mr-2"
                src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-phone.svg"
                alt=""
              />
              <p>(+51) 932 438 912</p>
            </div>
            <div className="flex mt-1">
              <img
                className="w-[1.375rem] mr-2"
                src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-whatsapp.svg"
                alt=""
              />
              <p>(+51) 932 438 912</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className="mt-10"
        >
          <h4 className="text-lg text-white pb-3">Redes sociales</h4>
          <div className="flex flex-wrap">
            <div className="flex items-end w-[40%] sm:w-auto pb-6 sm:pr-10">
              <img
                className="w-[1.375rem] mr-2"
                src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-linkedin.svg"
                alt=""
              />
              <p>Linkedin</p>
            </div>
            <div className="flex items-end w-[40%] sm:w-auto pb-6 sm:pr-10">
              <img
                className="w-[1.375rem] mr-2"
                src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-instagram.svg"
                alt=""
              />
              <p>Instagram</p>
            </div>
            <div className="flex items-end w-[40%] sm:w-auto pb-6 sm:pr-10">
              <img
                className="w-[1.375rem] mr-2"
                src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-youtube.svg"
                alt=""
              />
              <p>Youtube</p>
            </div>
            <div className="flex items-end w-[40%] sm:w-auto pb-6 sm:pr-10">
              <img
                className="w-[1.375rem] mr-2"
                src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-facebook.svg"
                alt=""
              />
              <p>Facebook</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="-100"
          className="flex flex-wrap text-center items-center mt-auto mx-auto sm:ml-0 mb-2"
        >
          <p className="mx-auto">Sitio web diseñado y desarrollado por</p>
          <a
            href="https://graphiclawyer.netlify.app/"
            className="inline-block mx-auto w-[7.875rem] pl-2"
          >
            <Image src={logo} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
