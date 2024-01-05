// const Razorpay = require("razorpay");
// const instance = new Razorpay({
//   key_id: "",
//   key_secret: "",
// });
// const checkout=async(req,res)=>{
//     const option={
//         amount:55,
//         currency:"NIS"
//     }
//     const order = await instance.orders.create(option);
//     res.json({
//         success:true,
//         order
//     })
// }
// const paymentVerification = async (req, res) => {
//  const { razorPayOrderId, razorPayPaymentId } = req.body;
// };
// module.exports={
//     checkout,paymentVerification
// }