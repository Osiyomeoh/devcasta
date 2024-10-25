'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
  
  export function Faq({question, answer}:{question:string; answer:string}) {
    return (
      <Accordion type="single" collapsible className="w-full md:w-[720px]">
        <AccordionItem className="border-[#22262F] pb-8 pt-6" value="item-1">
          <AccordionTrigger className="text-[#F5F5F6] font-normal text-lg w-[281px] text-start">{question}</AccordionTrigger>
          <AccordionContent className="text-[#94979C] font-normal text-base w-full text-start">
          {answer}
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    )
  }
  