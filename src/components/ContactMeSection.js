import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit(null, values); // Pass all values, including type
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string()
        .oneOf(["hireMe", "openSource", "jobInterview", "other"], "Invalid type selected")
        .required("Type of enquiry is required"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") formik.resetForm();
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      justifyContent="center" // Vertically center
      alignItems="center" // Horizontally center
    >
      <VStack
        w={{ base: "95%", sm: "90%", md: "768px", lg: "768px" }} // Adjust width
        p={{ base: 4, sm: 6, md: 8, lg: 12 }} // Adjust padding
        textAlign="center" // Center text
        alignItems="flex-start" // Aligns content to the left
      >
        <Heading as="h1" id="contactme-section" fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>
          Contact me
        </Heading>
        <Box
          p={6}
          rounded="md"
          w="100%"
          maxWidth={{ base: "100%", sm: "90%", md: "768px" }} // Ensure form doesn't overflow
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  fontSize={{ base: "sm", md: "md" }} // Adjust input font size
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  fontSize={{ base: "sm", md: "md" }} // Adjust input font size
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.type && formik.touched.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  bg="white"
                  color="black"
                  fontSize={{ base: "sm", md: "md" }} // Adjust select font size
                  _focus={{
                    bg: "white",
                    color: "black",
                  }}
                  _hover={{
                    bg: "white",
                    color: "black",
                  }}
                  {...formik.getFieldProps("type")}
                >
                  <option value="" style={{ fontStyle: "italic", color: "gray" }}>-- Select an inquiry --</option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="jobInterview">Job Offer</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={{ base: "100px", sm: "200px", md: "250px" }} // Adjust height for smaller screens
                  fontSize={{ base: "sm", md: "md" }} // Adjust text area font size
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
                fontSize={{ base: "sm", md: "md" }} // Adjust button font size
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
