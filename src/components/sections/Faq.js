import React from "react";
import { Accordion, Heading, Box } from "@chakra-ui/react";
import AccordionComponent from "../UI/Accordion";

const Faq = () => {
  return (
    <Box px="5rem" py="2rem">
      <Heading mb={10} as="h3" fontSize="2rem">
        FAQ'S
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionComponent
          title="Where I will get the app?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore"
        />
        <AccordionComponent
          title="How to start the app?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore"
        />
        <AccordionComponent
          title="Can I Invite my friend to use this app and is there have any reward?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore"
        />
        <AccordionComponent
          title="How to start the app?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore"
        />
        <AccordionComponent
          title="Can I Invite my friend to use this app and is there have any reward?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore"
        />
        <AccordionComponent
          title="How to start the app?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore"
        />
        <AccordionComponent
          title="Can I Invite my friend to use this app and is there have any reward?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore"
        />
      </Accordion>
    </Box>
  );
};

export default Faq;
