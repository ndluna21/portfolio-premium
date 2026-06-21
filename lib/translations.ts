export type Language = "en" | "vi";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    personal: {
      tagline: "Building enterprise ERP platforms with React & Next.js.",
      bio: "Frontend Developer with 2+ years of experience building enterprise ERP systems — HRM, Sales, Document Management, and Accounting modules. I focus on delivering responsive interfaces, reusable UI components, and robust form logic that scale with complex business requirements.",
      bioExtra:
        "I take pride in writing clean, maintainable code and collaborating effectively with cross-functional teams through code reviews and testing. Currently open to new opportunities and exploring how AI-augmented workflows can accelerate feature delivery.",
    },
    hero: {
      available: "Available for opportunities",
      unavailable: "Currently unavailable",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
      scroll: "scroll",
    },
    about: {
      sectionLabel: "01. about",
      title: "Who I Am",
      yearsExp: "Years Experience",
      cmsProducts: "ERP Modules",
      techStack: "Tech Stack",
      basedIn: "Based In",
      viewGithub: "View GitHub",
      contactMe: "Contact Me",
    },
    skills: {
      sectionLabel: "02. skills",
      title: "Tech Stack",
      description:
        "Technologies used in production across enterprise ERP projects. Levels reflect real-world usage.",
      allTech: "All confirmed technologies",
      levels: {
        daily: "Daily Use",
        proficient: "Proficient",
        learning: "Learning",
      },
    },
    experience: {
      sectionLabel: "03. experience",
      title: "Where I've Worked",
      items: [
        {
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
        },
        {
          description:
            "Internship in front-end development, gaining foundational experience with modern web technologies under industry mentorship at one of Vietnam's leading software companies.",
          achievements: [
            "Trained in Front-End technologies including HTML, CSS, JavaScript, and fundamental ReactJS concepts",
          ],
        },
      ],
    },
    projects: {
      sectionLabel: "04. projects",
      title: "Featured Work",
      description:
        "Real projects from professional experience at APUS Digital Technology Solutions. Enterprise ERP modules built for scale.",
      featuredLabel: "Featured",
      allProjectsLabel: "All Projects",
      typeLabels: {
        hook: "Custom Hook",
        app: "Web Application",
      },
      moreHighlights: "+{n} more highlights",
    },
    achievements: {
      sectionLabel: "05. achievements",
      title: "Engineering Achievements",
      description:
        "Specific accomplishments from building the APUS ERP ecosystem — real impact across production modules.",
      items: [
        {
          title: "ERP UI Component Library",
          description:
            "Built and maintained reusable UI components used consistently across HRM, Sales, DMS, and ACC modules, ensuring design consistency and accelerating feature delivery.",
          impact: "Consistent UI across 4+ ERP modules",
        },
        {
          title: "Dynamic Form Architecture",
          description:
            "Implemented dynamic forms and validation logic using React Hook Form across all ERP modules, supporting complex business rules, multi-step workflows, and real-time field validation.",
          impact: "Forms across 4 ERP modules",
        },
        {
          title: "Data Table Performance",
          description:
            "Optimized rendering performance for data-dense tables and large datasets across ERP modules, ensuring smooth UX for enterprise-scale data operations with pagination and virtual scrolling.",
          impact: "Smooth UX for large datasets",
        },
        {
          title: "RESTful API Integration",
          description:
            "Integrated RESTful APIs across all ERP modules to support CRUD operations and data synchronization between frontend and backend services, handling async states and error flows cleanly.",
          impact: "Full CRUD across 4+ modules",
        },
        {
          title: "Responsive ERP Interfaces",
          description:
            "Developed responsive user interfaces for multiple ERP modules using React/Next.js and Material UI, ensuring usability and visual consistency across different screen sizes.",
          impact: "Responsive across all modules",
        },
        {
          title: "Team Collaboration & Code Quality",
          description:
            "Actively participated in team code reviews and testing processes, contributing to overall code quality, knowledge sharing, and bug resolution within the development team.",
          impact: "Better code quality for the team",
        },
      ],
    },
    aiWorkflow: {
      sectionLabel: "06. workflow",
      title: "AI-Augmented Development Workflow",
      subtitle:
        "Using AI tooling to ship faster without sacrificing code quality or architectural thinking.",
      philosophyLabel: "Philosophy",
      philosophy:
        "AI tools amplify engineering judgment — they don't replace it. I use AI to compress the time between 'I know what to build' and 'it's built and tested,' while keeping architectural decisions, API design, and code review as human responsibilities.",
      tools: [
        {
          role: "Primary AI coding assistant",
          use: "Complex refactors, architecture exploration, documentation generation, CLAUDE.md-driven project context",
        },
        {
          role: "AI-native code editor",
          use: "Inline completions, codebase Q&A, multi-file edits with project context",
        },
        {
          role: "Agentic IDE",
          use: "Autonomous task completion, cascade edits across related files",
        },
        {
          role: "Living project specification",
          use: "Encodes project conventions, stack decisions, and patterns — AI reads this before touching code",
        },
      ],
    },
    timeline: {
      sectionLabel: "07. timeline",
      title: "Career Path",
      typeLabels: {
        work: "Work",
        learning: "Learning",
        education: "Education",
      },
      items: [
        {
          title: "APUS Digital Technology Solutions",
          description:
            "Joined APUS as Front-End Developer. Building ERP ecosystem (HRM, Sales/Purchase, DMS, ACC) on Next.js + MUI platform.",
        },
        {
          title: "FPT Software — Frontend Intern",
          description:
            "Internship at FPT Software. Trained in HTML, CSS, JavaScript, and ReactJS fundamentals under industry mentorship.",
        },
        {
          title: "University of Transport and Communications",
          description:
            "Bachelor of Information Technology, GPA 3.0. Built foundation in algorithms, data structures, OOP, and web development.",
        },
      ],
    },
    contact: {
      sectionLabel: "08. contact",
      title: "Get in Touch",
      description:
        "Open to new opportunities, interesting projects, and engineering conversations. The best way to reach me is by email.",
      sendEmail: "Send me an email",
      replyNote: "I read every message and reply within 24 hours.",
      copy: "Copy",
      copied: "Copied!",
      openEmail: "Open Email Client",
      findElsewhere: "Find me elsewhere",
      availabilityText:
        "Available for opportunities — Currently open to full-time frontend developer roles or contract work. Remote-friendly.",
    },
  },

  vi: {
    nav: {
      about: "Giới Thiệu",
      skills: "Kỹ Năng",
      experience: "Kinh Nghiệm",
      projects: "Dự Án",
      contact: "Liên Hệ",
      hireMe: "Tuyển Dụng Tôi",
    },
    personal: {
      tagline: "Xây dựng nền tảng ERP doanh nghiệp với React & Next.js.",
      bio: "Frontend Developer với hơn 2 năm kinh nghiệm xây dựng hệ thống ERP doanh nghiệp — các module HRM, Quản lý Bán hàng, Quản lý Tài liệu và Kế toán. Tôi tập trung vào việc xây dựng giao diện responsive, component UI tái sử dụng và logic form mạnh mẽ đáp ứng các yêu cầu kinh doanh phức tạp.",
      bioExtra:
        "Tôi tự hào về việc viết code sạch, dễ bảo trì và cộng tác hiệu quả với nhóm thông qua code review và kiểm thử. Hiện đang tìm kiếm cơ hội mới và khám phá cách các quy trình tăng cường bởi AI đẩy nhanh việc phân phối tính năng.",
    },
    hero: {
      available: "Sẵn sàng cho cơ hội mới",
      unavailable: "Hiện không khả dụng",
      viewWork: "Xem Dự Án",
      getInTouch: "Liên Hệ",
      scroll: "cuộn",
    },
    about: {
      sectionLabel: "01. giới thiệu",
      title: "Về Tôi",
      yearsExp: "Năm Kinh Nghiệm",
      cmsProducts: "Module ERP",
      techStack: "Công Nghệ",
      basedIn: "Địa Điểm",
      viewGithub: "Xem GitHub",
      contactMe: "Liên Hệ",
    },
    skills: {
      sectionLabel: "02. kỹ năng",
      title: "Công Nghệ Sử Dụng",
      description:
        "Công nghệ được sử dụng trong môi trường production trên các dự án ERP doanh nghiệp. Mức độ phản ánh thực tế sử dụng.",
      allTech: "Tất cả công nghệ đã sử dụng",
      levels: {
        daily: "Dùng hàng ngày",
        proficient: "Thành thạo",
        learning: "Đang học",
      },
    },
    experience: {
      sectionLabel: "03. kinh nghiệm",
      title: "Nơi Tôi Đã Làm Việc",
      items: [
        {
          description:
            "Xây dựng và duy trì hệ sinh thái ERP doanh nghiệp bao gồm các module HRM, Quản lý Bán hàng/Mua hàng, Quản lý Tài liệu và Kế toán. Đóng góp vào thư viện component UI dùng chung và triển khai logic nghiệp vụ phức tạp trên nền tảng Next.js + MUI.",
          achievements: [
            "Phát triển giao diện người dùng responsive cho các module ERP sử dụng React / Next.js và Material UI",
            "Xây dựng và duy trì các component UI tái sử dụng để đảm bảo tính nhất quán trên toàn hệ thống ERP",
            "Triển khai form động và logic xác thực sử dụng React Hook Form",
            "Triển khai logic nghiệp vụ cho các module ERP như HRM và Quản lý Bán hàng/Mua hàng dựa trên yêu cầu sản phẩm",
            "Tích hợp RESTful API để hỗ trợ các thao tác CRUD và đồng bộ dữ liệu",
            "Tối ưu hiệu suất render cho bảng dữ liệu và tập dữ liệu lớn",
            "Sửa lỗi, debug và cộng tác với thành viên nhóm thông qua code review và kiểm thử",
          ],
        },
        {
          description:
            "Thực tập phát triển front-end, tích lũy kinh nghiệm nền tảng với các công nghệ web hiện đại dưới sự hướng dẫn của chuyên gia tại một trong những công ty phần mềm hàng đầu Việt Nam.",
          achievements: [
            "Được đào tạo các công nghệ Front-End bao gồm HTML, CSS, JavaScript và các khái niệm cơ bản của ReactJS",
          ],
        },
      ],
    },
    projects: {
      sectionLabel: "04. dự án",
      title: "Dự Án Nổi Bật",
      description:
        "Dự án thực từ kinh nghiệm chuyên nghiệp tại APUS Digital Technology Solutions. Các module ERP doanh nghiệp được xây dựng để mở rộng quy mô.",
      featuredLabel: "Nổi Bật",
      allProjectsLabel: "Tất Cả Dự Án",
      typeLabels: {
        hook: "Custom Hook",
        app: "Ứng Dụng Web",
      },
      moreHighlights: "+{n} điểm nổi bật khác",
    },
    achievements: {
      sectionLabel: "05. thành tựu",
      title: "Thành Tựu Kỹ Thuật",
      description:
        "Thành tựu cụ thể từ việc xây dựng hệ sinh thái ERP tại APUS — tác động thực tế trên các module production.",
      items: [
        {
          title: "Thư Viện Component ERP",
          description:
            "Xây dựng và duy trì các component UI tái sử dụng được dùng nhất quán trên các module HRM, Sales, DMS và ACC, đảm bảo tính nhất quán thiết kế và tăng tốc phân phối tính năng.",
          impact: "UI nhất quán trên 4+ module ERP",
        },
        {
          title: "Kiến Trúc Form Động",
          description:
            "Triển khai form động và logic xác thực bằng React Hook Form trên tất cả module ERP, hỗ trợ quy tắc nghiệp vụ phức tạp, quy trình nhiều bước và xác thực trường theo thời gian thực.",
          impact: "Form trên 4 module ERP",
        },
        {
          title: "Tối Ưu Hiệu Suất Bảng Dữ Liệu",
          description:
            "Tối ưu hiệu suất render cho bảng dữ liệu dày đặc và tập dữ liệu lớn trên các module ERP, đảm bảo UX mượt mà cho các thao tác dữ liệu quy mô doanh nghiệp với phân trang và cuộn ảo.",
          impact: "UX mượt mà với dữ liệu lớn",
        },
        {
          title: "Tích Hợp RESTful API",
          description:
            "Tích hợp RESTful API trên tất cả module ERP để hỗ trợ các thao tác CRUD và đồng bộ dữ liệu giữa frontend và backend, xử lý trạng thái async và luồng lỗi một cách sạch sẽ.",
          impact: "CRUD đầy đủ trên 4+ module",
        },
        {
          title: "Giao Diện ERP Responsive",
          description:
            "Phát triển giao diện người dùng responsive cho nhiều module ERP sử dụng React/Next.js và Material UI, đảm bảo khả năng sử dụng và tính nhất quán trực quan trên các kích thước màn hình khác nhau.",
          impact: "Responsive trên tất cả module",
        },
        {
          title: "Cộng Tác & Chất Lượng Code",
          description:
            "Tích cực tham gia code review và quy trình kiểm thử của nhóm, đóng góp vào chất lượng code tổng thể, chia sẻ kiến thức và giải quyết lỗi trong nhóm phát triển.",
          impact: "Nâng cao chất lượng code nhóm",
        },
      ],
    },
    aiWorkflow: {
      sectionLabel: "06. quy trình",
      title: "Quy Trình Phát Triển Tăng Cường bởi AI",
      subtitle:
        "Sử dụng công cụ AI để ship nhanh hơn mà không đánh đổi chất lượng code hay tư duy kiến trúc.",
      philosophyLabel: "Triết Lý",
      philosophy:
        "Công cụ AI khuếch đại phán đoán kỹ thuật — không thay thế nó. Tôi dùng AI để rút ngắn thời gian giữa 'biết cần build gì' và 'đã build và test xong', trong khi giữ quyết định kiến trúc, thiết kế API và code review là trách nhiệm của con người.",
      tools: [
        {
          role: "Trợ lý AI coding chính",
          use: "Refactor phức tạp, khám phá kiến trúc, tạo tài liệu, context dự án điều khiển bởi CLAUDE.md",
        },
        {
          role: "Editor code AI-native",
          use: "Gợi ý inline, hỏi đáp về codebase, chỉnh sửa đa file với context dự án",
        },
        {
          role: "Agentic IDE",
          use: "Hoàn thành tác vụ tự động, chỉnh sửa cascade qua các file liên quan",
        },
        {
          role: "Đặc tả dự án sống",
          use: "Mã hóa quy ước dự án, quyết định stack và mẫu — AI đọc trước khi viết code",
        },
      ],
    },
    timeline: {
      sectionLabel: "07. lộ trình",
      title: "Lộ Trình Sự Nghiệp",
      typeLabels: {
        work: "Công Việc",
        learning: "Học Hỏi",
        education: "Học Vấn",
      },
      items: [
        {
          title: "APUS Digital Technology Solutions",
          description:
            "Gia nhập APUS với vai trò Front-End Developer. Xây dựng hệ sinh thái ERP (HRM, Sales/Purchase, DMS, ACC) trên nền tảng Next.js + MUI.",
        },
        {
          title: "FPT Software — Thực Tập Frontend",
          description:
            "Thực tập tại FPT Software. Được đào tạo HTML, CSS, JavaScript và các khái niệm cơ bản của ReactJS dưới sự hướng dẫn của chuyên gia.",
        },
        {
          title: "Đại Học Giao Thông Vận Tải",
          description:
            "Cử nhân Công nghệ Thông tin, GPA 3.0. Xây dựng nền tảng về thuật toán, cấu trúc dữ liệu, OOP và phát triển web.",
        },
      ],
    },
    contact: {
      sectionLabel: "08. liên hệ",
      title: "Liên Hệ",
      description:
        "Sẵn sàng đón nhận cơ hội mới, dự án thú vị và các cuộc trò chuyện kỹ thuật. Cách tốt nhất để liên hệ với tôi là qua email.",
      sendEmail: "Gửi Email",
      replyNote: "Tôi đọc mọi tin nhắn và trả lời trong vòng 24 giờ.",
      copy: "Sao chép",
      copied: "Đã sao chép!",
      openEmail: "Mở Email",
      findElsewhere: "Tìm tôi tại",
      availabilityText:
        "Sẵn sàng nhận việc — Hiện đang tìm kiếm vị trí frontend developer toàn thời gian hoặc hợp đồng. Có thể làm việc từ xa.",
    },
  },
} as const;

export type Translations = typeof translations.en;
