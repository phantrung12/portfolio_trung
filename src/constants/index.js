import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  techasians,
  vtc,
  vdg,
  social,
  hc,
  hospital,
  charbet,
  vtcedu,
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
    id: "projects",
    title: "Projects",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Design",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Techasians",
    icon: techasians,
    iconBg: "#383E56",
    date: "March 2022 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "VTC",
    icon: vtc,
    iconBg: "#E6DEDD",
    date: "July 2023 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VDG ",
    description:
      "Automatically synthesize reported data, ensure the accuracy of the total data in the report and detailed data of the respective projects ",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: vdg,
    source_code_link: "https://github.com/",
  },
  {
    name: "Social Walkapp",
    description:
      "A social network is like a walking game, allowing users to register as members (normal or VIP), buy and sell items, make friends, message each other and interact with each other.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Serverless",
        color: "pink-text-gradient",
      },
    ],
    image: social,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hyper Casual Game CMS",
    description:
      "CMS Website for Hyper Casual Game using React, redux-toolkit, MUI,... to help admin manage HC game information such as admin, players, events, coupon, game setting,...",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "PostgresSQL",
        color: "blue-text-gradient",
      },
    ],
    image: hc,
    source_code_link: "https://github.com/",
  },
  {
    name: "Receipt Center System ",
    description:
      "Hospital management website system. Supports in managing departments, patients, schedules, drugs, and statistical data",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Serverless",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/",
  },
  {
    name: "VTC Education App",
    description: "Online learning application for VTC Education",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: vtcedu,
    source_code_link: "https://github.com/",
  },
  {
    name: "Charbet",
    description:
      "A Webtool using React, Redux Saga, Ant design,.. where users can read stories or register to become story creators",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Redux Saga",
        color: "pink-text-gradient",
      },
    ],
    image: charbet,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
