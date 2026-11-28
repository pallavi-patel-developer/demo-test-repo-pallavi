import "dotenv/config";
import express from "express";

import {
  fetchCloudData,
  createCloudRecord,
} from "./services/apiService.js";

import webhookRoutes from "./routes/webhookRoutes.js";

const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Async API service is running",
  });
});

// REST API connector
app.get("/api/cloud-data", async (req, res) => {
  try {
    const data = await fetchCloudData();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch cloud data",
    });
  }
});

// Create cloud record
app.post("/api/cloud-data", async (req, res) => {
  try {
    const result = await createCloudRecord(req.body);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to create cloud record",
    });
  }
});

// Webhook endpoint
app.use("/webhooks", webhookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});