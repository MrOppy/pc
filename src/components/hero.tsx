import { Cpu } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Circuit = () => (
  <svg className="absolute w-full h-full" viewBox="0 0 200 200">
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {[
      "M 100 100 C 140 100, 160 120, 180 120",
      "M 100 100 C 120 140, 140 160, 140 180",
      "M 100 100 C 60 100, 40 80, 20 80",
      "M 100 100 C 80 60, 60 40, 60 20",
      "M 100 100 C 120 80, 140 60, 160 40",
      "M 100 100 C 80 120, 60 140, 40 160",
    ].map((path, i) => (
      <motion.path
        key={i}
        d={path}
        stroke="rgba(168, 85, 247, 0.4)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileHover={{ 
          pathLength: 1,
          opacity: 0.8,
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
        exit={{ pathLength: 0, opacity: 0 }}
      />
    ))}
  </svg>
);

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative w-32 h-32 rounded-full bg-purple-500/10 p-3 ring-1 ring-purple-500/20"
          >
            <Circuit />
            <div className="relative z-10 flex items-center justify-center h-full">
              <Cpu className="h-8 w-8 text-purple-500" />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={false}
              whileHover={{
                background: [
                  "radial-gradient(circle at center, rgba(168, 85, 247, 0) 0%, transparent 0%)",
                  "radial-gradient(circle at center, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
                ],
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
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
              smooth={true}
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