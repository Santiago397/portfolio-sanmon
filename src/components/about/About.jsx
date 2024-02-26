import React from "react";
import { slides } from "../../utils/slides-images";
import {
  FaLinkedin,
  FaGithub,
  FaCopy
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./About.css";
import Carousel from "../carousel/Carousel";

const About = () => {
  return (
    <section className="flexCenter paddings innerWidth a-wrapper">
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
        <h5 className="title">About</h5>
        <p>
          Web developer with <strong>one year</strong> of experience in the
          industry, passionate about technology and digital innovations. <br />
        </p>
        <p>
          Throughout this time, I have demonstrated skills in{" "}
          <strong>assertive communication, teamwork, and flexibility</strong> to
          adapt to daily challenges.
        </p>
        <p>
          I am enthusiastic about collaborating in dynamic teams, applying my
          technical knowledge, and unleashing my creativity to achieve
          exceptional results.
        </p>
        <div className="flexStart a-social">
          <a href="https://www.linkedin.com/in/sanmon12/" target="_blank">
            <FaLinkedin title="LinkedIn" size={30} />
          </a>
          <a href="https://github.com/Santiago397" target="_blank">
            <FaGithub title="Github" size={30} />
          </a>
        </div>
        <div className="flexStart a-mail">
          <span>santilopez397@gmail.com</span>
          <FaCopy title="Copiar" />
        </div>
      </motion.article>
      <article className="flexColCenter innerWidth a-images">
        {/* <Carousel slides={slides}/> */}
      </article>
    </section>
  );
};

export default About;
