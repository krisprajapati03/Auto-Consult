import { Message } from "../models/Message.js"

export const createMessage = async (data) => await Message.create(data);

export const getAllMessages = async (search = "") => {
  const query = search
    ? {
        $or: [
          { name: new RegExp(search, "i") },
          { email: new RegExp(search, "i") },
          { phone: new RegExp(search, "i") },
          { message: new RegExp(search, "i") },
        ],
      }
    : {};

  return await Message.find(query).sort({ sentAt: -1 });
};
