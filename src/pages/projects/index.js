import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ProjectCard from '../../components/project/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon } from '@heroicons/react/solid';
import axios from 'axios';
 
export async function getStaticProps() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`);
    console.log('Fetched data:', JSON.stringify(res.data, null, 2));
    return {
      props: {
        projects: res.data.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    return {
      props: {
        projects: [],
      },
    };
  }
}

export default function ProjectsPage({ projects }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = useMemo(() => {
    const cats = projects.map(project => project.attributes?.category).filter(Boolean);
    return ['all', ...new Set(cats)];
  }, [projects]);

  useEffect(() => {
    const filtered = projects.filter(project => {
      const title = project.attributes?.title || '';
      const description = project.attributes?.description || '';
      const category = project.attributes?.category || '';
      
      return (activeFilter === 'all' || category === activeFilter) &&
        (title.toLowerCase().includes(searchTerm.toLowerCase()) || 
         description.toLowerCase().includes(searchTerm.toLowerCase()));
    });
    setFilteredProjects(filtered);
  }, [projects, activeFilter, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (!projects || projects.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            プロジェクト
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400">
            現在、表示できるプロジェクトがありません。
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>プロジェクト一覧 | Cheese&aposfolio</title>
        <meta name="description" content="Cheeseのプロジェクト一覧です。Web開発、モバイルアプリ、AI、データ分析など、様々な分野のプロジェクトを紹介しています。" />
        <meta name="keywords" content="ポートフォリオ, プロジェクト, Web開発, モバイルアプリ, AI, データ分析" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          プロジェクト一覧
        </motion.h1>
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === category 
                    ? 'bg-theme-primary-light dark:bg-theme-primary-dark text-white' 
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                } transition-colors duration-300 hover:bg-opacity-80`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="プロジェクトを検索..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary-light dark:focus:ring-theme-primary-dark"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <AnimatePresence>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            該当するプロジェクトが見つかりませんでした。
          </p>
        )}
      </div>
    </Layout>
  );
}