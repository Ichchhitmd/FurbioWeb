import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./db/data-source";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Root Endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express and TypeORM!");
});

// Error Handling Middleware
app.use(errorHandler);

// Initialize TypeORM and Start Server
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
