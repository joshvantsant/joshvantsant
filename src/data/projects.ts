import type { Project } from '@/types';

// ─── TYPE NOTE ────────────────────────────────────────────────────────────────
// You may need to extend your Project type to include the new `skills` field:
//
//   skills?: string[];
//   client?: string;
//   notes?: string;
//   link?: { label: string; url: string };
//
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [

  // ── 1. MASTER THESIS ────────────────────────────────────────────────────────
  {
    id: '1',
    title: 'Compliant Chronograph Mechanism',
    category: 'thesis',
    year: 'Master',
    slug: 'compliant-chronograph',
    coverImage: '/images/Flexous.png',
    client: 'Flexous Mechanisms · TU Delft',
    location: 'Delft, Netherlands',
    skills: [
      'Compliant mechanism design',
      'FEA (ANSYS APDL)',
      'SolidWorks CAD',
      'MATLAB optimisation',
      'Additive manufacturing',
      'Mechanical testing',
      'Precision engineering',
    ],
    notes: 'Full thesis results are under a company embargo until October 2025. This page describes the work and methodology without disclosing proprietary results.',
    description: `For my master thesis I worked with Flexous Mechanisms, a company specialising in compliant mechanism design for precision applications. The project focused on designing and optimising a compliant horizontal clutch and braking system for a mechanical watch chronograph.

Compliant mechanisms achieve motion through controlled elastic deformation of flexible members rather than traditional rigid joints and bearings. This makes them ideal for precision instruments where backlash, friction, and lubrication are critical concerns.

The project followed a complete engineering workflow: candidate mechanism geometries were developed in SolidWorks based on functional requirements, then structurally and kinematically analysed using ANSYS APDL and MATLAB to iterate on geometry and meet stiffness and deflection targets. Physical prototypes were produced via 3D printing and mechanically tested to verify real-world behaviour against simulation predictions.`,
    link: {
      label: 'Flexous Mechanisms',
      url: 'https://flexous.com',
    },
    images: [
      {
        id: '1-1',
        src: '/images/Flexous.png',
        alt: 'Compliant mechanism oscillator design',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── 2. INTERNSHIP ────────────────────────────────────────────────────────────
  {
    id: '2',
    title: 'Uniweld — Workshop Internship',
    category: 'internship',
    year: 'Bachelor',
    slug: 'uniweld',
    coverImage: '/images/Uniweld.jpg',
    location: 'Christchurch, New Zealand',
    skills: [
      'MIG/TIG welding',
      'Sheet metal fabrication',
      'Pipe bending & fitting',
      'Hydraulic press operation',
      'Spot welding',
      'Manufacturing tolerances',
      'Workshop safety',
    ],
    description: `Practical skills are an essential asset to every mechanical design engineer, providing real-world experience that reinforces classroom learning and builds familiarity with the tools and processes required in manufacturing. My summer internship at a local mechanics shop let me develop these core skills directly.

My primary role involved the fabrication and installation of custom automotive exhaust systems — cutting, bending, fitting, and welding steel pipework to specification using a range of workshop equipment.

Alongside this I manufactured custom wire racking products: cutting heavy-gauge wire, forming components using hydraulic bending equipment, spot-welding assemblies, and applying protective plastic coatings to finished products.`,
    images: [
      {
        id: '2-1',
        src: '/images/muffler_system.jpeg',
        alt: 'Finished custom exhaust muffler system',
        aspectRatio: 'portrait',
      },
      {
        id: '2-2',
        src: '/images/hydraulic_press.jpg',
        alt: 'Hydraulic press used for wire bending',
        aspectRatio: 'portrait',
      },
      {
        id: '2-3',
        src: '/images/spot_welding.jpg',
        alt: 'Spot welding wire racking components',
        aspectRatio: 'square',
      },
      {
        id: '2-4',
        src: '/images/wire_bending.jpg',
        alt: 'Finished wire bend product',
        aspectRatio: 'portrait',
      },
    ],
  },

  // ── 3. ROBOCUP ───────────────────────────────────────────────────────────────
  {
    id: '3',
    title: 'RoboCup — Autonomous Arena Robot',
    category: 'student project',
    year: 'Bachelor',
    slug: 'robocup',
    coverImage: '/images/RoboCup.jpg',
    location: 'University of Canterbury',
    skills: [
      'Arduino C++',
      'Embedded systems',
      'Custom PCB design',
      'Multi-sensor integration',
      'SolidWorks CAD',
      'Chassis fabrication',
      'Control logic',
    ],
    description: `As part of a team of three, I designed and built a fully autonomous robot for a RoboCup-style arena competition. The robot navigated an arena independently to locate and collect small metallic weights, requiring tight integration of hardware, electronics, and software.

A custom PCB was designed and fabricated to integrate the sensors, actuators, and Arduino microcontroller into a single purpose-built board. The navigation and collection logic was implemented in Arduino C++, handling the full autonomous control loop. The chassis was designed in CAD, then physically assembled and iteratively tested against arena conditions.`,
    images: [
      {
        id: '3-1',
        src: '/images/RoboCup.jpg',
        alt: 'Finished autonomous competition robot',
        aspectRatio: 'portrait',
      },
      {
        id: '3-2',
        src: '/images/Embedded_hardware_Robo.png',
        alt: 'Schematic of embedded hardware controlled via Arduino',
        aspectRatio: 'landscape',
      },
      {
        id: '3-3',
        src: '/images/Solidworks drawing of RoboCup.PNG',
        alt: 'SolidWorks CAD render of the robot chassis',
        aspectRatio: 'square',
      },
      {
        id: '3-4',
        src: '/images/PCB for audio amplifier.jpg',
        alt: 'Custom PCB schematic for robot electronics',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── 4. SOFT ROBOTIC SPACE GRIPPER ────────────────────────────────────────────
  {
    id: '4',
    title: 'Soft Robotic Space Gripper',
    category: 'research project',
    year: 'Master',
    slug: 'soft-space-gripper',
    // TODO: Replace with an actual project photo
    coverImage: '/images/soft-gripper-cover.jpg',
    client: 'TU Delft',
    location: 'Delft, Netherlands',
    skills: [
      'Soft robotics',
      'Silicone moulding',
      'Pneumatic actuation',
      'Finite element analysis',
      'Space mechanism design',
      'Prototype testing',
    ],
    description: `TODO: Add your project description here. Describe the problem (grasping in space / microgravity), your approach to the soft gripper design, materials and fabrication methods used, and how the gripper was tested or validated.`,
    images: [
      {
        id: '4-1',
        // TODO: Replace with real project image
        src: '/images/soft-gripper-cover.jpg',
        alt: 'Soft robotic gripper prototype',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── 5. JIP (JOINT INDUSTRY PROJECT) ─────────────────────────────────────────
  {
    id: '5',
    title: 'Joint Industry Project',
    category: 'master project',
    year: 'Master',
    slug: 'joint-industry-project',
    // TODO: Replace with an actual project photo
    coverImage: '/images/jip-cover.jpg',
    // TODO: Fill in the company / consortium name
    client: 'TODO: Company name · TU Delft',
    location: 'Delft, Netherlands',
    skills: [
      // TODO: Add skills relevant to your JIP
      'Placeholder skill A',
      'Placeholder skill B',
      'Placeholder skill C',
    ],
    description: `TODO: Add your JIP project description here. Cover the industrial context, the design challenge, your specific contribution within the team, tools and methods used, and any outcomes or deliverables.`,
    images: [
      {
        id: '5-1',
        // TODO: Replace with real project image
        src: '/images/jip-cover.jpg',
        alt: 'Joint Industry Project overview',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── 6. MASTER DESIGN PROJECT ─────────────────────────────────────────────────
  {
    id: '6',
    title: 'Master Design Project',
    category: 'master project',
    year: 'Master',
    slug: 'master-design-project',
    // TODO: Replace with an actual project photo
    coverImage: '/images/design-project-cover.jpg',
    location: 'Delft, Netherlands',
    skills: [
      // TODO: Add skills relevant to your design project(s)
      'Placeholder skill A',
      'Placeholder skill B',
      'Placeholder skill C',
    ],
    description: `TODO: Add your master design project description here. If you have multiple design courses or projects to group here, describe the overall theme, the individual briefs, methods used (ideation, prototyping, user testing), and key outcomes.`,
    images: [
      {
        id: '6-1',
        src: '/images/design-project-cover.jpg',
        alt: 'Master design project prototype',
        aspectRatio: 'landscape',
      },
    ],
  },

  // ── 7. HONOURS PROJECT ───────────────────────────────────────────────────────
  {
    id: '7',
    title: 'Honours Research Project',
    category: 'research project',
    year: 'Bachelor',
    slug: 'honours-project',
    // TODO: Replace with an actual project photo
    coverImage: '/images/honours-cover.jpg',
    location: 'University of Canterbury',
    skills: [
      // TODO: Add skills from your honours project
      'Placeholder skill A',
      'Placeholder skill B',
      'Placeholder skill C',
    ],
    description: `TODO: Add your honours project description here. Describe the research question, background literature, experimental or analytical approach, results, and what you concluded. Mention any supervisors or collaborators if appropriate.`,
    images: [
      {
        id: '7-1',
        src: '/images/honours-cover.jpg',
        alt: 'Honours research project',
        aspectRatio: 'landscape',
      },
    ],
  },

];

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────────────

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
};

// Returns the first N projects for a featured section
export const getFeaturedProjects = (count = 4): Project[] =>
  projects.slice(0, count);

export const getAdjacentProjects = (
  currentSlug: string,
): { prev: Project | null; next: Project | null } => {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
};

// Returns all unique categories present in the data (useful for filter tabs)
export const getCategories = (): string[] => [
  'all',
  ...Array.from(new Set(projects.map((p) => p.category))),
]; 
