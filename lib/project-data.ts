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
    title: "OpenQuote Collision Platform",
    description:
      "I worked on the OpenQuote Collision Platform, a web application that allows users to upload images of their damaged vehicles and receive repair estimates from certified body shops. The platform streamlines the collision repair quoting process, improving customer experience and shop efficiency.",
    image:
      "/assets/images/openquote-project-image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "React Query",
      "Ant Design",
    ],
    demoUrl: "https://openquote-collision-uat-frontend.247demo.ca",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Evity HR Portal",
    description:
      "Evity is an HR management platform designed to help companies streamline their hiring workflows—from creating custom job pages to managing candidates across various stages of the recruitment process. The portal equips HR teams with tools for job posting, template creation, and candidate tracking through an intuitive, interactive UI.",
    image:
      "/assets/images/evity-project-image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: [
      "React.js",
      "React Query",
      "Tailwind CSS",
      "Typescript",
      "Javascript",
      "Zustand",
    ],
    demoUrl: "https://evity-dev-3.azurewebsites.net/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Jio-bp RewardMeter",
    description:
      "The Jio-bp RewardMeter Program is a loyalty platform designed to reward commercial vehicle drivers for fueling at Jio-bp mobility stations. The web portal enables users to enroll, track reward points, and redeem them through an intuitive interface.",
    image:
      "/assets/images/jio-project-image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: [
      "Next.js",
      "Typescript",
      "Redux Toolkit",
      "Firebase",
      "Client TRPC",
      "Bootstrap 5",
    ],
    demoUrl: "https://www.jiobp.com/products-and-services/RewardMeter-Program",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Action Tesa Dashboard",
    description:
      "The Action Tesa Dashboard is a web portal built for TESA CONNECT—a loyalty and engagement platform for carpenters, contractors, and interior professionals. The dashboard allows partners to manage profiles, track reward points, access training materials, and verify product authenticity.",
    image:
      "/assets/images/at-project-image.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: [
      "Next.js",
      "Redux Toolkit",
      "Firebase",
      "Client TRPC",
      "Bootstrap 5",
      "Javascript",
    ],
    demoUrl: "https://dashboard.tesaconnect.in/",
    githubUrl: "#",
    featured: false,
  },
];
