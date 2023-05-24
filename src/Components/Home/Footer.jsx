import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import {
  MdPhone,
  MdEmail,
  MdPointOfSale
} from "react-icons/md";

const Footer = () => {
  return (
    <Box
      className="footer"
      color={"gray"}
      marginTop={"20px"}
      fontFamily={"sans-serif"}
    >
      <Flex>
        <Flex
          justifyContent={"space-between"}
          width="90%"
          margin={"auto"}
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
          gap={10}
        >
          <Box>
            <Text
              color={"#82ae46"}
              fontWeight="bold"
              fontSize={{ base: "15px", sm: "20px", md: "20px", lg: "22px" }}
              textAlign="center"
            >
              Subcribe to our Newsletter
            </Text>

            <Text textAlign="center" fontSize={"15px"}>
            Get e-mail updates about our latest shops and special offers
            </Text>
          </Box>

          <Box>
          <Flex justify={"center"} gap={5} marginTop={7}>
              <Input bg={"white"} placeholder="Enter email address" width="300px" />
              <Button
                bg={"#82ae46"}
                _hover={{ bg: "black" }}
                color="white"
                width={{ base: "70%", sm: "20%", md: "20%", lg: "25%" }}
              >
                Subscribe
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>

      <Divider mt="50px" />

      <Grid
        mt={"50px"}
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(5,1fr)",
        }}
        rowGap={10}
        ml="5%"
      >
        <Box width="90%" textAlign={"left"} fontSize={"14px"}>
          <Text fontWeight="bold" fontSize={"16px"} color={"black"} mb={1}>
          Vegefoods
          </Text>
          <Text mb={"2px"}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</Text>
        </Box>

        <Box width="60%" textAlign={"left"} fontSize={"14px"}>
          <Text fontWeight="bold" fontSize={"16px"} color={"black"} mb={1}>
          Menu
          </Text>
          <Text mb={"2px"}>Shop</Text>
          <Text mb={"2px"}>About</Text>
          <Text mb={"2px"}>Journal</Text>
          <Text mb={"2px"}>Contact Us</Text>
        </Box>

        <Box width="100%" textAlign={"left"} fontSize={"14px"}>
          <Text fontWeight="bold" fontSize={"16px"} color={"black"} mb={1}>
          Help
          </Text>
          <Text mb={"2px"}>Shipping Information</Text>
          <Text mb={"2px"}>Returns & Exchange</Text>
          <Text mb={"2px"}>Terms & Conditions</Text>
          <Text mb={"2px"}>Privacy Policy</Text>
          <Text mb={"2px"}>FAQs</Text>
          <Text mb={"2px"}>Contact</Text>
        </Box>

        <Box width="100%" textAlign={"left"} fontSize={"14px"}>
          <Text fontWeight="bold" fontSize={"16px"} color={"black"} mb={1}>
          Have a Questions?
          </Text>
          <Flex>
            <MdPointOfSale fontSize={"30px"} color="black"/>
            <Text mb={"2px"}> 203 Fake St. Mountain View, San Francisco, California, USA</Text>
          </Flex>
          <Flex>
            <MdPhone fontSize={"20px"} color="black" />
            <Text mb={"2px"}> +2 392 3929 210</Text>
          </Flex>
          <Flex>
            <MdEmail fontSize={"20px"} color="black" />
            <Text mb={"2px"}> info@yourdomain.com</Text>
          </Flex>
        </Box>
      </Grid>

      <Flex
        color={"black"}
        justifyContent="space-between"
        flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
        mt="30px"
      >
        <Box
          alignItems="center"
          mt={"30px"}
        >
          <Flex
            alignItems="center"
            gap={10}
            margin="auto"
            justifyContent={"center"}
          >
            <Box>
              <AiFillFacebook fontSize={"24px"} />
            </Box>
            <Box>
              <FaTwitter fontSize={"24px"} />
            </Box>
            <Box>
              <BsInstagram fontSize={"24px"} />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Box>
        <Flex
          flexDir={{ lg: "row", md: "row", sm: "row", base: "column" }}
          gap={5}
          mt="20px"
          pb={"20px"}
        >
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
