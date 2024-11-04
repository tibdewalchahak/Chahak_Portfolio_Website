import React from 'react'

const Interest = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Interest - Web Development</h3>
        <div className="skills__box">
            <div className="skills__group interest_group">
                
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>

                    <div>
                        <h3 className="skills__name">Frontend</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>

                    <div>
                        <h3 className="skills__name">Backend</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Interest