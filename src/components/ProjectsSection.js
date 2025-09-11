import { Heading, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import React from "react";
import Card from "./Card";

const projects = [
  {
    title:
      "MacroMates: Innovative health and nutrition platform powered with AI",
    description:
      "An advanced health platform that revolutionizes nutrition tracking using AI technology. Built with React, Django REST Framework, and OpenAI integration, MacroMates offers instant meal analysis through photo recognition (📸), personalized health insights (📊), and natural language goal setting (🎯). The platform features real-time macro tracking, interactive dashboards, and a sophisticated containerized architecture using Docker and GitLab CI/CD (🐳⚙️).",
    getImageSrc: () => require("../images/macromates.png"),
    githubLink: "https://github.com/JoelEmmanuel795/macromates",
    liveLink: "https://www.youtube.com/watch?v=_grQ8WPekds",
  },
  {
    title: "Ripple: Modern Social Media Platform with Real-Time Interactions",
    description:
      "A feature-rich social media platform developed during an intensive one-week sprint at Constructor Academy. Built with React and Redux Toolkit, Ripple showcases advanced features like infinite scrolling (∞), real-time notifications (🔔), and multi-image post support (🖼️). The platform demonstrates modern web development practices with comprehensive state management and responsive design implementation.",
    getImageSrc: () => require("../images/ripple.png"),
    githubLink: "https://github.com/JoelEmmanuel795/Ripple-Social-Media",
    liveLink: "https://joelemmanuel795.github.io/Ripple-Social-Media/",
  },
  {
    title: "Capstone Project for the Meta Front End Developer Specialization",
    description:
      'For my Meta Front-End Developer Certification capstone, I built a homepage and booking page for the fictional "Little Lemon Restaurant" using HTML, CSS, JavaScript, JSX, and React. This project showcases responsive design (📱), form validation (📝), management of state and passing of props across React components (⚛️), efficient re-renders using the Virtual DOM (🔮), and adherence to a style guide (🎨)—putting into practice everything I learned in the program.',
    getImageSrc: () => require("../images/Meta_Capstone_Screenshot.png"),
    githubLink: "https://github.com/JoelEmmanuel795/Meta_Capstone_Project",
    liveLink: "https://joelemmanuel795.github.io/Meta_Capstone_Project",
  },
  {
    title: "Little Lemon Mobile Prototype",
    description:
      'As part of the "Principles of UX/UI Design" course in the Meta Front-End Developer Certificate, I designed this interactive mobile prototype to structure the homepage of the Little Lemon Restaurant website. This project showcases responsive UI, component-based design (⚛️), and interactive elements (📱) to enhance user experience and accessibility.',
    getImageSrc: () => require("../images/LittleLemon_Mobile_Prototype.png"),
    liveLink:
      "https://www.figma.com/proto/sO3tZ9oS8VLDlyj6oJX6H8/Revised-Design-(UI-Assignment)?t=SK84scRW51LLpSFB-1",
  },
  {
    title: "Little Lemon Wireframe",
    description:
      'As part of the "Principles of UX/UI Design" course in the Meta Front-End Developer Certificate, I designed this wireframe to structure the homepage of the Little Lemon Restaurant website (further developed in my capstone project). This layout showcases user flow, navigation, and content hierarchy (📑) to enhance usability and accessibility.',
    getImageSrc: () => require("../images/Meta_Capstone_Wireframe.png"),
    liveLink:
      "https://www.figma.com/proto/QvX2rubEdEd6ZXDI1lw18x/Wireframe---Little-Lemon-Homepage?t=GdEck6cRIHEjAZ6P-1",
  },
  {
    title: "HTML and CSS website for the Little Lemon Restaurant",
    description:
      'A visually rich, fully responsive site built with HTML & CSS, featuring subtle animations (🎭) and sleek layouts. Developed for the Meta Front-End Developer "HTML and CSS in depth" course, the website showcases advanced styling techniques and user-focused design.',
    getImageSrc: () => require("../images/HTML_CSS_LittleLemon.png"),
    githubLink: "https://github.com/JoelEmmanuel795/-little-lemon-html-css",
    liveLink:
      "https://joelemmanuel795.github.io/-little-lemon-html-css/index.html",
  },
  {
    title: "HTML/CSS Portfolio",
    description:
      'I built this responsive portfolio website using HTML & CSS to start showcasing the projects I worked on during "The Complete Full-Stack Web Development Bootcamp", offered by Dr. Angela Yu from the London App Brewery on Udemy. This portfolio highlights my skills in layout design, styling, and UI structuring.',
    getImageSrc: () => require("../images/HTML_CSS_Portfolio.png"),
    githubLink: "https://github.com/JoelEmmanuel795/html-portfolio",
    liveLink: "https://joelemmanuel795.github.io/html-portfolio/",
  },
  {
    title: "Super Dogs Registration Form",
    description:
      'As part of the Responsive Web Design certification path on Udemy, I designed this HTML & CSS registration form for a fictional pet company. This project showcases form validation, responsive layout, and user-friendly design, allowing users to submit fun details about their dogs and their "super tricks"! 🦸‍♂️🐾',
    getImageSrc: () => require("../images/SuperDogs_Registration_Form.png"),
    liveLink:
      "https://joelemmanuel795.github.io/html-portfolio/public/super-dogs/super-dogs-website.html",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill,minmax(290px,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
