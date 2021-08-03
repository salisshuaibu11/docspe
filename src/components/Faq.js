import React from "react";
import { Accordion, Heading } from "@chakra-ui/react";
import AccordionComponent from "./UI/Accordion";

const Faq = () => {
  return (
    <div style={{ padding: "2rem 10rem" }}>
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
    </div>
  );
};

export default Faq;
