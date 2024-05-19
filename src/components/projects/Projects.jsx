import React from 'react'
import "./Projects.css"
import projects from '../../utils/projects.json'
import Chips from '../chips/Chips'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  return (
    <section id='projects' className="paddings innerWidth p-wrapper">
      <h5 className='title'>Proyectos</h5>
      <article className='innerWidth paddings p-container'>
        {
          projects.length >= 1
            ? projects.map((p, index) => {
              return (
                <article className='innerWidth p-details' key={index}>
                  <section className='p-features'>
                    <h6>
                      <a href={p.link} target='blank'>
                        {p.name}
                        <FaExternalLinkAlt title='Github' size={20} />
                      </a>
                    </h6>
                    <ul>
                      {
                        p.features.map((feature, index) => <li key={index}>{feature}</li>)
                      }
                    </ul>
                    <div className="flexCenter p-chips">
                      {
                        p.tech.map((t, index) => <Chips key={index} text={t} />)
                      }
                    </div>
                  </section>
                  <aside className='flexCenter innerWidth p-image'>
                    {
                      p.img.includes('http')
                      && <img src={p.img} height={200} alt="" />
                    }
                  </aside>
                </article>
              )
            })
            : <h6 className='flexCenter paddings'>Trabajando en ello 😛😛😛</h6>
          }
      </article>
    </section>
  )
}

export default Projects
