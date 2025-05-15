"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2Icon,
  ServerIcon,
  TerminalIcon,
  BrainCircuitIcon,
  DatabaseIcon,
  CloudIcon,
  GitBranchIcon,
  FlaskConical,
  MonitorIcon,
  PackageIcon,
  LayersIcon,
  CodeIcon,
  CircuitBoardIcon,
  RefreshCcwIcon,
  FoldersIcon,
} from "lucide-react";

export function Skills() {
  const skillCategories = {
    frontend: [
      { name: "React/Next.js", icon: <Code2Icon className="w-5 h-5" /> },
      { name: "TypeScript", icon: <MonitorIcon className="w-5 h-5" /> },
      { name: "UI/UX Design", icon: <LayersIcon className="w-5 h-5" /> },
      { name: "Performance", icon: <BrainCircuitIcon className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <PackageIcon className="w-5 h-5" /> },
      { name: "Javascript", icon: <CodeIcon className="w-5 h-5" /> },
      { name: "Redux Toolkit", icon: <CircuitBoardIcon className="w-5 h-5" /> },
      { name: "React Query", icon: <RefreshCcwIcon className="w-5 h-5" /> },
      { name: "Monorepo", icon: <FoldersIcon className="w-5 h-5" /> },
    ],
    backend: [
      { name: "Node.js/Express", icon: <ServerIcon className="w-5 h-5" /> },
      { name: "Database Design", icon: <DatabaseIcon className="w-5 h-5" /> },
      { name: "API Development", icon: <TerminalIcon className="w-5 h-5" /> },
    ],
    devops: [
      {
        name: "Git/Version Control",
        icon: <GitBranchIcon className="w-5 h-5" />,
      },
      { name: "CI/CD", icon: <LayersIcon className="w-5 h-5" /> },
      { name: "Testing", icon: <FlaskConical className="w-5 h-5" /> },
      { name: "Docker", icon: <PackageIcon className="w-5 h-5" /> },
      { name: "Cloud Architecture", icon: <CloudIcon className="w-5 h-5" /> },
    ],
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-400 mx-auto max-w-[700px]">
            With over a decade of experience, {"I've"} mastered a wide range of
            technologies and best practices in software development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <Card className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
            <CardContent className="p-8">
              <Tabs defaultValue="frontend" className="w-full">
                <div className="flex justify-center mb-12">
                  <TabsList className="grid w-full max-w-md grid-cols-3 h-14 bg-white/5 p-1 rounded-2xl">
                    <TabsTrigger
                      value="frontend"
                      className="text-sm md:text-base data-[state=active]:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      Frontend
                    </TabsTrigger>
                    <TabsTrigger
                      value="backend"
                      className="text-sm md:text-base data-[state=active]:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      Backend
                    </TabsTrigger>
                    <TabsTrigger
                      value="devops"
                      className="text-sm md:text-base data-[state=active]:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      DevOps
                    </TabsTrigger>
                  </TabsList>
                </div>

                {Object.entries(skillCategories).map(([category, skills]) => (
                  <TabsContent key={category} value={category}>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                        hidden: { opacity: 0 },
                      }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 20 },
                          }}
                          whileHover={{ scale: 1.02 }}
                          className="group"
                        >
                          <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex items-center gap-4">
                              <div className="p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                              </div>
                              <h4 className="text-lg font-semibold text-white">
                                {skill.name}
                              </h4>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
