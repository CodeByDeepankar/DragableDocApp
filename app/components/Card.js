"use client";

import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion, scale } from "framer-motion";

function Card({ data, reference }) {
  console.log(data);

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{
        bounceDamping: 10,
        bounceStiffness: 100,
      }}
      className="relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      <FaFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.dec}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex justify-between items-center py-3 px-8 mb-5">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose size={12} color="#fff" />
            ) : (
              <LuDownload size={12} color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 `}>
            <h3 className="w-full text-center font-semibold font-sm">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
