"use server";

import { PASSWORD_REGEX } from "@/lib/constants";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("fuck");

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;



const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "must be string",
        required_error: "username is missing",
      })
      .min(3, "Too short")
      .max(10, "Too long")
      .toLowerCase()
      .trim()
      .refine(checkUsername, "No curse word allowed"),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(10)
      .regex(
        PASSWORD_REGEX,
        "Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-"
      ),
    confirm_password: z.string().min(10),
  })
  .refine(checkPasswords, {
    message: "unmatching pasword",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
