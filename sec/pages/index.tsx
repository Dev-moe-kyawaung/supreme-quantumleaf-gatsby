import { motion, useScroll, useTransform } from 'framer-motion';
import { graphql } from 'gatsby';

export default function QuantumLeaf({ data }) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      <motion.div style={{ scale }} className="hero-section">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          QUANTUM LEAF
        </h1>
        <p className="text-2xl mt-4">Digital Architect • Systems Thinker</p>
      </motion.div>
      {/* Advanced MDX Content + Project Grid with 3D hover */}
    </div>
  );
}
