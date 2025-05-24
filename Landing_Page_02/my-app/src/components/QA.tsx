"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Faqs } from "@/data/main";


export default function Accordion() {
    return (
        <div className="max-w-[1440px] mx-auto w-full font-roboto md:px-20 px-5 py-10 bg-blueGray-100">

            <div className='text-center flex flex-col md:gap-6 gap-4 md:w-[75%] mx-auto w-full mb-10'>


                <h2 className='md:font-extrabold md:py-5 font-bold md:text-[56px] text-2xl bg-gradient-to-r from-[#C026D3] to-[#701A75] bg-clip-text text-transparent'>
                    Frequently asked questions
                </h2>
                <p className='font-normal md:text-xl text-base text-blueGray-600'>
                    Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                </p>
            </div>

            <div className="md:p-4 p-2 max-w-6xl mx-auto space-y-4">
                {Faqs.map(({ question, answer }, i) => (
                    <AccordionItem
                        key={i}
                        title={question}
                        content={answer}
                    />
                ))}
            </div>
        </div>
    );
}

function AccordionItem({
    title,
    content,
    defaultOpen = false,
}: {
    title: string;
    content: string;
    defaultOpen?: boolean;
}) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div
            className={`border-2 rounded-lg transition-all bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] ${open ? "border-fuchsia-300" : "border-transparent hover:border-fuchsia-300"
                }`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center p-5 text-left text-blueGray-900"
            >
                <span className="flex-grow font-medium text-base px-2">{title}</span>
                <FaChevronDown
                    size={24}
                    className={`transition-transform md:w-4 md:h-4 text-fuchsia-600 duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            {open && (
                <div className="px-5 pb-5 text-sm text-blueGray-600">
                    {content}
                </div>
            )}
        </div>
    );
}
