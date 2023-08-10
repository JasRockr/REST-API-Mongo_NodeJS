import express from "express";
import cookieParser from "cookie-parser";
import config from "./config.js";
import mongoConn from "./database/dbMongo.config.js";

// App
const app = express();

app.use(express.json());
app.use(cookieParser());

// Listen Server
app.listen(config.port, config.host, () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});

// Database
mongoConn();

export default app;
