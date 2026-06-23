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

export const showcaseProjects: ShowcaseProject[] = [];
