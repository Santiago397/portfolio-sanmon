import React from "react";
import "./Greeting.css";
import { FaAngleDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Greeting = () => {
  return (
    <section className="flexCenter paddings innerWidth g-wrapper">
      <article className="flexCenter innerWidth g-head">
        <aside className="flexCenter innerWidth g-titles">
          <div>
            <TypeAnimation
              className="title"
              preRenderFirstString={true}
              sequence={[700, "Hola, soy", 700, "Hello, I'm"]}
              cursor={false}
              repeat={Infinity}
            />
            <h2>Santiago</h2>
            <h6>Desarrollador web</h6>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 1.5,
              x: { duration: 1 },
            }}
            className="g-image"
            src="./personal-col.png"
            alt="photo personal"
          />
        </aside>
        <div className="flexCenter innerWidth icon">
          <FaAngleDown size={"3rem"} />
        </div>
      </article>
    </section>
  );
};

export default Greeting;
