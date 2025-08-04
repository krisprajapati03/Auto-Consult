import express from "express";
import { Message } from "../models/Message.js";
import { createMessageController, getAllMessagesController } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", createMessageController);       // Public
router.get("/", getAllMessagesController);       // Admin
router.patch("/:id/mark-read", async (req, res) => {
  try {
    const msg = await Message.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.status(200).json({ success: true, data: msg });
  } catch (error) {
    console.error("Mark read error:", error.message);
    res.status(500).json({ success: false, message: "Failed to mark as read" });
  }
});
export default router;
