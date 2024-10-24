"use client";
import {
    Form
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { interviewerLoginSchema, loginSchema } from "@/schemas/authFormSchema";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import CustomFormInput from "../CustomFormInput";
import { Checkbox } from "../ui/checkbox";
const LoginForm = () => {
    const [isDeveloper, setIsDeveloper] = useState(true)

    // const AuthSchema = getAuthScemaType(isDeveloper)
  const form = useForm<z.infer<typeof loginSchema> >({
    resolver: zodResolver(loginSchema ),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormInput
          form={form}
          name="email"
          label="Email"
          placeholder="Enter your email"
          labelStyles="text-[#CECFD2] font-medium text-sm mb-[6px]"
          inputStyles="rounded-[0.5rem] border border-cardBorder bg-cardBg :focus:border-cardBorder px-[0.8rem] h-11"
        />
        <CustomFormInput
          form={form}
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          labelStyles="text-[#CECFD2] font-medium text-sm"
          inputStyles="rounded-[0.5rem] border border-cardBorder bg-cardBg :focus:border-cardBorder px-[0.8rem] h-11"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              className="w-[16px] h-[18px] border border-[#333741]"
              id="terms"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none text-[#CECFD2] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember for 30 days
            </label>
          </div>
          <Link
            href="/auth/forgot"
            className="text-sm font-medium leading-none text-[#CECFD2] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Forgot Password?
          </Link>
        </div>
        
        <div className="flex flex-col gap-4 w-full ">
        <CustomButton
            styles="bg-blueAccent rounded-[1.8rem]  border-[2px] border-white border-opacity-[12%] flex items-center gap-3 font-semibold text-base"
            title="Sign in"
           
          />
          <CustomButton
            styles=" bg-cardBg  rounded-[1.8rem]  border-[2px] border-white border-opacity-[12%] flex items-center gap-3 font-semibold text-base"
            title="Sign in with Google"
            imgSrc="/google.svg"
            imgAlt="Google"
          />
          <CustomButton
            styles=" bg-cardBg  rounded-[1.8rem]  border-[2px] border-white border-opacity-[12%] flex items-center gap-3 font-semibold text-base"
            title="Sign in with Faceebook"
            imgSrc="/facebook.svg"
            imgAlt="Facebook"
          />
          <CustomButton
            styles=" bg-transparent  rounded-[1.8rem]  border-[2px] border-white border-opacity-[12%] flex items-center gap-3 font-semibold text-base"
            title="Sign in with Github"
            imgSrc="/github.svg"
            imgAlt="Github"
          />
        </div>
     
          <p className="flex items-center justify-center text-sm font-normal leading-none text-[#94969C] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !mb-[6.4rem]">
            Don't have an account?
            <Link
              href="/auth/signup"
              className="text-sm font-semiBold leading-none text-[#CECFD2] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-1"
            >
              Sign up
            </Link>
          </p>
 
      </form>
    </Form>
  );
};

export default LoginForm;
