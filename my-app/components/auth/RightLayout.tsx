'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const RightLayout = () => {
const pathName = usePathname()
  const isLogin = pathName === '/auth/login'
  return (
    <section className="bg-cardBorder  sm:w-4/5 pl-[6rem] py-[120px] relative hidden xl:block overflow-hidden">
    <div className="absolute -right-6 top-0 h-[125px] w-[298px] -z-0">
    <Image src="/line-pattern.svg" alt="Line pattern" fill/>
    </div>
   
    {/* <div className="relative h-full w-full"> */}
    <Image src={isLogin ? "/screen-mock.svg":"/coding-screen.svg"} alt="Coding Screen Mock" className="h-full w-full" width={0} height={0} />
    {/* </div> */}
 
    <div className="absolute -left-6 -bottom-1 h-[125px] w-[298px]">
    <Image src="/line-pattern.svg" alt="Line pattern" fill/>
    </div>

    </section>
  )
}

export default RightLayout