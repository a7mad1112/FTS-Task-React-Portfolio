import React, { useContext } from "react";
import { languageContext } from "./../Context/languageContext";
import ahmedImg from "../../imgs/ahmed1.jpg";
import resume from "../../imgs/Ahmad-AlawnehCSE.pdf";
import "./info-section.css";


const InfoSection = () => {
  const { lang } = useContext(languageContext);
  return (
    <section id="info-section" className="py-sm-0 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-5">
            <div>
              <article>
                <div className="info-heading">
                  <h2 className="gradient-text mb-2">
                    {lang === "en" ? "Front-End Developer" : "مطور مواقع"}
                  </h2>
                </div>
                <p>
                  {lang === "en"
                    ? `Front-End Developer who has a passion to learn everything
                    about Web Development, I can help you to create a great
                    responsive web application.`
                    : `مطور ويب وعندي شغف كبير لتعلم كل مايخص تطوير تطبيقات الويب , أقدر أساعدك تبني أي موقع`}
                </p>
                <p className="mt-4 mb-0 text-white fw-bold">
                  {lang === "en" ? "More Info:" : "معلومات اضافية :"}
                </p>
                <div className="info">
                  <div className="row">
                    <p className="col">
                      {lang === "en"
                        ? "Name: Ahmed Alawneh"
                        : "الإسم: أحمد علاونة"}
                    </p>
                    <p className="col">
                      {lang === "en"
                        ? "Nationality: Palestinian"
                        : "الجنسية: فلسطيني"}
                    </p>
                  </div>
                  <div className="row">
                    <p className="col">
                      {lang === "en" ? "Age: 20" : "العمر: 20"}
                    </p>
                    <p className="col">
                      {lang === "en" ? "City: Jenin" : "المدينة: جنين"}
                    </p>
                  </div>
                  <div className="row">
                    <p className="col">
                      {lang === "en"
                        ? "Major: Computer Programming"
                        : "التخصص: هندسة حاسوب"}
                    </p>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a
                        className="resume-download"
                        href={resume}
                        download="Resume_of_Ahmed.pdf"
                      >
                        {" "}
                        {lang === "en"
                          ? "Download CV"
                          : "تحميل السيرة الذاتية"}{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="info-img w-75 m-auto">
              <img
                className=" rounded rounded-circle img-fluid"
                src={ahmedImg}
                alt="Ahmed Img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
