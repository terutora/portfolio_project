import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { skillCategories, certifications } from '../data/skills'; // スキルと資格のデータをインポート

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
      <span className="font-medium text-lg">{skill.name}</span>
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

const CertificationCard = ({ certification }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 className="font-medium text-lg mb-2">{certification.name}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">{certification.issuer}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400">{certification.date}</p>
  </div>
);

const SkillLevelDescription = () => (
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
);

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]?.name || '');
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          技術スキルと資格
        </motion.h1>
        
        {/* タブ切り替え */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-2 rounded-l-full ${
              activeTab === 'skills'
                ? 'bg-theme-primary-light dark:bg-theme-primary-dark text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            } transition-colors duration-200`}
          >
            スキル一覧
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-2 rounded-r-full ${
              activeTab === 'certifications'
                ? 'bg-theme-primary-light dark:bg-theme-primary-dark text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            } transition-colors duration-200`}
          >
            資格一覧
          </button>
        </div>
        
        {activeTab === 'skills' ? (
          <>
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
                    <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">{category.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                )
              ))}
            </motion.div>

            <SkillLevelDescription />
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} certification={cert} />
            ))}
          </motion.div>
        )}
        
        
      </div>
    </Layout>
  );
}