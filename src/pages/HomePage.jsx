import {
  Box,
  Divider,
  Flex,
  Image,
  Text,
  Grid
} from "@chakra-ui/react";
import React from "react";
import HomeSlider from "../Components/Home/HomeSlider";
import Footer from "../Components/Home/Footer";
import Navbar from "../Components/Home/Navbar";
import NavbarTop from "../Components/Home/NavbarTop";
import sliderImage3 from "../Assets/bg_3.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getfoods } from "../redux/foodReducer/action";
import Card from "../Components/Card";

function HomePage() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { food } = useSelector((store) => {
    return store.foodReducer;
  });

  useEffect(() => {
    dispatch(getfoods());
  }, [location.search]);

  return (
    <Box bgColor={"#fdfdfd"}>
      <Box display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
        <NavbarTop />
      </Box>
      <Navbar />

      <HomeSlider />

      {/* Our Benefits */}
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Flex marginTop={{ base: 3, sm: 4, md: 6, lg: 7 }} gap="20px">
          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-22Feb2023.jpg" />
          </Box>

          <Box>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg" />
          </Box>

          <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
            <Image src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg" />
          </Box>
        </Flex>
      </Box>

      {/* Foods store */}

      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Text
          width={{ base: "110px", sm: "170px", md: "170px", lg: "220px" }}
          fontSize={{ base: "100%", sm: "150%", md: "150%", lg: "200%" }}
          fontWeight={"semibold"}
          textAlign="left"
          borderBottom={"2px"}
          borderBottomWidth="5px"
          marginTop={{ base: 5, sm: 6, md: 7, lg: 10 }}
          borderBottomColor={"#f89f17"}
        >
          Our Products
        </Text>
        <Grid
          width={"80%"}
          margin={"auto"}
          justifyContent="space-between"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          columnGap="20px"
        >
          {food.length > 0 &&
            food.map((el) => {
              return <Card key={el.id} {...el} id={el.id} type={"food"} />;
            })}
        </Grid>
      </Box>

      <Box
        width="auto"
        margin="auto"
        marginTop={{ base: "20px", sm: "30px", md: "30px", lg: "40px" }}
      >
        <Image
          width="100%"
          borderRadius={"20px"}
          src={sliderImage3}
        />
      </Box>

      <Divider />
      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }}
        margin="auto"
      >
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;
