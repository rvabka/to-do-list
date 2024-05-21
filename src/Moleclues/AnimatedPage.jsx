import { motion } from "framer-motion";
import PropTypes from "prop-types";

function AnimatedPage({ children }) {
  return (
    <motion.div
      className="relative flex h-[75%] justify-center flex-column p-6"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      {children}
    </motion.div>
  );
}

AnimatedPage.propTypes = {
  children: PropTypes.node,
};

export default AnimatedPage;
