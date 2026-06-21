export const personalInfo = {
  name: "Nguyễn Đức Luận",
  nameEn: "Duc Luan Nguyen",
  role: "Frontend Developer",
  company: "APUS Digital Technology Solutions",
  tagline: "Building enterprise ERP platforms with React & Next.js.",
  bio: "Frontend Developer with 2+ years of experience building enterprise ERP systems — HRM, Sales, Document Management, and Accounting modules. I focus on delivering responsive interfaces, reusable UI components, and robust form logic that scale with complex business requirements.",
  bioExtra: "I take pride in writing clean, maintainable code and collaborating effectively with cross-functional teams through code reviews and testing. Currently open to new opportunities and exploring how AI-augmented workflows can accelerate feature delivery.",
  email: "ducluan05102001@gmail.com",
  github: "https://github.com/ndluna21",
  linkedin: "#",
  location: "Pham Van Dong, Nghia Do, Cau Giay, Ha Noi",
  available: true,
};

export const skills = [
  {
    category: "Frontend",
    icon: "⚡",
    items: [
      { name: "React / Next.js", level: "daily" as const },
      { name: "TypeScript", level: "daily" as const },
      { name: "Material UI v5", level: "daily" as const },
      { name: "React Hook Form", level: "daily" as const },
      { name: "Tailwind CSS", level: "proficient" as const },
      { name: "Framer Motion", level: "proficient" as const },
    ],
  },
  {
    category: "State & Data",
    icon: "🔄",
    items: [
      { name: "RESTful API Integration", level: "daily" as const },
      { name: "Axios", level: "daily" as const },
      { name: "Redux Toolkit", level: "proficient" as const },
      { name: "React Query", level: "proficient" as const },
      { name: "Zod", level: "proficient" as const },
      { name: "redux-persist", level: "proficient" as const },
    ],
  },
  {
    category: "Architecture",
    icon: "🏗️",
    items: [
      { name: "Reusable Component Design", level: "daily" as const },
      { name: "Responsive UI Design", level: "daily" as const },
      { name: "Code Review & Testing", level: "daily" as const },
      { name: "ERP Module Architecture", level: "proficient" as const },
      { name: "Service Layer Pattern", level: "proficient" as const },
      { name: "Rendering Optimization", level: "proficient" as const },
    ],
  },
  {
    category: "Languages & Tools",
    icon: "🛠️",
    items: [
      { name: "JavaScript (ES6+)", level: "daily" as const },
      { name: "Git", level: "daily" as const },
      { name: "VS Code / Cursor", level: "daily" as const },
      { name: "NodeJS / ExpressJS", level: "learning" as const },
      { name: "SQL Server", level: "learning" as const },
      { name: "Claude Code", level: "proficient" as const },
    ],
  },
  {
    category: "Languages",
    icon: "🌐",
    items: [
      { name: "Vietnamese", level: "daily" as const },
      { name: "English (B1)", level: "proficient" as const },
      { name: "Chinese (HSK 3)", level: "proficient" as const },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: "APUS Digital Technology Solutions JSC",
    companyUrl: "#",
    role: "Front-End Developer",
    period: "03/2024 – Present",
    location: "Ha Noi, Vietnam",
    description:
      "Building and maintaining an enterprise ERP ecosystem spanning HRM, Sales/Purchase Orders, Document Management, and Accounting modules. Contributing to shared UI component libraries and implementing complex business logic on a Next.js + MUI foundation.",
    achievements: [
      "Develop responsive user interfaces for ERP modules using React / Next.js and Material UI",
      "Build and maintain reusable UI components to ensure consistency across the ERP system",
      "Implement dynamic forms and validation logic using React Hook Form",
      "Implement business logic for ERP modules such as HRM and Sales/Purchase Orders based on product requirements",
      "Integrate RESTful APIs to support CRUD operations and data synchronization",
      "Optimize rendering performance for data tables and large datasets",
      "Fix bugs, debug issues, and collaborate with team members through code reviews and testing",
    ],
    tech: ["Next.js", "TypeScript", "React Hook Form", "Material UI", "RESTful API", "React", "Redux Toolkit"],
  },
  {
    id: 2,
    company: "FPT Software",
    companyUrl: "https://fptsoftware.com",
    role: "Frontend Developer Intern",
    period: "01/2023 – 03/2023",
    location: "Ha Noi, Vietnam",
    description:
      "Internship in front-end development, gaining foundational experience with modern web technologies under industry mentorship at one of Vietnam's leading software companies.",
    achievements: [
      "Trained in Front-End technologies including HTML, CSS, JavaScript, and fundamental ReactJS concepts",
    ],
    tech: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
];

export const projects = [
  {
    id: 1,
    title: "HRM CMS",
    subtitle: "Human Resource Management System",
    description:
      "Enterprise HR management system handling employee data, organizational structure, attendance tracking, and HR workflows.",
    highlights: [
      "Responsive data tables with pagination, sorting, and filtering for complex HR datasets",
      "Multi-step forms with dynamic fields and business rule validation using React Hook Form",
      "RESTful API integration for employee CRUD and real-time data synchronization",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API", "Redux Toolkit"],
    featured: true,
    type: "app",
  },
  {
    id: 2,
    title: "Sale Order Service",
    subtitle: "Sales Order Management",
    description:
      "Sales order management module handling order creation, product selection, pricing, customer management, and approval workflows.",
    highlights: [
      "Complex order forms with dynamic line items and business rule validation",
      "Performance-optimized tables for large order and product datasets",
      "Full order lifecycle management via RESTful API integration",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: true,
    type: "app",
  },
  {
    id: 3,
    title: "Purchase Order Service",
    subtitle: "Purchase Order Management",
    description:
      "Purchase order system managing supplier orders, procurement workflows, and multi-level approval processes.",
    highlights: [
      "Dynamic purchase order forms with supplier and product management",
      "Multi-level approval workflow UI with role-based controls",
      "RESTful API integration for procurement lifecycle management",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: true,
    type: "app",
  },
  {
    id: 4,
    title: "Accounting CMS",
    subtitle: "Accounting Management System",
    description:
      "Accounting module handling financial data entry, journal entries, reporting dashboards, and financial workflow management.",
    highlights: [
      "Financial data entry forms with complex validation and business rules",
      "Reporting and dashboard views for accounting data",
      "API integration for financial operations and data synchronization",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: true,
    type: "app",
  },
  {
    id: 5,
    title: "DMS",
    subtitle: "Document Management System",
    description:
      "Enterprise document management with folder hierarchies, file browsing, upload workflows, and role-based access control.",
    highlights: [
      "Hierarchical folder/file browsing UI with breadcrumb navigation",
      "File upload and categorization workflows",
      "Role-based document access control",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 6,
    title: "Finance Service",
    subtitle: "Financial Management System",
    description:
      "Financial service module managing budgets, financial transactions, cost centers, and financial reporting.",
    highlights: [
      "Budget management and financial transaction forms",
      "Cost center tracking and reporting dashboards",
      "Integration with accounting and ERP backend APIs",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 7,
    title: "Asset Service CMS",
    subtitle: "Asset Management System",
    description:
      "Enterprise asset management system tracking company assets, depreciation schedules, maintenance records, and asset allocation.",
    highlights: [
      "Asset registry with detailed tracking and lifecycle management",
      "Depreciation calculation and reporting views",
      "Asset allocation and maintenance workflow UI",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 8,
    title: "Contract Service CMS",
    subtitle: "Contract Management System",
    description:
      "Contract lifecycle management system handling contract creation, approval workflows, expiry tracking, and document attachments.",
    highlights: [
      "Contract creation forms with dynamic clauses and attachments",
      "Approval workflow with role-based signing controls",
      "Contract expiry tracking and notification UI",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 9,
    title: "Manufactory Service",
    subtitle: "Manufacturing Management System",
    description:
      "Manufacturing management module handling production orders, bill of materials, work orders, and production tracking.",
    highlights: [
      "Production order management with BOM configuration",
      "Work order tracking and progress monitoring UI",
      "Manufacturing workflow integration with inventory APIs",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 10,
    title: "Internal Warehouse Service",
    subtitle: "Internal Warehouse Management",
    description:
      "Internal warehouse management handling stock movements, inventory tracking, inbound/outbound operations, and stock reports.",
    highlights: [
      "Stock movement forms with batch and serial number tracking",
      "Inventory dashboard with real-time stock level views",
      "Inbound/outbound operation management UI",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 11,
    title: "Product Warehouse",
    subtitle: "Product & Warehouse Management",
    description:
      "Product warehouse system managing product catalog, stock levels, warehouse locations, and inventory operations.",
    highlights: [
      "Product catalog management with category and variant support",
      "Warehouse location and bin management UI",
      "Inventory operation workflows with RESTful API integration",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 12,
    title: "Merchant Product Service",
    subtitle: "Merchant & Product Management",
    description:
      "Merchant and product management system handling merchant onboarding, product listings, pricing, and catalog management.",
    highlights: [
      "Merchant onboarding forms with document verification",
      "Product listing management with pricing and variant configuration",
      "Catalog management with category hierarchy UI",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 13,
    title: "Partner Service",
    subtitle: "Partner Management System",
    description:
      "Partner relationship management system handling partner registration, contracts, performance tracking, and collaboration workflows.",
    highlights: [
      "Partner registration and onboarding workflow UI",
      "Performance tracking and reporting dashboards",
      "Contract and agreement management integration",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 14,
    title: "Driver CMS",
    subtitle: "Driver Management System",
    description:
      "Driver management system for logistics operations, handling driver profiles, assignments, schedules, and performance tracking.",
    highlights: [
      "Driver profile management with document and license tracking",
      "Assignment and scheduling UI for logistics operations",
      "Performance monitoring and reporting dashboards",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 15,
    title: "EDM CMS",
    subtitle: "Electronic Document Management",
    description:
      "Electronic document management system for enterprise-grade document workflows, digital signatures, and document archiving.",
    highlights: [
      "Document workflow management with approval routing",
      "Digital document viewing and annotation UI",
      "Document archiving and retrieval with search functionality",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 16,
    title: "QMS CMS",
    subtitle: "Quality Management System",
    description:
      "Quality management system handling quality control processes, inspection workflows, non-conformance reports, and quality audits.",
    highlights: [
      "Quality inspection forms with checklist and scoring UI",
      "Non-conformance report management and tracking",
      "Quality audit workflow with corrective action management",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 17,
    title: "SPM CMS",
    subtitle: "Service/Supplier Performance Management",
    description:
      "Performance management system for tracking supplier and service KPIs, evaluations, scorecards, and improvement plans.",
    highlights: [
      "KPI configuration and performance scorecard UI",
      "Supplier evaluation forms and scoring workflows",
      "Performance trend dashboards and reporting",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 18,
    title: "Task Management CMS",
    subtitle: "Task & Project Management",
    description:
      "Task management system for internal teams, handling task creation, assignment, progress tracking, and deadline management.",
    highlights: [
      "Task board with drag-and-drop status management",
      "Task assignment and priority management UI",
      "Progress tracking and deadline notification views",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 19,
    title: "Organization CMS",
    subtitle: "Organization Management System",
    description:
      "Organization management system handling company structure, departments, positions, and organizational hierarchy.",
    highlights: [
      "Org chart visualization with hierarchical department management",
      "Position and role management with permission configuration",
      "Department CRUD operations with RESTful API integration",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 20,
    title: "Company Service",
    subtitle: "Company Configuration Management",
    description:
      "Company configuration service managing multi-tenant company settings, branch management, and company-level configurations.",
    highlights: [
      "Multi-tenant company settings and configuration UI",
      "Branch and subsidiary management forms",
      "Company-level permission and access control management",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "React Hook Form", "RESTful API"],
    featured: false,
    type: "app",
  },
  {
    id: 21,
    title: "R&D",
    subtitle: "Research & Development",
    description:
      "Internal R&D project for exploring new technologies, prototyping new features, and evaluating tools for the APUS ERP ecosystem.",
    highlights: [
      "Technology evaluation and proof-of-concept development",
      "Feature prototyping for upcoming ERP modules",
    ],
    tech: ["Next.js 13", "TypeScript", "Material UI", "RESTful API"],
    featured: false,
    type: "app",
  },
];

export const achievements = [
  {
    id: 1,
    title: "ERP UI Component Library",
    description:
      "Built and maintained reusable UI components used consistently across HRM, Sales, DMS, and ACC modules of the APUS ERP ecosystem, ensuring design consistency and accelerating feature delivery.",
    impact: "Consistent UI across 4+ ERP modules",
    icon: "🔗",
  },
  {
    id: 2,
    title: "Dynamic Form Architecture",
    description:
      "Implemented dynamic forms and validation logic using React Hook Form across all ERP modules, supporting complex business rules, multi-step workflows, and real-time field validation.",
    impact: "Forms across 4 ERP modules",
    icon: "📋",
  },
  {
    id: 3,
    title: "Data Table Performance",
    description:
      "Optimized rendering performance for data-dense tables and large datasets across ERP modules, ensuring smooth UX for enterprise-scale data operations with pagination and virtual scrolling.",
    impact: "Smooth UX for large datasets",
    icon: "⚡",
  },
  {
    id: 4,
    title: "RESTful API Integration",
    description:
      "Integrated RESTful APIs across all ERP modules to support CRUD operations and data synchronization between frontend and backend services, handling async states and error flows cleanly.",
    impact: "Full CRUD across 4+ modules",
    icon: "🔄",
  },
  {
    id: 5,
    title: "Responsive ERP Interfaces",
    description:
      "Developed responsive user interfaces for multiple ERP modules using React/Next.js and Material UI, ensuring usability and visual consistency across different screen sizes and devices.",
    impact: "Responsive across all modules",
    icon: "📱",
  },
  {
    id: 6,
    title: "Team Collaboration & Code Quality",
    description:
      "Actively participated in team code reviews and testing processes, contributing to overall code quality, knowledge sharing, and bug resolution within the development team.",
    impact: "Better code quality for the team",
    icon: "🤝",
  },
];

export const aiWorkflow = {
  title: "AI-Augmented Development Workflow",
  subtitle:
    "Using AI tooling to ship faster without sacrificing code quality or architectural thinking.",
  tools: [
    {
      name: "Claude Code",
      role: "Primary AI coding assistant",
      use: "Complex refactors, architecture exploration, documentation generation, CLAUDE.md-driven project context",
      icon: "🤖",
    },
    {
      name: "Cursor IDE",
      role: "AI-native code editor",
      use: "Inline completions, codebase Q&A, multi-file edits with project context",
      icon: "✏️",
    },
    {
      name: "Windsurf",
      role: "Agentic IDE",
      use: "Autonomous task completion, cascade edits across related files",
      icon: "🌊",
    },
    {
      name: "CLAUDE.md",
      role: "Living project specification",
      use: "Encodes project conventions, stack decisions, and patterns — AI reads this before touching code",
      icon: "📋",
    },
  ],
  philosophy:
    "AI tools amplify engineering judgment — they don't replace it. I use AI to compress the time between 'I know what to build' and 'it's built and tested,' while keeping architectural decisions, API design, and code review as human responsibilities.",
};

export const timeline = [
  {
    year: "2024",
    title: "APUS Digital Technology Solutions",
    description:
      "Joined APUS as Front-End Developer. Building ERP ecosystem (HRM, Sales/Purchase, DMS, ACC) on Next.js + MUI platform.",
    type: "work",
  },
  {
    year: "2023",
    title: "FPT Software — Frontend Intern",
    description:
      "Internship at FPT Software. Trained in HTML, CSS, JavaScript, and ReactJS fundamentals under industry mentorship.",
    type: "work",
  },
  {
    year: "2019–2023",
    title: "University of Transport and Communications",
    description:
      "Bachelor of Information Technology, GPA 3.0. Built foundation in algorithms, data structures, OOP, and web development.",
    type: "education",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "ducluan05102001@gmail.com",
    href: "mailto:ducluan05102001@gmail.com",
    icon: "✉️",
  },
  {
    label: "GitHub",
    value: "ndluna21",
    href: "https://github.com/ndluna21",
    icon: "💻",
  },
  {
    label: "Facebook",
    value: "nguyenduc.luan0510",
    href: "https://www.facebook.com/nguyenduc.luan0510",
    icon: "📘",
  },
  {
    label: "Location",
    value: "Cau Giay, Ha Noi, Vietnam",
    href: "#",
    icon: "📍",
  },
];
