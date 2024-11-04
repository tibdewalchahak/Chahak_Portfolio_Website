import React from 'react'
import './Skills.css'
import Languages from './Languages'
import CoreConcepts from './CoreConcepts'
import Interest from './Interest'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Level</span>

        <div className="skills__container container grid">
            <Languages/>
            <CoreConcepts/>
            <Interest/>
        </div>
    </section>
  )
}

export default Skills