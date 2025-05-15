"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Globe,
  BookOpen,
  Code,
  Users,
  Laptop,
} from "lucide-react";

export function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none opacity-50" />

      <div className="section-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-[700px]">
            With over a decade of experience in software development, I bring
            ideas to life through code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <Card className="glass-effect overflow-hidden card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Professional Journey
                </h3>
                <div className="prose prose-gray dark:prose-invert">
                  <p className="text-muted-foreground mb-4">
                    As a Software developer with 3+ years of experience, I've
                    led numerous successful projects and mentored development
                    teams across various industries. My expertise spans from
                    architecting scalable backend systems to crafting intuitive
                    user interfaces.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    I specialize in building high-performance web applications
                    using modern technologies like React, Next.js. My approach
                    combines technical excellence with a deep understanding of
                    business needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="glass-effect p-6 text-center card-hover">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, efficient code
                  </p>
                </div>
              </Card>
              <Card className="glass-effect p-6 text-center card-hover">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Team Lead</h4>
                  <p className="text-sm text-muted-foreground">
                    Mentoring & leading development teams
                  </p>
                </div>
              </Card>
              <Card className="glass-effect p-6 text-center card-hover">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Laptop className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Full Stack</h4>
                  <p className="text-sm text-muted-foreground">
                    End-to-end development expertise
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <Card className="glass-effect overflow-hidden card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Experience & Education
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Frontend Developer
                      </h4>
                      <p className="text-muted-foreground">
                        Fusioncode Software Solution • 2024 - Present
                      </p>
                      {/* <p className="text-sm text-muted-foreground mt-1">
                        Developed innovative web applications and APIs
                      </p> */}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Software Engineer
                      </h4>
                      <p className="text-muted-foreground">
                        Atechnos Pvt. Ltd. • 2022 - 2024
                      </p>
                      {/* <p className="text-sm text-muted-foreground mt-1">
                        Leading development of enterprise-scale applications
                      </p> */}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        B.tech {"(Electrical Engineering)"}
                      </h4>
                      <p className="text-muted-foreground">
                        ITM University • 2018 - 2022
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect overflow-hidden card-hover">
              <CardContent className="py-8 px-9">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Interests & Hobbies
                </h3>
                <div className="flex justify-normal flex-col md:flex-row gap-4 md:gap-10">
                  <div className="flex items-center gap-3 p-6 rounded-lg glass-effect">
                    <Heart className="h-5 w-5 text-red-400" />
                    <span className="font-medium">Open Source</span>
                  </div>
                  <div className="flex items-center gap-3 p-6 rounded-lg glass-effect">
                    <Coffee className="h-5 w-5 text-amber-400" />
                    <span className="font-medium">Coffee & Code</span>
                  </div>
                  {/* <div className="flex items-center gap-3 p-4 rounded-lg glass-effect">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <span className="font-medium">Tech Blogs</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg glass-effect">
                    <BookOpen className="h-5 w-5 text-green-400" />
                    <span className="font-medium">Learning</span>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
