import React from "react";
import {
  Flex,
  Stack,
  Heading
 } from "@chakra-ui/react";

import InputComponent from "../UI/Input";

const Clinic = () => {
  return (
    <Flex
      align="center"
      justify={{base: "center", md: "space-around", xl: "center"}}
      direction={{base: "column-reverse", md: "row"}}
      wrap="no-wrap"
      minH="50vh"
      px={8}
      bg="blue.500"
    >
      <Stack spacing={4}>
        <Heading
          as="span"
          color="white"
          >
          Free Clinic Setup Course
        </Heading>
        <InputComponent
          bgColor="white"
          textColor="blue.600"
          borderColor="white"/>
      </Stack>
    </Flex>
  )
}

export default Clinic;
