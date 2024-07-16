import {
  java,
  web,
  javascript,
  github,
  html,
  css,
  reactjs,
  redux,
  BB,
  spring,
  tailwind,
  nodejs,
  mongodb,
  git,
  spot,
  os,
  temple,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "Java Developer",
    icon: java,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Springboot",
    icon: spring,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Github",
    icon: github,
  },
];

const experiences = [
  {
    title: "Full Stack Developer(Summer Intern)",
    company_name: "Brainybeam",
    icon: BB,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    points: [
      "Developing e-commerce applications for grocery and vegetable shopping using React, HTML, CSS, and Bootstrap, improving user convenience and accessibility.",
      "Adding features for detailed product information and consumer reviews, increasing user engagement and satisfaction on online shopping platforms.",
    ],
  },
];

const projects = [
  {
    name: "OS-Virtual_Lab",
    description:
      "Created a website showcasing operating system algorithms like Round Robin etc. Built a user-friendly interface , increasing user engagement by 40%.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "Xampp",
        color: "red-400",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: os,
    source_code_link: "https://github.com/Aniket-Suthar/OS-Virtual-Lab",
  },
  {
    name: "Temple-Fund Dashboard ",
    description:
      "Developed a sophisticated fundraising management platform leveraging the MERN stack, effectively managing over 20 events and 500 donations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "red-400",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: temple,
    source_code_link: "https://github.com/vaidik24/templeFundFrontEnd",
  },
  {
    name: "Spotless Tunes ",
    description:
      "Innovative music management platform combining React, Node.js, and MongoDB. Integrated Spotify API for seamless playlist management and lyric retrieval .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "red-400",
      },
      {
        name: "Spotify-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spot,
    source_code_link: "https://github.com/vaidik24/SpotlessTunes",
  },
];

export { services, technologies, experiences, projects };
