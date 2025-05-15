"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-card/50 border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/rohitparashar123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rohit-parashar-3303981bb/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://x.com/RohitPa79341459"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </motion.a>
            <motion.a
              href="mailto:rohitparasharsofficial@gmail.com"
              whileHover={{ y: -3 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MailIcon className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
