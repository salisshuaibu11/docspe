import React from "react";
import { Flex, ListIcon, Heading, Box, Stack, Text } from "@chakra-ui/react";

const ListComponent = ({ textPrimary, textSecondary }) => {
  return (
    <Flex as="li">
      <Box w={4} mr={2} h={4} bg="blue.900"></Box>
      <Stack spacing="0">
        <Heading wordBreak="break" as="h6" fontSize="1.2rem">
          {textPrimary}
        </Heading>
        <Text>{textSecondary}</Text>
      </Stack>
    </Flex>
  );
};

export default ListComponent;
