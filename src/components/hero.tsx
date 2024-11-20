import { Cpu } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const CircuitAnimation = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
    <defs>
      <filter id="circuit-glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feFlood floodColor="rgba(168, 85, 247, 0.6)" result="color" />
        <feComposite in="color" in2="blur" operator="in" result="glow" />
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="power-surge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(168, 85, 247, 0.8)" />
        <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
      </linearGradient>
    </defs>
    
    {/* CPU Circuit Paths */}
    {[
      "M 25,25 h 20 v 20",
      "M 75,25 h -20 v 20",
      "M 25,75 h 20 v -20",
      "M 75,75 h -20 v -20",
      "M 50,25 v 50",
      "M 25,50 h 50",
      "M 40,40 h 20",
      "M 40,60 h 20"
    ].map((d, i) => (
      <motion.path
        key={i}
        d={d}
        stroke="url(#power-surge)"
        strokeWidth="2"
        fill="none"
        filter="url(#circuit-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          delay: i * 0.15,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut"
        }}
      />
    ))}
  </svg>
);

const CpuIcon = () => (
  <motion.div
    className="relative w-20 h-20 mx-auto"
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="absolute inset-0 rounded-xl bg-purple-500/10 p-3"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <CircuitAnimation />
    </motion.div>
    
    <motion.div
      className="relative z-10 flex items-center justify-center h-full"
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Cpu className="h-8 w-8 text-purple-500" />
    </motion.div>
  </motion.div>
);

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <div className="relative w-full max-w-5xl px-6 py-24 text-center">
        <CpuIcon />
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
              offset={-1}
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