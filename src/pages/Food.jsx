import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getfoods } from "../redux/foodReducer/action";
import { Box, Grid, Spinner } from "@chakra-ui/react";
import Card from "../Components/Card";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

export const Food = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const { food, isLoading, isError } = useSelector((store) => {
    return store.foodReducer;
  });

  let Obj = {
    params: {
      category: searchParams.getAll("category"),
      _page: searchParams.get("page"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getfoods(Obj));
  }, [location.search]);

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Box
          textAlign={"center"}
          width={"100%"}
          height={"400px"}
          paddingTop="150px"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : isError ? (
        "Something went wrong"
      ) : (
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
      )}
      <Box mt={"30px"}>
        <Footer />
      </Box>
    </div>
  );
};
