import { useMediaQuery } from "react-responsive";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState } from "react";

const Tech = () => {
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="relative w-28 h-28"
          key={technology.name}
          onMouseEnter={() => setHoveredTech(technology.name)}
          onMouseLeave={() => setHoveredTech(null)}
        >
          {isLaptop ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          )}
          {hoveredTech === technology.name && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-xs rounded-md"
              style={{ color: technology.color }}
            >
              {technology.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
