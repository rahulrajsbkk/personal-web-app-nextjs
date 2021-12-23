import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-10%", opacity: 0 }}
      className="pageWrap"
    >
      <ContactSection />
    </motion.div>
  );
}
