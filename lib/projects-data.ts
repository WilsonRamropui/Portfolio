export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;       // 3D Render
  blueprint: string;   // 2D Floor Plan
  tags: string[];
  status: "active" | "archived" | "completed";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Horizon Residence",
    description: "A modernist architectural study featuring expansive glass facades and open-plan living, situated on a sloped terrain.",
    detailedDescription: "The Horizon Residence is a comprehensive Civil Engineering and Architectural design showcase. It bridges the gap between aesthetic modernist geometry and structural integrity. The 3D render highlights the material palette of raw concrete and expansive glazing, while the 2D floor plan details the structural grid, load-bearing walls, and internal circulation flows.",
    slug: "horizon-residence",
    image: "/images/blueprint_4k.png",
    blueprint: "/images/blueprint_4k.png",
    tags: ["Residential", "3D Render", "Floor Plan"],
    status: "completed",
    links: {},
    author: "Wilson Ramropui",
    authorAvatar: "/favicon.ico",
    techStack: ["AutoCAD", "Revit", "V-Ray", "SketchUp", "Civil 3D"],
    features: ["Topographic Analysis", "Structural Load Calculations", "Spatial Planning", "Lighting Simulation"],
    learningOutcomes: [],
    metrics: [
      { label: "Scale", value: "1:100" },
      { label: "Area", value: "4,200 sqft" }
    ]
  },
  {
    id: "p2",
    title: "Lumina Commercial Hub",
    description: "Mixed-use commercial development designed for optimal foot traffic and sustainable energy efficiency.",
    detailedDescription: "Designed as a central node for a newly developed urban district, Lumina incorporates advanced structural engineering techniques to support its sweeping cantilevered canopy. The floor plans emphasize modularity for retail spaces, while the 3D visualization demonstrates the interaction of the structure with ambient sunlight throughout the day.",
    slug: "lumina-hub",
    image: "/images/blueprint_4k.png",
    blueprint: "/images/blueprint_4k.png",
    tags: ["Commercial", "Urban Planning", "Structural"],
    status: "active",
    links: {},
    author: "Wilson Ramropui",
    authorAvatar: "/favicon.ico",
    techStack: ["AutoCAD Architecture", "ETABS", "Lumion", "Rhino 3D"],
    features: ["Parametric Canopy Design", "HVAC Integration", "Pedestrian Flow Simulation", "BIM Coordination"],
    learningOutcomes: [],
    metrics: [
      { label: "Scale", value: "1:200" },
      { label: "Levels", value: "6 + Basement" }
    ]
  },
  {
    id: "p3",
    title: "Zenith Structural Pavilion",
    description: "An experimental steel and timber pavilion showcasing complex load distribution and organic geometry.",
    detailedDescription: "The Zenith Pavilion project is an exploration of parametric design applied to civil structures. The 2D drafts specify the intricate joinery required to bind steel tensile members with laminated timber beams. The 3D renders provide a clear visualization of the spatial volume and the dynamic interplay of shadows cast by the lattice roof.",
    slug: "zenith-pavilion",
    image: "/images/blueprint_4k.png",
    blueprint: "/images/blueprint_4k.png",
    tags: ["Experimental", "Timber", "Parametric"],
    status: "completed",
    links: {},
    author: "Wilson Ramropui",
    authorAvatar: "/favicon.ico",
    techStack: ["Grasshopper", "Rhino 3D", "SAP2000", "AutoCAD"],
    features: ["Tensile Analysis", "Custom Joinery Details", "Material Optimization", "Wind Load Testing"],
    learningOutcomes: [],
    metrics: [
      { label: "Scale", value: "1:50" },
      { label: "Material", value: "Steel & Timber" }
    ]
  }
];

export function getProjectBySlug(slug: string | undefined | null): Project | null {
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
export function getAllProjectSlugs(): string[] { return projects.map((p) => p.slug); }
export function getProjectUrl(project: Project | { slug: string }) { return `/projects/${project.slug}`; }
export function getAllProjects(): Project[] { return [...projects]; }