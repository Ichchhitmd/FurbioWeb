"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("./db/data-source");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandler_1 = require("./middleware/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use("/api/users", userRoutes_1.default);
// Root Endpoint
app.get("/", (req, res) => {
    res.send("Hello, TypeScript with Express and TypeORM!");
});
// Error Handling Middleware
app.use(errorHandler_1.errorHandler);
// Initialize TypeORM and Start Server
const PORT = process.env.PORT || 3000;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed:", error);
});
