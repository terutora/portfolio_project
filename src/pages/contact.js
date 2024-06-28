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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('サーバーエラーが発生しました');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Yukis Portfolio</title>
        <meta name="description" content="Get in touch with Yuki for project inquiries, collaborations, or any questions you may have." />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          className="text-4xl font-bold text-accent-gold mb-8"
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
            <h2 className="text-2xl font-semibold text-accent-silver mb-4">連絡先情報</h2>
            <p className="text-text-offwhite mb-4">
              プロジェクトの依頼、協力のご提案、またはご質問がありましたら、お気軽にお問い合わせください。
            </p>
            <div className="flex items-center mb-2">
              <MailIcon className="h-5 w-5 text-accent-gold mr-2" />
              <span className="text-text-offwhite">email@example.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-accent-gold mr-2" />
              <span className="text-text-offwhite">+81 90-1234-5678</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* フォームフィールドは変更なし */}
              {/* ... */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-gold text-main-black py-2 px-4 rounded-md hover:bg-accent-silver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-gold transition duration-300"
                >
                  {isSubmitting ? '送信中...' : '送信'}
                </button>
              </div>
            </form>
            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-500"
              >
                メッセージが正常に送信されました。自動返信メールをご確認ください。ありがとうございます！
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-500"
              >
                メッセージの送信中にエラーが発生しました。しばらくしてからもう一度お試しください。
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}