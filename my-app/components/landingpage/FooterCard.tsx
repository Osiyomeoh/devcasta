import CustomButton from '../CustomButton'
import Image from 'next/image'

const FooterCard = () => {
  return (
    <div className="w-full h-[19.1rem] bg-cardBg md:bg-[#13161B] mt-16 rounded-[16px] px-8 md:px-0  pb-10 flex flex-col items-center justify-center">
      
    <Image src="/avatars.svg" alt="avatars" className="my-8" width={120} height={56}/>

    <h5 className="font-semibold text-xl text-center text-[#F7F7F7]">Still have questions?</h5>
    <p className="mt-2 text-[#94979C] font-normal text-lg text-center">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
    <CustomButton
      title="Get in touch"
      styles="h-12 w-[8.3rem] mt-8 rounded-[1.8rem] bg-blueAccent text-white border border-[#373A41] font-semiBold text-base"
    />
   

</div>
  )
}

export default FooterCard