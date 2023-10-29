import {instance} from "../server.js";

export const checkout = async (req, res) => {
  const options = {
    amount:Number(req.body.amount * 100),
    currency: "INR",
  };
  const order =await instance.orders.create(options)



  res.status(200).json({
    success:true,
    order,
  });
};

export const paymentVerification = async (req, res) => {

  console.log(req.body);

  res.status(200).json({
    success:true,
    order,
  });
};