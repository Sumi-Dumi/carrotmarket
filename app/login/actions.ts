"use server";

import {redirect} from "next/navigation";


export async function onSubmit(prevState: any, formData: FormData) {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  redirect("/");
  return {
    errors: ["wrong password", "password too short"],
  };
}
