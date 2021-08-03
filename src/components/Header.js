import React from "react";
import {
  Flex,
  Box,
  Image,
  Stack,
  Heading,
  Button,
 } from "@chakra-ui/react";

 import ButtonComponent from "./UI/Button";

const Header = () => {
  return (
    <Flex
      align="center"
      justify={{base: "center", md: "space-around", xl: "space-between"}}
      direction={{base: "column-reverse", md: "row"}}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
    <Stack
      spacing={4}
      w={{base: "80%", md: "40%"}}
      align={["center", "center", "flex-start", "flex-start"]}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}>
            A Smart Solution To Solve Your Medical Problems
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          Accss video consultation with India's top doctors on the Practo app.
          Connect with doctors online, available 24/7, from the comfort of your home.
        </Heading>
        <Stack spacing={4} direction="row" align="center">
          <Button bg="gray.900" color="white">
            Google Play
          </Button>
          <Button bg="gray.900" color="white">
            App Store
          </Button>
        </Stack>

        <Stack spacing={4} direction="column" align="center">
          <Heading
            as="p"
            size="md"
            fontWeight="bold"
            color="blue.700"
          >
            Get RM10 When You Sign Up Now
            <Heading spacing={2} fontWeight="normal" as="span" size="xs">T&C Apply</Heading>
          </Heading>
          <ButtonComponent
            bgColor="blue.600"
            textColor="white"
            borderColor=""/>
        </Stack>

      </Stack>
      <Box w={{base: "80%", sm: "60%", md: "50%"}} mb={{base: 12, md: 0}}>
        <Image src="assets/images/yeti.jpg" size="50%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  )
}

export default Header;
