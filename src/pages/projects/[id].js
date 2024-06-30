import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ExternalLinkIcon, CalendarIcon, UsersIcon } from '@heroicons/react/solid';
import { projects } from '../../data/projects';

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find(p => p.id.toString() === params.id);
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return {
    props: {
      project,
      relatedProjects,
    },
  };
}

export default function ProjectDetail({ project, relatedProjects }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>読み込み中...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{`${project.title} | Cheese'folio`}</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.technologies.join(', ')} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": project.title,
            "description": project.description,
            "applicationCategory": project.category,
            "operatingSystem": "Web",
            "author": {
              "@type": "Person",
              "name": "Yuki"
            },
            "datePublished": project.startDate,
            "dateModified": project.endDate,
          })}
        </script>
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
          {project.title}
        </motion.h1>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
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
          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.longDescription}</p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>{project.startDate} - {project.endDate}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <UsersIcon className="h-5 w-5 mr-2" />
              <span>チームサイズ: {project.teamSize}人</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">役割</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.role}</p>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">使用技術</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-theme-primary-light dark:bg-theme-primary-dark text-white px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">主な機能</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-theme-primary-light dark:bg-theme-primary-dark text-white px-4 py-2 rounded hover:bg-yellow-500 dark:hover:bg-indigo-600 transition duration-300"
            >
              GitHub <ExternalLinkIcon className="h-5 w-5 ml-2" />
            </a>
            <a 
              href={project.liveUrl} 
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
                    src={relatedProject.imageUrl}
                    alt={relatedProject.title}
                    width={300}
                    height={150}
                    layout="responsive"
                    objectFit="cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{relatedProject.title}</h3>
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