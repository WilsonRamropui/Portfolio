export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
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
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "Aura Residential Complex",
    slug: "aura-residential-complex",
    description: "Architectural design and master planning for a 400-unit eco-friendly residential complex.",
    detailedDescription:
      "Comprehensive architectural blueprints, 2D floor plans, and 3D elevation models for Aura Residential Complex. The project integrates sustainable green spaces, rain-water harvesting systems, and optimized natural lighting for 400 modern housing units.",
    image: "/invoice.jpg",
    tags: ["Architecture", "Floor Plan", "Blueprint", "Residential"],
    status: "active",
    techStack: ["AutoCAD", "Revit", "SketchUp", "Lumion", "V-Ray", "BIM"],
    features: [
      "Complete 2D drafting and floor plan blueprints",
      "3D architectural rendering and walkthroughs",
      "Structural load analysis for residential towers",
      "Sustainable material and energy planning",
      "HVAC and MEP systems integration",
      "Landscape and hardscape design",
    ],
    learningOutcomes: [
      "Mastered complex Revit family creation",
      "Advanced AutoCAD drafting techniques",
      "BIM coordination across disciplines",
      "Sustainable architecture principles",
      "Lighting analysis and optimization",
      "Client presentation rendering workflows",
    ],
    links: {
      visit: "#",
      github: "#",
    },
    author: "Wilson Ramropui",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "2",
    title: "Skyline Commercial Tower",
    slug: "skyline-commercial-tower",
    description: "Structural engineering and analysis for a 45-story commercial high-rise building.",
    detailedDescription:
      "A full structural engineering breakdown and foundation design for the Skyline Tower. This project features detailed wind load calculations, seismic analysis, and steel reinforced concrete design to ensure maximum stability and safety in a high-density urban environment.",
    image: "/lms.jpg",
    tags: ["Civil Engineering", "Structural", "Commercial", "High-Rise"],
    status: "active",
    techStack: ["ETABS", "SAP2000", "STAAD.Pro", "AutoCAD", "Civil 3D"],
    features: [
      "Seismic and wind load dynamic analysis",
      "Deep foundation and piling design",
      "Steel frame structural detailing",
      "Concrete reinforcement schedules",
      "Safety factor optimization",
      "Deflection and drift limit checking",
    ],
    learningOutcomes: [
      "High-rise structural dynamics analysis",
      "Advanced ETABS modeling and simulation",
      "Pile foundation load capacity calculation",
      "Reinforced concrete design to ACI codes",
      "Steel connection detailing",
      "Wind tunnel data application",
    ],
    links: {
      visit: "#",
      github: "#",
    },
    author: "Wilson Ramropui",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "3",
    title: "Riverview Suspension Bridge",
    slug: "riverview-suspension-bridge",
    description: "Infrastructure engineering design for a multi-lane suspension bridge spanning 800 meters.",
    detailedDescription:
      "Advanced civil engineering design for a modern suspension bridge. The project involves cable tension calculations, aerodynamic stability testing, deck structural design, and environmental impact assessments to connect two metropolitan hubs across a major river.",
    image: "/resume.jpg",
    tags: ["Infrastructure", "Civil Engineering", "Bridge Design", "Structural"],
    status: "active",
    techStack: ["CSI Bridge", "AutoCAD Civil 3D", "ANSYS", "Revit Structure"],
    features: [
      "Suspension cable tension and sag analysis",
      "Aerodynamic wind tunnel simulation data",
      "Traffic load bearing calculations",
      "Pylon and anchorage foundation design",
      "Prestressed concrete deck detailing",
      "Erection sequence modeling",
    ],
    learningOutcomes: [
      "Cable-supported bridge structural behavior",
      "Finite Element Analysis (FEA) using ANSYS",
      "Dynamic moving load analysis",
      "Bridge design codes (AASHTO)",
      "Construction sequencing and stage analysis",
      "Soil-structure interaction modeling",
    ],
    links: {
      visit: "#",
      github: "#",
    },
    author: "Wilson Ramropui",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "4",
    title: "Metro Station Masterplan",
    slug: "metro-station-masterplan",
    description: "Urban planning and architectural layout for an underground metropolitan transit hub.",
    detailedDescription:
      "BIM-driven masterplan for a central underground metro station. Focuses on pedestrian flow optimization, emergency evacuation routes, complex MEP (Mechanical, Electrical, Plumbing) integration, and modern architectural finishes for a high-traffic transit center.",
    image: "/task.jpg",
    tags: ["Urban Planning", "BIM", "Architecture", "Infrastructure"],
    status: "active",
    techStack: ["Revit", "Navisworks", "AutoCAD", "3ds Max", "Dynamo"],
    features: [
      "Clash detection and BIM coordination",
      "Pedestrian flow and bottleneck simulation",
      "Emergency evacuation 3D modeling",
      "MEP systems integration blueprints",
      "Platform and concourse architectural design",
      "Acoustic and lighting design",
    ],
    learningOutcomes: [
      "Navisworks clash detection workflows",
      "Large-scale underground infrastructure design",
      "Parametric design with Dynamo",
      "Crowd simulation analysis",
      "Underground ventilation systems",
      "Complex geometry modeling in Revit",
    ],
    links: {
      visit: "#",
      github: "#",
    },
    author: "Wilson Ramropui",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "5",
    title: "Luxury Villa Interior Drafts",
    slug: "luxury-villa-interior",
    description: "Detailed 2D interior floor plans, elevations, and lighting layouts for a high-end villa.",
    detailedDescription:
      "Precision 2D CAD drafting for interior architecture. Includes detailed electrical layouts, plumbing schematics, custom cabinetry elevations, and accurate floor tiling patterns. The blueprints bridge the gap between interior design concepts and construction execution.",
    image: "/food.jpg",
    tags: ["Architecture", "Interior Design", "2D Drafting", "Blueprint"],
    status: "active",
    techStack: ["AutoCAD", "SketchUp", "V-Ray", "Adobe Illustrator"],
    features: [
      "Detailed room-by-room 2D elevations",
      "Electrical and lighting layout plans",
      "Plumbing and sanitation schematics",
      "Custom furniture and joinery detailing",
      "Flooring and ceiling reflected plans",
      "Material and finishing schedules",
    ],
    learningOutcomes: [
      "Precision 2D architectural drafting",
      "Interior spatial planning and ergonomics",
      "Lighting design principles",
      "Custom millwork detailing",
      "Construction document preparation",
      "Client presentation graphics",
    ],
    links: {
      visit: "#",
      github: "#",
    },
    author: "Wilson Ramropui",
    authorAvatar: "/Hexagon.png",
  },
  {
    id: "6",
    title: "City Park Landscape Design",
    slug: "city-park-landscape",
    description: "Landscape architecture and terrain grading for a 50-acre urban park.",
    detailedDescription:
      "A comprehensive landscape engineering project involving topographical surveying, earthwork volume calculations, drainage system design, and the architectural layout of pavilions and walking trails to revitalize an abandoned urban plot.",
    image: "/movie.jpg",
    tags: ["Landscape", "Civil Engineering", "Urban Planning", "Surveying"],
    status: "active",
    techStack: ["Civil 3D", "ArcGIS", "AutoCAD", "Lumion"],
    features: [
      "Topographical surface modeling",
      "Cut and fill earthwork calculations",
      "Stormwater drainage network design",
      "Botanical layout and pavilion blueprints",
      "Roadway and pathway alignments",
      "3D landscape rendering and walkthroughs",
    ],
    learningOutcomes: [
      "Advanced surface modeling in Civil 3D",
      "GIS data integration and mapping",
      "Sustainable drainage systems (SuDS)",
      "Earthwork optimization techniques",
      "Landscape architecture principles",
      "Visualizing large-scale environments",
    ],
    links: {
      visit: "#",
      github: "#",
    },
    author: "Wilson Ramropui",
    authorAvatar: "/Hexagon.png",
  },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(slug: string | undefined | null): Project | null {
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}

/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}