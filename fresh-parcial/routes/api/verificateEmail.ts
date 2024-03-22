import { Handlers } from "$fresh/server.ts";
import ContactModel from "../../db/Contact.ts";

export const handler: Handlers = {
  POST: async (req: Request) => {
    try {
      const body = await req.json();
      const { email } = body;
      const exist = await ContactModel.findOne({ email });

      return new Response(JSON.stringify({ exist: exist != null }), {
        headers: { "Contents-type": "aplication/JSON" },
      });
    } catch (e) {
      console.error(e);
      return new Response("Error", { status: 500 });
    }
  },
};
