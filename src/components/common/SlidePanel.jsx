import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SlidePanel({ isOpen, onClose, title, children }) {
    // Prevent background scrolling when panel is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Dark overlay backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(15, 15, 15, 0.6)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 9999,
                            cursor: 'pointer',
                        }}
                    />

                    {/* Sliding Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 1, 0.5, 1], // The exact requested cubic-bezier
                        }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            maxWidth: '800px',
                            background: '#1E352F', // Deep Green Theme
                            zIndex: 10000,
                            overflowY: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            boxShadow: '-10px 0 30px rgba(0,0,0,0.3)',
                            padding: window.innerWidth <= 480 ? '48px 16px' : window.innerWidth <= 768 ? '48px 24px' : '60px 40px',
                            color: '#F4F0EA',
                            cursor: 'auto',
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: 24,
                                right: 24,
                                width: 48,
                                height: 48,
                                borderRadius: '50%',
                                background: '#F9A825',
                                color: '#1E352F',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                fontSize: 24,
                                transition: 'transform 0.2s ease',
                                zIndex: 10,
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                        >
                            ✕
                        </button>

                        {title && (
                            <h2 style={{
                                fontFamily: '"Playfair Display", serif',
                                fontSize: 'clamp(36px, 5vw, 52px)',
                                color: '#F4F0EA',
                                marginBottom: 40,
                                paddingRight: 40,
                                fontWeight: 900,
                            }}>
                                {title}
                            </h2>
                        )}

                        <div className="panel-content">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
