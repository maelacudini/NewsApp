import Hero from "./Hero";
import Footer from "./Footer";
import Side from "./Side";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main>
      <Hero />
      <Side />
      <Footer />
    </motion.main>
  );
};

export default Home;
