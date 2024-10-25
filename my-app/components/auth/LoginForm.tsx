"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { roles } from "@/mocks/roles";
import { interviewerLoginSchema, loginSchema } from "@/schemas/authFormSchema";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import CustomFormInput from "../CustomFormInput";
import CustomSelect from "../CustomSelect";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const LoginForm = () => {
  const [isDeveloper, setisDeveloper] = useState(true);

  const form = useForm<
    z.infer<typeof interviewerLoginSchema  | typeof loginSchema>
  >({
    resolver: zodResolver(interviewerLoginSchema  ||loginSchema ),
    defaultValues: {
      email: "",
      password: "",
      companyName: "",
      role: "",
    },
  });

  // const interviewerform = useForm<z.infer<typeof interviewerLoginSchema > >({
  //   resolver: zodResolver(interviewerLoginSchema ),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //     companyName:"",
  //     role:""

  //   },
  // })

  function onSubmit(
    values: z.infer<typeof  interviewerLoginSchema | typeof  loginSchema>
  ) {
    console.log(values);
  }
  return (
    <>
      <div className="w-full flex justify-between items-center bg-black border border-cardBorder rounded-[12px] px-[4px] py-[4px] mt-8 mb-6 lg:my-5">
        <Button
          onClick={() => setisDeveloper(true)}
          className={`w-[10.8rem] h-9 rounded-[6px] flex items-center justify-center text-white font-semibold ${
            isDeveloper
              ? "bg-cardBg text-white"
              : "bg-transparent text-[#667085]"
          } text-sm drop-shadow-[0_1px_2px_rgba(16,24,40,0.06)]`}
        >
          Developer
        </Button>
        <Button
          onClick={() => setisDeveloper(false)}
          className={`w-[10.8rem] h-9 rounded-[6px] flex items-center justify-center  ${
            !isDeveloper
              ? "bg-cardBg text-white"
              : "bg-transparent text-[#667085]"
          } font-semibold text-sm drop-shadow-[0_1px_3px_rgba(16,24,40,0.1)]`}
        >
          Interviewer
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <CustomFormInput
            form={form}
            name="email"
            label="Email"
            placeholder="Enter your email"
            labelStyles="text-[#CECFD2] font-medium text-sm mb-[6px]"
            inputStyles="rounded-[0.5rem] border border-cardBorder bg-cardBg :focus:border-cardBorder px-[0.8rem] h-11"
          />
          {!isDeveloper && (
            <>
              <CustomFormInput
                form={form}
                name="companyName"
                label="Company Name"
                placeholder="Enter company name"
                labelStyles="text-[#CECFD2] font-medium text-sm mb-[6px]"
                inputStyles="rounded-[0.5rem] border border-cardBorder bg-cardBg :focus:border-cardBorder px-[0.8rem] h-11"
              />
              <CustomSelect form={form} name="role" label="Role" placeholder="Enter your role" labelStyles="text-[#CECFD2] font-medium text-sm mb-[6px]" selectTriggerStyles="rounded-[0.5rem] border border-cardBorder bg-cardBg :focus:border-cardBorder px-[0.8rem] h-11" selectContent={roles} selectContentStyles="bg-cardBg text-white"  />
            </>
          )}

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
            Don&apos;t have an account?
            <Link
              href="/auth/register"
              className="text-sm font-semiBold leading-none text-[#CECFD2] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-1"
            >
              Sign up
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
