import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "名前は必須です";
    if (!formData.email.trim()) {
      errors.email = "メールアドレスは必須です";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      errors.email = "有効なメールアドレスを入力してください";
    }
    if (!formData.message.trim()) errors.message = "メッセージは必須です";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    setErrors({});

    // ここでフォームデータを送信するAPIを呼び出す
    // 例: const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    
    // 仮の非同期処理（実際のAPI呼び出しに置き換えてください）
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Cheese&apos;folio</title>
        <meta name="description" content="Get in touch with Yuki for project inquiries, collaborations, or any questions you may have." />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          お問い合わせ
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">連絡先情報</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              プロジェクトの依頼、協力のご提案、またはご質問がありましたら、お気軽にお問い合わせください。
            </p>
            <div className="flex items-center mb-2">
              <MailIcon className="h-5 w-5 text-theme-primary-light dark:text-theme-primary-dark mr-2" />
              <span className="text-gray-700 dark:text-gray-300">cheese877engineer@gmail.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-theme-primary-light dark:text-theme-primary-dark mr-2" />
              <span className="text-gray-700 dark:text-gray-300">070-4394-2167</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-theme-primary-light dark:focus:ring-theme-primary-dark focus:border-theme-primary-light dark:focus:border-theme-primary-dark"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-theme-primary-light dark:focus:ring-theme-primary-dark focus:border-theme-primary-light dark:focus:border-theme-primary-dark"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-theme-primary-light dark:focus:ring-theme-primary-dark focus:border-theme-primary-light dark:focus:border-theme-primary-dark"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-theme-primary-light dark:bg-theme-primary-dark text-white py-2 px-4 rounded-md hover:bg-yellow-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary-light dark:focus:ring-theme-primary-dark transition duration-300"
                >
                  {isSubmitting ? '送信中...' : '送信'}
                </button>
              </div>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-600 dark:text-green-400">メッセージが正常に送信されました。ありがとうございます！</p>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}