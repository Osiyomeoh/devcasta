import * as z from "zod";
export const loginSchema = z.object({
    email: z.string().email({message:"Please enter a valid email"}),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  })

  export const interviewerLoginSchema = z.object({
    companyName: z.string().min(1, {message:"Please enter a valid company name"}),
    email: z.string().email({message:"Please enter a valid email"}),
    role: z.string().min(1, {message:"Please enter a valid role"}),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  })

  export const getAuthScemaType = (isDeveloper: boolean) => {
    return isDeveloper ? loginSchema : interviewerLoginSchema
  }