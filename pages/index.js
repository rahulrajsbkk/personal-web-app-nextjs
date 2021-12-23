import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-10%", opacity: 0 }}
      className="pageWrap"
    >
      <HeroSection />
    </motion.div>
  );
}
