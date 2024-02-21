import * as z from "zod";

export const SubsSchema = z.object({
  email: z.string().email({ message: "Whoops, make sure it's an email" }),
});
