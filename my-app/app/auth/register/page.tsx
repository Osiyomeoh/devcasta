import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

const page = () => {
  return (
    <main className="w-full h-full pt-[4.8rem] lg:pt-[5.6rem]">
      <div className="w-full flex flex-col gap-3">
        <h4 className="font-bold text-[1.8rem] text-[#F5F5F6]">Sign Up</h4>
        <p className="text-[#94969C] text-base font-normal">
        Start your 30-day free trial. <Link className="text-blueAccent" href="/pricing">View Pricing</Link>
        </p>
      </div>
      <RegisterForm />
    </main>
  );
};
export default page;
