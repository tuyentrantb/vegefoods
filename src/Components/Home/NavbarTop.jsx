import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
} from "react-icons/md";

const NavbarTop = () => {
  return (
    <Box bg={"#82ae46"} paddingTop={2} paddingBottom={2}>
      <Flex
        width="80%"
        margin="auto"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Flex _hover={{ cursor: "pointer" }}>
            <MdPhone fontSize={"20px"} color="white" />
            <Box
              className="topnavoffer"
              fontFamily="sans-serif"
              color={"white"}
              fontWeight="500"
              fontSize="15px"
              pl="13px"
            >
              + 1235 2355 98
            </Box>
          </Flex>

          <Flex _hover={{ cursor: "pointer" }}>
            <MdEmail fontSize={"20px"} color="white" />
            <Box
              className="topnavoffer"
              fontFamily="sans-serif"
              color={"white"}
              fontWeight="500"
              fontSize="15px"
              pl="13px"
            >
              YOUREMAIL@EMAIL.COM
            </Box>
          </Flex>

          <Flex _hover={{ cursor: "pointer" }}>
            <Box
              className="topnavoffer"
              fontFamily="sans-serif"
              color={"white"}
              fontWeight="500"
              fontSize="15px"
              pl="13px"
            >
              3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
            </Box>
          </Flex>
      </Flex>
    </Box>
  );
};
export default NavbarTop;
