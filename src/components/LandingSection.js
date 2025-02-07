import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile_image from "../images/profile_image.jpg"

const greeting = "Hello, I am Joel!";
const bio1 = "A frontend developer";
const bio2 = "specialising in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
     <Avatar src={profile_image} size='2xl'/>
    <VStack spacing={2} mt={6}>
      <Heading as="h3" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h1" size="2xl">
        {bio1}
      </Heading>
      <Heading as="h1" size="2xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
