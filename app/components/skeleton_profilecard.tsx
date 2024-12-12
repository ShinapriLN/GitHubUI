import { motion } from "framer-motion";

export default function SkeletonProfileCard() {
  return (
    <div className="flex bg-[#111729] rounded-xl p-2 gap-4 items-center">
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="rounded-xl w-16 h-16 bg-[#CDD5E0]"
      ></motion.div>
      <div className="flex flex-col gap-1">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="rounded-xl text-[1rem] bg-[#CDD5E0]"
        >
          <motion.p
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[#CDD5E0] text-[1rem]"
          >
            test name
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="rounded-xl text-[0.75rem] bg-[#CDD5E0]"
        >
          <motion.p
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[#CDD5E0] text-[0.75rem] sm:w-56 lg:w-96"
          >
            test description description
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
