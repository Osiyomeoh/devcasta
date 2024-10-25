'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Faq() {
    return (
      <Accordion type="single" collapsible className="w-full md:w-[720px]">
        <AccordionItem className="border-[#22262F] pb-8 pt-6" value="item-1">
          <AccordionTrigger className="text-[#F5F5F6] font-normal text-lg w-[281px] text-start">How does Devcasta generate coding tests for developers?</AccordionTrigger>
          <AccordionContent className="text-[#94979C] font-normal text-base w-full text-start">
          Devcasta looks at a developer’s GitHub projects to generate personalized coding tests. It analyzes their past work to craft challenges that are relevant to their skills and experience.
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    )
  }
  