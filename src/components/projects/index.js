import { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ProjectCard from '../../components/projects/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon } from '@heroicons/react/solid';

export async function getStaticProps() {
  // 実際のAPIエンドポイントに置き換えてください
  const res = await fetch('https://api.example.com/projects');
  const projects = await res.json();

  return {
    props: {
      projects,
    },
    revalidate: 60, // 60秒ごとにISRで再生成
  };
}

export default function ProjectsPage({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredProjects(projects.filter(project => 
      project.title.toLowerCase().includes(term) || 
      project.description.toLowerCase().includes(term)
    ));
  };

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <Layout>
      <Head>
        <title>プロジェクト一覧 | Yukis Portfolio</title>
        <meta name="description" content="Yukiのプロジェクト一覧です。Webアプリケーション、モバイルアプリ、データ分析プロジェクトなどを紹介しています。" />
        <meta name="keywords" content="ポートフォリオ, プロジェクト, Webアプリ, モバイルアプリ, データ分析" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-4xl font-bold text-accent-gold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          プロジェクト
        </motion.h1>
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === category 
                    ? 'bg-accent-gold text-main-black' 
                    : 'bg-gray-800 text-text-offwhite'
                } transition duration-300`}
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
              className="w-full px-4 py-2 pl-10 bg-gray-800 text-text-offwhite rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold"
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
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
        {filteredProjects.length === 0 && (
          <p className="text-center text-text-offwhite mt-8">該当するプロジェクトが見つかりませんでした。</p>
        )}
      </div>
    </Layout>
  );
}