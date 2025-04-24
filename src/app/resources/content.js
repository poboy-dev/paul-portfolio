import { Logo } from "@/once-ui/components";

const person = {
  firstName: "paul patrice",
  lastName: "Ekoule",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web developer",
  avatar: "/images/paul.jpeg",
  email: "ekoulepaulpatrice@gmail.com",
  location: "cameroun/Litoral/Douala-kotto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about technology,cybersecurity.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/poboy-dev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Robust and intuitive <br></br> Web Applications</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Hello, I&apos;m Paul Patrice, a web developer passionate about creating robust, intuitive, and responsive web applications.
<br></br> When I&apos;m not coding for clients, I work on personal projects to learn and explore new technologies.
  
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://api.whatsapp.com/send/?phone=678385692&text&type=phone_number&app_absent=0",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
         Hello, I&apos;m Paul Patrice, a web developer passionate about creating robust, intuitive, and responsive web applications.
<br></br> When I&apos;m not coding for clients, I work on personal projects to learn and explore new technologies.
  
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Port Authority of Douala",
        timeframe: "August-october 2023",
        role: "Database administration intern",
        achievements: [
          <>
          Assist in the installation and configuration of databases
          such as MySQL, PostgreSQL, SQL Server, Oracle 
          </>,
          <>
           Optimize the database by optimizing triggers.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ]
      },
      {
        company: "Port Authority of Douala",
        timeframe: "october - December 2024",
        role: "software developer intern",
        achievements: [
          <>
            building a mobile app using flutter.
          </>,
         
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: " FUNIC Higher Institute of Entrepreneurship and Technology",
        description: <>HIGHER NATIONAL DIPLOMA in software engineering</>,
      },
      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to create basic design and prototype.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "laravel",
        description: <>Building robust web applications with html css and laravel</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "mobile app development",
        description: <>Building complete mobile app with flutter and firebase</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/petite soif.png",
            alt: "Project image",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/project-01/petite soif.png",
            alt: "Project image",
            width: 9,
            height: 16,
          },
        ],
      
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
