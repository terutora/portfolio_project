import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { FaStar, FaRegStar, FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaNodeJs, FaPython, FaAws, FaDocker, FaSlack, FaFigma, FaGit } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiExpress, SiDjango, SiMysql, SiMongodb, SiGooglecloud, SiMicrosoftazure, SiHeroku, SiVisualstudiocode, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const skillCategories = [
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

const levelDescriptions = [
    "初心者",
    "基礎的",
    "中級者",
    "上級者",
    "エキスパート"
  ];
  
  const SkillCard = ({ skill }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        {skill.icon && <skill.icon className="mr-2 text-theme-primary-light dark:text-theme-primary-dark text-xl" />}
        <span className="font-medium text-lg text-gray-800 dark:text-gray-200">{skill.name}</span>
      </div>
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {index < skill.level ? (
              <FaStar className="text-yellow-400 mr-1" />
            ) : (
              <FaRegStar className="text-gray-400 mr-1" />
            )}
          </motion.span>
        ))}
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {levelDescriptions[skill.level - 1]}
      </span>
    </div>
  );
  
  export default function SkillsPage() {
    const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  
    return (
      <Layout>
        <Head>
        <title>Skills | Cheese&apos;folio</title>
        <meta name="description" content="Get in touch with Yuki for project inquiries, collaborations, or any questions you may have." />
        </Head>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <motion.h1
            className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            技術スキル
          </motion.h1>
          
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category.name
                    ? 'bg-theme-primary-light dark:bg-theme-primary-dark text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                } transition-colors duration-200`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {skillCategories.map((category) => (
              category.name === activeCategory && (
                <div key={category.name}>
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">{category.name}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              )
            ))}
          </motion.div>
          
          <div className="mt-12 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">スキルレベルの説明</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
              <li>1星 - 初心者: 基本的な概念を理解し、簡単なタスクを実行できる</li>
              <li>2星 - 基礎的: 主要な概念を理解し、指導のもとで作業できる</li>
              <li>3星 - 中級者: 独立して作業でき、複雑なタスクを処理できる</li>
              <li>4星 - 上級者: 深い知識を持ち、他者を指導できる</li>
              <li>5星 - エキスパート: 高度な知識を持ち、革新的なソリューションを提供できる</li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }