import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const CustomButton = ({title, imgSrc, imgAlt, styles}:{title:string, imgAlt?:string, imgSrc?:string, styles?:string}) => {
  return (
    <Button  className={`w-full h-11 ${styles}`} type="submit">
        {imgSrc &&(  <Image src={imgSrc} alt={imgAlt!} width={20} height={20} className=""/>)}
  
        {title}</Button>
  )
}

export default CustomButton