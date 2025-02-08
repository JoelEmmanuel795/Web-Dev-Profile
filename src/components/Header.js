import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, VStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: j.e.gamonez@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/JoelEmmanuel795",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/joel-gamonez-6a905a331/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/29227073/joel-gamonez",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement) return;

      if (prevScrollPos > currScrollPos)
        currHeaderElement.style.transform = "translateY(0)";
      else currHeaderElement.style.transform = "translateY(-200px)";

      prevScrollPos = currScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
      zIndex={10} // Ensure header stays above other elements
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" px={{ base: 4, sm: 8 }}>
        <HStack
          py={4}
          justifyContent="space-between"
          alignItems="center"
          flexWrap={{ base: "wrap", sm: "nowrap" }} // Wrap only on mobile
        >
          {/* Social Icons */}
          <HStack spacing={{ base: 4, sm: 8 }}>
            {socials.map(({ icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  style={{
                    fontSize: "2rem", // Large icons by default
                    width: "30px",
                  }}
                />
              </a>
            ))}
          </HStack>

          {/* Navigation Links */}
          <HStack
            spacing={{ base: 4, sm: 8 }} // Adjust spacing for mobile and larger screens
            flexWrap={{ base: "wrap", sm: "nowrap" }} // Wrap on mobile
            justifyContent={{ base: "center", sm: "flex-end" }} // Center on mobile
            mt={{ base: 4, sm: 0 }} // Add margin on mobile
          >
            <a
              key="projects-section"
              href="#projects"
              onClick={handleClick("projects")}
              style={{
                fontSize: "1rem", // Default font size
                margin: "0 8px",
              }}
            >
              Projects
            </a>
            <a
              key="contactme-section"
              href="#contact-me"
              onClick={handleClick("contactme")}
              style={{
                fontSize: "1rem", // Default font size
                margin: "0 8px",
              }}
            >
              Contact Me
            </a>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
