import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BlogPostCard({ post }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{post.excerpt}</p>
          <div className="flex justify-between items-center text-sm">
            <span className={`px-2 py-1 rounded ${post.platform === 'zenn' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
              {post.platform}
            </span>
            <span className="text-gray-500 dark:text-gray-400">{post.publishedAt}</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}