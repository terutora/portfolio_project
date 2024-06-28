import { useState, useMemo } from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ProjectCard from '../../components/projects/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon } from '@heroicons/react/solid';
import { projects } from '../../data/projects';

export function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}

export default function ProjectsPage({ projects }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = useMemo(() => ['all', ...new Set(projects.map(project => project.category))], [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => 
      (activeFilter === 'all' || project.category === activeFilter) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }, [projects, activeFilter, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <Head>
        <title>プロジェクト一覧 | Yukis Portfolio</title>
        <meta name="description" content="Yukiのプロジェクト一覧です。AI、ブロックチェーン、AR、IoT、NLPなど、最新技術を活用したプロジェクトを紹介しています。" />
        <meta name="keywords" content="ポートフォリオ, プロジェクト, AI, ブロックチェーン, AR, IoT, NLP, 機械学習" />
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
                onClick={() => setActiveFilter(category)}
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