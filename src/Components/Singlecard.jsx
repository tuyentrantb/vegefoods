import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Single.css";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import axios from "axios";
import Footer from "./Home/Footer";
import Navbar from "./Home/Navbar";

const SinglecardFood = () => {
  const { id } = useParams();
  const toast = useToast();

  const { food } = useSelector((store) => {
    return store.foodReducer;
  });

  const [el] = food.filter((el) => {
    return el.id === id;
  });
 
  const handleAdd = () => {
    axios
      .post(`https://lifestyle-mock-server-api.onrender.com/cart`, el)
      .then((res) => {
        toast({
          title: "Added to cart",
          description: "You can checkout from Cart",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(el);
  return (
    <>
      <Navbar />
      <Container maxW={"90%"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Box className="img-hover-zoom">
              <Image
                className="hoverimage"
                rounded={"md"}
                alt={"product image"}
                src={el.image}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Box>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {el.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${el.price}.00
              </Text>
              <Text
                as="del"
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"xl"}
              >
                {el.actualPrice !== el.price ? "$"+el.actualPrice+".00"  : ""}
              </Text>{" "}
              <Text />
              <Text color={"#ff8800"} fontWeight={300}>
                ★★★★☆
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={"lg"}>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly 
                into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Net Quantity:
                    </Text>{" "}
                    600kg available
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Size:
                    </Text>{" "}
                    Small
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Country of Origin:
                    </Text>{" "}
                    Japan
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={"#ff8800"}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={handleAdd}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
};

export default SinglecardFood;
