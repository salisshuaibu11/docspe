import {
  Box,
  List,
  SimpleGrid,
  Image,
  Stack,
  Text,
  Heading,
  Select,
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
    <Box color="white" bg="#0000a5">
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
              <Image src="assets/images/icons/facebook.png" alt="Facebook Icon"/>
            </a>
            <a href="#">
              <Image src="assets/images/icons/twitter.png" alt="Twitter Icon"/>
            </a>
            <a href="#">
              <Image src="assets/images/icons/whatsapp.png" alt="WhatsApp Icon"/>
            </a>
            <a href="#">
              <Image src="assets/images/icons/linkedin.png" alt="LinkedIn Icon"/>
            </a>
            <a href="#">
              <Image src="assets/images/icons/instagram.png" alt="Instagram Icon"/>
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
          <Select placeholder="English"  border="none">
            <option value="option1">English</option>
          </Select>
        </List>
      </SimpleGrid>
      <p align="center">&copy; 2021 ARIA Spectre Sdn Bhd (1288053-W) | All Rights Reserved</p>
    </Box>
  )
}

export default Footer;
