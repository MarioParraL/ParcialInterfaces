import mongoose from "npm:mongoose";
import { Contact } from "../types.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");

mongoose.connect("MONGO_URL");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
});

type ContactModelType = mongoose.Document & Contact;

const ContactModel = mongoose.model<ContactModelType>(
  "Contact",
  contactSchema,
);

export default ContactModel;
