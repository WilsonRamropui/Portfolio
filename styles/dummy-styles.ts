import type { CSSProperties } from "react";

// assets/dummyStyles.js

export const homePageStyles = {
  // Layout and container styles
  container: "relative z-10 bg-zinc-950 flex-1 flex flex-col justify-center px-6 pb-6 pt-0 md:px-20 md:pb-20 md:pt-10 overflow-x-hidden",

  // Background grid pattern
  backgroundGrid: {
    wrapper: "pointer-events-none -z-20 absolute inset-0 [background-size:40px_40px] select-none",
    pattern: "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
  },

  // Gradient overlay
  gradientOverlay: "fixed inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60 pointer-events-none",

  // Hero section
  heroSection: "w-full max-w-5xl mx-auto md:mr-auto md:ml-0 flex flex-col items-center text-center md:items-start md:text-left",

  // Headings
  h1: "font-cormorant text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight font-medium tracking-tight mb-4 text-zinc-100",

  h2: "font-crimson text-base md:text-lg font-normal text-zinc-400 uppercase tracking-widest mb-6",

  // Callout card
  calloutCard: {
    wrapper: "w-full sm:w-auto sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl p-3 bg-white/5 border border-white/20 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30",
    innerContainer: "flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-4",
    textContainer: "flex items-center gap-3 min-w-0",
    icon: "w-5 h-5 text-zinc-300 flex-shrink-0",
    text: "font-cinzel truncate text-sm font-medium text-zinc-200",
    button: "mt-2 sm:mt-0 px-4 py-1 rounded-full border bg-zinc-100 text-zinc-900 text-sm shrink-0 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
  },

  // Paragraph
  paragraph: "font-goudy text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8 max-w-[720px] text-center md:text-left",

  // Link styles
  link: "underline text-zinc-200 hover:text-zinc-100 transition-colors",

  // Article/Video card — cinematic glass box
  article: {
    wrapper: "rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(255,255,255,0.04)] overflow-hidden max-w-[400px] w-full relative",
    videoContainer: "relative w-full h-auto overflow-hidden",
    video: "w-full h-auto max-h-[400px] object-cover",
    videoStyles: {
      WebkitUserSelect: 'none',
      userSelect: 'none',
      pointerEvents: 'none'
    } satisfies CSSProperties,
    content: "p-3 md:p-4 flex flex-col items-center text-center relative",
    header: "flex items-center justify-center gap-3 text-[11px] text-zinc-500 uppercase tracking-[0.25em] mb-2 w-full font-medium",
    headerIcon: "w-3.5 h-3.5 text-emerald-400/60",
    title: "font-semibold text-xl md:text-2xl text-zinc-100 mb-1",
    description: "text-sm text-zinc-300",
    linkContainer: "mt-6 flex justify-center w-full",
    link: "inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-all duration-300 group",
    linkIcon: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
  },

  // Inline span adjustments
  spanInline: "inline-block align-middle",
  spanWithMargin: "inline-block mt-3 md:mt-0 sm:mt-0 lg:mt-0 xl:mt-0 align-middle z-20"
};

export const spotlightStyles = {
  position: "-top-40 -z-20 left-0 md:-top-20 md:left-60"
};


// assets/dummyStyles.js
export const pageStyles = {
  container: "flex min-h-screen pt-0 md:pt-12 w-full items-start justify-center bg-zinc-950 px-6 pb-12 md:px-12 md:pb-20 lg:px-16",
  wrapper: "w-full max-w-3xl",
  backgroundContainer: "relative",
  backgroundEffect: "absolute inset-0 rounded-xl overflow-hidden",
  content: "relative z-10",
  heading: "text-5xl font-bold tracking-tight text-zinc-100 md:text-6xl lg:text-7xl",
  interestsContainer: "mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium tracking-wide text-zinc-400",
  interestItem: "flex items-center",
  dotSeparator: "ml-3 text-zinc-600",
  techStackContainer: "mt-8 flex flex-wrap gap-3",
  techPill: "rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100",
  sectionsContainer: "mt-16 space-y-12",
  section: "",
  sectionHeading: "text-2xl font-bold text-zinc-100",
  sectionParagraph: "mt-4 leading-relaxed text-zinc-400",
  link: "text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-500",
  ctaContainer: "mt-16 flex flex-wrap gap-4",
  ctaButtonPrimary: "rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95",
  ctaButtonSecondary: "flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-100 transition-all hover:border-zinc-700 hover:bg-zinc-800",
  emailIcon: "h-4 w-4"
};

