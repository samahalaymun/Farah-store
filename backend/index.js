const express =require('express');
const dbConnect = require('./config/dbConnect');
const app=express();
const dotenv=require('dotenv').config();
const PORT=process.env.PORT || 4000;
const bodyParser = require("body-parser");
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const blogCategoryRouter = require("./routes/blogCatRoute");
const prodCategoryRouter = require("./routes/prodcategoryRoute");
const brandRouter = require("./routes/brandRoute");
const couponRouter = require("./routes/couponRoute");
const colorRouter = require("./routes/colorRoute");
const enquiryRouter = require("./routes/enqRoute");
var cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const morgan=require('morgan');
dbConnect();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.get("/", function (req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);
});

app.use('/api/user',authRouter)
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/blogCategory", blogCategoryRouter);
app.use("/api/proCategory", prodCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enquiryRouter);
app.use(notFound);
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`server is running ar port ${PORT}`);
});

