import React from "react";
import { Stack, Image, Flex, Box, Heading, Text } from "@chakra-ui/react";

const DownloadApp = () => {
  return (
    <Stack bg="gray.100">
      <Image src="assets/images/docs.png"/>
      <Flex direction={{base: "column-reverse", md: "row"}}>
        <Flex
          bg="blue.100"
          align="center"
          justify={{base: "center", md: "space-around", xl: "space-between"}}
          direction={{base: "column-reverse", md: "row"}}
          wrap="no-wrap"
          w="50%"
          px="5rem"
        >
          <div>
            <Heading>
              Download The App
            </Heading>
            <Text my="2rem">
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </Text>
          </div>
        </Flex>

        <Box w="50%">
          <Image src="assets/images/doctor-showing-phone.png"/>
        </Box>
      </Flex>
    </Stack>
  );
};

export default DownloadApp;
