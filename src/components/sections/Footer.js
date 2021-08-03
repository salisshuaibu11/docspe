import {
  Box,
  List,
  SimpleGrid,
  Image,
  Stack,
  Text,
  Heading,
  ListItem,
 } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faLinkedin,
  faInstagram,
 } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <Box color="white" bg="blue.500">
      <SimpleGrid
        py="1rem"
        px="10rem"
        columns={{xl: "5", md: "3", sm: "2"}}
        spacing="40px"
      >
        <List>
          <Image src="assets/images/docspe.png" />
          <Text my="1.5rem" color="white">
            Be sure to take a look at our
            Terms of Service and Privacy
            Policy
          </Text>
          <Stack spacing={4} direction="row">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Stack>
        </List>
        <List>
          <Heading mb="2.8rem" as="h5" fontSize="1.2rem">
            Company
          </Heading>
          <ListItem mb="8px">About Us</ListItem>
          <ListItem mb="8px">Our Mission</ListItem>
          <ListItem mb="8px">Blog</ListItem>
        </List>
        <List>
          <Heading mb="2.8rem" as="h5" fontSize="1.2rem">
            Services
          </Heading>
          <ListItem mb="8px">Virtual Clinic</ListItem>
          <ListItem mb="8px">Diabetes Management</ListItem>
          <ListItem mb="8px">COVID Center</ListItem>
          <ListItem mb="8px">Online Pharmacy</ListItem>
        </List>
        <List>
          <Heading mb="2.8rem" as="h5" fontSize="1.2rem">
            Support
          </Heading>
          <ListItem mb="8px">Faqs</ListItem>
          <ListItem mb="8px">Contact US</ListItem>
        </List>
        <List>
          <Text>English <FontAwesomeIcon icon={faCoffee}/></Text>
        </List>
      </SimpleGrid>
      <p align="center">&copy; 2021 ARIA Spectre Sdn Bhd (1288053-W) | All Rights Reserved</p>
    </Box>
  )
}

export default Footer;
