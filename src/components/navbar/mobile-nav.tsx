import React, { Dispatch, SetStateAction, FC } from "react";
import { motion } from "framer-motion";
import { MobileNav } from "./navbar.style";
import { FiX } from "react-icons/fi";

type MobileNavProps = {
  className?: string;
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const liVariants = {
  open: {
    y: 0,
    opacity: 1,

  },
  closed: { y: -20, opacity: 0 },
};
const ulVariants = {
  open: {
    scale: 1.05,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      staggerDirection: -1,
      when: "afterChildren"
    },
  },
  closed: { scale: .5 },
};
const MobileNavBar: FC<MobileNavProps> = ({
  isNavOpen,
  setIsNavOpen,
  ...props
}) => {
  const allLi = ["I'm", "Menu", "Krub"];
  return (
    <MobileNav
      variants={variants}
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 300 }}
    >
      <FiX className="close" onClick={() => setIsNavOpen(false)}/>
      <motion.ul variants={ulVariants}>
        {allLi.map((title, index) => (
          <motion.li key={index} variants={liVariants}>
            <a href={title}>{title}</a>
          </motion.li>
        ))}
      </motion.ul>
    </MobileNav>
  );
};

export default MobileNavBar;
