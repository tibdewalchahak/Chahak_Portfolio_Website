import React from "react";

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
          <svg
            className="about_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-braces-icon lucide-braces"
          >
            <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
            <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
          </svg>

          <p className="about__description">
            I’m Chahak Tibdewal, a B.Tech student in Computer Science and
            Engineering at VNIT, Nagpur (2022–2026), with a deep interest in
            software development, AI-driven applications, and full-stack web
            solutions.
          </p>
        </div>

        <div className="about__box">
          <svg
          className="about_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-briefcase-business-icon lucide-briefcase-business"
          >
            <path d="M12 12h.01" />
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>

          <p className="about__description">
            I’ve gained hands-on experience during my Summer Internship at UBS
            Business Solutions, where I contributed to enterprise data
            analytics, visualization, and automation initiatives. Alongside,
            I’ve built impactful projects such as a Real Estate Rental App (MERN
            Stack) and a Retrieval-Augmented Generation (RAG) system using Groq
            SDK and HuggingFace for intelligent document querying.
          </p>
        </div>

        <div className="about__box">
          <svg
          className="about_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-cog-icon lucide-user-cog"
          >
            <path d="M10 15H6a4 4 0 0 0-4 4v2" />
            <path d="m14.305 16.53.923-.382" />
            <path d="m15.228 13.852-.923-.383" />
            <path d="m16.852 12.228-.383-.923" />
            <path d="m16.852 17.772-.383.924" />
            <path d="m19.148 12.228.383-.923" />
            <path d="m19.53 18.696-.382-.924" />
            <path d="m20.772 13.852.924-.383" />
            <path d="m20.772 16.148.924.383" />
            <circle cx="18" cy="15" r="3" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          <p className="about__description">
            With strong foundations in C++, Python, and JavaScript, and a
            passion for continuous learning, I enjoy translating complex
            problems into efficient, user-centric solutions. My leadership roles
            and participation in creative domains like dramatics reflect a
            balance of technical acumen and collaborative spirit.
          </p>
        </div>

        <div className="about__box">
          <svg
          className="about_icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-rocket-icon lucide-rocket"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <p className="about__description_demand">
            Looking ahead, I aim to contribute to impactful projects that merge
            innovation, usability, and social value.
          </p>
      </div>
    </div>
  );
};

export default info;
