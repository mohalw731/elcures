import Link from 'next/link'
import React from 'react'

export default function Text_block({ title, text, button_text, button_link, show_button }) {
    return (
        <section className='py-20 flex flex-col gap-5 max-w-7xl mx-auto w-full min-h-full px-5'>
            <h2 className='md:text-5xl text-white text-3xl'>{title}</h2>
            <p className='md:text-xl  text-slate-100 tracking-wide	text-base'>{text}</p>
            {
                show_button && (
                    <div className="mt-5">
                        <Link href={button_link} className="bg-white p-3 rounded  hover:bg-yellow-500 transition-all duration-300">
                            {button_text}
                        </Link>
                    </div>
                )
            }
        </section>
    )
}
