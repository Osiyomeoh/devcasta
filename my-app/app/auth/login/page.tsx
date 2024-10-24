import LoginForm from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";


const page = () => {

 
  return (
    <main className="w-full h-full pt-[5.6rem]">
      <div className=" flex flex-col gap-3">
        <h4 className="font-bold text-[1.8rem] text-[#F5F5F6]">Welcome back</h4>
        <p className="text-[#94969C] text-base font-normal">
          Welcome back! Please enter your details.
        </p>
      </div>
      <div className="w-full flex justify-between items-center bg-black border border-cardBorder rounded-[12px] px-[4px] py-[4px] mt-6">
        <Button className="w-[10.8rem] h-9 rounded-[6px] flex items-center justify-center text-white font-semibold bg-cardBorder text-sm drop-shadow-[0_1px_2px_rgba(16,24,40,0.06)] ">
          Developer
        </Button>
        <Button className="w-[10.8rem] h-9 rounded-[6px] flex items-center justify-center bg-transparent text-[#667085] font-semibold text-sm drop-shadow-[0_1px_3px_rgba(16,24,40,0.1)]">
          Interviewer
        </Button>
      </div>
      <div className="mt-5">
         <LoginForm/>
      </div>
  
    </main>
  );
};
export default page;
