import { useEffect, useRef, useState } from "react";
import Title from "../common/Title";
import { Container } from "../common/Container";

const STATS = [
    { target: 2000, suffix: "", label: "tələbə" },
    { target: 30, suffix: "+", label: "təqaüd proqramı" },
    { target: 90, suffix: "%", label: "qəbul göstəricisi" },
];

function StatItem({ target, suffix, label, delay, isVisible }) {
    const spanRef = useRef(null);

    useEffect(() => {
        if (!isVisible) return;

        const timer = setTimeout(() => {
            let startTime = null;

            const tick = (timestamp) => {
                startTime ??= timestamp;
                const progress = Math.min((timestamp - startTime) / 2000, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                if (spanRef.current)
                    spanRef.current.textContent = Math.floor(eased * target) + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
        }, delay);

        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <div className="flex flex-col items-center gap-2">
            <span ref={spanRef} className="text-6xl font-bold tracking-tight text-neutral-800">
                0{suffix}
            </span>
            <span className="text-sm text-neutral-400">{label}</span>
        </div>
    );
}

export default function Results() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Container>
                <div>
                    <Title
                        title={"Nəticələrimizlə qürur duyuruq!"}
                        description={`Qürurla təqdim edirik: xaricdə təhsil yolunda yüzlərlə 
                                tələbəmizin parlaq nəticələri. Onların uğurları bizim üçün
                                ən böyük ilham mənbəyidir.`}
                    />
                </div>
                <section ref={ref} className="flex flex-col md:flex-row justify-center md:gap-[15vw] items-center gap-10 py-10">
                    {STATS.map((stat, i) => (
                        <StatItem key={stat.label} {...stat} delay={i * 200} isVisible={isVisible} />
                    ))}
                </section>
            </Container>
        </>
    );
}