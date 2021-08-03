import React from "react";

import {
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  Flex,
} from "@chakra-ui/react";

const AccordionComponent = ({ title, content }) => {
  return (
    <AccordionItem>
      <Flex align="center">
        <Box w={4} mr={2} h={4} bg="blue.900"></Box>
        <AccordionButton>
          <Box fontSize="1.2rem" flex="1" textAlign="left">
            {title}
          </Box>
        </AccordionButton>
      </Flex>
      <AccordionPanel pb={4}>{content}</AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionComponent;
