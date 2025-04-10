// src/components/project/ProjectList.js の修正版

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectList = ({ projects }) => {
  // デバッグログを削除
  // console.log('Projects:', projects);

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          // 個別プロジェクトのデバッグログも削除
          // console.log('Project:', project);

          if (!project || !project.id) {
            // エラーログもコンソールではなく適切なエラーハンドリングに変更
            return null; // 無効なプロジェクトはスキップ
          }
          return (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Link href={`/projects/${project.id}`} className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectList;
