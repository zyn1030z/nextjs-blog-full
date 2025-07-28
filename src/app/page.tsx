import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      {/* Overlay để làm tối background và tăng độ tương phản cho text */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Coming Soon Banner */}
      <div className="relative z-30 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-4 animate-pulse">
        <div className="max-w-6xl mx-auto flex items-center justify-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
          <span className="font-bold text-lg tracking-wider">
            🚀 COMING SOON
          </span>
          <div className="flex items-center space-x-2">
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-20 p-6">
        <nav className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-white text-2xl font-bold hover:text-blue-400 transition-all duration-300 cursor-pointer group">
              <span className="group-hover:scale-110 transform inline-block transition-transform duration-300">
                HungPham
              </span>
              <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 w-0 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="relative px-4 py-2 text-white hover:text-blue-400 transition-all duration-300 group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </Link>

              <Link
                href="/blog"
                className="relative px-4 py-2 text-white hover:text-blue-400 transition-all duration-300 group"
              >
                <span className="relative z-10">Blog</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </Link>

              <Link
                href="/about"
                className="relative px-4 py-2 text-white hover:text-blue-400 transition-all duration-300 group"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </Link>

              <Link
                href="/contact"
                className="relative px-4 py-2 text-white hover:text-blue-400 transition-all duration-300 group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </Link>

              {/* Special Button */}
              <Link
                href="/blog"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white hover:text-blue-400 transition-colors duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu (Hidden by default) */}
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hidden">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-white hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-20 max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Hello, I&apos;m{" "}
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300 animate-pulse">
              HungPham
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up-delay">
            Full-stack developer passionate about Next.js, Golang, and modern
            web technologies. Sharing insights, tutorials, and best practices in
            software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
            <Link
              href="/blog"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            >
              Read Blog
            </Link>
            <Link
              href="/about"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:scale-105 hover:shadow-lg transform"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in">
            Featured Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Post 1 */}
            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl transform group animate-fade-in">
              <div className="text-blue-400 text-sm mb-2 group-hover:text-blue-300 transition-colors duration-300">
                Next.js
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-blue-200 transition-colors duration-300">
                Next.js 15: Advanced Features & Best Practices
              </h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Deep dive into Next.js 15&apos;s new features, performance
                optimizations, and real-world implementation patterns.
              </p>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                2 hours ago
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl transform group animate-fade-in-delay">
              <div className="text-green-400 text-sm mb-2 group-hover:text-green-300 transition-colors duration-300">
                Golang
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-green-200 transition-colors duration-300">
                Building High-Performance APIs with Go
              </h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Learn how to build scalable, efficient REST APIs using Go,
                including concurrency patterns and microservices architecture.
              </p>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                1 day ago
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl transform group animate-fade-in-delay-2">
              <div className="text-purple-400 text-sm mb-2 group-hover:text-purple-300 transition-colors duration-300">
                Full-Stack
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-purple-200 transition-colors duration-300">
                Next.js + Go: The Perfect Full-Stack Duo
              </h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                Combining Next.js frontend with Go backend for optimal
                performance, scalability, and developer experience.
              </p>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                3 days ago
              </div>
            </article>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in">
            Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/category/nextjs"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl transform group animate-bounce-in"
            >
              <div className="text-blue-400 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                ⚛️
              </div>
              <h3 className="text-white font-semibold group-hover:text-blue-200 transition-colors duration-300">
                Next.js
              </h3>
            </Link>
            <Link
              href="/category/golang"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl transform group animate-bounce-in-delay"
            >
              <div className="text-green-400 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                🐹
              </div>
              <h3 className="text-white font-semibold group-hover:text-green-200 transition-colors duration-300">
                Golang
              </h3>
            </Link>
            <Link
              href="/category/fullstack"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl transform group animate-bounce-in-delay-2"
            >
              <div className="text-purple-400 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-white font-semibold group-hover:text-purple-200 transition-colors duration-300">
                Full-Stack
              </h3>
            </Link>
            <Link
              href="/category/tutorials"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl transform group animate-bounce-in-delay-3"
            >
              <div className="text-yellow-400 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                📚
              </div>
              <h3 className="text-white font-semibold group-hover:text-yellow-200 transition-colors duration-300">
                Tutorials
              </h3>
            </Link>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg transform group animate-float">
              <div className="text-blue-400 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                ⚛️
              </div>
              <div className="text-white text-sm group-hover:text-blue-200 transition-colors duration-300">
                Next.js
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg transform group animate-float-delay">
              <div className="text-green-400 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                🐹
              </div>
              <div className="text-white text-sm group-hover:text-green-200 transition-colors duration-300">
                Golang
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg transform group animate-float-delay-2">
              <div className="text-blue-500 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                ⚡
              </div>
              <div className="text-white text-sm group-hover:text-blue-300 transition-colors duration-300">
                React
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg transform group animate-float-delay-3">
              <div className="text-yellow-400 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                📘
              </div>
              <div className="text-white text-sm group-hover:text-yellow-200 transition-colors duration-300">
                TypeScript
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg transform group animate-float-delay-4">
              <div className="text-pink-400 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                🎨
              </div>
              <div className="text-white text-sm group-hover:text-pink-200 transition-colors duration-300">
                Tailwind
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg transform group animate-float-delay-5">
              <div className="text-orange-400 text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                🗄️
              </div>
              <div className="text-white text-sm group-hover:text-orange-200 transition-colors duration-300">
                PostgreSQL
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-20 bg-black/20 backdrop-blur-sm mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-lg font-semibold mb-4 md:mb-0 hover:text-blue-400 transition-colors duration-300">
              © 2025 HungPham
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                className="text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
