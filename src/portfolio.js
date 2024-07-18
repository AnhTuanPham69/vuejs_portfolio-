// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
  buttonColor: "#4305ba",
  LinkHighlightColor: "#4305ba",
};

// Transitions
const transitions = {
  active: true, // activate for all sections
  onlyLanding: false, // activate only for initial load of landing page
  showOnce: true, // transition only once
  thresholdOption: 0.2, // indicates at what percentage of the sections visibility the transition should start
};

// Splash Screen
const splashScreen = true; // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
  intro: "Hello 👋, my name is",
  name: "Pham Anh Tuan",
  message:
    "I am a 23-year-old web developer with a proactive and enthusiastic approach to my work. I have a high sense of responsibility and a genuine love for learning. Despite any challenges, I am always eager to upgrade my skills and stay current with the latest technologies and industry trends. My dedication to continuous improvement drives me to seek out new opportunities for growth and development in my field.",
  basedLocation: "Danang, VN",
  resumeLink: "https://github.com/AnhTuanPham69", // recommended: google drive file share link (change to "anyone on the internet can view")
  logo: {
    link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
    custom: true, // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
  },
  portraitLink: "images/portrait.jpg",
};

const socialMediaLinks = {
  github: "",
  linkedin: "",
  medium: "",
  stackoverflow: "",
  xtwitter: "",
}; // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
  autobiography: [
    "My name is Pham Anh Tuan and I'm a web developer with a huge passion for programming. I have a passion for coding in languages such as Javascript, C#, PHP, JAVA. Work in web development and have experience with ReactJs framework.",
    "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 2+ years and and have experience working independently, professionally and with a high sense of responsibility. I always want the products I create to have the best quality as well as bring the smoothest user experience.",
  ], // Separated items are paragraphs
  techStack: ["HTML/CSS", "Javascript", "ReactJs", "NodeJS", "Redux"],
  photo1Link: "images/portrait1.jpeg",
  photo2Link: "images/portrait2.jpeg",
  photo3Link: "images/portrait3.jpeg",
};

// --- 🛡️ Experience Section ---
const experiences = [
  {
    position: "Web developer",
    company: {
      name: "Everfit technology",
      link: "https://everfit.io/",
    },
    duration: "Oct 2022 - Present",
    bulletPoints: [
      "Resolved issues and developed new tools within several university web applications (email automation, research discovery, educational resources, scheduling tools, and text-generative AI news sharing).",
      "Achieved 100+ github code contributions as an intern on the team.",
      "Currently rebuilding and modernizing the university digital sign manager and system.",
    ],
    hashtags: ["HTML/CSS", "Javascript", "ReactJs", "NodeJS", "Redux"],
  },
  {
    position: "Web developer",
    company: {
      name: "Enouvo IT solutions",
      link: "",
    },
    duration: "April 2022 - Oct 2022",
    bulletPoints: [
      "Taught math to students elementary through high school covering topics from basic algebra to college-level calculus.",
      "Directed the trajectory of the student's learning plan and math topic evaluation to facilitate success in their school math class.",
      "Requested by many students and parents for routine weekly tutoring sessions in a system with a standard random weekly rotation.",
    ],
    hashtags: ["HTML/CSS", "Javascript", "ReactJs", "NodeJS", "Redux"],
  },
];

// --- 💻 Work Section ---
const works = [
  {
    projectName: "Web developer",
    yearCompleted: "2022 - present",
    description:
      "Contribute to building the platform and management system between coaches and their clients. From there, we provide accurate and effective routes for training",
    techStack: "ReactJS",
    links: [
      {
        label: "",
        type: "git",
        url: "",
      },
      {
        label: "",
        type: "external",
        url: "",
      },
    ],
    imageLink: "images/code.gif",
    alignLeft: false,
  },
  {
    projectName: "Web developer",
    yearCompleted: "Apr 2022 - Oct 2022",
    description:
      "is a member of the web development team of Enouvo IT solutions company, participating in programming and consulting solutions to create websites with high user experience and meet their requirements.",
    techStack: "ReactJS",
    links: [
      {
        label: "",
        type: "git",
        url: "",
      },
      {
        label: "",
        type: "external",
        url: "",
      },
    ],
    imageLink: "images/code.gif",
    alignLeft: true,
  },
  {
    projectName: "Java intern",
    yearCompleted: "2021",
    description:
      "Using java spring boot to make the back end for an internship project about payment and table booking for a beverage system",
    techStack: "Java Spring boot, ReactJS",
    links: [
      {
        label: "",
        type: "git",
        url: "",
      },
      {
        label: "",
        type: "external",
        url: "",
      },
    ],
    imageLink: "images/code.gif",
    alignLeft: false,
  },
];

const archiveLink = "https://github.com/AnhTuanPham69";

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
  externalLink: {
    shortTitle: "",
    note: ["", ""], // paragraph breaks will be entered after each item,
    link: {
      email: "", // email takes precedance
      other: "https://github.com/AnhTuanPham69",
    },
    responseTimeMessage: "",
  },
  formEmbedLink: "", // inclusion of this link will take precedance
};

export default {
  colors,
  transitions,
  splashScreen,
  greeting,
  socialMediaLinks,
  about,
  experiences,
  works,
  archiveLink,
  contact,
};