// assets/dummyStyles.js

export const timelineStyles = {
  // Layout styles
  container: "flex-1 flex flex-col justify-center min-h-screen bg-zinc-950 px-4 pb-4 md:px-8 md:pb-8 pt-8 md:pt-12 lg:pt-12",
  innerContainer: "w-full max-w-full mx-auto",
  mainTitle: "text-4xl font-bold text-white md:text-5xl",
  mainParagraph: "mt-2 text-zinc-400",

  // Badge styles
  timelineBadge: "inline-block rounded-full bg-blue-900/20 px-4 py-1.5",
  timelineBadgeText: "text-sm font-medium text-blue-400",

  // Legend styles
  legendContainer: "mt-6 flex flex-wrap gap-4",
  legendItem: "flex items-center gap-2",
  legendDot: "h-2 w-2 rounded-full",
  legendText: "text-sm text-zinc-400",

  // Timeline item styles
  itemContainer: "space-y-4",
  itemFlexContainer: "flex items-start gap-3",

  // Icon container styles
  iconContainer: "mt-1 rounded-lg p-2",
  iconContainerBlue: "mt-1 rounded-lg bg-blue-900/20 p-2",
  iconContainerPurple: "mt-1 rounded-lg bg-purple-900/20 p-2",
  iconContainerGreen: "mt-1 rounded-lg bg-green-900/20 p-2",
  iconContainerAmber: "mt-1 rounded-lg bg-amber-900/20 p-2",
  iconContainerRose: "mt-1 rounded-lg bg-rose-900/20 p-2",
  iconContainerEmerald: "mt-1 rounded-lg bg-emerald-900/20 p-2",

  // Icon styles
  iconSize: "h-5 w-5",
  iconBlue: "h-5 w-5 text-blue-400",
  iconPurple: "h-5 w-5 text-purple-400",
  iconGreen: "h-5 w-5 text-green-400",
  iconAmber: "h-5 w-5 text-amber-400",
  iconRose: "h-5 w-5 text-rose-400",
  iconEmerald: "h-5 w-5 text-emerald-400",

  // Content styles
  contentTitle: "text-lg font-semibold text-white",
  contentSubtitle: "mt-1 text-sm text-zinc-400",
  contentText: "mt-2 text-sm text-zinc-300",

  // List styles
  list: "space-y-2",
  listItem: "flex items-start gap-2 text-sm text-zinc-300",

  // Bullet styles
  bullet: "mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full",
  bulletBlue: "mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500",
  bulletPurple: "mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500",
  bulletGreen: "mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500",
  bulletAmber: "mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500",
  bulletRose: "mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500",

  // Technology badge styles
  techBadgesContainer: "flex flex-wrap gap-2 pt-2",
  techBadge: "rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300",

  // Achievement section styles
  achievementGrid: "grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2",
  achievementCard: "rounded-lg bg-zinc-800/30 p-4",
  achievementCardTitle: "text-sm font-semibold text-emerald-400",
  achievementCardValue: "mt-1 text-2xl font-bold text-white",
  achievementCardSub: "mt-1 text-xs text-zinc-400",

  // Specialization styles
  specializationContainer: "rounded-lg bg-zinc-800/30 p-4",
  specializationTitle: "text-sm font-semibold text-emerald-400",
  specializationBadgesContainer: "mt-2 flex flex-wrap gap-2",
  specializationBadge: "rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300",

  // Technologies section styles
  techSectionContainer: "mt-12 rounded-xl bg-zinc-900/50 p-6 md:p-8",
  techSectionHeader: "flex items-center gap-3",
  techSectionIconContainer: "rounded-lg bg-zinc-800 p-3",
  techSectionIcon: "h-6 w-6 text-zinc-300",
  techSectionTitle: "text-xl font-semibold text-white",
  techSectionSubtitle: "text-sm text-zinc-400",
  techGrid: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
  techCard: "rounded-lg bg-zinc-800/30 p-4 text-center",
  techCardTitle: "text-sm font-semibold",
  techCardContent: "mt-2 text-xs text-zinc-300",

  // Color-specific text
  textBlue: "text-blue-400",
  textPurple: "text-purple-400",
  textGreen: "text-green-400",
  textAmber: "text-amber-400",
  textRose: "text-rose-400",
  textEmerald: "text-emerald-400",
  textCyan: "text-cyan-400",
};



