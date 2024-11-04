import React from 'react'

const CoreConcepts = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Core Concepts</h3>
        <div className="skills__box">
            <div className="skills__group core_concepts_group">
                
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>

                    <div>
                        <h3 className="skills__name">Data Structures and Algorithms</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>

                    <div>
                        <h3 className="skills__name">Object Oriented Programming</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoreConcepts