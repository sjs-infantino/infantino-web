import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitImage2,
  chromecast,
  disc02,
  arduino,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  pictoblox,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  nextjs,
  firebase,
  Member0,
  Member1,
  Member2,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "History",
    url: "#roadmap",
  },
  {
    id: "2",
    title: "Events",
    url: "#events",
  },
  {
    id: "3",
    title: "Our Team",
    url: "#team",
  },
  {
    id: "4",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const InfantinoServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const InfantinoServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Infantino Mark 5: Creative Solutions",
    text: "Emphasized problem-solving through hackathons and workshops, where students developed innovative solutions to real-world challenges using tech.",
    date: "November 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Infantino Mark 4: Advanced Technologies",
    text: "Introduced sessions on emerging technologies such as AI and IoT, empowering students to explore cutting-edge innovations and their applications.",
    date: "September 2019",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Infantino Mark 3: Networking",
    text: "Focused on team-building and collaboration, Infantino Mark 3 facilitated networking opportunities, allowing students to work together on innovative projects.",
    date: "October 2018",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Infantino Mark 2: Expanding Horizons",
    text: "This event broadened the scope by incorporating workshops on programming languages and web development, attracting a larger audience of tech enthusiasts.",
    date: "September 2017",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const teamMembers = [
  {
    id: "0",
    title: "Arnav Singh",
    text: "IT Minister",
    date: "Present",
    imageUrl: Member0,
  },
  {
    id: "1",
    title: "Shlok Chaitanya",
    text: "Lead Developer",
    date: "Present",
    imageUrl: Member1,
  },
  {
    id: "2",
    title: "Anant Prasad",
    text: "Developer Advocate",
    date: "Present",
    imageUrl: Member2,
  }
];

export const collabText =
  "Join engaging seminars and hands-on workshops tailored for students at all levels, from beginners to advanced tech enthusiasts.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Learning Experience",
    text: collabText,
  },
  {
    id: "1",
    title: "Industry-Relevant Tools",
  },
  {
    id: "2",
    title: "Comprehensive Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "FireBase",
    icon: firebase,
    width: 35,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Next.js",
    icon: nextjs,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Arduino",
    icon: arduino,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "PictoBlox",
    icon: pictoblox,
    width: 36,
    height: 36,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Master Python Debugging",
    text: "Learn to find and fix bugs like a pro, enhancing your coding skills with hands-on Python debugging sessions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Design Stunning Websites",
    text: "Get creative with web design, learning the essentials of HTML, CSS, and building dynamic websites.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Gameathon E-Sports Tournament",
    text: "Join thrilling matches in Valorant, and Call of Duty, and showcase your gaming prowess!",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Game Development with PictoBlox",
    text: "Design and develop your own games using the powerful block-based coding platform, PictoBlox.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Crypto-o-Code Challenge ",
    text: "Test your coding skills with a twist, tackling challenges based on blockchain and cryptocurrency concepts.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Arduino Robotics Challenge ",
    text: "Unleash your creativity by building your own robots with Arduino. Compete to see who can create the most innovative and functional bots!",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
