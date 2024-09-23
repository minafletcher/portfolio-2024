// ---- Page Image Imports ---- //
import DotGrid from "./img/svgs/dot-grid-vf-1.svg";

// ---- About Me Image Import ---- //
import HeadshotGif from "./img/mina-headshot-24.gif";

// ---- Experience Image Import ---- //
import OpenIcon from "./img/svgs/open-icon.svg";
import CloseIcon from "./img/svgs/close-icon.svg";
import ExternalLink from "./img/svgs/external-link-icon.svg";

// ---- Skills Image Import ---- //
// ---- Skills Web Development ---- //
import ReactIcon from "./img/svgs/react-icon.svg";
import JSIcon from "./img/svgs/js-ts-icon.svg";
import WebflowIcon from "./img/svgs/webflow-icon.svg";
import TailwindIcon from "./img/svgs/tailwind-icon.svg";
import AngularIcon from "./img/svgs/angular-icon.svg";

// ---- Skills Computer Graphics / Animation ---- //
import ThreeJsIcon from "./img/svgs/threejs-icon.svg";
import CPlusIcon from "./img/svgs/cplus-icon.svg";
import MayaIcon from "./img/svgs/maya-icon.svg";
import BlenderIcon from "./img/svgs/blender-icon.svg";
import AfterEffectsIcon from "./img/svgs/after-effects-icon.svg";
import P5Icon from "./img/svgs/p5-js-icon.svg";

// ---- Skills Design ---- //
import FigmaIcon from "./img/svgs/figma-icon.svg";
import IllustratorIcon from "./img/svgs/illustrator-icon.svg";
import InDesignIcon from "./img/svgs/indesign-icon.svg";
import PhotoshopIcon from "./img/svgs/photoshop-icon.svg";

// ----- Skills Game Dev ---- //
import PythonIcon from "./img/svgs/python-icon.svg";
import UnityIcon from "./img/svgs/unity-icon.svg";
import ScratchIcon from "./img/svgs/scratch-icon.svg";

// ---- Contact Links Image Import ---- //
import LinkedInLogo from "./img/svgs/linked-in-icon.svg";
import GithubLogo from "./img/svgs/github-icon.svg";
import BehanceLogo from "./img/svgs/behance-icon.svg";
import MailLogo from "./img/svgs/mail-icon.svg";
import ResumeLogo from "./img/svgs/resume-icon.svg";

// Project Page Images
import Enerco from "./img/project-images/enerco-project-2.png";
import youbet from "./img/project-images/youbet-project-min.png";
import GGarden from "./img/project-images/gogarden-project.png";
import Interventions from "./img/project-images/interventions-project.png";
import CoolGreenPower from "./img/project-images/cgp-project.png";

// Sketchbook Images
import CloseArrow from "./img/svgs/close-arrow.svg";
import DiscoImg from "./img/sketchbook-images/disco-scene.png";
import KandinskyImg from "./img/sketchbook-images/kandinsky-painter.png";
import NoisyImg from "./img/sketchbook-images/noisy-image.png";
import PatternImg from "./img/sketchbook-images/iterative-pattern.png";



const tags = {
  // ---- Project Tags ---- //
  tagUX: "UI/UX",
  tagBr: "Branding",
  tagWebDev: "Development",
};

