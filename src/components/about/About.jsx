import React from "react";
import { slides } from "../../utils/slides-images";
import {
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaDownload
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./About.css";
import Carousel from "../carousel/Carousel";
import { Toaster, toast } from "sonner";

const About = () => {

  const copyText = async () => {
    await navigator.clipboard.writeText('santilopez397@gmail.com')
    .then(() => toast.success("Se ha copiado con éxito!"))
    .catch(() => toast.error("No se ha logrado copiar"))
  }

  return (
    <section className="flexCenter paddings innerWidth a-wrapper">
      <Toaster />
      <motion.article
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flexColStart a-container"
      >
        <h5 className="title">Sobre mí</h5>
        <p>
          Desarrollador web con <strong>un año</strong> de experiencia en el sector,
          apasionado por la tecnología y las innovaciones digitales <br />
        </p>
        <p>
          Durante este tiempo, he demostrado habilidades en{" "}
          <strong>comunicación asertiva, trabajo en equipo y flexibilidad </strong> 
          para adaptarme a los retos diarios. 
        </p>
        <p>
          Me entusiasma colaborar en equipos dinámicos,
          aplicar mis conocimientos técnicos y dar rienda suelta a mi
          creatividad para lograr resultados excepcionales.
        </p>
        <div className="flexStart a-social">
          <a href="https://www.linkedin.com/in/sanmon12/" target="_blank">
            <FaLinkedin title="LinkedIn" size={30} />
          </a>
          <a href="https://github.com/Santiago397" target="_blank">
            <FaGithub title="Github" size={30} />
          </a>
          <a href="/gl_santiago_monrroy_cv.pdf" target="_blank">
            <button className="btn-cv">
              CV
              <FaDownload />
            </button>
          </a>
        </div>
        <div className="flexStart a-mail">
          <span>santilopez397@gmail.com</span>
          <FaCopy title="Copiar" onClick={copyText} />
        </div>
      </motion.article>
      <article className="flexColCenter innerWidth a-images">
        {/* <Carousel slides={slides}/> */}
      </article>
    </section>
  );
};

export default About;
