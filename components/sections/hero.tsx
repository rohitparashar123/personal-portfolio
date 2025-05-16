"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
      
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block glass-effect px-6 py-2 rounded-full text-sm mb-6"
            >
              <span className="gradient-text font-semibold">Software Developer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="block">Crafting Digital</span>
              <span className="gradient-text">Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-muted-foreground max-w-[600px] mb-8"
            >
              I build exceptional and scalable web applications that combine
              innovative design with robust functionality and outstanding user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* <Button
                size="lg"
                className="group text-white relative overflow-hidden glass-effect"
                asChild
              >
                <a href="#projects">
                  <span className="relative z-10 text-light">View Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    animate={{ scale: 1.5 }}
                    transition={{ duration: 0.4 }}
                  />
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="glass-effect group"
                asChild
              >
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-effect group"
                asChild
              >
                <a href="/assets/doc/rohit_parashar_frontend_developer.pdf" target="_blank">
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-3xl animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] aspect-square glass-effect rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl card-hover">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-20 md:-bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDownIcon className="h-6 w-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}