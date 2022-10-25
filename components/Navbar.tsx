import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [fix, setFix] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(false);

  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 150) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    window.addEventListener("scroll", setFixed);
    return () => {
      document.removeEventListener("scroll", setFixed);
    };
  }, []);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = activeSidebar ? "hidden" : "auto";
    }
  }, [activeSidebar]);

  return (
    <>
      <nav
        className={`top-0 left-0 bg-white py-[0.9375rem] px-[1.375rem] text-white z-50
      w-full transition-all duration-300 drop-shadow-xl ${
        fix
          ? "lg:bg-[#004169cc] lg:py-[0.9375rem]"
          : "lg:pt-[2.125rem] lg:bg-transparent"
      }   ${show ? "top-0 fixed" : "fixed -translate-y-full"}`}
      >
        <div className="max-w-[75rem] mx-auto flex justify-between items-center">
          <a href="https://estudiougaz.vercel.app/">
            <img
              className="lg:hidden"
              src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/brand-color-ugaz-zegarra.svg"
              alt=""
            />
            <img
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-duration="1000"
              className="hidden lg:block"
              src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/brand-white-ugaz-zegarra.svg"
              alt=""
            />
          </a>
          <ul
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            className="justify-between items-center text-[1.0625rem] font-bold hidden lg:flex "
          >
            <li className="mr-14 underline-offset-8	hover:underline decoration-2 cursor-pointer ">
              Inicio
            </li>

            <a href="https://estudiougaz.com/areas/">
              <li className="lg:mr-10 xl:mr-14 underline-offset-8	hover:underline decoration-2">
                Áreas
              </li>
            </a>

            <a href="https://estudiougaz.com/noticias/">
              <li className="lg:mr-10 mr-14 underline-offset-8	hover:underline decoration-2 ">
                Noticias
              </li>
            </a>
            <a href="https://estudiougaz.com/publicaciones/">
              <li className="lg:mr-10 mr-14 underline-offset-8	hover:underline decoration-2 ">
                Publicaciones
              </li>
            </a>

            <a href="https://estudiougaz.com/staff/">
              <li className="lg:mr-10 mr-14 underline-offset-8	hover:underline decoration-2">
                Personas
              </li>
            </a>

            <a href="https://estudiougaz.com/evento/">
              <li className="lg:mr-10 mr-14 underline-offset-8	hover:underline decoration-2">
                Evento
              </li>
            </a>
            <a href="https://estudiougaz.com/contacto/">
              <button className=" py-[0.4rem] px-8  text-[1.125rem] sm:duration-500 text-[#004169] bg-[#73bdb8] sm:hover:bg-white font-bold rounded-3xl sm:transition-colors ">
                Contacto
              </button>
            </a>
          </ul>
          <img
            onClick={() => setActiveSidebar(!activeSidebar)}
            className="lg:hidden cursor-pointer"
            src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-menu.svg"
            alt=""
          />
        </div>
      </nav>
      <aside
        className={` ${
          activeSidebar
            ? "opacity-1 translate-x-0"
            : "opacity-0 translate-x-full"
        } z-[60] transition-all duration-700 bg-[#004169] fixed top-0 left-0 w-full h-full  lg:hidden`}
      >
        <div
          onClick={() => setActiveSidebar(!activeSidebar)}
          className="fixed top-8 right-8 z-[70] bg-white rounded-full p-4 cursor-pointer"
        >
          <img
            className="w-3"
            src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-close-menu.svg"
            alt=""
          />
        </div>
        <ul className="flex flex-col justify-center text-white text-center text-[1.8125rem] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[80] ">
          <a className="mb-6" href="https://estudiougaz.com/areas/">
            <li>Inicio</li>
          </a>
          <a className="mb-6" href="https://estudiougaz.com/areas/">
            <li>Áreas</li>
          </a>

          <a className="mb-6" href="https://estudiougaz.com/noticias/">
            <li>Noticias</li>
          </a>
          <a className="mb-6" href="https://estudiougaz.com/publicaciones/">
            <li>Publicaciones</li>
          </a>

          <a className="mb-6" href="https://estudiougaz.com/staff/">
            <li>Personas</li>
          </a>

          <a className="mb-10" href="https://estudiougaz.com/evento/">
            <li>Evento</li>
          </a>
          <a href="https://estudiougaz.com/contacto/">
            <button className=" py-[0.2rem] px-8 text-[#004169] bg-white font-bold rounded-full ">
              Contacto
            </button>
          </a>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
