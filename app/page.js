import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full py-4 px-8 sm:px-16 bg-white border-b border-gray-200 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
        <Image src="/images/AITutorLogo.png" alt="App Logo" width={50} height={50} />
          <div className="text-2xl font-bold text-blue-500">AITutor</div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link href="#features" className="hover:text-blue-500 transition-colors">
            Features
          </Link>
          <Link href="#about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link href="#contact" className="hover:text-blue-500 transition-colors">
            Contact
          </Link>
        </div>

        {/* Call to Action Button */}
        <Link
          href="/signup"
          className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center text-center mt-20 px-12">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
          A{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            fully featured
          </span>{" "}
          AI tutor app
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Your personalized AI-powered tutor designed to make learning faster, smarter, and more efficient.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex gap-4">
          <Link
            href="/signup"
            className="bg-blue-500 text-white rounded-full px-6 py-3 text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            href="#features"
            className="border border-blue-500 text-blue-500 rounded-full px-6 py-3 text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="mt-20 max-w-4xl mx-auto text-center space-y-10 px-8">
        <h2 className="text-3xl font-semibold text-gray-900">
          Why Choose <span className="text-blue-500">AI Tutor</span>?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Personalized Learning</h3>
            <p className="text-gray-600 mt-2">
              Tailored lessons to match your pace and learning style.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">24/7 Availability</h3>
            <p className="text-gray-600 mt-2">
              Learn whenever, wherever with always-on support.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Instant Feedback</h3>
            <p className="text-gray-600 mt-2">
              Real-time feedback to help you improve continuously.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Adaptive Content</h3>
            <p className="text-gray-600 mt-2">
              AI-driven insights adjust content as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t text-gray-600 text-sm text-center">
        <p>
          © {new Date().getFullYear()} AI Tutor. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
