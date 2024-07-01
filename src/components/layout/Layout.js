import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../contexts/ThemeContext';

export default function Layout({ children }) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Head>
        <title>Cheese&apos;folio</title>
        <meta name="description" content="Cheese's professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-end mb-4">
            <p  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200" />
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