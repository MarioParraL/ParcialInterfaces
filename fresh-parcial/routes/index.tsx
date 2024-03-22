import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ContactModel from "../db/Contact.ts";
import { Form } from "../islands/Form.tsx";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const params = await req.formData();
      const { name, email } = Object.fromEntries(params);
      ContactModel.create({ name, email });
      return ctx.render({ added: true });
    } catch (e) {
      console.error(e);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps<{ added?: boolean }>) => {
  return (
    <div>
      {props.data?.added}
      <Form />
    </div>
  );
};

export default Page;
