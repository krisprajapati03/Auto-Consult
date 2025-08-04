import * as messageService from "../services/messageService.js";

export const createMessageController = async (req, res) => {
  const message = await messageService.createMessage(req.body);
  res.status(201).json({ success: true, message: "Message sent", data: message });
};

export const getAllMessagesController = async (req, res) => {
  const search = req.query.search || "";
  const messages = await messageService.getAllMessages(search);
  res.status(200).json({ success: true, data: messages });
};