export const aboutPageStyles = {
  // Layout and container styles
  pageContainer: "flex min-h-screen pt-8 md:pt-12 w-full items-start justify-center bg-zinc-950 px-6 pb-12 md:px-12 md:pb-20 lg:px-16",
  contentContainer: "w-full max-w-3xl",

  // Background container
  backgroundContainer: "relative",
  backgroundEffect: "absolute inset-0 rounded-xl overflow-hidden",
  contentWrapper: "relative z-10",

  // Headings
  mainHeading: "text-5xl font-bold tracking-tight text-zinc-100 md:text-6xl lg:text-7xl",
  sectionHeading: "text-2xl font-bold text-zinc-100",

  // Interests/Tags
  interestsContainer: "mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium tracking-wide text-zinc-400",
  interestItem: "flex items-center",
  interestSeparator: "ml-3 text-zinc-600",

  // Tech Stack
  techStackContainer: "mt-8 flex flex-wrap gap-3",
  techPill: "rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100",

  // Content sections
  sectionsContainer: "mt-16 space-y-12",
  paragraph: "mt-4 leading-relaxed text-zinc-400",

  // Links
  contentLink: "text-zinc-200 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-500",

  // CTA Buttons
  ctaContainer: "mt-16 flex flex-wrap gap-4",
  primaryButton: "rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 hover:scale-105 active:scale-95",
  secondaryButton: "flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-100 transition-all hover:border-zinc-700 hover:bg-zinc-800",
  emailIcon: "h-4 w-4"
};

export const contactPageStyles = {
  // Layout and container styles
  pageContainer: "flex min-h-screen pt-0 md:pt-12 w-full items-start justify-center bg-zinc-950 px-6 pb-12 md:px-12 md:pb-20 lg:px-16",
  contentContainer: "w-full max-w-2xl",

  // Form container with boxes background
  formOuterContainer: "relative w-full overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] flex flex-col items-center justify-center rounded-3xl shadow-2xl",
  backgroundOverlay: "absolute inset-0 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent z-20 pointer-events-none",

  // Header
  headerContainer: "mb-12 z-10",
  headerTitle: "text-3xl sm:text-4xl md:text-5xl lg:text-5xl md:whitespace-nowrap z-30 font-bold tracking-tight text-zinc-100",
  headerSubtitle: "mt-4 text-lg text-zinc-400",

  // Contact methods grid
  contactMethodsGrid: "mb-12 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 z-10",

  // Contact method card
  contactCard: "group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900/50",
  contactIconContainer: "flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 transition-colors group-hover:bg-zinc-700 group-hover:text-zinc-100",
  contactIcon: "h-5 w-5",
  contactLabel: "text-sm font-medium text-zinc-500",
  contactValue: "text-zinc-200 transition-colors group-hover:text-zinc-100",

  // Form styles
  formContainer: "relative z-10 space-y-6 w-full p-8 rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),_inset_0_1px_0_0_rgba(255,255,255,0.1),_inset_0_-4px_0_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.6),_inset_0_1px_0_0_rgba(255,255,255,0.15),_inset_0_-4px_0_0_rgba(0,0,0,0.5)]",
  formGrid: "grid grid-cols-1 gap-6 md:grid-cols-2",

  // Form field common styles
  formFieldContainer: "relative",
  formInput: "w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-5 py-4 text-zinc-100 font-mono text-sm outline-none transition-all placeholder:text-zinc-500 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600",
  formTextarea: "w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950/80 px-5 py-4 text-zinc-100 font-mono text-sm outline-none transition-all placeholder:text-zinc-500 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-1 focus:ring-zinc-600",

  // Form label styles
  formLabelBase: "absolute left-4 transition-all",
  formLabelFocused: "-top-2.5 bg-zinc-800 px-2 rounded-2xl text-xs text-zinc-400",
  formLabelUnfocused: "top-4 text-zinc-500",

  // Submit button
  submitButtonContainer: "pt-4 flex justify-start",
  submitButton: "group flex items-center justify-center gap-2 relative overflow-hidden rounded-xl bg-zinc-300 px-8 py-3.5 text-sm font-bold font-mono text-zinc-900 transition-all hover:bg-zinc-200 active:scale-[0.98]",
  submitButtonText: "relative z-10",
  submitButtonIcon: "h-4 w-4 transition-transform group-hover:translate-x-1",

  // Alternative text
  alternativeText: "mt-8 text-center text-sm text-zinc-500",
  alternativeLink: "text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-zinc-100 hover:decoration-zinc-500"
};

