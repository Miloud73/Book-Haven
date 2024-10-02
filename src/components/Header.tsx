"use client";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import avatar from "../img/man.png";

const Header = () => {
  return (
    <header className="headerStyle">
      <motion.div
        className="leftcontainerStyle"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="bookTitleStyle">Book App</h1>
        <motion.input
          type="text"
          placeholder="Tell me what you like to read and we will get that..."
          className="searchInputStyle"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        />
      </motion.div>
      <motion.div
        className="rightContainerStyle"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link href="/profile" className="avatarLinkStyle">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            className="avatarStyle"
          >
            <Image
              src={avatar}
              alt="avatar"
              className="avatarStyle"
              width={50}
              height={50}
              priority // You can add this to load image faster
            />
          </motion.div>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
