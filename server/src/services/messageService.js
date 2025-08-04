import * as messageDao from "../dao/messageDao.js";
import { mailSender } from "../utils/emailHelper.js";

export const createMessage = async (data) => {
  const message = await messageDao.createMessage(data);
  return message;
};

export const getAllMessages = async (search) => {
  return await messageDao.getAllMessages(search);
};
