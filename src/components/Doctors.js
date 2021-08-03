import React from "react";
import { Heading, Box, Text, Stack, Image, SimpleGrid } from "@chakra-ui/react";

const Doctors = () => {
  return (
    <Stack bg="gray.100" py="3rem">
      <Box align="center" w="50%" m="auto">
        <Heading as="h3" size="lg" mb={2}>
          Meet Some of Our Doctors
        </Heading>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s. when an unknown printer took a gallery of type and scrambled it
          to make a type specimen book.
        </Text>
      </Box>
      <SimpleGrid align="center" minChildWidth="120px" spacing="40px" px="10px">
        <Box p={5} align="left">
          <Image src="assets/images/yeti.jpg" size="50%" rounded="1rem" />
          <Heading my={2} color="blue.700" fontSize="1.4rem" as="h4">
            Dr. Mohd Shah
          </Heading>
          <Text>GP / General</Text>
        </Box>
        <Box p={5} align="left">
          <Image src="assets/images/yeti.jpg" size="50%" rounded="1rem" />
          <Heading my={2} color="blue.700" fontSize="1.4rem" as="h4">
            Dr. Choo Yin
          </Heading>
          <Text>Pediatrician</Text>
        </Box>
        <Box p={5} align="left">
          <Image src="assets/images/yeti.jpg" size="50%" rounded="1rem" />
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
