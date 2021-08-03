import React, { useEffect } from "react";
import { Heading, Box, Text, Stack, Image } from "@chakra-ui/react";

const Clients = () => {
  useEffect(() => {
    window.$(".clients").slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  return (
    <Stack bg="yellow.50" py="3rem">
      <Box align="center" w="50%" m="auto">
        <Heading as="h3" size="lg" mb={2}>
          Our Clients Speak
        </Heading>
        <Text>We have been working with clients around the world</Text>
      </Box>
      <div className="clients">
        <Box p={5} align="center">
          <Box bg="white" p={5} shadow="2xl">
            <Heading my={2} fontSize="1.5rem" as="h4">
              Efficient Collaborating
            </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </Text>
          </Box>
          <Box mt={4}>
            <Image src="assets/images/clients/1.png" w={10} h={10} rounded="full" />
            <Heading fontSize="1.4rem" as="h4">
              Jane Cooper
            </Heading>
            <Text>CEO at ABC Corporation</Text>
          </Box>
        </Box>
        <Box p={5} align="center">
          <Box bg="white" p={5} shadow="2xl">
            <Heading my={2} fontSize="1.5rem" as="h4">
              Efficient Collaborating
            </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </Text>
          </Box>
          <Box mt={4}>
            <Image src="assets/images/clients/2.png" w={10} h={10} rounded="full" />
            <Heading fontSize="1.4rem" as="h4">
              Jane Cooper
            </Heading>
            <Text>CEO at ABC Corporation</Text>
          </Box>
        </Box>
        <Box p={5} align="center">
          <Box bg="white" p={5} shadow="2xl">
            <Heading my={2} fontSize="1.5rem" as="h4">
              Efficient Collaborating
            </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </Text>
          </Box>
          <Box mt={4}>
            <Image src="assets/images/clients/3.png" w={10} h={10} rounded="full" />
            <Heading fontSize="1.4rem" as="h4">
              Jane Cooper
            </Heading>
            <Text>CEO at ABC Corporation</Text>
          </Box>
        </Box>
        <Box p={5} align="center">
          <Box bg="white" p={5} shadow="2xl">
            <Heading my={2} fontSize="1.5rem" as="h4">
              Efficient Collaborating
            </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </Text>
          </Box>
          <Box mt={4}>
            <Image src="assets/images/yeti.jpg" w={10} h={10} rounded="full" />
            <Heading fontSize="1.4rem" as="h4">
              Jane Cooper
            </Heading>
            <Text>CEO at ABC Corporation</Text>
          </Box>
        </Box>
        <Box p={5} align="center">
          <Box bg="white" p={5} shadow="2xl">
            <Heading my={2} fontSize="1.5rem" as="h4">
              Efficient Collaborating
            </Heading>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </Text>
          </Box>
          <Box mt={4}>
            <Image src="assets/images/yeti.jpg" w={10} h={10} rounded="full" />
            <Heading fontSize="1.4rem" as="h4">
              Jane Cooper
            </Heading>
            <Text>CEO at ABC Corporation</Text>
          </Box>
        </Box>
      </div>
    </Stack>
  );
};

export default Clients;
