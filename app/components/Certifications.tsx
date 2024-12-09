import React from "react";

type CertificationItemProps = {
  institution: string;
 degree:string
  duration: string;
 
  description: string;
};

const CertificationItem: React.FC<CertificationItemProps> = ({
  institution,
  degree,
  duration,
  
  description,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md mb-4">
      <h3 className="text-xl font-bold">{institution}</h3>
      <p className="text-gray-400">{degree}</p>
      <p className="text-sm text-gray-400">{duration}</p>
      
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
};

const Certification: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-orange-300 text-white px-4">
      <h2 className="text-3xl font-bold mb-4 text-black">Certification</h2>
      <p className="mb-6 text-lg text-gray-400 text-black">
       Certification details are as below:
      </p>
      <div className="w-full max-w-2xl">
        <CertificationItem
          institution="Smit Mass Information Technology Program"
          degree="Mern Stack development"
          duration="1 year"
         
          description="I had completed Mern Stack Development from smit"
        />
       
      </div>
    </section>
  );
};

export default Certification;