import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ManIcon from "../../Assets/manIlustration.webp";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image src={ManIcon} alt="man-svgrepo" />
          <div className="AboutBio">
            Hello! My name is <strong>Aldin Halilovic</strong>, passionate
            Software Engineer specializing in frontend development. With a
            strong background in creating dynamic and engaging user interfaces,
            I thrive on transforming complex ideas into seamless, intuitive
            experiences. I take pride in writing clean, efficient code and
            continuously seek opportunities to learn and grow in the
            ever-evolving tech landscape. When I'm not coding, you can find me
            exploring the latest trends in car industry, or enjoying a good
            movie. Let's connect and create something amazing together!
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
