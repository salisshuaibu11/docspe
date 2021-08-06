import React from "react";
import {
  Heading,
  Box,
  Text,
  Flex,
  Container,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const Services = ({ref}) => {
  return (
    <Stack bg="gray.100" p="5rem" ref={ref}>
      <Heading as="h3" size="lg" align="center">
        Our Services
      </Heading>
      <SimpleGrid align="center" columns={{xl: "4", "md": "2"}} spacing="40px" px="10px">
        <Box p={5}>
          <Flex justify="center" w="5rem" align="center" h={20} rounded="full" bg="white">
            <PhoneIcon color="blue.500" />
          </Flex>
          <Heading fontSize="1.3rem" my="2rem" weight="bold" as="h2">
            MyChron
          </Heading>
          <Text weight="100" font="normal">
            Access video consultation with Malaysia's top doctors on the Practo
            app.
          </Text>
        </Box>
        <Box p={5}>
          <Flex justify="center" w="5rem" align="center" h={20} rounded="full" bg="white">
            <PhoneIcon color="blue.500" />
          </Flex>
          <Heading fontSize="1.3rem" my="2rem" weight="bold" as="h2">
            Virtual Visit
          </Heading>
          <Text weight="100" font="normal">
            Access video consultation with Malaysia's top doctors on the Practo
            app.
          </Text>
        </Box>
        <Box p={5}>
          <Flex justify="center" w="5rem" align="center" h={20} rounded="full" bg="white">
            <PhoneIcon color="blue.500" />
          </Flex>
          <Heading fontSize="1.3rem" my="2rem" weight="bold" as="h2">
            COVID Center
          </Heading>
          <Text weight="100" font="normal">
            Access video consultation with Malaysia's top doctors on the Practo
            app.
          </Text>
        </Box>
        <Box p={5}>
          <Flex justify="center" w="5rem" align="center" h={20} rounded="full" bg="white">
            <PhoneIcon color="blue.500" />
          </Flex>
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
