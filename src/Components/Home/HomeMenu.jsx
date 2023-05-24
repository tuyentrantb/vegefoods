import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/HomeMenu.css"

const HomeMenu = () => {
    return (
        <Flex
            height={{ base: "3.2rem", md: "4.94rem" }}
            minW={"100%"}
            justify={"space-around"}
            pos="relative"
            align="center"
            display={{ base: "none", lg: "Flex" }}

            width="36%"
            gap={5}
        >
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}


            >
                <Link to="/">HOME</Link>
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}

            >
                <Link to="/">SHOP</Link>
                <Box
                    top="4rem"
                    className="drop-down-content"
                    left="-2rem"
                    overflow="hidden"
                    bg="white"
                    pos={"absolute"}
                    width="1000px"
                    transition={"all 0.3s"}
                    height={"0vh"}
                    marginTop="14px"
                >
                    <Link to="#">
                        <div className="main-menu">
                            <div className="hoverlist">
                                <ul>
                                    <li>
                                        <Link to="#">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Wishlist</Link>
                                    </li>
                                    <li>
                                        <Link to="/food">Single Product</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Cart</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Checkout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </Box>
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}
            >
                <Link to="#">ABOUT</Link>
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}

            >
                <Link to="#">BLOG</Link>
            </Flex>
            <Flex
                justify={"center"}
                className="dropDown"
                height="100%"
                align={"center"}
                width="15%"
                _hover={{ color: "#f89f17" }}

            >
                <Link to="#">CONTACT</Link>
            </Flex>
        </Flex>
    );
};

export default HomeMenu;