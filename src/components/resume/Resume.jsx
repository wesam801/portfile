import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">التعليم</h2>
      <div className="resume__container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mx-12">
          <h3 className="font-semibold">بكالوريوس في علوم الحاسوب</h3>
          <p className="text-gray-600">
            Information engineering / IUSR University, Syria, Azaz.
          </p>
          <p className="text-gray-500">Graduated: OCT 2026</p>
        </div>
        <div className="mx-12">
          <h3 className="font-semibold">مهندس برمجيات</h3>
          <p className="text-gray-600">Tcc / Idlib University, Syria, Idlib.</p>
          <p className="text-gray-500">Graduated: NOV 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
