import React from "react";
import { Button, InputGroup, Input } from "@chakra-ui/react";

const InputComponent = ({bgColor, textColor, borderColor}) => {
  return (
    <InputGroup
      size="lg"
      pos="relative">
      <Input
        type="text"
        rounded="0"
        _focus={{
          borderColor: borderColor
        }}
        placeholder="Enter your email"
      />
        <Button
          border="1px"
          bg={bgColor}
          rounded="0"
          pos="absolute"
          borderColor={borderColor}
          right="0"
          p={5}
          size="lg"
          color={textColor}>
          Sign Up
        </Button>
    </InputGroup>
  )
}

export default InputComponent;
