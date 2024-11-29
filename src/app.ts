import express from "express";
import userRoutes from "./routes/users";
import errorHandler from "./middlewares/errorHandler";
import morgan from "morgan";
import cors from "cors";
import { stream } from "./utils/logger";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("combined", { stream }));
app.use("/api/users", userRoutes);

// Default route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use(errorHandler);

export default app;
