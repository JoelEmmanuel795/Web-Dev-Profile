import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  AspectRatio,
  Box,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, liveLink, githubLink }) => {
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
      _hover={{
        boxShadow: "xl",
      }}
    >
      {/* 
        Use AspectRatio so that all images share the same ratio, 
        ensuring a uniform look among the cards 
      */}
      <AspectRatio ratio={14 / 9} w="100%" bg="black">
        <Image src={imageSrc} objectFit="contain" />
      </AspectRatio>

      {/* Title + Description */}
      <VStack align="start" px={4} py={2} flex="1" borderTopColor="gray.300">
        <Heading as="h3" size="md" pb="5px">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>

      {/* Action buttons at the bottom */}
      <HStack px={4} pb={4} justify="flex-end" w="100%" mt="auto" spacing={4}>
        {githubLink && (
          <Button
            leftIcon={<FontAwesomeIcon icon={faGithub} />}
            size="sm"
            variant="outline"
            onClick={() => window.open(githubLink, "_blank")}
          >
            View on GitHub
          </Button>
        )}
        {liveLink && (
          <Button
            rightIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
            size="sm"
            colorScheme="green"
            onClick={() => window.open(liveLink, "_blank")}
          >
            View Live
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export default Card;
