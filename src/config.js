import { config } from "dotenv";
config();

export default {
  host: process.env.HOST || "127.0.0.1",
  port: process.env.PORT || 3000,

  dbUser: process.env.DB_MONGO_USER || "",
  dbPassword: process.env.DB_MONGO_PASS || "",
  dbServer: process.env.DB_MONGO_CLUSTER || "",
  dbDatabase: process.env.DB_MONGO_DATABASE || "",
  dbPort: process.env.DB_PORT || "",
};
