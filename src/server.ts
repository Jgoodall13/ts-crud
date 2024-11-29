import app from "./app";
import connectDB from "./config/database";
import logger from "./utils/logger";

// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
