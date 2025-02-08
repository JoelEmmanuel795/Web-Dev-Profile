import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack
        maxWidth={{ base: "90%", sm: "720px", md: "1024px", lg: "1280px" }} // Responsive maxWidth
        minHeight="100vh"
        p={{ base: 4, sm: 8, lg: 16 }} // Responsive padding
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
