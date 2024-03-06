import React from 'react'
import './Experience.css'
import experiences from '../../utils/experiences.json'
import { motion } from "framer-motion";
import Chips from '../chips/Chips'

const Experience = () => {
  return (
    <section className="flexCenter paddings innerWidth e-wrapper">
      <motion.article 
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.75 }}
        className="flexColStart e-container"
      >
        <h5 className="title">Experiencia</h5>
        {
          experiences.map((exp) => {
            return (
              <article key={exp.company} className='flexColStart innerWidth e-content'>
                <div className="flexColStart e-subtitle">
                  <h6>{exp.company}</h6>
                  <span>{exp.role}</span>
                  <span>{exp.start} - {exp.end}</span>
                </div>
                <ul className='e-duties'>
                  {
                    exp.duties.map((duty, idx) => <li key={idx} >{duty}</li>)
                  }
                </ul>
                <div className='flexCenter e-chips'>
                  {
                    exp.tech.map((t, idx) => <Chips key={idx} text={t} />)
                  }
                </div>
              </article>
            )
          })
        }
      </motion.article>
      <article className="time-line">
        {/* TODO create timeline */}
      </article>
    </section>
  )
}

export default Experience
