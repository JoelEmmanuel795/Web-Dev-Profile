import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      w="100%"
      bg="white"
      color="black"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      align="stretch"
      spacing={4}
      maxW={{ base: '90%', sm: '400px' }}
      _hover={{
        boxShadow: "lg",
        textDecoration: "none",
      }}
    >
      <Image src={imageSrc} objectFit="cover" maxH={{ base: '200px', sm: '250px' }} />
      <VStack align="start" px={4} py={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>
      <HStack px={4} pb={4} justify="space-between" w="100%">
        <Text fontSize={{ base: 'xs', sm: 'sm' }}>See More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
