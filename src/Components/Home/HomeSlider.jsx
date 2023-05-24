import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import sliderImage1 from "../../Assets/bg_1.jpg";
import sliderImage2 from "../../Assets/bg_2.jpg";

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Box
        width="auto"
        margin="auto"
        marginTop={3}
      >
        <Slider {...settings}>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage2}
            />
          </Box>
          <Box borderRadius={"8px"}>
            <Image
              borderRadius={"8px"}
              margin={"auto"}
              width={"100%"}
              src={sliderImage1}
            />
          </Box>
        </Slider>
      </Box>

    );
  }
}
