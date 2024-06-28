import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={400}
        height={200}
        layout="responsive"
        objectFit="cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-accent-gold mb-2">{project.title}</h3>
        <p className="text-text-offwhite mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-main-black text-accent-silver text-sm px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.id}`}>
          <a className="text-accent-gold hover:text-accent-silver transition duration-300">
            詳細を見る →
          </a>
        </Link>
      </div>
    </motion.div>
  );
}