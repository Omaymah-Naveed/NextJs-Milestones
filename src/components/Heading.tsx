import React from 'react';

interface propsType {
  title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-8">
      <p className="border-b-4 inline-block pb-2 px-4 sm:px-6 md:px-8">{title}</p>
    </div>
  );
};

export default Heading;
