import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Services({ services, title }) {
    return (
        <section className='md:py-20 pb-20 max-w-7xl mx-auto w-full min-h-full px-5'>
            <h2 className='md:text-5xl text-white text-3xl mb-5'>{title}</h2>
            <Accordion type="single" collapsible className="w-full">
                {services.map((service, index) => (
                    <AccordionItem key={service.id} value={`item-${service.id}`}>
                        <AccordionTrigger className='md:text-3xl text-lg' >
                           <div className='flex items-center md:gap-10 gap-2'>
                           <span className='text-yellow-500'>{index + 1}</span>
                           <span>{service.title}</span>
                           </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-slate-100 md:text-lg text-base'>
                            {service.text}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
