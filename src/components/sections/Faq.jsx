import { useState } from "react";
import { Container } from "../common/Container";
import Title from "../common/Title";
import { faqData } from "../../data/siteData";

function AccordionItem({ item, isOpen, onToggle }) {
    return (
        <div
            className={`border border-gray-200 transition-colors duration-200 ${isOpen ? "bg-gray-50" : "bg-white"
                }`}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={isOpen}
            >
                <span
                    className={`text-sm font-semibold pr-4 transition-colors duration-200 ${isOpen ? "text-gray-900" : "text-gray-700"
                        }`}
                >
                    {item.question}
                </span>

                <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen
                            ? "bg-teal-600 text-white"
                            : "border border-gray-300 text-gray-500 group-hover:border-teal-600 group-hover:text-teal-600"
                        }`}
                >
                    {isOpen ? (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 7h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                        </svg>
                    )}
                </span>
            </button>

            <div
                style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 320ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <div className="overflow-hidden">
                    <p
                        className="px-6 pb-5 text-sm text-gray-500 cap leading-relaxed whitespace-pre-line"
                        style={{
                            opacity: isOpen ? 1 : 0,
                            transition: "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDelay: isOpen ? "60ms" : "0ms",
                        }}
                    >
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Accordion() {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <Container>
            <Title
                title={"FAQ"}
                description={"Sizin üçün ən vacib sualları topladıq və ətraflı cavablandırdıq"}
            />

            <div className="w-full mx-auto">
                <div className="flex flex-col gap-2">
                    {faqData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openId === item.id}
                            onToggle={() => handleToggle(item.id)}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}