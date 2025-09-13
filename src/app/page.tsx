export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Main Hello World Section */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Hello World!
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle Section */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 font-light">
            Welcome to your beautiful Next.js application
          </p>
          <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
            This is a modern, responsive Hello World page built with Next.js 15, React 19, and styled with Tailwind CSS.
          </p>
        </div>

        {/* Interactive Elements */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-gray-700 font-medium">✨ Built with Next.js</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-gray-700 font-medium">🎨 Styled with Tailwind</span>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Ready to start building?
            </h2>
            <p className="text-gray-600">
              Edit <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">src/app/page.tsx</code> to get started with your amazing project!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8">
          <p className="text-sm text-gray-500">
            Powered by React, Next.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  )
}