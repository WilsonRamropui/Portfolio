export type ShowcaseProject = {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Institutional" | "Infrastructure";
  area: string;
  structuralType: string;
  status: "Completed" | "In Progress" | "Concept";
  description: string;
  image: string;
  featured?: boolean;
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "project-1",
    title: "Apex Horizon Tower",
    category: "Commercial",
    area: "120,000 sq ft",
    structuralType: "Reinforced Concrete & Steel Core",
    status: "Completed",
    description: "A state-of-the-art 45-story commercial skyscraper featuring sustainable energy systems, a diagrid exoskeleton, and advanced seismic dampening.",
    image: "/images/showcase/apex-tower.png",
    featured: true,
  },
  {
    id: "project-2",
    title: "Lumina Riverside Estate",
    category: "Residential",
    area: "8,500 sq ft",
    structuralType: "Timber & Steel Frame",
    status: "Completed",
    description: "An ultra-luxury modern residential estate. Designed with sweeping cantilevered terraces and high-performance glazing to maximize natural light.",
    image: "/images/showcase/lumina-estate.png",
  },
  {
    id: "project-3",
    title: "Nexus Institutional Hub",
    category: "Institutional",
    area: "45,000 sq ft",
    structuralType: "Pre-cast Concrete",
    status: "In Progress",
    description: "A centralized university hub designed to facilitate collaborative research. Features a massive central atrium and suspended glass walkways.",
    image: "/images/showcase/nexus-hub.png",
    featured: true,
  },
  {
    id: "project-4",
    title: "Verdant Heights Complex",
    category: "Residential",
    area: "65,000 sq ft",
    structuralType: "Reinforced Concrete",
    status: "Concept",
    description: "A multi-unit residential complex focusing on vertical gardens and sustainable living, featuring a unique terraced architectural design.",
    image: "/images/showcase/verdant-heights.png",
  },
  {
    id: "project-5",
    title: "Metro Transit Pavilion",
    category: "Infrastructure",
    area: "22,000 sq ft",
    structuralType: "Tensile Fabric & Steel",
    status: "Completed",
    description: "A modern urban transit station designed with an iconic sweeping canopy roof that provides natural ventilation and shelter.",
    image: "/images/showcase/metro-pavilion.png",
  }
];
