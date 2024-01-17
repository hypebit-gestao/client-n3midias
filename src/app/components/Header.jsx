"use client";
import NavItem from "./NavItem";
import { listMenu } from "../utils/MenuList";
import Container from "./Container";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import useMenu from "../utils/hooks/useMenu";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-3 min-w-full flex items-center  absolute top-0">
      <Container>
        <nav className="flex items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mr-8"
          >
            <Logo />
          </motion.div>
          <ul className="hidden items-center md:flex">
            {listMenu.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                title={item.title}
                delay={item.animateDelay}
              />
            ))}
          </ul>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="hidden lg:flex"
          >
            <Button
              outline
              label={"Entre em Contato"}
              rounded={"rounded-xl"}
              fontSize={"text-md"}
              color={"text-green-primary"}
            />
          </motion.div>
          <div className="flex md:hidden text-4xl text-green-primary cursor-pointer">
            <GiHamburgerMenu onClick={() => {}} />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
