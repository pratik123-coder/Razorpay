import React from 'react'
import {Box, Stack} from "@chakra-ui/react";
import Card from './Card';
import axios from "axios";

const Home = () =>
{

  const checkoutHandler = async (amount) =>
  {
    const { data: { key } } = await axios.get("http://localhost:4000/api/getkey")
    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
      amount
    })



  const options = {
    key,
    amount: order.amount,
    currency: "INR",
    name: "KIIT Fest",
    description: "Test Transaction",
    image: "https://cdn.shopify.com/static/sample-images/teapot.jpg",
    order_id: order.id,
    callback_url: "http://localhost:4000/api/paymentverification",
    prefill: {
        name: "Gaurav Kumar",  //logged in username
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
    },
    notes: {
        address: "Razorpay Corporate Office"
    },
    theme: {
        "color": "#121212"
    }
  };
    const razor = new window.Razorpay(options);
    razor.open();

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