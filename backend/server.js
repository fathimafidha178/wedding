const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ===============================
// Middleware
// ===============================

app.use(
  cors({
    origin: " http://localhost:5000 ",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ===============================
// Health Check
// ===============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Wedding Invitation API is running",
  });
});

// ===============================
// API Routes
// ===============================

app.use("/api/invitations", require("./routes/invitation"));
app.use("/api/rsvp", require("./routes/rsvp"));

// ===============================
// 404 Handler
// ===============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ===============================
// Error Handler
// ===============================

app.use((err, req, res, next) => {
  console.error("Server error:", err);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// ===============================
// Server Configuration
// ===============================

const PORT = process.env.PORT || 5000;

// ===============================
// Start Server
// ===============================

async function startServer() {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL is missing in .env file");
    }

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();