const content = {
  page: {
    dotUrl: DotGrid,
    dotAlt: "Dot Grid Image",
  },
  
  // ---- NavBar ---- //
  navbar: {
    homeText: "Home",
    links: [
      {
        key: 1,
        id: "home",
        text: "MPF",
      },
      {
        key: 2,
        id: "work",
        text: "Work",
      },
      {
        key: 3,
        id: "sketchbook",
        text: "Sketchbook",
      },
      {
        key: 4,
        id: "about",
        text: "About",
      },
      {
        key: 5,
        id: "experience",
        text: "Experience",
      },
      {
        key: 6,
        id: "skills",
        text: "Skills",
      },
      {
        key: 7,
        id: "contact",
        text: "Contact",
      },
    ],
    smallLinks: [
      {
        key: 1,
        text: "My Sketchbook",
        url: "/sketchbook",
      },
      {
        key: 2,
        text: "My Resume",
        url: "/Mina-Fletcher-Resume.pdf",
        target: "_blank",
      },
    ],
  },

  // ---- Landing ---- //
  landing: {
    firstName: "Mina Fletcher",
    lastName: "Fletcher",
    subtitle: "Designer. Developer. Creator",
    body: "As a front-end developer based in New York, I aspire to create interactive visual experiences and to further explore the world of creative coding. I’m currently looking for freelance or full-time roles in software engineering, animation, and computer graphics.",
    button: "VIEW WORK",
  },

  sketchbook: {
    header: "Sketchbook",
    button: "My Experiments",
  },

  work: {
    header: "Featured Projects",

    projects: [
      {
        key: 1,
        title: "Ener.co",
        description:
          "As a freelance developer, I designed and developed Ener.co’s marketing website. The site showcases their mission to improve AC efficiency through cooling coil technology, and utilizes real-time data to highlight product impact.",
        projImg: Enerco,
        projImgAlt: "Ener.co logo on blue background",
        buttonTxt: "View Site",
        buttonUrl: "https://www.ener.co/",
        tags: [
          {
            key: 1,
            tag: tags.tagUX,
          },
          {
            key: 3,
            tag: tags.tagWebDev,
          },
        ],
      },
      // {
      //   key: 2,
      //   title: "youbet",
      //   description: "An interactive band website offering tour dates, merch and music streaming for the NYC-based indie rock group youbet",
      //   projImg: youbet,
      //   projImgAlt: "youbet logo on watercolor background with whimsical characters",
      //   tags: [
      //     {
      //       key: 1,
      //       tag: tags.tagUX,
      //     },
      //     {
      //       key: 2,
      //       tag: tags.tagWebDev
      //     },
      //   ]
      // },
      {
        key: 3,
        title: "GoGarden",
        description:
          "I designed a mobile application for community garden members and visitors to learn about and track plant care. The prototype showcases three user workflows and use of the PlantExpert AR feature.",
        projImg: GGarden,
        projImgAlt: "GoGarden logo on green background with gardening images",
        buttonTxt: "View Prototype",
        buttonUrl:
          "https://www.figma.com/proto/NOd7MS2159afIwmzONSoJg/ID2-GoGarden?page-id=101%3A465&type=design&node-id=275-1812&viewport=401%2C656%2C0.13&scaling=scale-down&starting-point-node-id=275%3A1812&show-proto-sidebar=1",
        tags: [
          {
            key: 1,
            tag: tags.tagUX,
          },
          {
            key: 2,
            tag: tags.tagBr,
          },
        ],
      },
      {
        key: 4,
        title: "Interventions: Amplify",
        description:
          "As a developer at Scout, Northeastern's design studio, I helped design and develop the marketing website for Interventions: Amplify 2022, Scout’s annual design conference.",
        projImg: Interventions,
        projImgAlt:
          "Interventions logo on blue background with colorful shape pattern beneath it",
        buttonTxt: "View Site",
        buttonUrl: "https://2022.interventions.design/",
        tags: [
          {
            key: 1,
            tag: tags.tagWebDev,
          },
        ],
      },
      {
        key: 5,
        title: "CoolGreenPower",
        description:
          "As a software engineer at CoolGreenPower, I developed their marketing website and a built-in Income Estimator tool for HVAC contractors to estimate their projected savings with COOLNOMIX.",
        projImg: CoolGreenPower,
        projImgAlt:
          "CoolGreenPower logo against blue sky background with clouds and distant mountains",
        buttonTxt: "View Site",
        buttonUrl: "https://www.coolgreenpower.com/en/income-estimator",
        tags: [
          {
            key: 1,
            tag: tags.tagUX,
          },
          {
            key: 2,
            tag: tags.tagWebDev,
          },
        ],
      },
    ],
  },

  aboutMe: {
    header: "Hi, I'm Mina",
    line1:
      "I develop innovative, interactive visual experiences through an accessible lens. With a degree in Computer Science and Design, I live to explore the growing intersections between art and technology, where the only limit to a project is one’s imagination.",
    line2:
      "I have a dynamic range of experience in both UI design and creative coding, including web development, animation, computer graphics and game development. As a designer, developer and STEM educator, I am constantly learning new technologies and working with others to develop projects in programming and physical computing.",
    line3:
      "My current focus is creating shaders and 3D web-based animations with Three.js. My personal interests include modern art and music history, environmentalism, and collectible art toys.",
    imgUrl: HeadshotGif,
    imgAlt: "Headshot gif",
  },

  experience: {
    header: "Experience",
    downloadText: "My Resume",
    openSvg: OpenIcon,
    openAlt: "Open menu button",
    closeSvg: CloseIcon,
    closeAlt: "Close menu button",
    externalLinkSvg: ExternalLink,
    externalLinkAlt: "External link icon",
    experienceBlocks: [
      {
        key: 1,
        jobTitle: "Code Coordinator",
        company: "The Coder School",
        date: "Feb 2023 - Present",
        linkText: "thecoderschool.com",
        linkUrl: "https://www.thecoderschool.com/locations/tribeca/",
        bullets: [
          {
            key: 1,
            text: "Designing and instructing STEM-based curriculum in Scratch, Python, HTML/CSS/JS, for both on-site tutoring and lessons at local schools.",
          },
          {
            key: 2,
            text: "Assisting in the management of daily operations, greeting visitors and meeting demands of class and schedule-based inquiries.",
          },
          {
            key: 3,
            text: "Researching and implementing initiatives to improve and expand the school’s academic programs and outreach.",
          },
        ],
      },
      {
        key: 2,
        jobTitle: "Technical Assembly",
        company: "Beat The Bomb",
        date: "Jun 2022 - Present",
        linkText: "beatthebomb.com",
        linkUrl: "https://beatthebomb.com/brooklyn",
        bullets: [
          {
            key: 1,
            text: "Soldering and building custom parts for all locations of Beat The Bomb game spaces, including RFID scanners, lasers and laser rails.",
          },
          {
            key: 2,
            text: "Assisting in on-site installation and design of installation procedure to optimize energy usage and error prevention.",
          },
          {
            key: 3,
            text: "Researching modern gaming experiences for kids and curating STEM-based educational workshops at Beat The Bomb.",
          },
        ],
      },
      {
        key: 3,
        jobTitle: "Program Assistant",
        company: "Textiles & Coding",
        date: "July - Aug 2023",
        linkText: "ars.electronica.art",
        linkUrl:
          "https://ars.electronica.art/futurelab/en/projects-northeastern-university/",
        bullets: [
          {
            key: 1,
            text: "Assisting Northeastern University students and faculty on the Textiles & Coding Dialogue of Civilizations to Austria and workshop with Ars Electronica Futurelab",
          },
          {
            key: 2,
            text: "Supporting students on weekly creative coding projects, and developing animations and interactive experiences on the Ars Electronica facade",
          },
          {
            key: 3,
            text: "Hosting regular office hours and working sessions to assist students in learning Processing, code problem solving and project ideation",
          },
        ],
      },
      {
        key: 4,
        jobTitle: "Tech Director",
        company: "Scout Studio",
        date: "July - Dec 2022",
        linkText: "scout.camd.northeastern.edu",
        linkUrl: "https://scout.camd.northeastern.edu/",
        bullets: [
          {
            key: 1,
            text: "Managing and organizing full-stack developer teams across 5 client organization projects to deliver high quality industry ready products",
          },
          {
            key: 2,
            text: "Overseeing project development from scratch and existing code bases, through code reviews, environment management and debugging",
          },
          {
            key: 3,
            text: "Mentoring club members and developers through leading and conducting workshops and group activities",
          },
        ],
      },
      {
        key: 5,
        jobTitle: "Frontend Developer",
        company: "Blueport Commerce",
        date: "Jan - June 2022",
        linkText: "blueport.com",
        linkUrl: "https://www.blueport.com/",
        bullets: [
          {
            key: 1,
            text: "Working in an agile development team on bug fixes, UI improvements, and feature implementations on all client websites",
          },
          {
            key: 2,
            text: "Creating and managing Angular-based components and stylesheets in the company’s codebase using Typescript and Sass",
          },
          {
            key: 3,
            text: "Collaborating with other co-ops to improve UI and manage bug fixes on the client-facing hub",
          },
        ],
      },
    ],
  },

  skills: {
    header: "Skills & Interests",
    body: "Hover over the different interest tags and see which of my skills correspond with each!",
    tags: [
      {
        key: 1,
        text: "Web Development",
      },
      {
        key: 2,
        text: "UI/UX",
      },
      {
        key: 3,
        text: "Animation",
      },
      {
        key: 4,
        text: "Computer Graphics",
      },
      {
        key: 5,
        text: "Creative Coding",
      },
      {
        key: 6,
        text: "Game Development",
      },
      {
        key: 7,
        text: "Design",
      },
      {
        key: 8,
        text: "Party",
      },
    ],

    skillsItems: [
      {
        key: 1,
        text: "React",
        imgUrl: ReactIcon,
        imgAlt: "React Icon",
        interests: [
          {
            key: 1,
            interestTag: "web",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 2,
        text: "Javascript",
        imgUrl: JSIcon,
        imgAlt: "Javascript Icon",
        interests: [
          {
            key: 1,
            interestTag: "web",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 3,
        text: "Webflow",
        imgUrl: WebflowIcon,
        imgAlt: "Webflow Icon",
        interests: [
          {
            key: 1,
            interestTag: "web",
          },
          {
            key: 2,
            interestTag: "ui",
          },
          {
            key: 3,
            interestTag: "party",
          },
        ],
      },
      {
        key: 4,
        text: "Angular",
        imgUrl: AngularIcon,
        imgAlt: "Angular Icon",
        interests: [
          {
            key: 1,
            interestTag: "web",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 5,
        text: "Tailwind",
        imgUrl: TailwindIcon,
        imgAlt: "Tailwind Icon",
        interests: [
          {
            key: 1,
            interestTag: "web",
          },
          {
            key: 2,
            interestTag: "ui",
          },
          {
            key: 3,
            interestTag: "party",
          },
        ],
      },
      {
        key: 6,
        text: "Three.js",
        imgUrl: ThreeJsIcon,
        imgAlt: "Three.js Icon",
        interests: [
          {
            key: 1,
            interestTag: "web",
          },
          {
            key: 2,
            interestTag: "cg",
          },
          {
            key: 3,
            interestTag: "anim",
          },
          {
            key: 4,
            interestTag: "cc",
          },
          {
            key: 5,
            interestTag: "party",
          },
        ],
      },
      {
        key: 7,
        text: "Figma",
        imgUrl: FigmaIcon,
        imgAlt: "Figma Icon",
        interests: [
          {
            key: 1,
            interestTag: "ui",
          },
          {
            key: 2,
            interestTag: "des",
          },
          {
            key: 3,
            interestTag: "party",
          },
        ],
      },
      {
        key: 8,
        text: "p5.js",
        imgUrl: P5Icon,
        imgAlt: "Processing Icon",
        interests: [
          {
            key: 1,
            interestTag: "cc",
          },
          {
            key: 2,
            interestTag: "anim",
          },
          {
            key: 3,
            interestTag: "cg",
          },
          {
            key: 4,
            interestTag: "party",
          },
        ],
      },
      {
        key: 9,
        text: "After Effects",
        imgUrl: AfterEffectsIcon,
        imgAlt: "After Effects Icon",
        interests: [
          {
            key: 1,
            interestTag: "anim",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 10,
        text: "Maya",
        imgUrl: MayaIcon,
        imgAlt: "Maya Icon",
        interests: [
          {
            key: 1,
            interestTag: "anim",
          },
          {
            key: 2,
            interestTag: "cg",
          },
          {
            key: 3,
            interestTag: "party",
          },
        ],
      },
      {
        key: 11,
        text: "Blender",
        imgUrl: BlenderIcon,
        imgAlt: "Blender Icon",
        interests: [
          {
            key: 1,
            interestTag: "anim",
          },
          {
            key: 2,
            interestTag: "cg",
          },
          {
            key: 3,
            interestTag: "party",
          },
        ],
      },
      {
        key: 12,
        text: "C++",
        imgUrl: CPlusIcon,
        imgAlt: "C++ Icon",
        interests: [
          {
            key: 1,
            interestTag: "cg",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 13,
        text: "Scratch",
        imgUrl: ScratchIcon,
        imgAlt: "Scratch Icon",
        interests: [
          {
            key: 1,
            interestTag: "gd",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 14,
        text: "Python",
        imgUrl: PythonIcon,
        imgAlt: "Python Icon",
        interests: [
          {
            key: 1,
            interestTag: "gd",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 15,
        text: "Unity",
        imgUrl: UnityIcon,
        imgAlt: "Unity Icon",
        interests: [
          {
            key: 1,
            interestTag: "gd",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 16,
        text: "Illustrator",
        imgUrl: IllustratorIcon,
        imgAlt: "Illustrator Icon",
        interests: [
          {
            key: 1,
            interestTag: "des",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 17,
        text: "InDesign",
        imgUrl: InDesignIcon,
        imgAlt: "InDesign Icon",
        interests: [
          {
            key: 1,
            interestTag: "des",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
      {
        key: 18,
        text: "Photoshop",
        imgUrl: PhotoshopIcon,
        imgAlt: "Photoshop Icon",
        interests: [
          {
            key: 1,
            interestTag: "des",
          },
          {
            key: 2,
            interestTag: "party",
          },
        ],
      },
    ],
  },

  sketchbookPage: {
    title: "My Sketchbook",
    description:
      "Highlighted below are some of my personal sketches and experiments, where I explore my interests in creative development, digital storytelling and the endless intersections of art and technology.",
    tags: [
      {
        key: 1,
        tag: "Creative Coding",
      },
      {
        key: 2,
        tag: "Animation",
      },
    ],
    closeSvg: CloseArrow,
    projects: [
      {
        key: 1,
        title: "Disco Scene",
        desc: "This Three.js scene experiments with lights to mimic refractions from a spinning disco ball. I used multiple rotating light sources to map image projections onto the surrounding walls, creating the ball’s reflective effects.",
        type: "code",
        imgUrl: DiscoImg,
        imgAlt: "Disco Scene Project Snapshot",
        buttonTxt: "View Project",
        url: "https://disco-scene.vercel.app/",
        tagNum: 1,
        tags: [
          {
            key: 1,
            tag: "Creative Coding",
          },
          {
            key: 2,
            tag: "Three.js",
          },
          {
            key: 3,
            tag: "Blender",
          },
        ],
      },
      {
        key: 2,
        title: "Noisy Image Manipulation",
        desc: "This project uses Perlin Noise to manipulate an image over time. Noise leaders are randomly placed within the image’s pixel grid, shifting their surrounding pixels and developing an organic, warped effect. The display compares the effects of the program on both color grids and images from everyday life.",
        type: "code",
        imgUrl: NoisyImg,
        imgAlt: "Noisy Manipulation Project Snapshot",
        buttonTxt: "View Project",
        url: "https://openprocessing.org/sketch/2331951",
        tagNum: 1,
        tags: [
          {
            key: 1,
            tag: "Creative Coding",
          },
          {
            key: 2,
            tag: "p5.js",
          },
        ],
      },
      {
        key: 3,
        title: "Coded Patterns",
        desc: "This project practices iteratively drawing patterns to a grid. Each square is drawn respectively based on specified grid size and repeat values, and explores the effects of overlaying simple patterns and shapes to develop a more complicated and compelling result.",
        type: "code",
        imgUrl: PatternImg,
        imgAlt: "Coded Patterns Project Snapshot",
        buttonTxt: "View Project",
        url: "https://openprocessing.org/sketch/2331895",
        tagNum: 1,
        tags: [
          {
            key: 1,
            tag: "Creative Coding",
          },
          {
            key: 2,
            tag: "p5.js",
          },
        ],
      },
      {
        key: 4,
        title: "Kandinsky Painter",
        desc: "This interactive canvas allows the user to generate their own drawing inspired by Wassily Kandinsky’s abstract works. With mouse and key events the user can place shapes, change the color palette, and even save their painting as an exported image.",
        type: "code",
        imgUrl: KandinskyImg,
        imgAlt: "Kandinsky Painter Project Snapshot",
        buttonTxt: "View Project",
        url: "https://openprocessing.org/sketch/2331844",
        tagNum: 1,
        tags: [
          {
            key: 1,
            tag: "Creative Coding",
          },
          {
            key: 2,
            tag: "p5.js",
          },
        ],
      },
      {
        key: 5,
        title: "Slanted",
        desc: "This short film tells the story about a curious boy that gets into more trouble than he expects in a modern art gallery. Modeled, textured and animated in Maya, this project significantly developed my skills in story, character, and set design through the animation pipeline.",
        type: "video",
        url: "vq6R4RU5xK0",
        tagNum: 2,
        tags: [
          {
            key: 1,
            tag: "Animation",
          },
          {
            key: 2,
            tag: "3D",
          },
          {
            key: 2,
            tag: "Maya",
          },
        ],
      },
      {
        key: 6,
        title: "Ghost Talent Show",
        desc: "This short includes a cute, ghost character who showcases his flying skills at a talent show. Modeled and animated in Maya, this project practiced my motion animation skills to create a smooth, ghost-like flying effect.",
        type: "video",
        url: "CNPWdgauX-8",
        tagNum: 2,
        tags: [
          {
            key: 1,
            tag: "Animation",
          },
          {
            key: 2,
            tag: "3D",
          },
          {
            key: 2,
            tag: "Maya",
          },
        ],
      },
      {
        key: 7,
        title: "Space Junk",
        desc: "This educational entertainment video animates visuals to Natalie Panek's Ted Talk 'Let's Clean Up the Space Junk Orbiting Earth'. Developed as a group project, I contributed equal work to the film’s asset design, storyboarding, layer animation and sound effects.",
        type: "video",
        url: "vfF1_uwX1x4",
        tagNum: 2,
        tags: [
          {
            key: 1,
            tag: "Animation",
          },
          {
            key: 2,
            tag: "2D",
          },
          {
            key: 2,
            tag: "After Effects",
          },
        ],
      },
      {
        key: 8,
        title: "Personal Logo Animation",
        desc: "This short animation plays on the energy and character of a personal logo design. Giving personality to foundational shapes and colors, this animation highlights the creativity and desire for exploration within my personal brand.",
        type: "video",
        url: "8V9r0kShsRk",
        tagNum: 2,
        tags: [
          {
            key: 1,
            tag: "Animation",
          },
          {
            key: 2,
            tag: "2D",
          },
          {
            key: 2,
            tag: "After Effects",
          },
        ],
      },
      {
        key: 9,
        title: "Claymation Music Video",
        desc: "This stop-motion animation visually explores the relationship between sound and video. Using both natural and man-made materials, textures and image filters, I aim to visually depict the balance of the song’s organic and digital nature in a state of controlled chaos.",
        type: "video",
        url: "2YxNpnNR71Q",
        tagNum: 2,
        tags: [
          {
            key: 1,
            tag: "Animation",
          },
          {
            key: 2,
            tag: "Stop Motion",
          },
          {
            key: 3,
            tag: "Premier Pro",
          },
        ],
      },
    ],
  },

  footer: {
    title: "Want to work with me, or just say hi?",
    form_submit: "Thanks for reaching out! (•‿•)",
    button: "Contact Me",
    email: "mina@minaparisfletcher.com",
    designedBy: "Designed and built by Mina Fletcher",
    v1: "V1",
  },

  contact: {
    links: [
      {
        img: ResumeLogo,
        imgAlt: "Resume icon",
        linkUrl: "/Mina-Fletcher-Resume.pdf",
        key: 1,
      },
      {
        img: LinkedInLogo,
        imgAlt: "LinkedIn icon",
        linkUrl: "https://www.linkedin.com/in/mina-fletcher/",
        key: 1,
      },
      {
        img: GithubLogo,
        imgAlt: "Github icon",
        linkUrl: "https://github.com/minafletcher",
        key: 2,
      },
      {
        img: BehanceLogo,
        imgAlt: "Behance icon",
        linkUrl: "https://www.behance.net/minafletcher",
        key: 3,
      },
    ],
  },
};

export default content;
