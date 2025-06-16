
import { Logo } from "@/components/logo"
import LoginForm from "@/components/LoginForm"

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg">
          {/* Logo Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <Logo variant="mega" className="mx-auto drop-shadow-xl" />
            </div>
            <div className="mt-8 space-y-2">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Continue your STEM journey
              </p>
            </div>
          </div>

          {/* Login Form Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 hover:shadow-3xl transition-all duration-500">
            <LoginForm />
          </div>

          {/* Bottom Links */}
          <div className="mt-8 text-center space-y-4">
            <div className="flex items-center justify-center space-x-6">
              <a
                href="/terms"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="/privacy"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
