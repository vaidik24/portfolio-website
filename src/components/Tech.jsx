import { useMediaQuery } from "react-responsive";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {isLaptop ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
