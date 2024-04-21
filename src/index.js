import connectionDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectionDB()
  .then(() => {
    app.listen(process.env.PORT || 4080, () => {
      // console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    // console.log("MONGO db connection failed !!! ", err);
  });
