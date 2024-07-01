import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:flex lg:items-center lg:justify-between lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 lg:w-1/2">
              <div className="sm:text-center lg:text-left">
                <motion.h1 
                  className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="block">ようこそ、私の</span>{' '}
                  <span className="block text-theme-primary-light dark:text-theme-primary-dark">ポートフォリオへ</span>
                </motion.h1>
                <motion.p 
                  className="mt-3 text-base text-gray-700 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  私は機能的なウェブアプリケーションの作成に特化した開発者です。私のプロジェクトとスキルをご覧いただき、あなたのチームにどのような価値をもたらせるか、ぜひご確認ください。
                </motion.p>
                
                <motion.div
                  className="mt-3 text-base text-gray-700 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-theme-primary-light dark:bg-theme-primary-dark hover:bg-yellow-500 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10 transition duration-300">
                      プロジェクト一覧
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-theme-primary-light dark:text-theme-primary-dark bg-yellow-100 dark:bg-indigo-100 hover:bg-yellow-200 dark:hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition duration-300">
                      お問い合わせ
                    </Link>
                  </div>
                </div>
              </motion.div>
              </div>
            </main>
            <motion.div 
              className="hidden lg:block lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-full h-96 relative overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="プロフィール画像"
                width={500}
                height={500}
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
              <div className="mt-14 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">スキルハイライト</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    React & Next.js
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Node.js & Express
                  </li>
                  <li className="flex items-center">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    データベース設計 & 管理
                  </li>
                  {/* 必要に応じて他のスキルを追加 */}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  )
}