import { Cpu } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const CircuitPath = ({ path, index }: { path: string; index: number }) => (
  <motion.path
    d={path}
    stroke="rgba(168, 85, 247, 0.4)"
    strokeWidth="2"
    fill="none"
    filter="url(#circuit-glow)"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        delay: index * 0.2,
        repeat: Infinity,
        repeatDelay: 1
      }
    }}
  />
);

const CpuIcon = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative w-40 h-40 rounded-xl bg-purple-500/5 p-4"
  >
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
      <defs>
        <filter id="circuit-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="rgba(168, 85, 247, 0.3)" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.5)" />
          <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
        </linearGradient>
      </defs>
      
      {/* CPU Architecture Paths */}
      <CircuitPath path="M 60,60 Q 80,60 100,80 T 140,100" index={0} />
      <CircuitPath path="M 140,60 Q 120,80 100,100 T 60,140" index={1} />
      <CircuitPath path="M 100,40 Q 100,60 100,80 T 100,160" index={2} />
      <CircuitPath path="M 40,100 Q 60,100 80,100 T 160,100" index={3} />
      <CircuitPath path="M 60,60 Q 80,80 100,100 T 140,140" index={4} />
      <CircuitPath path="M 140,60 Q 120,60 100,60 T 60,60" index={5} />
    </svg>
    
    <motion.div
      className="relative z-10 flex items-center justify-center h-full"
      animate={{
        scale: [1, 1.05, 1],
        transition: { duration: 2, repeat: Infinity }
      }}
    >
      <Cpu className="h-12 w-12 text-purple-500" />
    </motion.div>
    
    <motion.div
      className="absolute inset-0 rounded-xl"
      initial={{ opacity: 0 }}
      whileHover={{
        opacity: 1,
        transition: { duration: 0.3 }
      }}
      style={{
        background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)"
      }}
    />
  </motion.div>
);

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <div className="relative w-full max-w-5xl px-6 py-24 text-center">
        <div className="flex justify-center mb-12">
          <CpuIcon />
        </div>
        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          Optimize Your PC Like Never Before
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Experience lightning-fast performance with our professional PC optimization service. 
          Boost FPS, reduce latency, and unlock your computer's full potential.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-purple-500 hover:bg-purple-600"
            asChild
          >
            <a
              href="https://m.me/mroppy21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Contact Us
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer"
            >
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}