import Express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRoute from "./routes/productRoute.js"

dotenv.config()
const app = Express()

app.use(cors());
app.use(Express.json());
app.use(productsRoute)

app.listen(process.env.APP_PORT , () => {
    console.log(`server listen on port ${process.env.APP_PORT}`);
})
