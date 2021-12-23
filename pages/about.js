import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-10%", opacity: 0 }}
      className="pageWrap"
    >
      <AboutSection />
    </motion.div>
  );
}
