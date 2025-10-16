import { z } from "zod";

const RowSchema = z.object({
  checked: z.boolean().optional(),
  date: z.string(),
  from: z.string(),
  to: z.string(),
  artist: z.string(),
});

// Running order Schema
export const RunningOrderSchema = z.object({
  mainStage: z.array(RowSchema),
  secondaryStage: z.array(RowSchema),
});

// Travel information Schema
export const TravelInfoSchema = z.object({
  travelIn: z.object({
    from: z.string(),
    to: z.string(),
    dateTime: z.string(),
    flight: z.string(),
  }),
  travelOut: z.object({
    from: z.string(),
    to: z.string(),
    dateTime: z.string(),
    flight: z.string(),
  }),
  travelingParty: z.array(
    z.object({
      name: z.string(),
      phoneNumber: z.string(),
      role: z.string(),
    })
  ),
  artistContact: z.object({
    name: z.string(),
    phoneNumber: z.string(),
    email: z.string().optional(),
  }),
});

// Guest list Schema
export const GuestListSchema = z.object({
  allocation: z.object({
    aaa: z.string().or(z.number()).optional(),
    vip: z.string().or(z.number()).optional(),
    ga: z.string().or(z.number()).optional(),
  }),
  aaaGuests: z.array(
    z.object({
      name: z.string().optional(),
      phoneNumber: z.string().optional(),
      role: z.string().optional(),
    })
  ),
  vipGuests: z.array(
    z.object({
      name: z.string().optional(),
      phoneNumber: z.string().optional(),
      role: z.string().optional(),
    })
  ),
  gaGuests: z.array(
    z.object({
      name: z.string().optional(),
      phoneNumber: z.string().optional(),
      role: z.string().optional(),
    })
  ),
});
