"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Gift, Cake } from "lucide-react";

export default function BirthdayPage() {
  const [openCard, setOpenCard] = useState(false);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating tulip */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/765/765547.png"
        alt="tulip"
        className="w-16 absolute top-10 left-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Floating rose */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/1752/1752946.png"
        alt="rose"
        className="w-16 absolute top-20 right-16"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Cute pig */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
        alt="pig"
        className="w-24 absolute bottom-10 left-20"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-pink-700 drop-shadow-lg text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 Happy Birthday My Love 🎉
      </motion.h1>

      {/* Birthday Card */}
      <div className="mt-10">
        {!openCard ? (
          <motion.button
            onClick={() => setOpenCard(true)}
            className="bg-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 hover:bg-pink-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Gift className="w-6 h-6" /> Open Your Gift
          </motion.button>
        ) : (
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg text-center border-4 border-pink-300"
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              💖 To My Princess 💖
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              You make my world brighter, sweeter, and more beautiful every day 🌸💞.
              Just like tulips and roses, you fill my life with love and happiness 🐷🍰.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Cake className="text-pink-500 w-10 h-10" />
              <Heart className="text-red-500 w-10 h-10 animate-pulse" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Extra floating sweet */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
        alt="sweet"
        className="w-12 absolute bottom-20 right-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}
