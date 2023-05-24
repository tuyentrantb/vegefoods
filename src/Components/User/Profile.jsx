import React, { useEffect, useState } from "react";
import {
  useToast,
  useColorModeValue,
  Box,
  Flex,
  Stack,
  Heading,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import bgImage from "../../Assets/bg-signup.jpg";
import { SignUpFunc } from "../../redux/authReducer/action";

function ManageUsers() {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userObj, setUserObj] = useState([]);
  const dispatch = useDispatch();
  const toast = useToast();
  const [userData, setUserData] = useState({});
  let { afterLoginUser } = useSelector((state) => state.AuthReducer);

  const getData = () => {
    axios
      .get(`https://lifestyle-mock-server-api.onrender.com/registeredUser`)
      .then((res) => {
        let user = res.data.filter((item) => item.email === afterLoginUser.email);
        setUserData(user[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    axios
      .get("https://lifestyle-mock-server-api.onrender.com/registeredUser")
      .then((response) => {
        setUserObj(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function ChangeProfileRequest() {
    let checkAlready = false;

    userObj.length > 0 &&
      userObj.forEach((el) => {
        if (el.email === email) {
          checkAlready = true;
        }
      });

    if (!checkAlready) {
      dispatch(
        SignUpFunc({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
      );

      setEmail("");
      setPassword("");
      setfirstName("");
      setlastName("");
    } else {
      toast({
        title: `User already Signed up !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    }
  }

  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <Flex
        minH={"auto"}
        align={"center"}
        justify={"center"}
        backgroundImage={bgImage}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading
              fontSize={"4xl"}
              textAlign={"center"}
              color={"saddlebrown "}
            >
              My profile
            </Heading>
          </Stack>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={userData.firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      value={userData.lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={userData.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={userData.password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={ChangeProfileRequest}
                  loadingText="Submitting"
                  size="lg"
                  bg={"#df9018"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                >
                  Update
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default ManageUsers;
