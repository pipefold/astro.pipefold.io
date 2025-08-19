import React from "react";

const Pictogram = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <div
      className={`w-12 h-12 inline-block mr-2 translate-y-3 ${className}`}
      style={{ backgroundImage: `url(/pictograms/${name}.svg)` }}
    />
  );
};

export default Pictogram;
