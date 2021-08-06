import React, { useState } from "react";
import { Box, Flex, Text, Button, Stack, PseudoBox } from "@chakra-ui/react";
import { MenuIcon, XIcon, BeakerIcon } from '@heroicons/react/solid';

const Navbar = ({servicesRef}) => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py="1rem"
      bg="blue.600"
      color="white"
      px="5rem"
    >
      <Flex align="center" >
        LOGO
        {/*<Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />*/}
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <XIcon bg="white" height="2rem"/> : <MenuIcon bg="white" height="2rem"/>}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <a style={{marginRight: "1rem"}} href="#">Home</a>
          <a style={{marginRight: "1rem"}} href="#">Services</a>
          <a style={{marginRight: "1rem"}} href="#">Join Now</a>
          <a style={{marginRight: "1rem"}} href="#">Careers</a>
          <a style={{marginRight: "1rem"}} href="#">About</a>
          <a href="#">Contact</a>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Navbar;
