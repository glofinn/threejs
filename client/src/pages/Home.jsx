import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store/index.js";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion.js";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div></motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
