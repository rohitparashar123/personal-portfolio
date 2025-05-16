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
import React from "react";

export interface Skill {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React/Next.js", Icon: Code2Icon },
      { name: "TypeScript", Icon: MonitorIcon },
      { name: "UI/UX Design", Icon: LayersIcon },
      { name: "Performance", Icon: BrainCircuitIcon },
      { name: "Tailwind CSS", Icon: PackageIcon },
      { name: "JavaScript", Icon: CodeIcon },
      { name: "Redux Toolkit", Icon: CircuitBoardIcon },
      { name: "React Query", Icon: RefreshCcwIcon },
      { name: "Monorepo", Icon: FoldersIcon },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js/Express", Icon: ServerIcon },
      { name: "Database Design", Icon: DatabaseIcon },
      { name: "API Development", Icon: TerminalIcon },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { name: "Git/Version Control", Icon: GitBranchIcon },
      { name: "CI/CD", Icon: LayersIcon },
      { name: "Testing", Icon: FlaskConical },
      { name: "Docker", Icon: PackageIcon },
      { name: "Cloud Architecture", Icon: CloudIcon },
    ],
  },
];
