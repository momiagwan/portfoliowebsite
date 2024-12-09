import React from "react";

type EducationItemProps = {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description: string;
};

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  degree,
  duration,
  grade,
  description,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md mb-4">
      <h3 className="text-xl font-bold">{institution}</h3>
      <p className="text-gray-400">{degree}</p>
      <p className="text-sm text-gray-400">{duration}</p>
      <p className="mt-2 text-purple-400">Grade: {grade}</p>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-amber-900 text-white px-4">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <p className="mb-6 text-lg text-gray-400">
        My education has been a journey of self-discovery and growth. My educational details are as follows:
      </p>
      <div className="w-full max-w-2xl">
        <EducationItem
          institution="UBIT ,University of Karachi"
          degree="Bachelors in Software Engineering Technology"
          duration="2022 - 2025"
          grade="3.4 CGPA"
          description="I am currently pursuing a Bachelor's degree in Software Engineering. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, and Database Management."
        />
        <EducationItem
          institution="Bahria college Nore 1,MT khan road"
          degree="HSC (12), Computer science"
          duration="2021"
          grade="89%"
          description="I completed my Class 12 high school education at Bahria college Nore 1, where I studied Computer Science."
        />
      </div>
    </section>
  );
};

export default Education;
