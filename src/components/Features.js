import React from "react";
import {
  Flex,
  Box,
  Stack,
  Image,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { PhoneIcon } from "@chakra-ui/icons";
import ListItemComponent from "./UI/List";

const Features = () => {
  return (
    <>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        py="6rem"
      >
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image
            src="assets/images/yeti.jpg"
            size="50%"
            rounded="1rem"
            shadow="2xl"
          />
        </Box>
        <Box
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading as="h2">App Features</Heading>
          <List mt="1.5rem" spacing={3}>
            <ListItemComponent
              textPrimary="Thousands of Doctors"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Online Consultation"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Clinic/Offline Consultation"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Thousands of Doctors"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Covid Test"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Online Report"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Appointments Can Be Managed with Ease"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Possibility to Add Referalls and Grow the Community:"
              textSecondary="Explore our all services"
            />
          </List>
        </Box>
      </Flex>

      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        py="6rem"
        mb={16}
      >
        <Box
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <List mt="1.5rem" spacing={3}>
            <ListItemComponent
              textPrimary="Medicine Shop"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Fast Delivery"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Confirmation & Reminders On SMS"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Option to Suggest Pharmacies, Labs or Store Directly"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Search for Hospitals, Doctors or Pharmacies Using Geo-location tracking:"
              textSecondary="Explore our all services"
            />
            <ListItemComponent
              textPrimary="Track Your Patients with Ease & Comfort:"
              textSecondary="Explore our all services"
            />
          </List>
        </Box>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image
            src="assets/images/yeti.jpg"
            size="50%"
            rounded="1rem"
            shadow="2xl"
          />
        </Box>
      </Flex>
    </>
  );
};

export default Features;
