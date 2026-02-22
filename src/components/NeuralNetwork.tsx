const LINES = [
  { x1: 120, y1: 80, x2: 340, y2: 200, o: 0.4 },
  { x1: 200, y1: 50, x2: 500, y2: 180, o: 0.5 },
  { x1: 80, y1: 250, x2: 400, y2: 100, o: 0.3 },
  { x1: 450, y1: 60, x2: 700, y2: 280, o: 0.6 },
  { x1: 300, y1: 300, x2: 600, y2: 120, o: 0.4 },
  { x1: 150, y1: 180, x2: 550, y2: 320, o: 0.3 },
  { x1: 500, y1: 200, x2: 800, y2: 90, o: 0.5 },
  { x1: 60, y1: 150, x2: 280, y2: 350, o: 0.4 },
  { x1: 350, y1: 70, x2: 650, y2: 250, o: 0.3 },
  { x1: 700, y1: 150, x2: 850, y2: 300, o: 0.5 },
  { x1: 100, y1: 320, x2: 450, y2: 200, o: 0.4 },
  { x1: 550, y1: 80, x2: 750, y2: 350, o: 0.3 },
  { x1: 200, y1: 280, x2: 600, y2: 60, o: 0.5 },
  { x1: 400, y1: 250, x2: 820, y2: 150, o: 0.4 },
  { x1: 650, y1: 300, x2: 500, y2: 50, o: 0.3 },
  { x1: 70, y1: 60, x2: 350, y2: 300, o: 0.5 },
  { x1: 300, y1: 150, x2: 100, y2: 350, o: 0.4 },
  { x1: 750, y1: 80, x2: 600, y2: 320, o: 0.3 },
  { x1: 180, y1: 100, x2: 700, y2: 200, o: 0.6 },
  { x1: 420, y1: 350, x2: 800, y2: 100, o: 0.4 },
  { x1: 250, y1: 200, x2: 650, y2: 350, o: 0.3 },
  { x1: 550, y1: 250, x2: 300, y2: 80, o: 0.5 },
  { x1: 100, y1: 200, x2: 500, y2: 60, o: 0.4 },
  { x1: 780, y1: 200, x2: 600, y2: 80, o: 0.3 },
  { x1: 400, y1: 100, x2: 200, y2: 300, o: 0.5 },
];

const NODES = [
  { cx: 150, cy: 100, r: 2.5 },
  { cx: 340, cy: 200, r: 1.5 },
  { cx: 500, cy: 180, r: 3 },
  { cx: 700, cy: 280, r: 2 },
  { cx: 280, cy: 350, r: 1.5 },
  { cx: 600, cy: 120, r: 2.5 },
  { cx: 450, cy: 60, r: 2 },
  { cx: 800, cy: 90, r: 3 },
  { cx: 200, cy: 280, r: 1.5 },
  { cx: 550, cy: 320, r: 2 },
  { cx: 100, cy: 150, r: 2.5 },
  { cx: 650, cy: 250, r: 1.5 },
  { cx: 400, cy: 300, r: 2 },
  { cx: 750, cy: 150, r: 3 },
  { cx: 300, cy: 80, r: 2 },
  { cx: 850, cy: 300, r: 1.5 },
  { cx: 180, cy: 220, r: 2.5 },
  { cx: 520, cy: 100, r: 2 },
];

export default function NeuralNetwork() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-dark lg:h-[400px]">
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 900 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {LINES.map((line, i) => (
          <line
            key={`l-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#ebf2f0"
            strokeWidth="0.5"
            opacity={line.o}
          />
        ))}
        {NODES.map((node, i) => (
          <circle
            key={`n-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#ebf2f0"
            opacity={0.6}
          />
        ))}
      </svg>
    </div>
  );
}
