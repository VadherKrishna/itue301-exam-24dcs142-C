const express = require("express");

const app = express();

const taskRoutes = require("./routes/tasks");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

app.use(express.json());

// Global Logging Middleware
app.use(logger);

// Routes
app.use("/tasks", taskRoutes);

// 404 Handler
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});