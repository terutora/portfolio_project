import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-main-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-text-offwhite">&copy; 2024 Cheese. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/terutora" className="text-text-offwhite hover:text-accent-gold">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://x.com/terateraion" className="text-text-offwhite hover:text-accent-gold">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}