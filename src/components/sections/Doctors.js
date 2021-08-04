import React from "react";
import { Heading, Box, Text, Container, Stack, Image, SimpleGrid } from "@chakra-ui/react";

const Doctors = () => {
  return (
    <Stack bg="gray.100" py="3rem" px="5rem">
      <Container align="center"mb="10px">
        <Heading as="h3" size="lg" mb={2}>
          Meet Some of Our Doctors
        </Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s. when an unknown printer took a gallery of type and scrambled it
          to make a type specimen book.
        </Text>
      </Container>
      <SimpleGrid
          columns={{xl: "3", md: "2"}}>
        <Box align="center">
          <Image shadow="lg" maxH="80%" src="assets/images/doctors/1.png" rounded="1rem"/>
          <Heading my={2} color="blue.700" fontSize="1.4rem" as="h4">
            Dr. Mohd Shah
          </Heading>
          <Text>GP / General</Text>
        </Box>
        <Box align="center">
          <Image shadow="lg" src="assets/images/doctors/2.png" maxH="80%" rounded="1rem"/>
          <Heading my={2} color="blue.700" fontSize="1.4rem" as="h4">
            Dr. Choo Yin
          </Heading>
          <Text>Pediatrician</Text>
        </Box>
        <Box align="center">
          <Image shadow="lg" maxH="80%" src="assets/images/doctors/3.png" rounded="1rem" />
          <Heading my={2} color="blue.700" fontSize="1.4rem" as="h4">
            Dr. Choo Yin
          </Heading>
          <Text>Pediatrician</Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default Doctors;
