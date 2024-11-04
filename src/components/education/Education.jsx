import React from 'react'
import "./Education.css"

const Education = () => {
  return (
    <section className="education section" id='education'>
        <div className="education__header">
            <h2 className="section__title">Education</h2>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            <span className="section__subtitle">My Journey</span>
        </div>
        
        <div className="education__container container">
            <div className="education__sections">
                <div className="education__content education__content__active">
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">B.Tech in Compute Science and Engineering</h3>
                            <span className="education__subtitle">Visvesvaraya National Institue of Technology, Nagpur</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i>2022 - 2026 
                            </div>
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <div>
                            <h3 className="education__title">12th HSC</h3>
                            <span className="education__subtitle">Akola Arts, Commerce and Science Junior College, Akola</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i>2020-2022
                            </div>
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <div>
                            <h3 className="education__title">10th SSC</h3>
                            <span className="education__subtitle">Khandelwal Dnyan Mandir School, Akola</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i>2020 
                            </div>
                        </div>
                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education