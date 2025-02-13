import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Capstone Project for the Meta Front End Developer Course",
    description:
      "For my Meta Front-End Developer Certification capstone, I built a homepage and booking page for the fictional “Little Lemon Restaurant” 🍋 using HTML, CSS, JavaScript, JSX, and React ⚛️. This project showcased responsive design (📱), form validation (✅), wireframes in Figma (🖌️), and adherence to a style guide (🎨)—putting into practice everything I learned in the program.",
    getImageSrc: () => require("../images/Meta_Capstone_Screenshot.png"),
    link: "https://joelemmanuel795.github.io/Meta_Capstone_Project",
  },
  {
    title: "HTML and CSS website for the Little Lemon Restaurant",
    description:
      "A visually rich, fully responsive site built with HTML & CSS, featuring subtle animations 🎭 and sleek layouts. Developed for the Meta Front-End Developer “HTML and CSS in depth” course, showcasing advanced styling techniques ✨ and user-focused design 🎯.",
    getImageSrc: () => require("../images/HTML_CSS_LittleLemon.png"),
    link: "https://joelemmanuel795.github.io/-little-lemon-html-css/index.html",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    link: "https://github.com/photo-gallery",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    link: "https://github.com/event-planner",
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
