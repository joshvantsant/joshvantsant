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
];      My primary role involved the fabrication and installation of custom automotive exhaust systems. This included cutting, bending, fitting, and welding steel pipework to specification using a range of workshop fabrication tools and equipment. \
      \
      Alongside this, I also manufactured custom wire racking products. This involved cutting heavy-gauge wire, forming components to shape using hydraulic bending equipment, spot welding assemblies, and applying protective plastic coatings to finished products.',
    camera: 'Manufacturing tolerances, hard skills with mechanical tooling',
    location: 'Christchurch',
    images: [
      {
        id: '2-1',
        // Muffler system
        src: '/images/muffler_system.jpeg',
        alt: 'Image of finished muffler system',
        aspectRatio: 'portrait'
      },
      {
        id: '2-2',
        // hydraulic press
        src: '/images/hydraulic_press.jpg',
        alt: 'Image of tools used in workshop',
        aspectRatio: 'portrait'
      },
      {
        id: '2-3',
        // Wire rack
        src: '/images/spot_welding.jpg',
        alt: 'Image of tools used for modifying wire racking',
        aspectRatio: 'square'
      },
      {
        id: '2-4',
        // Finished wire bend
        src: '/images/wire_bending.jpg',
        alt: 'Finished product of wire bending',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '3',
    title: 'RoboCup',
    category: 'student project',
    year: 'Bachelor',
    slug: 'robocup',
    // Photo by E Vos on Unsplash
    coverImage: '/images/RoboCup.jpg',
    description: 'As part of a team of three, I designed and built a fully autonomous robot for a RoboCup-style arena competition. The robot navigated an arena independently to locate and collect small metallic weights, requiring tight integration of hardware, electronics, and software.\
\
\- Custom PCB — designed and fabricated a purpose\-built board integrating sensors, actuators, and the Arduino microcontroller \
\- Multi-sensor control system — implemented in Arduino C++, handling navigation and collection logic autonomously \
\- Full mechanical design — chassis designed in CAD and physically assembled and tested',
    camera: 'CAD, C++, PCB design',
    location: 'University of Canterbury',
    images: [
      {
        id: '3-1',
        // Photo by Zulfugar Karimov on Unsplash
        src: '/images/RoboCup.jpg',
        alt: 'Shot of our final embedded robot',
        aspectRatio: 'portrait'
      },
      {
        id: '3-2',
        // Photo by Jason Leung on Unsplash
        src: '/images/Embedded_hardware_Robo.png',
        alt: 'Schematic showing the embedded hardware in the robot controlled via Arduino',
        aspectRatio: 'landscape'
      },
      {
        id: '3-3',
        // Photo by Declan Sun on Unsplash
        src: '/images/Solidworks drawing of RoboCup.PNG',
        alt: 'SolidWorks render of the robot',
        aspectRatio: 'square'
      },
      {
        id: '3-4',
        // Photo by Alessandro Ricossa on Unsplash
        src: '/images/PCB for audio amplifier.jpg',
        alt: 'PCB schematic for our custom electronics',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '4',
    title: 'Fashion Forward',
    category: 'editorial',
    year: '2023',
    slug: 'fashion-forward',
    // Photo by Yigit ARISOY on Unsplash
    coverImage: 'https://images.unsplash.com/photo-1682232568244-edbb92614c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'An editorial series exploring contemporary fashion through bold compositions and dramatic lighting. Shot on location and in studio.',
    client: 'Vogue',
    camera: 'Phase One XF IQ4',
    location: 'New York & Paris',
    images: [
      {
        id: '4-1',
        // Photo by Cord Allman on Unsplash
        src: 'https://images.unsplash.com/photo-1730724620317-2b806898bdda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Fashion editorial portrait',
        aspectRatio: 'portrait'
      },
      {
        id: '4-2',
        // Photo by Happy Face Emoji on Unsplash
        src: 'https://images.unsplash.com/photo-1704137892949-e480ceaebe24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Model in dramatic lighting',
        aspectRatio: 'portrait'
      },
      {
        id: '4-3',
        // Photo by Lawrence Krowdeed on Unsplash
        src: 'https://images.unsplash.com/photo-1631970283992-6b57250a4a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Fashion photography in urban setting',
        aspectRatio: 'landscape'
      },
      {
        id: '4-4',
        // Photo by Ayo Ogunseinde on Unsplash
        src: 'https://images.unsplash.com/photo-1540513325222-55b3afd3ed5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Editorial fashion portrait',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '5',
    title: 'Mountain Stories',
    category: 'documentary',
    year: '2023',
    slug: 'mountain-stories',
    // Photo by Eva Šumah on Unsplash
    coverImage: 'https://images.unsplash.com/photo-1742260765447-239ed006350a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Documentary series following mountain communities and their relationship with the changing alpine environment. A year-long project documenting life at altitude.',
    client: 'Personal Project',
    camera: 'Fujifilm GFX 100 II',
    location: 'Swiss Alps',
    images: [
      {
        id: '5-1',
        // Photo by Marek Piwnicki on Unsplash
        src: 'https://images.unsplash.com/photo-1680287327539-9467451a8b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Mountain landscape at dawn',
        aspectRatio: 'landscape'
      },
      {
        id: '5-2',
        // Photo by Wang John on Unsplash
        src: 'https://images.unsplash.com/photo-1621765808360-5b2ea25d147a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Alpine village in winter',
        aspectRatio: 'landscape'
      },
      {
        id: '5-3',
        // Photo by Peter Robbins on Unsplash
        src: 'https://images.unsplash.com/photo-1721960778604-6a814f039347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Mountain peaks in fog',
        aspectRatio: 'portrait'
      },
      {
        id: '5-4',
        // Photo by FETHI BOUHAOUCHINE on Unsplash
        src: 'https://images.unsplash.com/photo-1654362248566-6804dbcc5bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Sunrise over mountain range',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '6',
    title: 'Coastal Light',
    category: 'landscapes',
    year: '2022',
    slug: 'coastal-light',
    // Photo by Max Kukurudziak on Unsplash
    coverImage: 'https://images.unsplash.com/photo-1669908752972-e04c3b65e855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The ever-changing mood of the coastline captured through different seasons and weather conditions. A meditation on light, water, and time.',
    location: 'Pacific Northwest',
    camera: 'Nikon Z9',
    images: [
      {
        id: '6-1',
        // Photo by Stefanie Jockschat on Unsplash
        src: 'https://images.unsplash.com/photo-1619508126123-3586ee993858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Ocean waves at sunset',
        aspectRatio: 'landscape'
      },
      {
        id: '6-2',
        // Photo by Vladimir Shubarin on Unsplash
        src: 'https://images.unsplash.com/photo-1566303060899-999a74200af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Rocky coastline in morning mist',
        aspectRatio: 'landscape'
      },
      {
        id: '6-3',
        // Photo by Panchanok Juntanarach on Unsplash
        src: 'https://images.unsplash.com/photo-1762686185418-2bffbb8d8fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Beach at golden hour',
        aspectRatio: 'landscape'
      },
      {
        id: '6-4',
        // Photo by Emma Watson on Unsplash
        src: 'https://images.unsplash.com/photo-1594927058779-aa4c1b5804a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Coastal cliffs in dramatic light',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '7',
    title: 'Studio Sessions',
    category: 'portraits',
    year: '2022',
    slug: 'studio-sessions',
    // Photo by Kyle Loftus on Unsplash
    coverImage: 'https://images.unsplash.com/photo-1616267624976-b45d3a7bac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Controlled studio portraiture emphasizing form, light, and expression. Classic approach to contemporary subjects.',
    client: 'Various Editorial',
    camera: 'Hasselblad H6D-100c',
    location: 'New York Studio',
    images: [
      {
        id: '7-1',
        // Photo by Kyle Loftus on Unsplash
        src: 'https://images.unsplash.com/photo-1616267624976-b45d3a7bac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Studio portrait with dramatic lighting',
        aspectRatio: 'portrait'
      },
      {
        id: '7-2',
        // Photo by Robert Piosik on Unsplash
        src: 'https://images.unsplash.com/photo-1551536548-4de53e534e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Classic portrait in soft light',
        aspectRatio: 'portrait'
      },
      {
        id: '7-3',
        // Photo by Bench Accounting on Unsplash
        src: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Portrait with minimalist background',
        aspectRatio: 'square'
      },
      {
        id: '7-4',
        // Photo by Vitaly Gariev on Unsplash
        src: 'https://images.unsplash.com/photo-1758521233019-e53cb9ce77b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Contemporary studio portrait',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '8',
    title: 'City Lights',
    category: 'editorial',
    year: '2022',
    slug: 'city-lights',
    // Photo by Michael Wu on Unsplash
    coverImage: 'https://images.unsplash.com/photo-1582210413269-f0bf6d13f58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Urban nightscapes and the electric energy of city life after dark. Long exposures and ambient light create a dreamlike quality.',
    client: 'Adobe Creative Cloud',
    camera: 'Sony A7S III',
    location: 'Tokyo & New York',
    images: [
      {
        id: '8-1',
        // Photo by Li Zhang on Unsplash
        src: 'https://images.unsplash.com/photo-1617293134227-0ec282f3ed89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'City street at night with neon lights',
        aspectRatio: 'landscape'
      },
      {
        id: '8-2',
        // Photo by Clay LeConey on Unsplash
        src: 'https://images.unsplash.com/photo-1643124859906-b5f7ef3e210d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Urban skyline at dusk',
        aspectRatio: 'landscape'
      },
      {
        id: '8-3',
        // Photo by Lutz Stallknecht on Unsplash
        src: 'https://images.unsplash.com/photo-1761870033405-d1474ec5dae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Night photography of city architecture',
        aspectRatio: 'portrait'
      },
      {
        id: '8-4',
        // Photo by stable pattern on Unsplash
        src: 'https://images.unsplash.com/photo-1701012292510-83de4283ef1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Downtown at night with light trails',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '9',
    title: 'Soft Robotic Space Gripper',
    category: 'soft robotics',
    year: '2025-2026',
    slug: 'soft-space-gripper',
    // Photo by Zain Creations on Unsplash
    coverImage: 'https://images.unsplash.com/photo-1733496637708-9470e9c8cfe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjB8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'An exploration of the stark beauty and quiet majesty of the American Southwest. This series captures the interplay of light, shadow, and ancient geological formations that define the desert landscape.',
    client: 'National Geographic',
    camera: 'Hasselblad X2D 100C',
    location: 'Arizona & Utah',
    images: [
      {
        id: '9-1',
        // Photo by Joe Dudeck on Unsplash
        src: 'https://images.unsplash.com/photo-1610142004358-e4e987e4c5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Desert canyon at golden hour',
        aspectRatio: 'landscape'
      },
      {
        id: '9-2',
        // Photo by Giorgio Fouarge on Unsplash
        src: 'https://images.unsplash.com/photo-1705321217071-b1b6672fa23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Sand dunes in morning light',
        aspectRatio: 'portrait'
      },
      {
        id: '9-3',
        // Photo by Astroby krishna on Unsplash
        src: 'https://images.unsplash.com/photo-1727319384541-8b96ca1526e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Rock formations under starry sky',
        aspectRatio: 'landscape'
      },
      {
        id: '9-4',
        // Photo by Ilker Ozmen on Unsplash
        src: 'https://images.unsplash.com/photo-1725986951716-75fb278ecaec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Desert vista at sunset',
        aspectRatio: 'square'
      }
    ]
  },
  {
  id: '10',
  title: 'Compliant Chronograph Mechanism',
  category: 'compliant-mechanisms',
  year: '2024',
  slug: 'compliant-chronograph',
  coverImage: '/images/Flexous.png', // replace with your actual image path

  description: 'Master thesis project conducted with Flexous Mechanisms, focused on the design and optimisation of a compliant horizontal clutch and braking system for mechanical chronographs. The work explores how compliant mechanisms—achieving motion through elastic deformation rather than rigid joints—can improve precision by reducing backlash, friction, and lubrication requirements in watchmaking applications.',

  client: 'Flexous Mechanisms · TU Delft',
  location: 'Delft, Netherlands',

  skills: [
    'Compliant Mechanism Design',
    'Finite Element Analysis (ANSYS APDL)',
    'SolidWorks CAD',
    'Additive Manufacturing (3D Printing)',
    'Mechanical Testing',
    'Precision Engineering'
  ],

  notes: 'Full thesis results are under company embargo until October 2025. This project highlights methodology and engineering approach without disclosing proprietary results.',

  link: {
    label: 'Flexous Mechanisms',
    url: 'https://flexous.com' // replace if needed
  }
}
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
