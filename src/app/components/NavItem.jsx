"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavItem = ({ href, title, delay }) => {
  return (
    <Link to={href} spy={true} smooth={true} offset={0} duration={700}>
      <motion.li
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: delay }}
        className="px-5 text-xl text-green-dark font-semibold cursor-pointer hover:text-yellow-primary transition-all duration-200"
      >
        {title}
      </motion.li>
    </Link>
  );
};

export default NavItem;
