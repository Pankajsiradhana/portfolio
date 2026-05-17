import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RadarChart({ title, data, pills }) {
    const [hoveredNode, setHoveredNode] = useState(null);
    const chartId = useId();

    const center = 150;
    const radius = 110;
    const angles = [0, 1, 2, 3, 4].map((i) => -Math.PI / 2 + (i * 2 * Math.PI) / 5);

    const getPoint = (angle, r) => ({
        x: center + r * Math.cos(angle),
        y: center + r * Math.sin(angle),
    });

    const gridRings = [0.2, 0.4, 0.6, 0.8, 1].map((scale) =>
        angles.map((angle) => {
            const pt = getPoint(angle, radius * scale);
            return `${pt.x},${pt.y}`;
        }).join(' ')
    );

    const dataPoints = data.map((d, i) => {
        const pt = getPoint(angles[i], radius * d.value);
        return `${pt.x},${pt.y}`;
    }).join(' ');

    return (
        <div className="radar-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* SVG Chart Area */}
            <div style={{ position: 'relative', width: '100%', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                {/* Custom Tooltip */}
                <AnimatePresence>
                    {hoveredNode !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0 } }}
                            exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            style={{
                                position: 'absolute',
                                left: getPoint(angles[hoveredNode], radius * data[hoveredNode].value).x,
                                top: getPoint(angles[hoveredNode], radius * data[hoveredNode].value).y - 24,
                                transform: 'translate(-50%, -100%)',
                                background: '#FCEE0A',
                                color: '#0A2E1A',
                                borderRadius: 100,
                                padding: '4px 12px',
                                fontSize: 10,
                                fontWeight: 700,
                                pointerEvents: 'none',
                                zIndex: 10,
                                whiteSpace: 'nowrap',
                                boxShadow: '0 4px 12px rgba(252,238,10,0.3)',
                            }}
                        >
                            {data[hoveredNode].label}
                        </motion.div>
                    )}
                </AnimatePresence>

                <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
                    <defs>
                        <filter id={`glow-${chartId}`}>
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Grid Pentagons */}
                    <g className="radar-grid">
                        {gridRings.map((points, idx) => (
                            <polygon
                                key={idx}
                                points={points}
                                fill="none"
                                stroke="rgba(252,238,10,0.1)"
                                strokeWidth="1"
                                className="radar-grid-ring"
                            />
                        ))}
                    </g>

                    {/* Axis Lines */}
                    <g>
                        {angles.map((angle, i) => {
                            const endPt = getPoint(angle, radius);
                            return (
                                <line
                                    key={`axis-${i}`}
                                    x1={center}
                                    y1={center}
                                    x2={endPt.x}
                                    y2={endPt.y}
                                    stroke="rgba(252,238,10,0.08)"
                                    strokeWidth="1"
                                />
                            );
                        })}
                    </g>

                    {/* Axis Labels */}
                    <g>
                        {angles.map((angle, i) => {
                            // Push labels out depending on angle to avoid overlap
                            const isTop = i === 0;
                            const isBottom = i === 2 || i === 3;
                            const pushFactor = isTop ? 22 : isBottom ? 24 : 32;
                            const labelPt = getPoint(angle, radius + pushFactor);

                            return (
                                <text
                                    key={`label-${i}`}
                                    x={labelPt.x}
                                    y={labelPt.y}
                                    textAnchor="middle"
                                    alignmentBaseline="middle"
                                    fill="rgba(245,240,232,0.5)"
                                    className={`radar-axis-label ${hoveredNode === i ? 'hovered' : ''}`}
                                    onMouseEnter={() => setHoveredNode(i)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                >
                                    {data[i].label}
                                </text>
                            );
                        })}
                    </g>

                    {/* Data Shape with Animations */}
                    <motion.g
                        className="radar-data-group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.polygon
                            points={dataPoints}
                            fill="rgba(252,238,10,0.15)"
                            stroke="#FCEE0A"
                            strokeWidth="2"
                            variants={{
                                hidden: { pathLength: 0, fillOpacity: 0 },
                                visible: {
                                    pathLength: 1,
                                    fillOpacity: 1,
                                    transition: {
                                        pathLength: { duration: 1.2, ease: 'easeOut' },
                                        fillOpacity: { duration: 0.8, delay: 0.4, ease: 'easeOut' },
                                    },
                                },
                            }}
                            className="radar-shape"
                            style={{ transformOrigin: '150px 150px' }}
                        />

                        {/* Axis Dot Nodes (Visible + Invisible Hit Area) */}
                        {data.map((d, i) => {
                            const pt = getPoint(angles[i], radius * d.value);
                            return (
                                <g key={`node-group-${i}`}>
                                    {/* Visible Dot */}
                                    <motion.circle
                                        cx={pt.x}
                                        cy={pt.y}
                                        r="4"
                                        fill="#FCEE0A"
                                        filter={`url(#glow-${chartId})`}
                                        className={`radar-node ${hoveredNode === i ? 'hovered' : ''}`}
                                        variants={{
                                            hidden: { scale: 0, opacity: 0 },
                                            visible: {
                                                scale: 1,
                                                opacity: 1,
                                                transition: { duration: 0.4, delay: 0.8 + i * 0.1 },
                                            },
                                        }}
                                        style={{ pointerEvents: 'none' }}
                                    />
                                    {/* Invisible Hit Area */}
                                    <circle
                                        cx={pt.x}
                                        cy={pt.y}
                                        r="16"
                                        fill="transparent"
                                        style={{ pointerEvents: 'all', cursor: 'none' }}
                                        onMouseEnter={() => setHoveredNode(i)}
                                        onMouseLeave={() => setHoveredNode(null)}
                                    />
                                </g>
                            );
                        })}
                    </motion.g>
                </svg>
            </div>

            {/* Chart Title */}
            <h3 style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 18, color: '#F5F0E8', marginTop: 20 }}>
                {title}
            </h3>

            {/* Skill Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                {pills.map((pill) => (
                    <span key={pill} className="radar-pill">
                        {pill}
                    </span>
                ))}
            </div>
        </div>
    );
}
