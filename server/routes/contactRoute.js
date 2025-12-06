import express from "express";
import { contactFormHandler } from "../controllers/contactController.js";

const contactRouter = express.Router();

contactRouter.post("/", contactFormHandler);

export default contactRouter;
