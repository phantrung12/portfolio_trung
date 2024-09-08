import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} className="w-16 h-16 object-contain" alt="web" />
        <h3 className="text-white text-center font-bold text-[20px]">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduce</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p>
        An enthusiastic and detail-oriented Frontend Developer with over 2 years
        experiences in Front-end Development. Seeking to utilize my technical
        skills and expertise to provide value to the employer and contribute to
        successful projects both today and in the future. Aiming to take on new
        challenges and utilize my coding and debugging skills for developing new
        features and enhance the overall user experience.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