// Add these to assets/dummyStyles.js

export const projectStyles = {
  // Page container
  pageContainer: "flex-1 flex flex-col justify-center min-h-screen w-full pt-8 md:pt-12 bg-zinc-950 px-6 pb-12 md:px-12 md:pb-20 lg:px-16",
  innerContainer: "w-full max-w-full mx-auto",

  // Header
  header: "mb-12",
  pageTitle: "text-4xl font-bold text-zinc-100 md:text-5xl",
  pageSubtitle: "mt-2 text-zinc-400",

  // Projects grid
  projectsGrid: "grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",

  // Project card
  projectCard: "group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-zinc-950/50",

  // Image container
  imageContainer: "relative aspect-[16/10] w-full overflow-hidden bg-zinc-800",
  projectImage: "h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105",

  // Status badge
  statusBadgeContainer: "absolute right-3 top-3",
  statusBadge: "rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md",
  statusActive: "bg-green-500/10 text-green-400 ring-1 ring-green-500/20",
  statusInactive: "bg-zinc-500/10 text-zinc-400 ring-1 ring-zinc-500/20",

  // Bookmark button
  bookmarkButton: "absolute right-3 top-12 rounded-full bg-zinc-950/80 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 hover:bg-zinc-900",
  bookmarkIcon: "h-4 w-4 text-zinc-400",

  // Content section
  contentSection: "p-6",
  projectTitle: "text-xl font-bold text-zinc-100 group-hover:text-zinc-50",
  projectDescription: "mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400",

  // Tags
  tagsContainer: "mt-4 flex flex-wrap gap-2",
  tag: "rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-zinc-100",

  // Actions
  actionsContainer: "mt-6 flex items-center justify-between border-t border-zinc-800 pt-4",
  actionsLinksContainer: "flex gap-2",

  // Buttons
  visitButton: "rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-900 transition-all hover:bg-zinc-200 hover:shadow-lg",
  otherButton: "rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100",

  // Archive text
  archivedText: "text-xs text-zinc-500",

  // Title component (for follower pointer)
  titleComponentContainer: "flex items-center space-x-2 rounded-full bg-zinc-900/90 px-3 py-1.5 shadow-lg backdrop-blur-md border border-zinc-800",
  titleComponentAvatar: "rounded-full border border-zinc-700",
  titleComponentText: "text-sm font-medium text-zinc-200",
};

// You can also create a combined styles object if needed
export const styles = {
  timeline: timelineStyles,
  projects: projectStyles,
};

export const toolsPageStyles = {
  // Layout and container styles
  pageContainer: "flex-1 flex flex-col justify-center min-h-screen w-full bg-zinc-950 pt-8 md:pt-12 px-6 pb-12 md:px-12 md:pb-20 lg:px-16",
  contentContainer: "w-full max-w-full mx-auto",

  // Header
  headerContainer: "mb-12",
  headerTitle: "text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-none mb-2",
  headerSubtitle: "text-md text-zinc-400",

  // Tools grid
  toolsGrid: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",

  // Tool card
  toolCardLink: "group flex w-full cursor-pointer items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-zinc-900/30",
  toolIconContainer: "relative h-12 w-12 flex-shrink-0",
  toolIcon: "h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110",
  toolTextContainer: "flex-1 min-w-0",
  toolName: "text-base font-medium text-zinc-100 truncate group-hover:text-zinc-50",
  toolCategory: "text-xs text-zinc-500 group-hover:text-zinc-400"
};

// Add these to assets/dummyStyles.js

