import { Background } from "#components";

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "icons/wifi.svg",
  },
  {
    id: 2,
    img: "icons/search.svg",
  },
  {
    id: 3,
    img: "icons/user.svg",
  },
  {
    id: 4,
    img: "icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "JavaScript Explained: Why Javascript. How it will help to build websites?",
    image: "images/blog1.jpg",
    link: "https://www.google.com/",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title:
      "VsCode Explained: Why VS Code is help us to code more elegent and dynamic.",
    image: "images/blog2.jpg",
    link: "https://www.google.com/",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "AI Explained: Is it good to use AI for coding?",
    image: "images/blog3.jpg",
    link: "https://www.google.com/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["HTML", "JavaScript", "Typescript"],
  },
  {
    category: "Mobile",
    items: ["Responsive Design"],
  },
  {
    category: "Styling",
    items: ["Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend not started yet",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database not started yet",
    items: ["MongoDB"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/developeravijit",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/avijit-roy-22a21a164",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "images/galary1.jpg",
    position: "top-10 left-0",
  },
  {
    id: 2,
    img: "images/galary2.jpg",
    position: "top-10 left-40",
  },
  {
    id: 3,
    img: "images/galary3.jpg",
    position: "top-10 left-80",
  },
  {
    id: 4,
    img: "images/galary4.jpg",
    position: "top-50 left-5",
  },
  {
    id: 5,
    img: "images/galary5.jpg",
    position: "top-50 left-45",
  },
  {
    id: 6,
    img: "images/galary6.jpg",
    position: "top-50 left-90",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Indiglam Jewellery Website",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Indiglam Project.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This is Avijit, I made this project to showcase my skills in web development and design.",
            "This website represents a fictional premium jewellery brand that offers a wide range of exquisite jewellery pieces for various occasions.",
            "The Designed and developed a responsive jewellery website to display product collections with an elegant and user-focused interface.",
            "Built with HTML, CSS, Bootstrap, and JavaScript to ensure smooth navigation, adaptive layouts, and consistent performance across devices.",
            "Emphasised clean UI design, accessibility, and seamless browsing experience to enhance visual appeal and user engagement.",
          ],
        },
        {
          id: 2,
          name: "Indiglam.com",
          icon: "images/indiglam.png",
          kind: "file",
          fileType: "url",
          href: "https://indiglam.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Indiglam.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "images/indiglam-img.png",
        },
        {
          id: 5,
          name: "Indiglam Design.fig",
          icon: "images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/RbiuiIgWf8WBd1ODNOAsgU/Indiglam-project-for-portfolio?node-id=519-57",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Portfolio",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Avijit Roy Portfolio.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-80",
          description: [
            "This is Avijit, I made this project to showcase my skills in web development and design.",
            "Designed and developed a personal portfolio website to showcase web development projects and skills. Built with HTML, CSS, Bootstrap and JavaScript to ensure a clean layout, smooth navigation and full responsiveness across devices.",
            "Focused on UI clarity, performance and accessibility while organizing content in a way that highlights growth and capabilities as a frontend developer.",
          ],
        },
        {
          id: 2,
          name: "Avijit Roy Portfolio.com",
          icon: "images/portfolio-logo.png",
          kind: "file",
          fileType: "url",
          href: "https://avijitroy.vercel.app/",
          position: "top-10 left-20",
        },
        {
          id: 4,
          name: "Portfolio.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-62 left-80",
          imageUrl: "images/portfolio-design.png",
        },
        {
          id: 5,
          name: "Portfolio Design.fig",
          icon: "images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/RbiuiIgWf8WBd1ODNOAsgU/Project-files-for-portfolio?node-id=6009-6",
          position: "top-50 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Fitness Website",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Fitness Website.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This is Avijit, I made this project to showcase my skills in web development and design.",
            "Developed a fitness themed website using HTML, CSS, Bootstrap and JavaScript.",
            "Designed responsive layouts, interactive elements and structured content to provide a smooth user experience across devices.",
            "Focused on clean UI, engaging visuals and intuitive navigation to present workout programs and fitness related information effectively.",
          ],
        },
        {
          id: 2,
          name: "Fitness Website.com",
          icon: "images/fitin-logo.png",
          kind: "file",
          fileType: "url",
          href: "https://fitin-fitness.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Fitness Website.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "images/fitin-design.png",
        },
        {
          id: 5,
          name: "Fitness Website Design.fig",
          icon: "images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/RbiuiIgWf8WBd1ODNOAsgU/Project-files-for-portfolio?node-id=6009-7",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "NFTX Marketplace Website",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-52 left-80", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "NFTX Project.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This is Avijit, I made this project to showcase my skills in web development and design.",
            "Built a modern NFT-themed website using HTML, CSS, Bootstrap, and JavaScript. Designed a clean dark UI with bold typography, gradient accents, and icon elements to match the digital art theme.",
            "Implemented responsive navigation, interactive buttons, animated stats, and wallet connect UI mockup.",
            "Focused on smooth layout structure, consistent styling and an engaging landing experience for users exploring digital artwork.",
          ],
        },
        {
          id: 2,
          name: "NFTX.com",
          icon: "images/NFTX-logo.png",
          kind: "file",
          fileType: "url",
          href: "https://nftx-art.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "NFTX.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "images/NFTX-design.png",
        },
        {
          id: 5,
          name: "NFTX Design.fig",
          icon: "images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/design/RbiuiIgWf8WBd1ODNOAsgU/Project-files-for-portfolio?node-id=6012-102",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "images/galary5.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-80",
      imageUrl: "images/galary4.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-56 left-20",
      imageUrl: "images/galary2.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-56 left-90",
      subtitle: "Meet the Developer Behind the Code",
      image: "images/avijit-pic.JPG",
      description: [
        "Hey! I’m Avijit 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in HTML, CSS, JavaScript, Bootstrap, and Tailwind Css—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "images/galary1.jpg",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "images/galary6.jpg",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
