import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ExternalLinkIcon, CalendarIcon, UsersIcon } from '@heroicons/react/solid';
import axios from 'axios';

export async function getStaticPaths() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects`);
    const paths = res.data.data.map((project) => ({
      params: { id: project.id.toString() },
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { paths: [], fallback: 'blocking' };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects/${params.id}`);
    const project = res.data.data;

    console.log('Fetched project data:', JSON.stringify(project, null, 2));

    if (!project) {
      return { notFound: true };
    }

    // 関連プロジェクトの取得は一時的にコメントアウト
    // const relatedRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[category]=${project.attributes.category}&populate=*`);
    // const relatedProjects = relatedRes.data.data.filter(p => p.id !== project.id).slice(0, 3);

    return {
      props: {
        project,
        relatedProjects: [], // 一時的に空配列を設定
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    return {
      notFound: true,
    };
  }
}

export default function ProjectDetail({ project, relatedProjects }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!project || !project.attributes) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-2xl font-bold text-red-600">Error: Project not found</h1>
        </div>
      </Layout>
    );
  }

  const { 
    title = 'Untitled Project', 
    desecription, // typo in API response
    category = 'Uncategorized', 
    technologies = [], 
    endDate = 'N/A', 
    startData = 'N/A', // typo in API response
    teamSize = 'N/A', 
    role = 'N/A', 
    githubUrl, 
    liveUrl,
    longDescription = ''
  } = project.attributes;

  const description = desecription?.[0]?.children?.[0]?.text || 'No description available';

  return (
    <Layout>
      <Head>
        <title>{`${title} | Cheese'folio`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={technologies.join(', ')} />
      </Head>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/projects" className="inline-flex items-center text-theme-primary-light dark:text-theme-primary-dark hover:text-yellow-500 dark:hover:text-indigo-400 mb-6 transition duration-300">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          プロジェクト一覧に戻る
        </Link>
        <motion.h1
          className="text-4xl font-bold text-theme-primary-light dark:text-theme-primary-dark mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">プロジェクト概要</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{longDescription || description}</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>{startData} - {endDate}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <UsersIcon className="h-5 w-5 mr-2" />
              <span>チームサイズ: {teamSize}人</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">役割</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{role}</p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">使用技術</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-theme-primary-light dark:bg-theme-primary-dark text-white px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-theme-primary-light dark:bg-theme-primary-dark text-white px-4 py-2 rounded hover:bg-yellow-500 dark:hover:bg-indigo-600 transition duration-300"
              >
                GitHub <ExternalLinkIcon className="h-5 w-5 ml-2" />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
              >
                Live Demo <ExternalLinkIcon className="h-5 w-5 ml-2" />
              </a>
            )}
          </div>
        </motion.div>
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-theme-primary-light dark:text-theme-primary-dark mb-4">関連プロジェクト</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`} className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                  {relatedProject.attributes.image?.data && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${relatedProject.attributes.image.data.attributes.url}`}
                      alt={relatedProject.attributes.title}
                      width={300}
                      height={150}
                      layout="responsive"
                      objectFit="cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{relatedProject.attributes.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}