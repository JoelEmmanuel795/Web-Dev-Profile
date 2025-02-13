import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          px={4} // Padding for mobile
          color="white"
          justifyContent="center"
          alignItems="center"
          maxW="100%"
          height={{ base: 12, sm: 16 }} // Adjust height for mobile and tablets
        >
          <p>Joel • © 2025</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
