export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, including product listings, shopping cart, user authentication, and payment integration.",
    image: "https://images.pexels.com/photos/6169/woman-hand-desk-office.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A task management application with drag-and-drop functionality, user authentication, and real-time updates using Firebase.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Finance Dashboard",
    description:
      "A comprehensive finance dashboard with data visualization, charts, and analytics for tracking personal finances and investments.",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "D3.js", "TypeScript", "Express"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Weather App",
    description:
      "A weather application that provides real-time weather information based on user location or search queries, with beautiful visualizations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "5",
    title: "Blog Platform",
    description:
      "A modern blog platform with markdown support, comment system, and user authentication. Includes admin dashboard for content management.",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "6",
    title: "Recipe Finder",
    description:
      "A recipe finder application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "API Integration", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];