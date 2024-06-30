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
    const projects = res.data.data;

    const paths = projects.map((project) => ({
      params: { id: project.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects/${params.id}?populate=*`);
    const project = res.data.data;

    const relatedRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[category][$eq]=${project.attributes.category}&filters[id][$ne]=${project.id}&populate=*`);
    const relatedProjects = relatedRes.data.data.slice(0, 3);

    return {
      props: {
        project,
        relatedProjects,
      },
    };
  } catch (error) {
    console.error('Error fetching project details:', error.message);
    return {
      props: {
        project: null,
        relatedProjects: [],
      },
    };
  }
}

export default function ProjectDetail({ project, relatedProjects }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>読み込み中...</div>;
  }

  if (!project) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-600 dark:text-gray-400">プロジェクトが見つかりませんでした。</p>
        </div>
      </Layout>
    );
  }

  const { attributes } = project;

  return (
    <Layout>
      <Head>
        <title>{`${attributes.title} | Cheese'folio`}</title>
        <meta name="description" content={attributes.description} />
        <meta name="keywords" content={attributes.technologies.join(', ')} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": attributes.title,
            "description": attributes.description,
            "applicationCategory": attributes.category,
            "operatingSystem": "Web",
            "author": {
              "@type": "Person",
              "name": "Cheese"
            },
            "datePublished": attributes.startDate,
            "dateModified": attributes.endDate,
          })}
        </script>
      </Head>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/projects"
          className="inline-flex items-center text-theme-primary-light dark:text-theme-primary-dark hover:text-yellow-500 dark:hover:text-indigo-400 mb-6 transition duration-300"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          プロジェクト一覧に戻る
        </Link>
        <motion.h1
          className="text-4xl font-bold text-theme-primary-light dark:text-theme-primary-dark mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {attributes.title}
        </motion.h1>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={attributes.imageUrl}
            alt={attributes.title}
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">プロジェクト概要</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{attributes.longDescription}</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>{attributes.startDate} - {attributes.endDate}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <UsersIcon className="h-5 w-5 mr-2" />
              <span>チームサイズ: {attributes.teamSize}人</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">役割</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{attributes.role}</p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">使用技術</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {attributes.technologies.map((tech, index) => (
              <span key={index} className="bg-theme-primary-light dark:bg-theme-primary-dark text-white px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">主な機能</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
            {attributes.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <a 
              href={attributes.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-theme-primary-light dark:bg-theme-primary-dark text-white px-4 py-2 rounded hover:bg-yellow-500 dark:hover:bg-indigo-600 transition duration-300"
            >
              GitHub <ExternalLinkIcon className="h-5 w-5 ml-2" />
            </a>
            <a 
              href={attributes.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
            >
              Live Demo <ExternalLinkIcon className="h-5 w-5 ml-2" />
            </a>
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
                  <Image
                    src={relatedProject.attributes.imageUrl}
                    alt={relatedProject.attributes.title}
                    width={300}
                    height={150}
                    layout="responsive"
                    objectFit="cover"
                  />
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
