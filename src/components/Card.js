import { Heading, HStack, Image, Text, VStack, AspectRatio, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({ title, description, imageSrc, link }) => {
  return (
    <VStack
      w="100%"
      bg="white"
      color="black"
      borderRadius="lg"
      border="1px solid"
      borderColor="#353535"
      overflow="hidden"
      boxShadow="md"
      align="stretch"
      spacing={4}
      transition="transform 0.3s ease-in-out"
      cursor="pointer"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
      }}
      onClick={() => window.open(link, "_blank")} 
    >
      {/* 
        Use AspectRatio so that all images share the same ratio, 
        ensuring a uniform look among the cards 
      */}
      <AspectRatio ratio={14 / 9} w="100%" bg="black">
        <Image src={imageSrc} objectFit="contain"/>
      </AspectRatio>

      {/* Title + Description */}
      <VStack align="start" px={4} py={2} flex="1" borderTopColor="gray.300">
        <Heading as="h3" size="md" pb="5px">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>

      {/* "See More" + Arrow at the bottom */}
      <HStack px={4} pb={4} justify="space-between" w="100%" mt="auto">
        <Text fontSize={{ base: 'xs', sm: 'sm' }}>See More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