export const projectDetailStyles = {
  // Page container
  pageContainer: "min-h-screen relative bg-zinc-950 pt-8 md:pt-12 px-4 sm:px-6 lg:px-8 pb-20 antialiased",
  innerContainer: "max-w-6xl mx-auto relative z-10",

  // Back button
  backButton: "inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors",
  backIcon: "h-4 w-4",

  // Project header
  projectHeader: "mb-12",
  headerFlex: "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6",
  headerLeft: "flex-1",

  // Title and status
  titleContainer: "flex items-center gap-4 mb-4",
  projectTitle: "text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-100",
  statusBadge: "rounded-full px-3 py-1 text-sm font-medium",
  statusActive: "bg-green-500/10 text-green-400 ring-1 ring-green-500/20",
  statusInactive: "bg-zinc-500/10 text-zinc-400 ring-1 ring-zinc-500/20",

  // Description
  projectDescription: "text-lg text-zinc-400 mb-6 max-w-3xl",

  // Tags
  tagsContainer: "flex flex-wrap gap-2 mb-8",
  tag: "rounded-full bg-zinc-800 px-3 py-1 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-zinc-100",

  // Action buttons
  actionButtonsContainer: "flex flex-wrap gap-3",
  visitButton: "inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-200 hover:shadow-lg hover:scale-105",
  secondaryButton: "inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-600 hover:bg-zinc-800 hover:text-zinc-100",
  buttonIcon: "h-4 w-4",

  // Project image
  imageContainer: "mb-12 rounded-2xl overflow-hidden border border-zinc-800",
  projectImage: "w-full h-auto aspect-video object-cover",

  // Main grid
  gridContainer: "grid grid-cols-1 lg:grid-cols-3 gap-8",
  mainContent: "lg:col-span-2 space-y-12",
  sidebar: "space-y-8",

  // Section titles
  sectionTitle: "text-2xl font-bold text-zinc-100 mb-6",
  sidebarSectionTitle: "text-xl font-bold text-zinc-100 mb-4",

  // Prose content
  prose: "prose prose-invert max-w-none",
  proseText: "text-zinc-400 leading-relaxed",

  // Features
  featuresGrid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  featureCard: "rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 transition-colors",
  featureCardInner: "flex items-start gap-3",
  featureIconContainer: "rounded-full bg-blue-500/10 p-1.5 mt-0.5",
  featureIcon: "h-2 w-2 rounded-full bg-blue-500",
  featureText: "text-zinc-300",

  // Learning outcomes
  learningOutcomesGrid: "grid grid-cols-1 sm:grid-cols-2 gap-3",
  learningOutcomeCard: "flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-3",
  learningOutcomeNumber: "flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10",
  learningOutcomeNumberText: "text-xs font-medium text-green-400",
  learningOutcomeText: "text-sm text-zinc-400",

  // Sidebar sections
  sidebarSection: "rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6",
  techStackContainer: "flex flex-wrap gap-2",
  techStackItem: "rounded-md bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-300",

  // Links
  linksContainer: "space-y-3",
  linkCard: "flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 p-3 transition-colors hover:border-zinc-700 hover:bg-zinc-800",
  linkIcon: "h-5 w-5 text-zinc-400",
  linkText: "text-zinc-300",

  // Project info
  projectInfoContainer: "space-y-4",
  projectInfoLabel: "text-sm text-zinc-500 mb-1",
  authorContainer: "flex items-center gap-3",
  authorAvatar: "h-8 w-8 rounded-full border border-zinc-700",
  authorName: "text-zinc-300",
  projectInfoText: "text-zinc-300 capitalize",
};

// Add these to assets/dummyStyles.js

