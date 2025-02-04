import pokedexImg from "../../assets/project/pokedex.png";
import weatherAppImg from "../../assets/project/weatherApp.jpeg";
import portfolioImg from "../../assets/project/portfolio.jpeg";
import motoblogImg from "../../assets/project/motoblog.png";

export const projects = [
  {
    title: "MOTOCE Blog",
    src: motoblogImg,
    desc: "Developed a motorcycle blog websites where user's can comment, like and save posts",
    skillSet: [
      "React",
      "Tailwind",
      "TypeScript",
      "Express",
      "NodeJs",
      "Axios",
      "MongoDB",
      "Firebase",
    ],
    link: "https://moto-blog-2.vercel.app/",
    code: "https://github.com/samuelchen17/moto-blog-2",
  },
  {
    title: "Poké Web Handbook",
    src: pokedexImg,
    desc: "Developed a responsive and interactive Pokémon handbook website utilizing the Pokémon API to offer detailed information on Pokémon across multiple regions. Has a favourites feature built in.",
    skillSet: ["React", "Tailwind", "JavaScript", "HTML", "CSS"],
    link: "https://poke-web-handbook.vercel.app/",
    code: "https://github.com/samuelchen17/pokedex",
  },
  {
    title: "Weather App",
    src: weatherAppImg,
    desc: "This responsive weather app is built using OpenWeather API, and GeoDB Cities API. The app app delivers real-time weather forecasts with detailed accordions and allows users to search by city name or current location",
    skillSet: ["React", "Tailwind", "JavaScript", "HTML", "CSS"],
    link: "https://weather-app-one-red-97.vercel.app/",
    code: "https://github.com/samuelchen17/react-weather-app",
  },
  {
    title: "Personal Portfolio",
    src: portfolioImg,
    desc: "My personal portfolio features engaging animations to enhance visuals, designed with scalability in mind to facilitate effortless updates and showcase my skills and projects effectively.",
    skillSet: [
      "React",
      "Tailwind",
      "Framer Motion",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    code: "https://github.com/samuelchen17/personal-portfolio",
  },
];
