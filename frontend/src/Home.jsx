import React from 'react'
import {Box, Stack} from "@chakra-ui/react";
import Card from './Card';
import axios from "axios";



const Home = () => {

  const checkoutHandler = async (amount) => {
    const {data} =await axios.post("http://localhost:4000/api/checkout",{
      amount
    })
    console.log(data);
  }

  return (
    <Box>
      <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"} direction={"row"}>
        <Card amount={5000} img="https://cdn.shopify.com/static/sample-images/teapot.jpg" checkoutHandler={checkoutHandler} />
        <Card amount={3000} img="https://cdn.shopify.com/static/sample-images/teapot.jpg" checkoutHandler={checkoutHandler} />
      </Stack>
    </Box>
  )
}

export default Home;