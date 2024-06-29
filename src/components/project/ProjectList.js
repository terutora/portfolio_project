import React from 'react';
import Link from 'next/link';

const ProjectList = ({ projects }) => {
  console.log('Projects:', projects); // デバッグ用ログ

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        console.log('Project:', project); // 各プロジェクトのデバッグ用ログ
        if (!project || !project.id) {
          console.error('Invalid project:', project); // エラーログ
          return null; // 無効なプロジェクトはスキップ
        }
        return (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Link
              href={`/projects/${project.id}`}
              className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
