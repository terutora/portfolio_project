// src/pages/blog.js の本番用修正

import { useState } from "react";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import BlogPostCard from "../components/blog/BlogPostCard";
import { motion } from "framer-motion";
import Pagination from "../components/blog/Pagination";
import Parser from "rss-parser";

// 空の初期状態の記事リスト
const emptyPosts = [];

export async function getStaticProps() {
  try {
    // RSS Parserのインスタンスを作成
    const parser = new Parser();

    const zennFeedUrl = "https://zenn.dev/cheese877/feed"; // ZennのフィードURL

    // Zennからフィードを取得
    const zennFeed = await parser.parseURL(zennFeedUrl);

    // Zennの記事データを整形
    const zennPosts = zennFeed.items.map((item) => ({
      id: item.guid || item.link,
      title: item.title || "No Title",
      excerpt: item.contentSnippet?.substring(0, 100) + "..." || "No excerpt available",
      url: item.link,
      publishedAt: item.isoDate || new Date().toISOString(),
      platform: "zenn",
      // Zennの記事にはデフォルト画像を使用
      image: "/images/blog/default-zenn.jpg",
    }));

    // Note記事は現在対応していないため、空の配列を使用
    const notePosts = [];

    return {
      props: {
        posts: [...zennPosts, ...notePosts],
      },
      revalidate: 3600, // 1時間ごとに再生成
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: emptyPosts, // エラー時は空の配列を返す
      },
      revalidate: 60, // エラー時は短い間隔で再試行
    };
  }
}

export default function BlogPage({ posts }) {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // 1ページあたりの記事数

  const filteredPosts = posts.filter((post) => {
    return (filter === "all" || post.platform === filter) && (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  // ページネーションのための記事の絞り込み
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <Head>
        <title>Blog | Cheese&apos;folio</title>
        <meta name="description" content="ZennとNoteで公開している技術記事やブログポストの一覧です。" />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          ブログ記事
        </motion.h1>

        {/* フィルターとサーチバー */}
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <button
                onClick={() => {
                  setFilter("all");
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full ${filter === "all" ? "bg-theme-primary-light dark:bg-theme-primary-dark text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
              >
                全て
              </button>
              <button
                onClick={() => {
                  setFilter("zenn");
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full ${filter === "zenn" ? "bg-theme-primary-light dark:bg-theme-primary-dark text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
              >
                Zenn
              </button>
              <button
                onClick={() => {
                  setFilter("note");
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full ${filter === "note" ? "bg-theme-primary-light dark:bg-theme-primary-dark text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
              >
                Note
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <input
              type="text"
              placeholder="記事を検索..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full sm:w-64 px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
            />
          </motion.div>
        </div>

        {/* 記事リスト */}
        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => <BlogPostCard key={post.id} post={post} />)
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-600 dark:text-gray-400">{posts.length === 0 ? "記事を取得できませんでした。しばらくしてからもう一度お試しください。" : "該当する記事が見つかりませんでした。"}</p>
            </div>
          )}
        </motion.div>

        {/* ページネーション */}
        {filteredPosts.length > 0 && <Pagination postsPerPage={postsPerPage} totalPosts={filteredPosts.length} paginate={paginate} currentPage={currentPage} />}
      </div>
    </Layout>
  );
}
