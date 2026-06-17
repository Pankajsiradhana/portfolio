import { useEffect, useState, useCallback } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [expanded, setExpanded] = useState(false);
    const [isLightBackground, setIsLightBackground] = useState(false);

    const onMouseMove = useCallback((e) => {
        setPosition({ x: e.clientX, y: e.clientY });

        // Add performance safeguard (optional, standard getComputedStyle isn't too expensive if limited to section)
        // Check if cursor is over a light background (#F5F0CC / rgb(245, 240, 232))
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (element) {
            const section = element.closest('section') || element.closest('[style*="background"]');
            if (section) {
                const bg = window.getComputedStyle(section).backgroundColor;
                if (bg === 'rgb(244, 240, 234)' || bg === '#F4F0EA') {
                    setIsLightBackground(true);
                    return;
                }
            }
        }
        setIsLightBackground(false);
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);

        const interactiveElements = () =>
            document.querySelectorAll('a, button, [data-cursor-hover], .accordion-row, .card-hover, .skill-tag, .contact-row');

        const onEnter = () => setExpanded(true);
        const onLeave = () => setExpanded(false);

        const observer = new MutationObserver(() => {
            interactiveElements().forEach((el) => {
                el.removeEventListener('mouseenter', onEnter);
                el.removeEventListener('mouseleave', onLeave);
                el.addEventListener('mouseenter', onEnter);
                el.addEventListener('mouseleave', onLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        // Initial bind
        interactiveElements().forEach((el) => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            observer.disconnect();
            interactiveElements().forEach((el) => {
                el.removeEventListener('mouseenter', onEnter);
                el.removeEventListener('mouseleave', onLeave);
            });
        };
    }, [onMouseMove]);

    return (
        <div
            className={`custom-cursor ${expanded ? 'expanded' : ''} ${isLightBackground ? 'light-bg' : ''}`}
            style={{ left: position.x, top: position.y }}
        >
            <span className="cursor-arrow">↗</span>
        </div>
    );
}
