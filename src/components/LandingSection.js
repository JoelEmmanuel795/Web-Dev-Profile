import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile_image from "../images/profile_image.jpg"

const greeting = "Hello, I am Joel!";
const bio1 = "A fullstack developer specialising in";
const bio2 = "Python, C, JavaScript, HTML, CSS, and React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar src={profile_image} size={{ base: 'xl', sm: '2xl' }} />
    <VStack spacing={2} mt={6}>
      <Heading as="h3" size={{ base: 'sm', sm: 'md' }} noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h1" size={{ base: 'lg', sm: 'xl' }}>
        {bio1}
      </Heading>
      <Heading as="h1" size={{ base: 'lg', sm: 'xl' }}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
