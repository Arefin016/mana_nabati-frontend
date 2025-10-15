import { z } from "zod";

export const EventFormSchema = z.object({
  eventName: z.string().min(1, "Event name is required"),
  promoterEmail: z.string().email("Invalid email address"),
});
