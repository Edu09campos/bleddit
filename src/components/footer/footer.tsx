import { Flex, Stack, ButtonGroup, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex
      bg="#001529"
      width="100%"
      justify="center"
      align="center"
      py={{ base: "12px", md: "16px" }}
      color="white"
    >
      <Stack spacing={{ base: "4px", md: "5px" }}>
        <Stack justify="center" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              target="_blank"
              as="a"
              href="https://www.linkedin.com/in/edu09campos/"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              target="_blank"
              as="a"
              href="https://github.com/Edu09campos"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontWeight={600}>
          Bleddit - Made with 💙 by Eduardo Campos, {new Date().getFullYear()}{" "}
          <br />
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
