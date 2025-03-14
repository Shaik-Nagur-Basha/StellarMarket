import React from "react";
import { motion } from "framer-motion";
import styles from "./ParallaxBanner.module.css";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute w-full h-full object-cover opacity-30 dark:opacity-20"
          autoPlay
          loop
          muted
          playsInline
          src="https://player.vimeo.com/external/439548064.sd.mp4?s=388b9a9a92174536525b99932dadca999d50e89b&profile_id=164&oauth2_token_id=57447761"
        >
          <source
            src="https://player.vimeo.com/external/439548064.sd.mp4?s=388b9a9a92174536525b99932dadca999d50e89b&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Discover the Future of Smart Shopping
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Discover the future of technology with our cutting-edge wearables
              and smart devices. Experience innovation that seamlessly
              integrates into your lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25 dark:shadow-blue-500/20">
                Shop Now
              </button>
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25 dark:shadow-purple-500/20">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1201&q=80"
                alt="Smart Watch Product"
                className={`w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-all duration-700 ${styles.heroImage}`}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-[2px] group-hover:opacity-0 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                  alt="AR Glasses"
                  className="w-24 h-24 object-cover rounded-lg transform hover:scale-110 transition-all duration-300"
                />
              </div>
              <p className="text-sm font-semibold mt-2 text-gray-900 dark:text-white">
                AR Glasses
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                New Release
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="absolute -top-6 -right-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-[0_10px_20px_rgba(147,51,234,0.3)] transition-all duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Smart Ring"
                  className="w-24 h-24 object-cover rounded-lg transform hover:scale-110 transition-all duration-300"
                />
              </div>
              <p className="text-sm font-semibold mt-2 text-gray-900 dark:text-white">
                Smart Ring
              </p>
              <p className="text-xs text-purple-600 dark:text-purple-400">
                Best Seller
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
