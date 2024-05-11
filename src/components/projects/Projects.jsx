import React from 'react'
import "./Projects.css"
import projects from '../../utils/projects.json'
import Chips from '../chips/Chips'

const Projects = () => {
  return (
    <section className="paddings innerWidth p-wrapper">
      <h5>Proyectos</h5>
      <article className='innerWidth paddings p-container'>
        {
          projects.length >= 1
            ? projects.map((p, index) => {
              return (
                <article className='innerWidth p-details' key={index}>
                  <section className='p-features'>
                    <h6>{p.name}</h6>
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
                    <img src={p.img} height={200} alt="" />
                  </aside>
                </article>
              )
            })
            : <h6 className='flexCenter paddings'>Trabajando en ello 😛😛😛</h6>
            // Subir imagenes del proyecto android.
            // Duplicar el repositorio del proyecto de android
          }
      </article>
    </section>
  )
}

export default Projects
