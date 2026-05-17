import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', stagger = 0.1 }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const elements = container.querySelectorAll('.sr-item');
        elements.forEach((el) => el.classList.add('sr-hidden'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = entry.target.querySelectorAll('.sr-item');
                        items.forEach((item, i) => {
                            setTimeout(() => {
                                item.classList.remove('sr-hidden');
                                item.classList.add('sr-visible');
                            }, i * stagger * 1000);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(container);

        return () => observer.disconnect();
    }, [stagger]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}
