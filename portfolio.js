import emoji from "react-easy-emoji";

export const greetings = {
  name: "Guruvignesh",
  title: "Hi all, I'm Guruvignesh",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with React.js, Next.js, React Native, Flutter, Python, AI/ML development, Langchain, Ollama, HuggingFace models, Docker, OpenCV, NodeJS framework",
  resumeLink:
    "https://drive.google.com/file/d/1mjMVtaGbF_g_zvo46fEvBkZUT91CEwaV/view?usp=sharing",
};

export const openSource = {
  githubUserName: "staticGuru",
};

export const contact = {};

export const socialLinks = {
  url: "https://devtuneai.pro",
  linkedin: "https://www.linkedin.com/in/guruvignesh-m-280a64192/",
  github: "https://github.com/staticGuru/",
  instagram: "", //instagram profile link
  facebook: "", //fackbook profile link
  twitter: "https://twitter.com/guruvignesh_m", //twitter profile link
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Node Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
        },
        {
          skillName: "Node",
          fontAwesomeClassname: "logos:nodejs",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "logos:android-vertical",
        },
        {
          skillName: "IOS",
          fontAwesomeClassname: "logos:ios",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions and Jenkins"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "logos:sentry-icon",
        },
      ],
    },
    {
      title: "AI/ML development",
      lottieAnimationFile: "/lottie/skills/ai.json", // Path of Lottie Animation JSON File
	  skills: [
		emoji("⚡ Experience in developing machine learning models using Python"),
		emoji("⚡ Expertise in natural language processing using NLTK and SpaCy"),
		emoji("⚡ Developing and fine-tuning transformer models with Huggingface"),
		emoji("⚡ Using OpenAI's GPT-3 and other large language models for NLP tasks"),
		emoji("⚡ Experience with model deployment and serving using Flask and FastAPI"),
		emoji("⚡ Utilizing cloud platforms like AWS, GCP, and Azure for scalable ML solutions"),
	],
      softwareSkills: [
        {
          skillName: "ChatGPT",
          fontAwesomeClassname: "arcticons:openai-chatgpt",
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "logos:hugging-face-icon",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "ChromaDB",
          fontAwesomeClassname: "logos:chroma",
        },
        {
          skillName: "Google Colab",
          fontAwesomeClassname: "simple-icons:googlecolab",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "Anna University, MIT campus",
    subHeader: "Bachelor of Engineering in Automobile Engineering",
    duration: "March 2017 - Apirl 2021",
    desc: "Participated in the research and tech hackthons.",
    grade: "Grade A",
    descBullets: [
      "Secretary of the Robotics Association",
      "Member of the software engineering associations",
    ],
  },
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Kissflow",
		companylogo: "/img/icons/common/kissflow.png",
		date: "March 2023 – Present",
		desc: "I worked as a Frontend Engineer where I contributed to developing user-friendly interfaces using React.js. I also integrated AI functionalities into the platform and leveraged my Python skills for backend tasks. This experience allowed me to enhance my expertise in creating efficient and responsive web applications."
	  },
  {
    role: "Frontend Developer",
    company: "Ewall",
    companylogo: "/img/icons/common/ewall.png",
    date: "May 2021 – Feb 2023",
    desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using React, Bootstrap, jQuery, Chart.js and some other libraries. Integrated backend with Strapi CMS, Node Js, Dev Ops technologies.",
  },
  // {
  // 	role: "Frontend Developer(Freelance)",
  // 	company: "Apptolaunch.com",
  // 	companylogo: "/img/icons/common/wapidu.jpg",
  // 	date: "Dec 2021 - Jun 2022",
  // 	desc: "Developed React component and connect the Graphql query with Redux Saga.Integrated strapi cms.Developed illustration and animation rich websites as per UI.",
  // },
  {
    role: "Software developer-(FreeLance)",
    company: "Blockscribers",
    companylogo: "/img/icons/common/blockscribers.jpg",
    date: "May 2019 -Oct 2020",
    desc: "Developed illustration and animation rich mobile application as per UI with React Native cross platform.Integrate with AWS AppSync API query for the backend connection and integrate with frontend components. Integrated with Cypress and Jest testing platforms.",
  },
];

export const projects = [
  {
    name: "React Native NFT marketplace",
    desc: "Develop the SPA react landing page and host the application in decentralised hosting platform(IPFS).Develop the react native mobile app prototype with sementic UI elements.",
    github: "https://github.com/staticGuru/NFT-market-",
    link: "https://late-voice-3876.on.fleek.co/",
  },
  {
    name: "Free-Talk",
    desc: "With Free-Talk, it’s easy to connect with your friends with one to one chat and community chat functionalities bulit on MERN stack.",
    github: "https://github.com/staticGuru/MERN-chat-application",
    link: "https://conversation.herokuapp.com/",
  },
  {
    name: "React (Ecommerce)",
    desc: "Lite weight expense tracking application that efficiently trackers users cash flow, debts, goals and gives sugges-tions to minimize spend- ing.reduce debt years to achieve their goals.Used react native to develop UI , redux for state management, realm database as local database",
    github: "https://github.com/staticGuru/React-ecommerce-app",
    link: "https://react-ecommerce-app-rho.vercel.app/",
  },
  {
    name: "Decentralized Crowd Funding",
    desc: "Implement the application with vite.js as a Frontend and Web3.0 as a backend service, Smart contract created with help of solidity and Hardhat web3 developement Platform. ThirdWeb is used to deploy the smartcontract with developer friendly.",
    github: "https://github.com/staticGuru/Web3-Crowdfunding.git",
    link: "https://web3-crowdfunding-eight.vercel.app/",
  },
  {
    name: "CryptoBank (Web3 & Hardhat)",
    desc: "Implement the application with React.js as a Frontend and Web3.0 as a backend service, Smart contract created with help of solidity and Hardhat web3 developement Platform. Alchemy is used to deploy the smartcontract in the GoerliETH testnet.",
    github: "https://github.com/staticGuru/CryptoBank.git",
    link: "https://crypto-bank.vercel.app/",
  },
];

export const feedbacks = [ {
    name: "DocsGPT Contributions",
    feedback:
     "I developed and integrated features to enhance user experience and interface customization. I contributed to building a dynamic and user-friendly interface using technologies like React.js and Python. This work improved the overall functionality and appeal of the platform.",
    link: "https://github.com/arc53/DocsGPT",
  },
  {
    name: "React-Native-Youtube-Streamer",
    feedback:
      "Release the Node js powered Youtube video streamer. We can play the youtube video in the normal video player.Centralized Cache management system in the node js backend.NPM package supports for both android and IOS mobile devices.",
    link: "https://www.npmjs.com/package/react_native_youtube_streamer",
  },
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Guruvignesh",
  description:
    "A passionate Senior Full Stack Web Developer, Mobile Developer and AI/ML Developer.",
  author: "Guruvignesh",
  image: "https://avatars.githubusercontent.com/u/79417096?v=4",
  url: "https://developer-portfolio-jxym-staticguru.vercel.app/",
  keywords: [
    "Guruvignesh",
    "Guru",
    "staticGuru",
    "Freelance developer",
    "Portfolio",
    "developer Portfolio ",
    "Senior frontend developer",
  ],
};
