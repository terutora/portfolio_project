// src/pages/projects/index.js の修正

import Head from "next/head";
import Layout from "../../components/layout/Layout";
import ProjectList from "../../components/project/ProjectList";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

export function getStaticProps() {
  console.log("Static Props Projects:", projects); // デバッグ用ログ

  // プロジェクトの配列を逆順にして、新しいプロジェクトが先頭に来るようにする
  const reversedProjects = [...projects].reverse();

  return {
    props: {
      projects: reversedProjects,
    },
  };
}

export default function ProjectsPage({ projects }) {
  console.log("Client-side Projects:", projects); // デバッグ用ログ
  return (
    <Layout>
      <Head>
        <title>プロジェクト一覧 | Cheese&aposfolio</title>
        <meta name="description" content="Yukiのプロジェクト一覧です。" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          プロジェクト
        </motion.h1>
        <ProjectList projects={projects} />
      </div>
    </Layout>
  );
}
