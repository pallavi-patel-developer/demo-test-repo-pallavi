import express from "express";
import crypto from "node:crypto";
import { addBackgroundTask } from "../workers/backgroundWorker.js";

const router = express.Router();

function verifyWebhookSignature(req) {
  const signature = req.headers["x-webhook-signature"];

  if (!signature) return false;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.WEBHOOK_SECRET)
    .update(req.body)
    .digest("hex");

  const received = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);

  if (received.length !== expected.length) {
    return false;
  }

  return crypto.timingSafeEqual(received, expected);
}

router.post(
  "/cloud-event",
  express.raw({ type: "application/json" }),
  (req, res) => {
    if (!verifyWebhookSignature(req)) {
      return res.status(401).json({
        success: false,
        message: "Invalid webhook signature",
      });
    }

    const event = JSON.parse(req.body.toString());

    // Acknowledge the webhook quickly.
    res.status(202).json({
      success: true,
      message: "Webhook received",
    });

    // Process the event asynchronously.
    addBackgroundTask({
      id: event.id || crypto.randomUUID(),
      data: event,
    });
  }
);

export default router;