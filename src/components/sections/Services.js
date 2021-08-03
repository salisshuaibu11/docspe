import React from "react";
import {
  Heading,
  Box,
  Text,
  Container,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const Services = () => {
  return (
    <Stack bg="gray.100" py="3rem">
      <Heading as="h3" size="lg" align="center">
        Our Services
      </Heading>
      <SimpleGrid align="center" minChildWidth="120px" spacing="40px" px="10px">
        <Box p={5}>
          <Container w={20} rounded="full" bg="white" p={5}>
            <PhoneIcon color="blue.500" />
          </Container>
          <Heading fontSize="1.3rem" my="2rem" weight="bold" as="h2">
            MyChron
          </Heading>
          <Text weight="100" font="normal">
            Access video consultation with Malaysia's top doctors on the Practo
            app.
          </Text>
        </Box>
        <Box p={5}>
          <Container w={20} rounded="full" bg="white" p={5}>
            <PhoneIcon color="blue.500" />
          </Container>
          <Heading fontSize="1.3rem" my="2rem" weight="bold" as="h2">
            Virtual Visit
          </Heading>
          <Text weight="100" font="normal">
            Access video consultation with Malaysia's top doctors on the Practo
            app.
          </Text>
        </Box>
        <Box p={5}>
          <Container w={20} rounded="full" bg="white" p={5}>
            <PhoneIcon color="blue.500" />
          </Container>
          <Heading fontSize="1.3rem" my="2rem" weight="bold" as="h2">
            COVID Center
          </Heading>
          <Text weight="100" font="normal">
            Access video consultation with Malaysia's top doctors on the Practo
            app.
          </Text>
        </Box>
        <Box p={5}>
          <Container w={20} rounded="full" bg="white" p={5}>
            <PhoneIcon color="blue.500" />
          </Container>
          <Heading fontSize="1.3rem" my="2rem" weight="bold" as="h2">
            Pharmacy
          </Heading>
          <Text weight="100" font="normal">
            Access video consultation with Malaysia's top doctors on the Practo
            app.
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default Services;
