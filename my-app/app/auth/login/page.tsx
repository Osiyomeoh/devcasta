import LoginForm from "@/components/auth/LoginForm";

const page = () => {
  return (
    <main className="w-full h-full pt-[4.8rem] lg:pt-[5.6rem]">
      <div className="w-full flex flex-col gap-3">
        <h4 className="font-semibold text-[1.8rem] text-[#F5F5F6]">Welcome back</h4>
        <p className="text-[#94969C] text-base font-normal">
          Welcome back! Please enter your details.
        </p>
      </div>
      <LoginForm />
    </main>
  );
};
export default page;
