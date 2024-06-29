import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ProjectList from '../../components/project/ProjectList';
import { projects } from '../data/projects';

export function getStaticProps() {
  console.log('Static Props Projects:', projects); // デバッグ用ログ
  return {
    props: {
      projects,
    },
  };
}

export default function ProjectsPage({ projects }) {
  console.log('Client-side Projects:', projects); // デバッグ用ログ
  return (
    <Layout>
      <Head>
        <title>Projects | Cheese&apos;folio</title>
        <meta name="description" content="Yukiのプロジェクト一覧です。" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          プロジェクト
        </h1>
        <ProjectList projects={projects} />
      </div>
    </Layout>
  );
}