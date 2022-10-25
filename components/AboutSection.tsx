import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#eff1f4cc] lg:flex lg:flex-row-reverse relative overflow-hidden">
      <div
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-offset="150"
        className="block h-[29.75rem] lg:h-full w-full lg:max-w-[32.5rem] top-0 right-0 lg:-right-28 xxl:right-0 xl:max-w-[38.125rem] relative sm:hidden lg:block lg:absolute"
      >
        <img
          // className="object-cover lg:w-full h-full"

          className="absolute top-0 right-0 lg:left-0 object-cover lg:w-full h-full lg:h-auto z-40"
          src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/home/about/support-person-about.png"
          alt=""
        />
        <img
          className="absolute top-0 right-0 lg:left-0 object-cover lg:w-full h-full lg:h-auto z-40"
          src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/home/about/person-about.png"
          alt=""
        />
        {/* <div className="lg:absolute bg-contain bg-no-repeat w-full top-0 xl:right-0 lg:-right-[7.0625rem] bg-right-bottom bg-[url('https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/home/about/support-person-about.png')] w-full h-full"></div>
        <div className="lg:absolute bg-contain bg-no-repeat w-full top-0 xl:right-0 lg:-right-[7.0625rem] bg-right-bottom bg-[url('https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/home/about/person-about.png')] w-full h-full"></div> */}
      </div>

      <div className="max-w-[75rem] w-full mx-auto">
        <div className="lg:mr-auto text-center md:text-left font-semibold py-16 sm:py-[9.375rem] px-[1.375rem] lg:max-w-[34.375rem] xl:max-w-[37.5rem]">
          <div className=" mb-6">
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-offset="220"
              className="text-[#e9511d] font-black mb-2 text-xs lg:text-base"
            >
              - SOMOS EXPERTOS EN LO QUE HACEMOS -
            </p>
            <h2
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-offset="220"
              className=" text-[1.8125rem] md:text-[2.1875rem] lg:text-5xl font-bold leading-none text-[#004169]"
            >
              Acerca de nosotros
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-offset="220"
            className="text-[0.9375rem] text-[#354652] leading-[1.25rem] sm:leading-[1.4375rem] sm:text-[1.0625rem]"
          >
            El Estudio Ugaz Zegarra es una firma legal peruana, orientada a
            brindar servicios a las personas naturales y jurídicas tanto del
            sector privado como del sector público. Nuestros más de 20 años de
            experiencia profesional y académica en el rubro nos respaldan.
          </p>
          <div className="border-b-[1px] w-[7.5rem] mx-auto my-10 text-[#354652] sm:hidden"></div>
          <div className="sm:flex sm:mt-[3.25rem]">
            <div className="sm:mr-[1.5625rem]">
              <h4
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="220"
                className="mb-6 text-[1.3125rem] text-[#004169] font-bold sm:text-[1.75rem]"
              >
                Misión
              </h4>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="150"
                className="text-[0.9375rem] text-[#354652] leading-[1.25rem] sm:leading-[1.4375rem] sm:text-[1.0625rem]"
              >
                Brindar el mejor servicio jurídico del país comprometiéndonos al
                100% con cada uno de nuestros casos, diseñando e implementando
                soluciones efectivas orientadas a garantizar los objetivos y
                metas de cada patrocinio.
              </p>
            </div>
            <div className="border-b-[1px] w-[7.5rem] mx-auto my-10  text-[#354652] sm:hidden"></div>
            <div className="sm:ml-[1.5625rem]">
              <h4
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="220"
                className="mb-6 text-[1.3125rem] text-[#004169] font-bold sm:text-[1.75rem]"
              >
                Visión
              </h4>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="150"
                className="text-[0.9375rem] text-[#354652] leading-[1.25rem] sm:leading-[1.4375rem] sm:text-[1.0625rem]"
              >
                Creemos en la necesidad de ofrecer un servicio de la más alta
                calidad, ejerciendo la defensa de cada caso con disciplina,
                creatividad, el rigor de la especialización académica y la
                experticia de la profesión.
              </p>
            </div>
          </div>

          {/* <button
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-offset="150"
            className=" py-[0.6rem] px-8 mt-12 text-[1.125rem] duration-500 text-white bg-[#004169] hover:bg-[#73BDB8] font-bold rounded-3xl mx-auto transition "
          >
            Conoce al staff
          </button> */}

          <a href="https://estudiougaz.com/staff/">
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-offset="150"
              className=" py-[0.6rem] px-8 mt-10 text-[1.125rem] !duration-500 text-white bg-[#004169] sm:hover:bg-[#73BDB8] font-bold rounded-3xl !transition-all"
            >
              Conoce al staff
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
