import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque
            saepe cumque. Veritatis sunt commodi
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <Link to="" className="text-sm hover:underline">
             Recycyle
            </Link>
            <Link to="" className="text-sm hover:underline">
              Ewaste
            </Link>
            <Link to="" className="text-sm hover:underline">
              {" "}
              Science
            </Link>
            <Link to="" className="text-sm hover:underline">
              Digital Marketing
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <Link to="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link to="" className="text-sm hover:underline">
              Sitemap
            </Link>
            <Link to="" className="text-sm hover:underline">
              Careers
            </Link>
            <Link to="" className="text-sm hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">sahiltiwari1222@gmail.com</div>
          <div className="text-sm">+959883271929</div>
          <div className="flex gap-4 mt-4">
            <Link to="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </Link>
            <Link to="https://www.instagram.com/sahiltiwari2936/" className="hover:scale-110 text-xl">
              <BsInstagram />
            </Link>
            <Link to="https://twitter.com/sahil_tiwari9" className="hover:scale-110 text-xl">
              <BsTwitter />
            </Link>
            <Link to="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