export const sidebarStyles = {
  // Mobile top navbar
  mobileTopNav: "md:hidden fixed top-0 left-0 right-0 z-80 bg-transparent backdrop-blur-sm px-4 py-3",
  mobileTopNavInner: "flex items-center justify-between",
  mobileAvatarContainer: "flex items-center gap-3",
  mobileAvatar: "w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/10 shadow-sm",
  mobileAvatarImage: "object-cover",
  mobileName: "font-semibold text-zinc-100 text-base",
  mobileTyping: "text-xs text-zinc-400 truncate max-w-[120px]",

  // Spacer for mobile
  mobileSpacer: "md:hidden h-16",

  // Desktop sidebar
  desktopSidebar: "hidden md:flex flex-col w-[260px] h-screen px-6 py-8 bg-zinc-950 border-r border-zinc-800 fixed left-0 top-0 overflow-y-auto",
  desktopAvatarContainer: "flex items-center gap-3 mb-6",
  desktopAvatar: "w-12 h-12 rounded-full overflow-hidden ring-1 ring-white/10 shadow-sm",
  desktopAvatarImage: "object-cover",
  desktopName: "font-semibold text-zinc-100",
  desktopTyping: "text-xs text-zinc-400",

  // Navigation
  navContainer: "flex-1",
  navList: "space-y-2",
  navItem: "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors duration-150",
  navItemActive: "bg-zinc-800 text-zinc-50",
  navItemInactive: "text-zinc-200 hover:bg-zinc-800 hover:text-zinc-50",
  navIcon: "w-4 h-4 text-zinc-300",
  navLabel: "text-sm",

  // Social section
  connectLabel: "mt-8 text-xs text-zinc-500",
  socialList: "mt-3 space-y-2 text-sm",
  socialItem: "group flex items-center gap-2 text-zinc-300 hover:text-zinc-50 transition-colors",
  socialIcon: "w-4 h-4",
  socialLabel: "truncate",

  // Footer
  footerText: "mt-6 text-sm text-zinc-400",

  // Mobile menu overlay
  mobileOverlay: "md:hidden fixed inset-0 z-[60] transition-all duration-300",
  mobileOverlayVisible: "opacity-100",
  mobileOverlayHidden: "opacity-0 pointer-events-none",
  mobileOverlayBg: "absolute inset-0 bg-black transition-opacity duration-300",
  mobileOverlayBgVisible: "opacity-50",
  mobileOverlayBgHidden: "opacity-0",

  // Mobile sidebar
  mobileSidebar: "mobile-sidebar absolute right-0 top-0 h-full w-full max-w-[320px] bg-zinc-950 border-l border-zinc-800 transform transition-transform duration-300 ease-out",
  mobileSidebarVisible: "translate-x-0",
  mobileSidebarHidden: "translate-x-full",
  mobileSidebarHeader: "p-6 border-b border-zinc-800",
  mobileHeaderInner: "flex items-center justify-between mb-0",
  mobileHeaderAvatarContainer: "flex items-center gap-3",
  mobileCloseButton: "p-2 rounded-lg hover:bg-zinc-800 transition-colors",
  mobileCloseIcon: "w-5 h-5 text-zinc-400",

  // Mobile nav content
  mobileContent: "p-6 overflow-y-auto h-[calc(100vh-240px)]",
  mobileSectionLabel: "text-xs text-zinc-500 mb-3",
  mobileNavList: "space-y-1",
  mobileNavItem: "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors duration-150",
  mobileNavIcon: "w-5 h-5 text-zinc-300",
  mobileNavLabel: "text-sm font-medium",

  // Mobile social section
  mobileSocialSection: "mb-8",
  mobileSocialList: "space-y-2",
  mobileSocialItem: "flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800 transition-colors",
  mobileSocialIcon: "w-4 h-4",
  mobileSocialText: "text-sm",

  // Mobile footer
  mobileFooter: "absolute bottom-0 left-0 right-0 p-6 border-t border-zinc-800 bg-zinc-950",
  mobileFooterLabel: "text-sm text-zinc-400 mb-4",
  mobileFooterText: "text-xs text-zinc-400 flex justify-between",

  // Bottom navigation bar
  bottomNav: "md:hidden fixed bottom-0 left-0 right-0 z-50",
  bottomNavContainer: "mx-auto w-full px-4 pb-4",
  bottomNavInner: "max-w-lg mx-auto",
  bottomNavBar: "bg-zinc-900/95 backdrop-blur-sm border border-zinc-800 px-2 py-2 flex items-center gap-2 shadow-2xl shadow-black/40 rounded-xl",
  bottomNavGrid: "grid grid-cols-6 gap-1 flex-1",
  bottomNavLink: "p-2 rounded-lg transition-all duration-200 flex items-center justify-center",
  bottomNavLinkActive: "text-zinc-50 bg-zinc-800",
  bottomNavLinkInactive: "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50",
  bottomNavIcon: "w-4 h-4",
  bottomNavDivider: "h-6 w-px bg-zinc-800",
  bottomMenuButton: "p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 transition-colors",
  bottomMenuIcon: "w-4 h-4",
};
