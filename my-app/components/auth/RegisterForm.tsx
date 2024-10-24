"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { developerRegSchema, interviewerLoginSchema, interviewerRegSchema, loginSchema } from "@/schemas/authFormSchema";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../CustomButton";
import CustomFormInput from "../CustomFormInput";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import CustomSelect from "../CustomSelect";
import { roles } from "@/mocks/roles";

const RegisterForm = () => {
  const [isDeveloper, setisDeveloper] = useState(true);

  const form = useForm<
    z.infer<typeof interviewerRegSchema   | typeof  developerRegSchema>
  >({
    resolver: zodResolver(interviewerRegSchema   || developerRegSchema
     ),
    defaultValues: {
      email: "",
      password: "",
      companyName: "",
      name: "",
      githubUsername:""

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
    values: z.infer<typeof  interviewerRegSchema | typeof  developerRegSchema>
  ) {
    console.log(values);
  }
  return (
    <>
      <div className="w-full flex justify-between items-center bg-black border border-cardBorder rounded-[12px] px-[4px] py-[4px] my-6">
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
            name="name"
            label="Name"
            placeholder="Enter your name"
            labelStyles="text-[#CECFD2] font-medium text-sm mb-[6px]"
            inputStyles="rounded-[0.5rem] border border-cardBorder bg-cardBg :focus:border-cardBorder px-[0.8rem] h-11"
          />
          {isDeveloper && (
               <CustomFormInput
               form={form}
               name="githubUsername"
               label="Github Username"
               placeholder="Enter your github username"
               labelStyles="text-[#CECFD2] font-medium text-sm mb-[6px]"
               inputStyles="rounded-[0.5rem] border border-cardBorder bg-cardBg :focus:border-cardBorder px-[0.8rem] h-11"
             />
          )}
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
              {/* <CustomSelect form={form} name="role" label="Role" placeholder="Enter your role" labelStyles="text-[#CECFD2] font-medium text-sm mb-[6px]" selectTriggerStyles="rounded-[0.5rem] border border-cardBorder bg-cardBg :focus:border-cardBorder px-[0.8rem] h-11" selectContent={roles} selectContentStyles="bg-cardBg text-white"  /> */}
            </>
          )}

          <CustomFormInput
            form={form}
            name="password"
            type="password"
            label="Password"
            placeholder="Create a password"
            labelStyles="text-[#CECFD2] font-medium text-sm"
            inputStyles="rounded-[0.5rem] border border-cardBorder bg-cardBg :focus:border-cardBorder px-[0.8rem] h-11"
          />
          {/* <div className="flex items-center justify-between">
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
          </div> */}

          <div className="flex flex-col gap-4 w-full ">
            <CustomButton
              styles="bg-blueAccent rounded-[1.8rem]  border-[2px] border-white border-opacity-[12%] flex items-center gap-3 font-semibold text-base"
              title="Get Started"
            />
          
        {isDeveloper ?  <CustomButton
              styles=" bg-transparent  rounded-[1.8rem]  border-[2px] border-white border-opacity-[12%] flex items-center gap-3 font-semibold text-base"
              title="Sign in with Github"
              imgSrc="/github.svg"
              imgAlt="Github"
            />: <CustomButton
            styles=" bg-transparent  rounded-[1.8rem]  border-[2px] border-white border-opacity-[12%] flex items-center gap-3 font-semibold text-base"
            title="Sign in with Linkedin"
            imgSrc="/linkedin.svg"
            imgAlt="Linkedin"
          />}
           
          </div>

          <p className="flex items-center justify-center text-sm font-normal leading-none text-[#94969C] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !mb-[6.4rem]">
          Already have an account?
            <Link
              href="/auth/login"
              className="text-sm font-semiBold leading-none text-[#CECFD2] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-1"
            >
              Login
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
};

export default RegisterForm;
