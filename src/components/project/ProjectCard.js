import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  if (!project || !project.id) {
    return null; // プロジェクトデータが無効な場合は何も表示しない
  }

  const { title, description, image, category } = project.attributes || {};
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <Link href={`/projects/${project.id}`} className="block">
        {image?.data && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.data.attributes.url}`}
            alt={title || 'Project image'}
            width={400}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{title || 'Untitled Project'}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{description || 'No description available'}</p>
          {category && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {category}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}