import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Capstone Project for the Meta Front End Developer Specialization",
    description:
      "For my Meta Front-End Developer Certification capstone, I built a homepage and booking page for the fictional “Little Lemon Restaurant” using HTML, CSS, JavaScript, JSX, and React. This project showcases responsive design (📱), form validation (📝), management of state and passing of props across React components (⚛️), efficient re-renders using the Virtual DOM (🔮), and adherence to a style guide (🎨)—putting into practice everything I learned in the program.",
    getImageSrc: () => require("../images/Meta_Capstone_Screenshot.png"),
    link: "https://joelemmanuel795.github.io/Meta_Capstone_Project",
  },
  {
    title: "Little Lemon Wireframe",
    description:
      'As part of the "Principles of UX/UI Design" course in the Meta Front-End Developer Certificate, I designed this wireframe to structure the homepage of the Little Lemon Restaurant website (further developed in my capstone project). This layout showcases user flow, navigation, and content hierarchy (📑) to enhance usability and accessibility.',
    getImageSrc: () => require("../images/Meta_Capstone_Wireframe.png"),
    link: "https://www.figma.com/proto/QvX2rubEdEd6ZXDI1lw18x/Wireframe---Little-Lemon-Homepage?t=GdEck6cRIHEjAZ6P-1",
  },
  {
    title: "HTML and CSS website for the Little Lemon Restaurant",
    description:
      "A visually rich, fully responsive site built with HTML & CSS, featuring subtle animations (🎭) and sleek layouts. Developed for the Meta Front-End Developer “HTML and CSS in depth” course, the website showcases advanced styling techniques and user-focused design.",
    getImageSrc: () => require("../images/HTML_CSS_LittleLemon.png"),
    link: "https://joelemmanuel795.github.io/-little-lemon-html-css/index.html",
  },
  {
    title: "Little Lemon Mobile Prototype",
    description:
      'As part of the "Principles of UX/UI Design" course in the Meta Front-End Developer Certificate, I designed this interactive mobile prototype to structure the homepage of the Little Lemon Restaurant website. This project showcases responsive UI, component-based design (⚛️), and interactive elements (📱) to enhance user experience and accessibility.',
    getImageSrc: () => require("../images/LittleLemon_Mobile_Prototype.png"),
    link: "https://www.figma.com/proto/sO3tZ9oS8VLDlyj6oJX6H8/Revised-Design-(UI-Assignment)?t=SK84scRW51LLpSFB-1",
  },
  {
    title: "HTML/CSS Portfolio",
    description:
      'I built this responsive portfolio website using HTML & CSS to start showcasing the projects I worked on during "The Complete Full-Stack Web Development Bootcamp", offered by Dr. Angela Yu from the London App Brewery on Udemy. This portfolio highlights my skills in layout design, styling, and UI structuring.',
    getImageSrc: () => require("../images/HTML_CSS_Portfolio.png"),
    link: "https://joelemmanuel795.github.io/html-portfolio/",
  },
  {
    title: "Super Dogs Registration Form",
    description:
      'As part of the Responsive Web Design certification path on Udemy, I designed this HTML & CSS registration form for a fictional pet company. This project showcases form validation, responsive layout, and user-friendly design, allowing users to submit fun details about their dogs and their "super tricks"! 🦸‍♂️🐾',
    getImageSrc: () => require("../images/SuperDogs_Registration_Form.png"),
    link: "https://joelemmanuel795.github.io/html-portfolio/public/super-dogs/super-dogs-website.html",
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
      px="65px" // Left and right padding (along the "x"-axis)
      pt="50px" // padding top
      pb="50px" // padding bottom
    >
      <Heading as="h1" id="projects-section" pb="10px" whiteSpace={"no-flex"}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)" // 3 columns by default
        gridGap={10}
        // Below is how you can override the layout at specific screen widths:
        sx={{
          "@media(max-width: 1000px)": {
            gridTemplateColumns: "repeat(2, 1fr)", // 2 columns at 1256px or below
          },
          "@media(max-width: 650px)": {
            gridTemplateColumns: "1fr", // 1 column on smaller screens
          },
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
