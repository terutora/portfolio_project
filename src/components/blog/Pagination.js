import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex space-x-2">
        {currentPage > 1 && (
          <li>
            <button onClick={() => paginate(currentPage - 1)} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              前へ
            </button>
          </li>
        )}
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md ${
                currentPage === number
                  ? 'bg-theme-primary-light dark:bg-theme-primary-dark text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < pageNumbers.length && (
          <li>
            <button onClick={() => paginate(currentPage + 1)} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              次へ
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;