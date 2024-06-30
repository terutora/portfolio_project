import { FaStar, FaRegStar, FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaNodeJs, FaPython, FaAws, FaDocker, FaSlack, FaFigma, FaGit } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiExpress, SiDjango, SiMysql, SiMongodb, SiGooglecloud, SiMicrosoftazure, SiHeroku, SiVisualstudiocode, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

export const skillCategories = [
  {
    name: "フロントエンド",
    skills: [
      { name: "HTML5", icon: FaHtml5, level: 3 },
      { name: "CSS3", icon: FaCss3Alt, level: 3 },
      { name: "JavaScript", icon: SiJavascript, level: 3 },
      { name: "React", icon: FaReact, level: 3 },
      { name: "Vue.js", icon: FaVuejs, level: 3 },
      { name: "Next.js", icon: SiNextdotjs, level: 3 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 3 },
    ]
  },
  {
    name: "バックエンド",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 3 },
      { name: "Express.js", icon: SiExpress, level: 3 },
      { name: "Python", icon: FaPython, level: 3 },
      { name: "Django", icon: SiDjango, level: 3 },
    ]
  },
  {
    name: "データベース/データ処理",
    skills: [
      { name: "SQL", icon: TbSql, level: 3 },
      { name: "MySQL", icon: SiMysql, level: 3 },
      { name: "MongoDB", icon: SiMongodb, level: 3 },
    ]
  },
  {
    name: "DevOps/インフラ",
    skills: [
      { name: "Git", icon: FaGit, level: 4 },
      { name: "Docker", icon: FaDocker, level: 3 },
      { name: "AWS", icon: FaAws, level: 2 },
      { name: "Google Cloud Platform", icon: SiGooglecloud, level: 2 },
      { name: "Microsoft Azure", icon: SiMicrosoftazure, level: 2 },
      { name: "Heroku", icon: SiHeroku, level: 3 },
    ]
  },
  {
    name: "ツール/その他",
    skills: [
      { name: "VS Code", icon: SiVisualstudiocode, level: 4 },
      { name: "Slack", icon: FaSlack, level: 5 },
      { name: "Figma", icon: FaFigma, level: 3 },
      { name: "Photoshop", icon: SiAdobephotoshop, level: 3 },
      { name: "Illustrator", icon: SiAdobeillustrator, level: 2 },
       ]
  },
];

export const certifications = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2023年5月"
    },
    {
      name: "LPIC Level 1",
      issuer: "Linux Professional Institute",
      date: "2022年10月"
    },
    // 他の資格を追加
];