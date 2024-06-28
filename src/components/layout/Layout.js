import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ThemeToggle from '../ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';

export default function Layout({ children }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Head>
        <title>Yukis Portfolio</title>
        <meta name="description" content="Yuki's professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}